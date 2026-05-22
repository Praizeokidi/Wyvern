"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Jost } from "next/font/google";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
import { Cairo } from "next/font/google";
import WyvernFormModal from "@/components/get-your-line";

const cairo = Cairo({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mavenPro = Maven_Pro({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const jost = Jost({ subsets: ["latin"] });

export default function Hero() {
    const [modalOpen, setModalOpen] = useState(false);

    const slides = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg", "/hero4.jpg"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % 4); // ✅ hardcoded length
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className={`${jost.className} relative text-white py-36 px-6 md:py-44 overflow-hidden`}>

            {/* BACKGROUND SLIDES */}
            <div className="absolute inset-0 z-0">
                {slides.map((img, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-1000 ${i === index ? "opacity-100" : "opacity-0"}`}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                ))}
            </div>

            {/* DARK + PREMIUM LAYER */}
            <div className="absolute inset-0 bg-black/70 z-10" />

            {/* SOFT RADIAL GLOW (premium feel) */}
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(29,78,216,0.25),transparent_45%)]" />

            {/* FLOATING BLUR ORBS */}
            <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse" />
            <div className="absolute w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse" />

            {/* CONTENT */}
            <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

                {/* TEXT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left"
                >
                    <p className="text-blue-400 tracking-widest uppercase text-xs mb-3">
                        Telecom Infrastructure • Cloud Voice • SIP Solutions
                    </p>

                    <h1 className={`${mavenPro.className} text-4xl md:text-6xl font-semibold leading-tight`}>
                        Global Voice Infrastructure for Modern African Businesses
                    </h1>

                    <p className={`${cairo.className} mt-5 text-lg text-gray-300 max-w-lg`}>
                        Wyvern Africa delivers enterprise-grade SIP trunks, virtual numbers, and communication systems built for scale, reliability, and global connectivity.
                    </p>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setModalOpen(true)}
                        className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-900/30 hover:shadow-blue-500/40 transition flex items-center gap-3"
                    >
                        Get Your Wyvern Line
                        <span className="text-lg">→</span>
                    </motion.button>

                    <p className="text-xs text-gray-400 mt-4">
                        Trusted by startups, enterprises & telecom resellers
                    </p>
                </motion.div>

                {/* IMAGE */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:flex justify-end"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                        <Image
                            src="/logoz.png"
                            alt="Wyvern Logo"
                            width={500}
                            height={500}
                            className="relative w-80 h-80 object-contain"
                        />
                    </div>
                </motion.div>

            </div>

            <WyvernFormModal open={modalOpen} setOpen={setModalOpen} />
        </section>
    );
}