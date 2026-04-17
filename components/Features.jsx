'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react'; // ✅ ADDED: icon for feature list
import { Cairo } from "next/font/google";







const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});


const featureVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Features() {
    const features = [
        { title: "Client Satifaction", value: 96 }, // ✅ CHANGED naming to match sample
        { title: "Call Quality", value: 90 },
        { title: "Communications", value: 98 },
        { title: "Support", value: 99 },
    ];

    return (
        <section className="w-full mx-auto px-6 py-16 bg-slate-950">
            <div className="flex flex-col md:flex-row items-start gap-12">


                {/* ================= LEFT COLUMN ================= */}
                <motion.div
                    className="md:w-1/2 flex flex-col gap-6 relative" // ✅ UPDATED spacing + relative for overlay
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                >

                    {/* ================= IMAGE ================= */}
                    <section className="relative -mt-24 md:-mt-44 z-10 flex justify-center px-4">
                        <div className="relative w-full max-w-[450px]">
                            <Image
                                src="/partners.jpg"
                                alt="Partners"
                                width={450}
                                height={300}
                                className="rounded-xl shadow-lg w-full h-auto"
                                priority
                            />
                        </div>
                    </section>

                    {/* ================= PROGRESS BARS ================= */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 px-4">
                        {features.map((item, index) => (
                            <div
                                className="bg-white border rounded-lg h-20 w-full"
                                key={index}
                            >
                                <h3 className="text-sm text-center font-semibold text-gray-700 mt-3 mb-1">
                                    {item.title}
                                </h3>

                                <div className="w-full px-3">
                                    <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.value}%` }}
                                            transition={{ duration: 1 }}
                                            className="bg-blue-500 h-2 rounded-full"
                                        />
                                    </div>
                                </div>

                                <span className="text-xs text-gray-400 text-center block mt-1">
                                    {item.value}%
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* ================= RIGHT COLUMN ================= */}
                <motion.div
                    className="md:w-1/2 flex flex-col justify-center text-gray-300"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureVariants}
                >
                    {/* ✅ UPDATED heading style */}
                    <h2
                        className={`${cairo.className} font-semibold text-blue-400 mb-4 leading-[0.95] text-[clamp(2rem,4vw,4rem)]`}
                    >
                        We Are{" "}
                        <br className="hidden md:block" />
                        Building a{" "}
                        <br className="hidden md:block" />
                        Customer
                        <br className="hidden md:block" />
                        Base!
                    </h2>

                    {/* ✅ UPDATED paragraph */}
                    <p className={`${cairo.className} mb-6 text-gray-400`}>
                        We’re not just serving customers; we’re building  a community.
                        <br className="hidden md:block" />
                        Join us on a journey of excellence, where every interaction
                        strengthens
                        <br className="hidden md:block" /> your growing customer base.
                    </p>

                    {/* ================= FEATURE LIST ================= */}
                    <ul className={`${cairo.className} space-y-4`}>
                        {/* ✅ REPLACED bullet list with icon list */}
                        <li className="flex items-center gap-3">
                            <Check className="text-green-400 w-5 h-5" />
                            <span>Fast and Safe</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Check className="text-green-400 w-5 h-5" />
                            <span>Efficient</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <Check className="text-green-400 w-5 h-5" />
                            <span>Customer Centricity</span>
                        </li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}