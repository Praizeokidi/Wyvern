import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import { Resend } from "resend";
import DemoBooking from "@/models/DemoBooking";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();

        const {
            name,
            email,
            company,
            phone,
            message,
        } = body;

        // VALIDATION
        if (!name || !email) {
            return NextResponse.json(
                { error: "Name and email are required" },
                { status: 400 }
            );
        }

        // CONNECT DB
        await connectDB();

        // SAVE TO DATABASE
        const saved = await DemoBooking.create({
            name,
            email,
            company,
            phone,
            message,
        });

        // SEND EMAIL
        await resend.emails.send({
            from: "Wyvern <onboarding@resend.dev>",
            to: ["praizeokidi@gmail.com"],
            subject: "New Demo Booking",
            html: `
                <h2>New Demo Request</h2>

                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Company:</strong> ${company || "N/A"}</p>
                <p><strong>Phone:</strong> ${phone || "N/A"}</p>
                <p><strong>Message:</strong></p>
                <p>${message || "N/A"}</p>
            `,
        });

        return NextResponse.json({
            success: true,
            message: "Demo booked successfully",
            data: saved,
        });

    } catch (err) {
        console.error("BOOK DEMO ERROR:", err);

        return NextResponse.json(
            {
                error: "Internal server error",
                details: err.message,
            },
            { status: 500 }
        );
    }
}