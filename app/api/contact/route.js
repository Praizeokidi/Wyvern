import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { Resend } from "resend";

export async function POST(req) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        // 🔥 validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        await connectDB();

        // 💾 SAVE TO DATABASE
        const saved = await Contact.create({
            name,
            email,
            message,
        });

        // 📧 EMAIL NOTIFICATION (Resend)
        try {
            if (!process.env.RESEND_API_KEY) {
                throw new Error("Missing RESEND_API_KEY");
            }

            const resend = new Resend(process.env.RESEND_API_KEY);

            await resend.emails.send({
                from: "Wyvern Contact <onboarding@resend.dev>",
                to: ["praizeokidi@gmail.com"], // change to admin email
                subject: "New Contact Form Message",
                html: `
                    <h2>New Contact Message</h2>

                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>

                    <h3>Message:</h3>
                    <p>${message}</p>
                `,
            });

            console.log("📧 Contact email sent via Resend");

        } catch (emailErr) {
            console.error("❌ Resend email failed:", emailErr);
        }

        return NextResponse.json({
            success: true,
            message: "Message received successfully",
            data: saved,
        });

    } catch (err) {
        console.error("CONTACT API ERROR:", err);

        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}