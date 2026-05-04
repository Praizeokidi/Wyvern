"use client";

import Link from "next/link";
import {
    PhoneCall,
    Headphones,
    Globe,
    Server,
    Users,
    MessageCircle
} from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Jost } from "next/font/google";
import { Playfair_Display } from "next/font/google";




const jost = Jost({
    subsets: ["latin"],
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});


export default function Services() {

    const services = [
        {
            title: "Interactive Voice Response (IVR)",
            desc: "WYVERN IVR system solution is designed to cut the cost of phone calls to and from your company...",
            icon: PhoneCall,
            link: "/services/ivr",
        },
        {
            title: "Voice and Video Conference Solution",
            desc: "WYVERN voice and video conferencing solution enables seamless communications, collaboration...",
            icon: MessageCircle,
            link: "/services/video-conference",
        },
        {
            title: "Cloud Hosted PBX",
            desc: "With our Cloud PBX which serves as a smart assistant to your business...",
            icon: Server,
            link: "/services/cloud-pbx",
        },

    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45 }
        }
    };

    return (
        <div className="bg-slate-950 py-8">

            <section className="max-w-5xl mx-auto px-5">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`${jost.className} text-3xl md:text-3xl font-bold text-center text-white`}
                >
                    Our Services
                </motion.h2>

                {/* GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`${jost.className} grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8`}
                >
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                                whileHover={{
                                    y: -4,
                                    scale: 1.02
                                }}
                                className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col"
                            >

                                {/* ICON */}
                                <div className="mb-3">
                                    <Icon className="text-red-500 w-9 h-9" />
                                </div>

                                {/* TITLE */}
                                <h4 className="text-lg font-bold text-gray-800 mb-1">
                                    {service.title}
                                </h4>

                                {/* DESCRIPTION */}
                                <p className="text-gray-500 text-xs leading-relaxed mb-4">
                                    {service.desc}
                                </p>

                                {/* LINK */}
                                <Link
                                    href={service.link}
                                    className="mt-auto inline-flex items-center text-blue-600 text-xs font-medium hover:underline"
                                >
                                    Read More →
                                </Link>

                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mt-10"
                >
                    <Link href="/services">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-1000 to-blue-900 border-white/30 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                        > <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-20 blur-xl transition" />
                            View More Services
                        </motion.button>
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}