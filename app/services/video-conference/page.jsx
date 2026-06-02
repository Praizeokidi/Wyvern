"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials";
import Image from "next/image";
import { motion } from "framer-motion";
import BookSession from "@/components/Bas";
import { Playfair_Display, Inter, Jost } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"] });
const jost = Jost({ subsets: ["latin"] });

export default function VideoConferencePage() {
    return (
        <div className={`${jost.className} bg-slate-950 text-white overflow-x-hidden`}>
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden py-28 md:py-36">

                <div className="absolute inset-0 bg-[url('/vvc.png')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
                            Collaboration Infrastructure
                        </div>

                        <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold leading-tight`}>
                            Voice & Video <br />
                            <span className="text-blue-400">Conference Solution</span>
                        </h1>

                        <p className={`${inter.className} text-gray-300 mt-6 text-lg leading-relaxed`}>
                            Experience seamless communication with enterprise-grade video conferencing
                            built for modern hybrid and global teams.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[650px]">

                            <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full" />

                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

                                <Image
                                    src="/vvc.png"
                                    alt="Video Conference"
                                    width={900}
                                    height={600}
                                    className="w-full h-auto object-cover p-6"
                                    priority
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-16 relative z-10">

                <div className="space-y-16">

                    {/* BLOCK 1 */}
                    <div>
                        <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold`}>
                            Smarter Collaboration, Anywhere
                        </h2>

                        <p className={`${inter.className} text-gray-300 mt-4 leading-relaxed`}>
                            WYVERN’s conferencing system enables crystal-clear voice and HD video meetings
                            designed for productivity, scale, and security.
                        </p>
                    </div>

                    {/* FEATURES GRID */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "HD Video & Low-latency Audio",
                            "Screen Sharing & Collaboration Tools",
                            "Secure Encrypted Communication",
                            "Cross-device Accessibility",
                            "Real-time Whiteboarding",
                            "Enterprise-grade Reliability",
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                                <p className="text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* BENEFITS */}
                    <div>
                        <h3 className={`${jost.className} text-2xl font-semibold mb-4`}>
                            Business Benefits
                        </h3>

                        <div className="space-y-5 text-gray-300">
                            <p><strong className="text-white">Improved Collaboration:</strong> Real-time engagement across teams globally.</p>
                            <p><strong className="text-white">Reduced Costs:</strong> Eliminate travel expenses and physical meetings.</p>
                            <p><strong className="text-white">Faster Decisions:</strong> Accelerate approvals and workflows instantly.</p>
                            <p><strong className="text-white">Global Accessibility:</strong> Connect teams anywhere, anytime.</p>
                        </div>
                    </div>

                    {/* HOW IT WORKS */}
                    <div>
                        <h3 className={`${playfair.className} text-3xl font-bold mb-4`}>
                            How It Works
                        </h3>

                        <ol className="space-y-3 text-gray-300 list-decimal list-inside">
                            <li>Schedule or join meetings instantly</li>
                            <li>Connect via any device or browser</li>
                            <li>Collaborate using video, audio, and screen share</li>
                            <li>Record sessions for future reference</li>
                        </ol>
                    </div>

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative py-24 px-6 mt-10 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-black" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-4xl mx-auto text-center">

                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold`}>
                        Transform the Way Your Team Communicates
                    </h2>

                    <p className="text-gray-300 mt-6">
                        Upgrade to WYVERN Video Conferencing and experience seamless enterprise collaboration.
                    </p>

                    <div className="mt-10">
                        <button className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition">
                            Get Started
                        </button>
                    </div>

                </div>
            </section>

            <BookSession />
            <Testimonial />
            <Footer />
        </div>
    );
}