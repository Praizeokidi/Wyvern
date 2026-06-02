"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    FaHeadset,
    FaChartLine,
    FaUsers,
    FaPhoneAlt,
    FaArrowRight,
    FaCheckCircle,
} from "react-icons/fa";
import { Jost, Playfair_Display, Cairo } from "next/font/google";

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

const features = [
    {
        icon: FaPhoneAlt,
        title: "Omnichannel Engagement",
        text: "Deliver seamless customer experiences across voice, email, chat, WhatsApp, and social platforms.",
    },
    {
        icon: FaHeadset,
        title: "Smart Call Routing",
        text: "Automatically connect customers to the right departments with intelligent IVR workflows.",
    },
    {
        icon: FaChartLine,
        title: "Advanced Analytics",
        text: "Monitor performance, track KPIs, and gain actionable customer insights in real time.",
    },
    {
        icon: FaUsers,
        title: "Agent Productivity",
        text: "Empower your teams with enterprise-grade tools that improve efficiency and response speed.",
    },
];

export default function ContactCenterPage() {
    return (
        <div className={`${jost.className} bg-slate-950 text-white overflow-x-hidden`}>
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden py-24 md:py-32">

                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />

                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_55%)]" />

                {/* CONTENT */}
                <div className="relative max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        {/* LEFT CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="max-w-3xl"
                        >

                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl rounded-full px-5 py-2 text-sm text-gray-300 mb-8">
                                Enterprise Communication Solutions
                            </div>

                            <h1
                                className={`${playfair.className} text-5xl md:text-7xl leading-tight font-bold`}
                            >
                                Contact Center <br />
                                <span className="text-blue-400">
                                    Built for Modern Customer Experience
                                </span>
                            </h1>

                            <p
                                className={`${cairo.className} text-lg md:text-xl text-gray-300 mt-8 leading-relaxed`}
                            >
                                Transform customer engagement with an intelligent,
                                cloud-powered contact center solution designed to
                                improve responsiveness, operational efficiency, and
                                long-term customer loyalty.
                            </p>

                            {/* CTA */}
                            <div className="flex flex-wrap gap-5 mt-10">

                                <Link
                                    href="/contact"
                                    className={`${jost.className} inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-[1.02]`}
                                >
                                    Schedule Consultation
                                    <FaArrowRight />
                                </Link>

                                <Link
                                    href="/services"
                                    className={`${jost.className} inline-flex items-center gap-3 border border-white/15 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl text-lg font-semibold transition-all`}
                                >
                                    Explore Services
                                </Link>

                            </div>

                        </motion.div>

                        {/* RIGHT IMAGE */}
                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative flex justify-center lg:justify-end"
                        >

                            <div className="relative w-full max-w-[500px]">

                                {/* GLOW */}
                                <div className="absolute -inset-5 bg-blue-500/20 blur-3xl rounded-full" />

                                {/* IMAGE CARD */}
                                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.45)]">

                                    <Image
                                        src="/call-center.png"
                                        alt="Contact Center"
                                        width={700}
                                        height={700}
                                        priority
                                        className="w-full h-auto object-cover"
                                    />

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>
            </section>



            {/* ================= INTRO CONTENT ================= */}
            <section className="max-w-7xl mx-auto px-6 py-24">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >

                        <p className="text-blue-400 font-semibold tracking-[0.2em] uppercase text-sm mb-4">
                            Next Generation Customer Engagement
                        </p>

                        <h2
                            className={`${playfair.className} text-4xl md:text-5xl font-bold leading-tight`}
                        >
                            Redefining How Businesses Connect with Customers
                        </h2>

                        <p
                            className={`${cairo.className} text-gray-300 text-lg leading-relaxed mt-6`}
                        >
                            In today’s highly competitive digital economy,
                            customer experience is one of the strongest drivers
                            of growth. Our advanced contact center platform
                            enables businesses to deliver faster, smarter, and
                            more personalized support across every communication
                            channel.
                        </p>

                        <p
                            className={`${cairo.className} text-gray-400 leading-relaxed mt-6`}
                        >
                            Whether your customers engage through voice calls,
                            live chat, email, social media, or messaging apps,
                            your teams remain connected through one centralized,
                            intelligent communication ecosystem.
                        </p>

                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="grid sm:grid-cols-2 gap-6"
                    >

                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:bg-white/[0.07] transition-all duration-300"
                            >

                                <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/20 flex items-center justify-center mb-5">
                                    <feature.icon className="text-blue-400 text-xl" />
                                </div>

                                <h3
                                    className={`${jost.className} text-xl font-semibold mb-3`}
                                >
                                    {feature.title}
                                </h3>

                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {feature.text}
                                </p>

                            </div>
                        ))}

                    </motion.div>

                </div>
            </section>

            {/* ================= BENEFITS ================= */}
            <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center max-w-3xl mx-auto">

                        <p className="text-blue-400 uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                            Why Businesses Choose WYVERN
                        </p>

                        <h2
                            className={`${playfair.className} text-4xl md:text-5xl font-bold`}
                        >
                            Enterprise-Grade Performance & Reliability
                        </h2>

                        <p
                            className={`${cairo.className} text-gray-400 mt-6 text-lg`}
                        >
                            Designed to support both growing businesses and
                            enterprise operations with secure, scalable, and
                            high-performance communication infrastructure.
                        </p>

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-16">

                        {[
                            "Improve customer satisfaction with faster response times.",
                            "Boost operational efficiency with intelligent workflows.",
                            "Monitor quality assurance with advanced call analytics.",
                            "Scale effortlessly as your business grows.",
                            "Integrate CRM and business systems seamlessly.",
                            "Empower agents with intuitive enterprise tools.",
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-6"
                            >

                                <FaCheckCircle className="text-blue-400 mt-1 shrink-0" />

                                <p className="text-gray-300 leading-relaxed">
                                    {item}
                                </p>

                            </motion.div>
                        ))}

                    </div>

                </div>
            </section>

            {/* ================= FINAL CTA ================= */}
            <section
                className="relative py-28 px-6 overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: "url('/hero3.jpg')" }}
            >

                {/* DARK CINEMATIC OVERLAY */}
                <div className="absolute inset-0 bg-black/70" />

                {/* SUBTLE PREMIUM GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/50 to-black/75" />

                {/* RADIAL LIGHT */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white,transparent_60%)]" />

                <div className="relative max-w-5xl mx-auto text-center">

                    <h2
                        className={`${playfair.className} text-5xl md:text-6xl font-bold leading-tight`}
                    >
                        Build Exceptional Customer Experiences at Scale
                    </h2>

                    <p
                        className={`${cairo.className} text-xl text-white/90 mt-6 max-w-3xl mx-auto`}
                    >
                        Empower your teams with a secure, scalable, and
                        intelligent contact center platform engineered for
                        modern business communication.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 mt-10">

                        <Link
                            href="/contact"
                            className={`${jost.className} bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:scale-[1.03] transition-all`}
                        >
                            Book a Demo
                        </Link>

                        <Link
                            href="/services"
                            className={`${jost.className} border border-white/40 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all`}
                        >
                            Explore Solutions
                        </Link>

                    </div>

                </div>

            </section>

            {/* ================= BOOK SESSION ================= */}
            <div className="bg-slate-950">
                <BookSession />
            </div>

            {/* ================= TESTIMONIALS ================= */}
            <Testimonial />

            <Footer />
        </div>
    );
}