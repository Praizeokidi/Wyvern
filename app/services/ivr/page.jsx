"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { motion } from "framer-motion";
import { Playfair_Display, Jost, Inter } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });
const jost = Jost({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function IVRPage() {
    return (
        <div className={`${jost.className} bg-slate-950 text-white overflow-x-hidden`}>
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative py-28 md:py-36 mb-2 overflow-hidden">

                {/* BACKGROUND LAYERS */}
                <div className="absolute inset-0 bg-[url('/ivrr.jpg')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-6xl mx-auto px-6 text-center">

                    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
                        Intelligent Call Automation
                    </div>

                    <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold leading-tight`}>
                        Interactive Voice Response
                    </h1>

                    <p className={`${jost.className} text-gray-300 mt-6 max-w-3xl mx-auto text-lg leading-relaxed`}>
                        Transform customer communication with intelligent call routing,
                        automation, and enterprise-grade efficiency powered by WYVERN IVR.
                    </p>

                </div>
            </section>


            {/* ================= MAIN CONTENT ================= */}
            <section className="max-w-6xl mx-auto px-6 py-14">

                {/* TOP GRID */}
                <div className="grid lg:grid-cols-2 gap-14 items-center">

                    {/* IMAGE */}
                    <motion.div
                        className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-2xl"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />
                        <Image
                            src="/ivrr.jpg"
                            alt="IVR"
                            width={800}
                            height={600}
                            className="w-full h-[320px] object-cover"
                        />
                    </motion.div>

                    {/* TEXT */}
                    <div>

                        <h2 className={`${playfair.className} text-3xl font-bold`}>
                            What is an IVR System?
                        </h2>

                        <p className="text-gray-300 mt-4 leading-relaxed">
                            An IVR (Interactive Voice Response) system acts as a digital receptionist,
                            guiding callers efficiently through automated menus and routing them
                            to the right department instantly.
                        </p>

                        <div className="mt-6 space-y-3 text-gray-300">
                            <p>• Press 1 for Sales</p>
                            <p>• Press 2 for Accounts</p>
                            <p>• Press 3 for Support</p>
                        </div>

                    </div>
                </div>

                {/* ================= BENEFITS ================= */}
                <div className="mt-24 space-y-10">

                    <h2 className={`${playfair.className} text-4xl font-bold text-center`}>
                        Key Benefits of WYVERN IVR
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            {
                                title: "Smart Call Management",
                                text: "Handle multiple calls simultaneously with intelligent routing and reduced wait times."
                            },
                            {
                                title: "Advanced Analytics",
                                text: "Gain insights into call patterns, customer behavior, and system performance."
                            },
                            {
                                title: "Improved Marketing Efficiency",
                                text: "Enhance lead management and conversion through structured communication flows."
                            },
                            {
                                title: "Efficient Call Routing",
                                text: "Automatically direct callers to the right department for faster resolution."
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
                            >
                                <h3 className="font-semibold text-xl mb-2 text-blue-400">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* ================= WHY WYVERN ================= */}
                <div className="mt-24">

                    <h2 className={`${playfair.className} text-4xl font-bold mb-6`}>
                        Why Choose WYVERN IVR?
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 text-gray-300">

                        {[
                            "Reduce call costs by up to 50%",
                            "Deliver professional customer experience",
                            "Improve marketing efficiency",
                            "Data-driven insights for better decisions",
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                                <p>{item}</p>
                            </div>
                        ))}

                    </div>
                </div>

                {/* ================= FINAL CTA ================= */}
                <section className="relative mt-28 py-24 px-6 rounded-3xl overflow-hidden">

                    <div className="absolute inset-0 bg-[url('/hero3.jpg')] bg-cover bg-center opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-black" />

                    <div className="relative text-center max-w-4xl mx-auto">

                        <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold`}>
                            Ready to modernize your communication?
                        </h2>

                        <p className="text-gray-300 mt-6">
                            Deploy WYVERN IVR and transform how your business handles customer interactions.
                        </p>

                        <div className="mt-10">
                            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl font-semibold transition">
                                Get Started
                            </button>
                        </div>

                    </div>
                </section>

            </section>

            <BookSession />
            <Testimonial />
            <Footer />
        </div>
    );
}