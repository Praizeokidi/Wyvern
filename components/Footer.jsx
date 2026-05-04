"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Fraunces, Poppins } from "next/font/google";
import { Jost } from "next/font/google";
import Image from "next/image"; // ✅ ADD THIS



const jost = Jost({ subsets: ["latin"] });

const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// animation variants
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
    },
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
};

export default function Footer() {
    return (
        <footer className="relative overflow-visible bg-gradient-to-b from-blue-950 via-blue-900 to-slate-950 text-white py-6 px-4 sm:px-6 lg:px-8">
            {/* ================= 3D GLOW ORBS ================= */}
            <div className="absolute -top-20 left-10 w-72 h-72 bg-blue-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-400 blur-3xl opacity-10 rounded-full"></div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="relative w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-12 gap-y-10"
            >

                {/* ================= LOGO ================= */}
                <motion.div variants={item} className="flex items-start justify-start ">
                    <Image
                        src="/logoz.png" // ✅ place your logo in /public
                        alt="WYVERN Logo"
                        width={150}
                        height={150}
                        className="object-contain"
                    />

                </motion.div>


                {/* ================= ABOUT ================= */}
                <motion.div variants={item} className="flex flex-col justify-start">
                    <p className={`${poppins.className} mt-6 text-sm text-blue-200 leading-relaxed`}>
                        Licensed telecom company delivering voice, SMS, and video communication solutions.
                    </p>

                    {/* SOCIAL */}
                    <div className="flex gap-4 mt-4">
                        {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                            <motion.a
                                key={i}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="bg-blue-800/60 backdrop-blur p-2 rounded-full hover:bg-blue-600 transition"
                            >
                                <Icon size={14} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>


                {/* ================= LINKS ================= */}
                <motion.div
                    variants={item}>
                    <h3 className={`${jost.className} text-xl font-bold mb-4`}>
                        Quick Links
                    </h3>

                    <ul className={`${poppins.className} space-y-3 text-sm`}>
                        {[
                            { name: "Home", href: "/" },
                            { name: "Services", href: "/services" },
                            { name: "Downloads", href: "/downloads" },
                            { name: "Contact Us", href: "/contact" },
                            { name: "FAQs", href: "/faq" }
                        ].map((link, i) => (
                            <motion.li
                                key={i}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 hover:text-blue-300 transition"
                                >
                                    <span className="text-blue-400 group-hover:text-white transition duration-300">
                                        <FiArrowUpRight className="text-sm" />
                                    </span>
                                    {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* ================= SUPPORT ================= */}
                <motion.div
                    variants={item}>
                    <h3 className={`${jost.className} text-xl font-bold mb-4`}>
                        Support
                    </h3>

                    <ul className={`${poppins.className} space-y-3 text-sm`}>
                        {[
                            { name: "Privacy Policy", href: "/privacy" },
                            { name: "About Us", href: "/about" },
                            { name: "Insights", href: "/faq" },
                            { name: "Collaborations", href: "/contact" },
                            { name: "Terms of Service", href: "/terms" },
                        ].map((link, i) => (
                            <motion.li
                                key={i}
                                whileHover={{ x: 5 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                <Link
                                    href={link.href}
                                    className="flex items-center gap-2 hover:text-blue-300 transition"
                                >
                                    <span className="text-blue-400 group-hover:text-white transition duration-300">
                                        <FiArrowUpRight className="text-sm" />
                                    </span>
                                        {link.name}
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* ================= CONTACT ================= */}
                <motion.div variants={item}>
                    <h3 className={`${jost.className} text-xl font-bold mb-4`}>
                        Contact Us
                    </h3>

                    <div className={`${poppins.className} space-y-3 text-sm text-blue-200`}>

                        <a
                            href="mailto:wyvernglobalservice@gmail.com"
                            className="flex items-center gap-2 hover:text-blue-400 transition"
                        > <MdEmail className="text-blue-400 " />
                            wyvernglobalservice@gmail.com

                        </a>

                        <a
                            href="tel:+2348055512395"
                            className="flex items-center gap-2 hover:text-blue-400 transition"
                        >  <MdPhone className="text-blue-400" />
                            +2348055512395
                        </a>
                    </div>
                </motion.div>

            </motion.div>

            {/* ================= COPYRIGHT ================= */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className={`${jost.className} text-center mt-10 text-sm text-white`}
            >
                © {new Date().getFullYear()} WYVERN. All rights reserved.
            </motion.div>
        </footer >
    );
}