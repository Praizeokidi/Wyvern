"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import BookSession from "@/components/Bas";
import Testimonial from "../../../components/Testimonials";
import { Jost, Playfair_Display, Cairo } from "next/font/google";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Globe2,
    Headphones,
    ServerCog,
    ArrowRight,
    CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const jost = Jost({
    subsets: ["latin"],
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const benefits = [
    {
        title: "Zero Server Maintenance",
        text: "Eliminate expensive hardware management and reduce operational complexity with a fully cloud-managed PBX infrastructure.",
        icon: ServerCog,
    },
    {
        title: "Enterprise Reliability",
        text: "Built on secure enterprise-grade infrastructure with redundancy, uptime assurance, and failover protection.",
        icon: ShieldCheck,
    },
    {
        title: "Work From Anywhere",
        text: "Keep your workforce connected seamlessly across office, remote, and hybrid environments.",
        icon: Globe2,
    },
    {
        title: "Premium Customer Experience",
        text: "Deliver smarter call routing, IVR systems, and professional greetings that elevate your brand.",
        icon: Headphones,
    },
];

export default function CloudPbx() {
    return (
        <div className={`${jost.className} bg-slate-950 text-white overflow-x-hidden`}>
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden py-28 px-6">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#2563eb,transparent_55%)]" />

                <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 rounded-full px-4 py-2 mb-6">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            <span className={`${jost.className} text-sm text-blue-200`}>
                                Enterprise Communication Infrastructure
                            </span>
                        </div>

                        <h1
                            className={`${playfair.className} text-5xl md:text-7xl font-bold leading-tight`}
                        >
                            Cloud Hosted <span className="text-blue-400">PBX</span>
                        </h1>

                        <p
                            className={`${cairo.className} mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl`}
                        >
                            Modernize your business communications with a scalable,
                            intelligent, and globally reliable cloud phone system designed
                            for performance, flexibility, and enterprise growth.
                        </p>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-5 mt-10">

                            <Link
                                href="/contact"
                                className={`${jost.className} inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-7 py-4 rounded-2xl font-semibold transition-all hover:scale-[1.02]`}
                            >
                                Book Consultation
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/services"
                                className={`${jost.className} border border-white/10 bg-white/5 hover:bg-white/10 px-7 py-4 rounded-2xl font-semibold transition`}
                            >
                                Explore Services
                            </Link>

                        </div>

                    </motion.div>

                    {/* RIGHT IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >

                        <div className="absolute -inset-5 bg-blue-500/20 blur-3xl rounded-full" />

                        <div className="relative bg-white/5 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm">
                            <Image
                                src="/pbx.jpg"
                                alt="Cloud Hosted PBX"
                                width={1000}
                                height={700}
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </motion.div>

                </div>
            </section>

            {/* ================= BENEFITS ================= */}
            <section className="py-24 px-6 bg-slate-950">
                <div className="max-w-7xl mx-auto">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2
                            className={`${playfair.className} text-4xl md:text-5xl font-bold`}
                        >
                            Built for Modern Businesses
                        </h2>

                        <p
                            className={`${cairo.className} text-gray-400 text-lg mt-5`}
                        >
                            A future-ready communication system engineered to improve
                            collaboration, reduce costs, and deliver exceptional customer
                            experiences.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

                        {benefits.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all hover:-translate-y-2"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                                    <item.icon className="text-blue-400 w-7 h-7" />
                                </div>

                                <h3 className={`${jost.className} text-xl font-semibold mb-4`}>
                                    {item.title}
                                </h3>

                                <p
                                    className={`${cairo.className} text-gray-400 leading-relaxed`}
                                >
                                    {item.text}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>

            {/* ================= ARTICLE CONTENT ================= */}
            <section className="py-24 px-6 bg-gradient-to-b from-slate-950 to-black">
                <div className="max-w-5xl mx-auto">

                    <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-14 backdrop-blur-sm shadow-2xl">

                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-[2px] bg-blue-400" />
                            <span className={`${jost.className} text-blue-300 uppercase tracking-[0.2em] text-sm`}>
                                Intelligent Communication
                            </span>
                        </div>

                        <h2
                            className={`${playfair.className} text-4xl md:text-5xl font-bold leading-tight mb-8`}
                        >
                            Transform The Way Your Business Communicates
                        </h2>

                        <div
                            className={`${cairo.className} text-gray-300 text-lg leading-[2] space-y-8`}
                        >

                            <p>
                                In today’s fast-moving business environment, communication
                                speed and reliability are essential. Our Cloud Hosted PBX
                                acts as a centralized intelligent communication hub that
                                ensures every call reaches the right destination seamlessly,
                                whether your teams operate remotely, on-site, or across
                                multiple locations.
                            </p>

                            <p>
                                Unlike traditional phone systems that require expensive
                                infrastructure and ongoing maintenance, WYVERN’s cloud-based
                                architecture delivers enterprise-grade communication without
                                complexity. Businesses gain the flexibility to scale quickly,
                                reduce operational costs, and maintain uninterrupted service
                                performance.
                            </p>

                            <div className="grid md:grid-cols-2 gap-6 pt-4">

                                {[
                                    "Professional IVR & Auto Attendants",
                                    "Remote Workforce Enablement",
                                    "Advanced Call Routing",
                                    "Enterprise Reliability & Security",
                                    "Scalable Extensions & Lines",
                                    "Business Continuity Protection",
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 bg-white/[0.03] border border-white/5 rounded-2xl p-5"
                                    >
                                        <CheckCircle2 className="text-blue-400 mt-1 w-5 h-5" />

                                        <p className="text-gray-300">
                                            {item}
                                        </p>
                                    </div>
                                ))}

                            </div>

                            <p>
                                Whether you’re a startup scaling operations or an established
                                enterprise modernizing infrastructure, our Cloud PBX platform
                                is designed to evolve with your business while maintaining
                                world-class reliability, security, and performance.
                            </p>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section className="relative py-28 px-6 overflow-hidden">

                <div className="absolute inset-0 bg-[url('/pbx.jpg')] bg-cover bg-center opacity-20" />

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-black/95" />

                <div className="relative max-w-5xl mx-auto text-center">

                    <h2
                        className={`${playfair.className} text-5xl md:text-6xl font-bold leading-tight`}
                    >
                        Upgrade your communication infrastructure
                    </h2>

                    <p
                        className={`${cairo.className} text-xl text-gray-300 mt-6 max-w-3xl mx-auto`}
                    >
                        Deploy a flexible, secure, and enterprise-grade Cloud PBX
                        solution designed to improve collaboration, responsiveness,
                        and customer experience.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 mt-10">

                        <Link
                            href="/contact"
                            className={`${jost.className} bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition-all hover:scale-[1.03]`}
                        >
                            Schedule Consultation
                        </Link>

                        <Link
                            href="/downloads"
                            className={`${jost.className} border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all`}
                        >
                            Download App
                        </Link>

                    </div>

                </div>

            </section>

            {/* COMPONENTS */}
            <BookSession />
            <Testimonial />
            <Footer />

        </div>
    );
}