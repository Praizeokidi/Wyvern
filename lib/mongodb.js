import mongoose from "mongoose";

/*
🔥 OPTIONAL IMPROVEMENT APPLIED:
- Better serverless-safe caching
- Prevents multiple connections in Vercel
- Adds globalThis safety (fixes edge cases in production)
- Keeps connection stable across API routes
*/

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI");
}

// ✅ safer global cache (works in Next.js + Vercel)
let cached = globalThis.mongoose;

if (!cached) {
    cached = globalThis.mongoose = {
        conn: null,
        promise: null,
    };
}

export async function connectDB() {
    // If already connected → reuse it
    if (cached.conn) return cached.conn;

    // If no connection promise → create one
    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            bufferCommands: false,
        });
    }

    // Wait for connection
    cached.conn = await cached.promise;

    return cached.conn;
}