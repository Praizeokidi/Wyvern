"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Cairo } from "next/font/google";

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const featureVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Features() {
    const features = [
        { title: "Client Satisfaction", value: 96 },
        { title: "Call Quality", value: 90 },
        { title: "Communication Efficiency", value: 98 },
        { title: "Support Excellence", value: 99 },
    ];

    return (
        <section className="relative w-full bg-gradient-to-b from-slate-950 to-slate-900 py-24 px-6 overflow-hidden">

            {/* subtle glow background */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* ================= LEFT ================= */}
                <motion.div
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                >

                    {/* IMAGE STACK (AWARD-WINNING STYLE LAYERING) */}
                    <div className="relative flex justify-center">

                        {/* BACK LAYER */}
                        <div className="absolute -top-6 -left-6 w-[90%] h-full bg-blue-600/20 blur-2xl rounded-2xl" />

                        {/* MAIN IMAGE CARD */}
                        <div className="relative w-full max-w-[480px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

                            <Image
                                src="/partners.jpg"
                                alt="Global Partners"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                                priority
                            />

                            {/* overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                        </div>

                        {/* FLOATING STATS BADGE */}
                        <div className="absolute -bottom-6 right-4 bg-slate-900/90 backdrop-blur border border-white/10 px-5 py-3 rounded-xl shadow-xl">
                            <p className="text-xs text-gray-400">Global Reach</p>
                            <p className="text-lg font-bold text-white">Trusted Worldwide</p>
                        </div>
                    </div>

                    {/* ================= PROGRESS CARDS ================= */}
                    <div className="grid grid-cols-2 gap-4 mt-10">

                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur"
                            >
                                <p className="text-sm text-gray-300 mb-2">
                                    {item.title}
                                </p>

                                <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${item.value}%` }}
                                        transition={{ duration: 1 }}
                                        className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400"
                                    />
                                </div>

                                <p className="text-xs text-gray-400 mt-2">
                                    {item.value}% performance
                                </p>
                            </div>
                        ))}

                    </div>
                </motion.div>

                {/* ================= RIGHT ================= */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                >

                    <h2
                        className={`${cairo.className} text-4xl md:text-5xl font-bold text-white leading-tight`}
                    >
                        Building a
                        <span className="text-blue-400"> World-Class</span>
                        <br />
                        Customer Experience System
                    </h2>

                    <p className="mt-6 text-gray-400 text-lg leading-relaxed">
                        We are redefining service excellence by building systems that
                        scale globally, empower users, and deliver consistent value
                        across every interaction.
                    </p>

                    {/* FEATURE LIST */}
                    <ul className={`${cairo.className} mt-8 space-y-4 text-gray-300`}>

                        <li className="flex items-center gap-3">
                            <Check className="text-green-400 w-5 h-5" />
                            <span>Enterprise-grade reliability & uptime</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Check className="text-green-400 w-5 h-5" />
                            <span>AI-assisted customer engagement</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Check className="text-green-400 w-5 h-5" />
                            <span>Secure, scalable cloud infrastructure</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Check className="text-green-400 w-5 h-5" />
                            <span>24/7 global support operations</span>
                        </li>
                    </ul>

                </motion.div>

            </div>
        </section>
    );
}