"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import { Cairo } from "next/font/google";

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const widgetVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function CustomerStats() {
    return (
        <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* ================= LEFT ================= */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={widgetVariants}
                    >

                        {/* IMAGE CARD (PREMIUM DEPTH STYLE) */}
                        <div className="relative w-full max-w-xl mx-auto md:mx-0">

                            {/* glow behind image */}
                            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-2xl" />

                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

                                <Image
                                    src="/Virtual-Assistant.png"
                                    alt="Customer Support"
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover"
                                    priority
                                />

                                {/* subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                            </div>

                            {/* floating badge */}
                            <div className="absolute -bottom-5 right-4 bg-slate-900/90 backdrop-blur border border-white/10 px-4 py-2 rounded-xl shadow-lg">
                                <p className="text-xs text-gray-400">Regulated by</p>
                                <p className="text-sm font-semibold text-white">
                                    NCC Certified
                                </p>
                            </div>
                        </div>

                        {/* DESCRIPTION */}
                        <p className={`${cairo.className} text-gray-300 leading-relaxed text-center md:text-left`}>
                            WYVERN is a licensed telecommunications infrastructure provider
                            regulated by the Nigerian Communications Commission (NCC),
                            delivering secure, scalable and reliable communication systems
                            across Africa.
                        </p>
                    </motion.div>

                    {/* ================= RIGHT ================= */}
                    <motion.div
                        className="space-y-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={widgetVariants}
                    >

                        {/* TITLE */}
                        <div>
                            <h2 className={`${cairo.className} text-4xl md:text-5xl font-bold text-white leading-tight`}>
                                Built on Trust,
                                <span className="text-blue-400"> Backed by Performance</span>
                            </h2>

                            <p className="mt-4 text-gray-400">
                                Delivering measurable impact through years of excellence,
                                reliability, and customer satisfaction.
                            </p>
                        </div>

                        {/* STATS GRID (PREMIUM CARDS) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                            {/* CARD 1 */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
                                <CountUp
                                    end={10}
                                    duration={3}
                                    suffix="+"
                                    className="text-4xl font-bold text-blue-400"
                                />
                                <p className="mt-2 text-gray-300">Years of Excellence</p>
                            </div>

                            {/* CARD 2 */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
                                <CountUp
                                    end={5000}
                                    duration={3}
                                    separator=","
                                    className="text-4xl font-bold text-emerald-400"
                                />
                                <p className="mt-2 text-gray-300">Customers Served</p>
                            </div>

                            {/* CARD 3 (NEW PREMIUM ADDITION) */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
                                <CountUp
                                    end={99}
                                    duration={3}
                                    suffix="%"
                                    className="text-4xl font-bold text-cyan-400"
                                />
                                <p className="mt-2 text-gray-300">Uptime Reliability</p>
                            </div>

                            {/* CARD 4 (NEW PREMIUM ADDITION) */}
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur hover:bg-white/10 transition">
                                <CountUp
                                    end={24}
                                    duration={2}
                                    suffix="/7"
                                    className="text-4xl font-bold text-purple-400"
                                />
                                <p className="mt-2 text-gray-300">Global Support</p>
                            </div>

                        </div>

                        {/* FOOTNOTE */}
                        <p className={`${cairo.className} text-gray-400 text-center md:text-left`}>
                            Consistent performance, trusted infrastructure, and scalable
                            communication systems designed for global standards.
                        </p>

                    </motion.div>

                </div>
            </div>
        </section>
    );
}