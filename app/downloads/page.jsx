"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { Cairo, Playfair_Display, Jost } from "next/font/google";
import { Download, ArrowRight, Smartphone, Monitor, Building2 } from "lucide-react";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function DownloadsPage() {
    const cards = [
        {
            title: "Desktop Experience",
            icon: Monitor,
            desc: "Optimized for Windows & macOS communication systems.",
            items: [
                "Softphone integration",
                "HD voice quality",
                "Enterprise-grade stability",
                "Free installation"
            ],
            link: "#"
        },
        {
            title: "WYVERN Mobile App",
            icon: Smartphone,
            desc: "Stay connected anywhere with full mobile communication access.",
            items: [
                "Dedicated WYVERN line",
                "Video & voice calls",
                "Real-time messaging",
                "Premium support"
            ],
            link: "#"
        },
        {
            title: "Enterprise Suite",
            icon: Building2,
            desc: "Scalable communication system for organizations and teams.",
            items: [
                "Multi-user management",
                "Advanced call routing",
                "Analytics dashboard",
                "Priority support"
            ],
            link: "#"
        }
    ];

    return (
        <div className="bg-slate-950 text-white">
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative py-28 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className={`${jost.className}  relative max-w-3xl mx-auto px-6`}>
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Download <span className="text-blue-400">WYVERN</span>
                    </h1>

                    <p className="mt-4 text-gray-400">
                        Access secure communication tools built for individuals, teams, and enterprise systems.
                    </p>
                </div>
            </section>

            {/* ================= CARDS ================= */}
            <section className={`${jost.className} relative py-20 px-6`}>
                <div className="absolute inset-0 bg-slate-900" />

                <div className="relative max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                    {cards.map((card, idx) => {
                        const Icon = card.icon;

                        return (
                            <div
                                key={idx}
                                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 transition"
                            >

                                {/* glow */}
                                <div className="absolute -inset-1 bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition rounded-2xl" />

                                <div className="relative">

                                    {/* ICON */}
                                    <Icon className="text-blue-400 w-7 h-7 mb-4" />

                                    {/* TITLE */}
                                    <h2 className={`${jost.className} text-xl font-semibold`}>
                                        {card.title}
                                    </h2>

                                    <p className="text-gray-400 text-sm mt-2 mb-4">
                                        {card.desc}
                                    </p>

                                    {/* FEATURES */}
                                    <ul className="text-gray-400 text-sm space-y-2 mb-6">
                                        {card.items.map((item, i) => (
                                            <li key={i}>✔ {item}</li>
                                        ))}
                                    </ul>

                                    {/* CTA */}
                                    <Link href={card.link}>
                                        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:shadow-lg transition">
                                            Download
                                            <Download className="w-4 h-4" />
                                        </button>
                                    </Link>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* SECONDARY CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-400 mb-4">
                        Need help choosing the right version?
                    </p>

                    <Link href="/contact">
                        <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition">
                            Talk to Support
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>

            </section>

            <Footer />
        </div>
    );
}