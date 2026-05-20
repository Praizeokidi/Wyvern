import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        await connectDB();

        const saved = await Contact.create({
            name,
            email,
            message,
        });

        return NextResponse.json({
            success: true,
            message: "Message received",
            data: saved,
        });

    } catch (err) {
        return NextResponse.json(
            { error: "Server error" },
            { status: 500 }
        );
    }
}