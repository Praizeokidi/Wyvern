"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react"; // ✅ ADDED
import { Jost } from "next/font/google";
import Image from "next/image";
import { Maven_Pro } from "next/font/google";
import { Cairo } from "next/font/google";
import WyvernFormModal from "@/components/get-your-line";


const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});

const mavenPro = Maven_Pro({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional: include weights you need
});



const jost = Jost({ subsets: ["latin"] });




export default function Hero() {

    const [modalOpen, setModalOpen] = useState(false)

    // ✅ ADDED: slider images
    const slides = [
        "/hero1.jpg",
        "/hero2.jpg",
        "/hero3.jpg",
        "/hero4.jpg",
    ];



    // ✅ ADDED: slider state
    const [index, setIndex] = useState(0);




    // ✅ ADDED: auto slideshow (5s like Elementor)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [slides.length]);


    return (

        <section className={`${jost.className} relative text-white py-32 px-6 md:py-40 overflow-hidden}`}> {/* ✅ UPDATED: removed bg-gradient, added overflow-hidden */}

            {/* ✅ ADDED: BACKGROUND SLIDER */}
            <div className="absolute inset-0 z-0">
                {slides.map((img, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
                            }`}
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                ))}
            </div>

            {/* ✅ ADDED: DARK OVERLAY (better than gradient) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 z-10" />

            <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center md:text-left" // ✅ UPDATED: better alignment (center mobile, left desktop)
                >
                    <h1 className={`${mavenPro.className} text-4xl md:text-5xl font-semibold leading-tight`}> {/* ✅ UPDATED: font-bold → font-semibold (more premium) */}
                        Wyvern Africa Limited
                    </h1>

                    <p className={`${cairo.className} mt-4 text-lg text-gray-200 max-w-lg mx-auto md:mx-0`}> {/* ✅ UPDATED: better readability + alignment */}
                        Connecting Nigerian businesses with reliable SIP trunks, direct numbers, and advanced contact center solutions.
                    </p>

                    {/* ✅ UPDATED: PREMIUM BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setModalOpen(true)}  // ✅ ADDED
                        className="mt-6 backdrop-blur-md bg-blue-500 border border-white/30 text-white px-8 py-3 rounded-lg hover:bg-blue-400 transition flex items-center gap-2"
                    >
                        <span className={` ${cairo.className} text-s transition`}>
                            GET YOUR WYVERN LINE TODAY
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                        >
                            <path d="M17 9h-1V7a4 4 0 10-8 0v2H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2zm-6 0V7a2 2 0 114 0v2h-4z" />
                        </svg>
                    </motion.button>
                </motion.div>

                {/* Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:flex justify-end" // ✅ UPDATED: hide on mobile, align right on desktop
                >
                    {/* ✅ UPDATED: replaced placeholder with logo (optional) */}
                    <Image
                        src="/logoz.png"
                        alt="Wyvern Logo"
                        width={800}
                        height={800}
                        className="w-84 h-84 animate-pulse object-contain"
                    // className="w-64 h-64 object-contain animate-pulse bg-none"
                    />
                </motion.div>

            </div>

            <WyvernFormModal open={modalOpen} setOpen={setModalOpen} />
        </section>

    );
}