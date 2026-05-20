import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Onboarding from "@/models/Onboarding";
import cloudinary from "@/lib/cloudinary";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const formData = await req.formData();

        // ✅ FIX 1: force type to string safely
        const typeRaw = formData.get("type");
        const type = typeof typeRaw === "string" ? typeRaw : "";

        if (!type) {
            return NextResponse.json(
                { error: "Missing type (personal/business)" },
                { status: 400 }
            );
        }

        // 🔥 FILE UPLOAD HANDLING (safe guard added)
        const fileFields = type === "personal"
            ? ["personalFile"]
            : ["businessFile"];
        const uploadedFiles = {};

        for (const field of fileFields) {
            try {
                const file = formData.get(field);

                // ✅ strict validation
                if (!file || typeof file !== "object" || !file.name) continue;

                const bytes = await file.arrayBuffer();
                const buffer = Buffer.from(bytes);

                const upload = await new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { folder: `wyvern/${type}` },
                        (err, result) => {
                            if (err) return reject(err);
                            resolve(result);
                        }
                    );

                    stream.end(buffer);
                });

                uploadedFiles[field] = upload.secure_url;

            } catch (err) {
                console.error(`❌ Cloudinary failed for ${field}:`, err);
                // 👉 DO NOTHING ELSE (prevents crash)
            }
        }

        // 🔌 DB CONNECT
        await connectDB();

        // 🧠 FIX 3: prevent undefined breaking Mongo BEFORE reaching data
        const safe = (key) => formData.get(key)?.toString() || "";

        // IMPORTANT: do NOT modify your const data block below
        const data = {
            type,

            // PERSONAL FIELDS
            firstName: safe("firstName"),
            lastName: safe("lastName"),
            phone: safe("phone"),
            personalEmail: safe("personalEmail"),
            residentialAddress: safe("residentialAddress"),
            ninNumber: safe("ninNumber"),
            gender: safe("gender"),
            dob: safe("dob"),
            idType: safe("idType"),

            // BUSINESS FIELDS
            businessName: safe("businessName"),
            cacRegNo: safe("cacRegNo"),
            phone: safe("phone"),
            businessEmail: safe("businessEmail"),
            businessAddress: safe("businessAddress"),
            nimc: safe("nimc"),
            verificationType: safe("verificationType"),
            registrationDate: safe("registrationDate"),

            // FILES
            ...uploadedFiles,
        };

        // 🔥 FIX 4: prevent empty critical submissions
        if (!data.firstName && !data.businessName) {
            return NextResponse.json(
                { error: "Invalid submission payload" },
                { status: 400 }
            );
        }

        // 💾 SAVE (UPDATED)
        const saved = await Onboarding.create(data);
        console.log("✅ Saved to DB:", saved._id);

        // 📧 EMAIL
        try {
            await resend.emails.send({
                from: "Wyvern <onboarding@resend.dev>",
                to: ["praizeokidi@gmail.com"], // 👈 change to admin email
                subject: `New WYVERN ${type.toUpperCase()} Submission`,
                html: `
            <h2>New ${type} onboarding submission</h2>
            <p>A new user has submitted a request.</p>

            <h3>Submission Data:</h3>
            <pre style="background:#f4f4f4;padding:12px;border-radius:8px;">
${JSON.stringify(data, null, 2)}
            </pre>
        `,
            });

            console.log("📧 Email sent via Resend");

        } catch (emailErr) {
            console.error("❌ Resend failed:", emailErr);
        }

        return NextResponse.json({
            success: true,
            message: "Onboarding submitted successfully",
        });

    } catch (err) {
        console.error("ONBOARDING ERROR:", err);

        return NextResponse.json(
            {
                error: "Failed to submit onboarding",
                details: err.message,
            },
            { status: 500 }
        );
    }
}