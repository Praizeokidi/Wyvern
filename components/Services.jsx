"use client";

import Link from "next/link";
import {
    PhoneCall,
    MessageCircle,
    Server,
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Jost, Playfair_Display } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Services() {
    const services = [
        {
            title: "Interactive Voice Response (IVR)",
            desc: "Automate customer interactions with intelligent call routing and reduce operational costs across your communication systems.",
            icon: PhoneCall,
            link: "/services/ivr",
        },
        {
            title: "Voice & Video Conferencing",
            desc: "Enterprise-grade communication infrastructure enabling seamless global collaboration across teams and organizations.",
            icon: MessageCircle,
            link: "/services/video-conference",
        },
        {
            title: "Cloud Hosted PBX",
            desc: "A scalable, intelligent cloud telephony system designed to streamline business communication and improve efficiency.",
            icon: Server,
            link: "/services/cloud-pbx",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold text-white`}>
                        Enterprise Communication{" "}
                        <span className="text-blue-400">Solutions</span>
                    </h2>

                    <p className={`${jost.className} mt-4 text-gray-400 max-w-2xl mx-auto`}>
                        Scalable, secure, and intelligent communication systems designed for modern organizations and global enterprises.
                    </p>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                whileHover={{ y: -6 }}
                                className="group relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg transition-all"
                            >

                                {/* glow hover effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-cyan-400/10 rounded-2xl" />

                                {/* ICON */}
                                <div className="relative mb-4">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-400/20">
                                        <Icon className="text-blue-400 w-6 h-6" />
                                    </div>
                                </div>

                                {/* TITLE */}
                                <h3 className={`${jost.className} relative text-lg font-semibold text-white mb-2`}>
                                    {service.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className={`${jost.className} relative text-sm text-gray-400 leading-relaxed mb-6`}>
                                    {service.desc}
                                </p>

                                {/* CTA */}
                                <Link
                                    href={service.link}
                                    className={`${jost.className} relative inline-flex items-center text-blue-400 text-sm font-medium group-hover:text-blue-300 transition`}
                                >
                                    Explore Service →
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* MAIN CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center mt-16"
                >
                    <p className={`${jost.className} text-gray-400 mb-5 text-center max-w-xl`}>
                        Need a tailored communication solution for your organization?
                    </p>

                    <Link href="/contact">
                        <button className={`${jost.className} relative px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition`}>
                            Book a Consultation
                        </button>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}