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
        {
            title: "SIP Trunking",
            desc: "Our system allows you to make and receive phone calls over the internet...",
            icon: Headphones,
            link: "/services/sip-trunking",
        },
        {
            title: "Contact Center Solution",
            desc: "Elevate your customer support and engagement...",
            icon: Users,
            link: "/services/contact-center",
        },
        {
            title: "Closed User Group",
            desc: "Connect freely within your group with WYVERN CUG line...",
            icon: Globe,
            link: "/services/cug",
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
        <div className="bg-slate-950 py-14">

            <section className="max-w-5xl mx-auto px-5">

                {/* TITLE */}
                <motion.h2
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-center text-white"
                >
                    Our Services
                </motion.h2>

                {/* GRID */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
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
                                <h4 className="text-base font-semibold text-gray-800 mb-1">
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

            </section>
        </div>
    );
}