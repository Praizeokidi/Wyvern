// app/services/page.jsx
"use client";

import { Jost, Cairo, Playfair_Display } from "next/font/google";
import Testimonial from "@/components/Testimonials";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    PhoneCall,
    Headphones,
    Globe,
    Server,
    Users,
    MessageCircle,
    ArrowRight,
    CheckCircle2,
    Sparkles,
    ShieldCheck,
    Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const services = [
    {
        title: "Interactive Voice Response (IVR)",
        desc: "Automate customer interactions intelligently with enterprise-grade IVR systems built for speed, scale, and seamless customer experience.",
        icon: PhoneCall,
        link: "/services/ivr",
    },
    {
        title: "Voice & Video Conference Solution",
        desc: "Power high-quality communication and collaboration across teams with secure voice and video conferencing infrastructure.",
        icon: MessageCircle,
        link: "/services/video-conference",
    },
    {
        title: "Cloud Hosted PBX",
        desc: "Deploy a modern cloud-based PBX system that enables remote work, advanced routing, and business continuity.",
        icon: Server,
        link: "/services/cloud-pbx",
    },
    {
        title: "SIP Trunking",
        desc: "Scale business communications with reliable SIP trunking built for crystal-clear voice quality and reduced operational costs.",
        icon: Headphones,
        link: "/services/sip-trunking",
    },
    {
        title: "Contact Center Solution",
        desc: "Deliver exceptional customer support with unified contact center solutions designed for efficiency and performance.",
        icon: Users,
        link: "/services/contact-center",
    },
    {
        title: "Closed User Group (CUG)",
        desc: "Enable secure and cost-effective communication within your organization using WYVERN closed user group solutions.",
        icon: Globe,
        link: "/services/cug",
    },
];

const stats = [
    {
        title: "99.9%",
        subtitle: "Network Uptime",
    },
    {
        title: "24/7",
        subtitle: "Enterprise Support",
    },
    {
        title: "Global",
        subtitle: "Communication Reach",
    },
];

export default function ServicesPage() {
    return (
        <div className={`${jost.className} bg-slate-950 text-white overflow-hidden`}>
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="
        relative 
        overflow-hidden 
        pt-28 md:pt-36      /* CHANGE: better mobile spacing */
        pb-20 md:pb-28
        px-4 sm:px-6        /* CHANGE: safer mobile padding */
    ">

                {/* BACKGROUND */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-black" />

                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#2563eb,transparent_45%)]" />

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/10 blur-3xl rounded-full" />

                <div className="
        relative 
        max-w-7xl 
        mx-auto 
        grid 
        lg:grid-cols-2 
        gap-10 md:gap-16    /* CHANGE: smaller mobile gap */
        items-center
    ">

                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        <div className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
                            <Sparkles size={16} />
                            Enterprise Communication Solutions
                        </div>

                        <h1 className={`
        ${jost.className} 
        text-4xl            /* CHANGE: better mobile fit */
        sm:text-5xl
        md:text-6xl
        lg:text-7xl
        font-bold 
        leading-tight
    `}>
                            Powering Modern
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                {" "}Business Communication
                            </span>
                        </h1>

                        <p className={`
        ${cairo.className} 
        text-base sm:text-lg md:text-xl   /* CHANGE: responsive text scaling */
        text-gray-400 
        mt-6 md:mt-8
        max-w-2xl 
        leading-relaxed
    `}>
                            WYVERN delivers secure, scalable, and enterprise-grade voice solutions
                            designed to help businesses communicate faster, serve customers better,
                            and operate globally without limitations.
                        </p>

                        {/* BUTTONS */}
                        <div className="
        flex 
        flex-col sm:flex-row   /* CHANGE: stacked buttons on phones */
        flex-wrap 
        gap-4 
        mt-8 md:mt-10
    ">

                            <Link
                                href="/contact"
                                className={`${jost.className} inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-blue-500/20`}
                            >
                                Book a Consultation
                                <ArrowRight size={18} />
                            </Link>

                            <Link
                                href="/downloads"
                                className={`${jost.className} inline-flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold`}
                            >
                                Download Softphone
                            </Link>

                        </div>

                        {/* TRUST ROW */}
                        <div className="
        grid 
        grid-cols-1          /* CHANGE: stack on very small phones */
        sm:grid-cols-3       /* CHANGE: return to 3 cols from small screens upward */
        gap-4                /* CHANGE: smaller gap for mobile */
        md:gap-6 
        mt-10                /* CHANGE: reduced top spacing on mobile */
        md:mt-14
    ">
                            {stats.map((item, i) => (
                                <div
                                    key={i}
                                    className="
    border border-white/10 
    bg-white/5 
    rounded-2xl 
    p-4 md:p-5              /* CHANGE: responsive padding */
    backdrop-blur-xl
    text-center             /* CHANGE: aligns stats better on mobile */
"
                                >
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-1">
                                        {item.subtitle}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >

                        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-[0_0_80px_rgba(37,99,235,0.15)]">

                            <div className="
        grid 
        grid-cols-1          /* CHANGE: single column on phones */
        sm:grid-cols-2       /* CHANGE: 2-column layout from small tablets upward */
        gap-5
        items-stretch        /* CHANGE: keeps equal card heights */
    ">

                                <div className="
        rounded-2xl 
        bg-slate-900/70 
        border border-white/10 
        p-6
        h-full               /* CHANGE: equal height cards */
    ">
                                    <ShieldCheck className="text-blue-400 mb-4" size={36} />
                                    <h3 className="font-semibold text-lg">
                                        Secure Infrastructure
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-2">
                                        Built with enterprise-grade reliability and protection.
                                    </p>
                                </div>

                                <div className="
        rounded-2xl 
        bg-slate-900/70 
        border border-white/10 
        p-6
        sm:mt-10             /* CHANGE: margin only on desktop/tablet */
        h-full
    ">
                                    <Clock3 className="text-cyan-400 mb-4" size={36} />
                                    <h3 className="font-semibold text-lg">
                                        Always Available
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-2">
                                        24/7 uptime monitoring and support coverage.
                                    </p>
                                </div>

                                <div className="
        rounded-2xl 
        bg-slate-900/70 
        border border-white/10 
        p-6
        sm:-mt-4             /* CHANGE: negative margin only on larger screens */
        h-full
    ">
                                    <PhoneCall className="text-blue-400 mb-4" size={36} />
                                    <h3 className="font-semibold text-lg">
                                        Crystal Clear Calls
                                    </h3>
                                    <p className="text-gray-400 text-sm mt-2">
                                        HD voice quality engineered for business communication.
                                    </p>
                                </div>

                                <div className="
        rounded-2xl 
        bg-gradient-to-br 
        from-blue-600 
        to-cyan-500 
        p-6
        flex flex-col justify-center   /* CHANGE: vertically centered */
        min-h-[220px]                  /* CHANGE: consistent premium sizing */
    ">
                                    <h3 className="text-4xl font-bold">
                                        500+
                                    </h3>
                                    <p className="mt-2 text-white/90">
                                        Businesses trust WYVERN for modern communication.
                                    </p>
                                </div>

                            </div>

                        </div>

                    </motion.div>

                </div>
            </section>

            {/* ================= SERVICES ================= */}
            <section className="relative py-24 px-6">

                <div className="max-w-7xl mx-auto">

                    {/* SECTION HEADER */}
                    <div className="text-center max-w-3xl mx-auto mb-20">

                        <div className="inline-flex items-center gap-2 border border-blue-500/20 bg-blue-500/10 text-blue-300 px-4 py-2 rounded-full text-sm mb-6">
                            Premium Solutions
                        </div>

                        <h2 className={`${playfair.className} text-5xl md:text-6xl font-bold`}>
                            Built for Scale.
                            <span className="block text-blue-400">
                                Designed for Growth.
                            </span>
                        </h2>

                        <p className={`${cairo.className} text-gray-400 text-lg mt-6 leading-relaxed`}>
                            Explore communication solutions trusted by modern businesses,
                            enterprises, support centers, and distributed teams.
                        </p>

                    </div>

                    {/* GRID */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {services.map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-blue-500/40 transition-all duration-500"
                            >

                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-cyan-400/10" />

                                <div className="relative">

                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                                        <service.icon className="text-white w-8 h-8" />
                                    </div>

                                    <h3 className={`${jost.className} text-2xl font-bold mb-4`}>
                                        {service.title}
                                    </h3>

                                    <p className={`${cairo.className} text-gray-400 leading-relaxed mb-8`}>
                                        {service.desc}
                                    </p>

                                    <ul className="space-y-3 mb-10 text-sm text-gray-300">
                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-blue-400" />
                                            Enterprise-grade reliability
                                        </li>

                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-blue-400" />
                                            Seamless scalability
                                        </li>

                                        <li className="flex items-center gap-2">
                                            <CheckCircle2 size={16} className="text-blue-400" />
                                            Dedicated support
                                        </li>
                                    </ul>

                                    <Link
                                        href={service.link}
                                        className={`${jost.className} inline-flex items-center gap-2 text-blue-400 font-semibold group-hover:text-cyan-300 transition`}
                                    >
                                        Explore Service
                                        <ArrowRight size={18} />
                                    </Link>

                                </div>

                            </motion.div>
                        ))}

                    </div>

                </div>

            </section>

            {/* ================= WHY CHOOSE US ================= */}
            <section className="py-24 px-6 bg-gradient-to-b from-slate-900 to-black">

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* LEFT */}
                    <div>

                        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-2 rounded-full text-sm mb-6">
                            Why Businesses Choose WYVERN
                        </div>

                        <h2 className={`${playfair.className} text-5xl font-bold leading-tight`}>
                            Enterprise-grade support
                            <span className="text-blue-400"> with human-centered service.</span>
                        </h2>

                        <p className={`${cairo.className} text-gray-400 text-lg mt-6 leading-relaxed`}>
                            From onboarding to infrastructure optimization, we help organizations
                            simplify communication and improve customer experience at every level.
                        </p>

                        <div className="mt-10 space-y-5">

                            {[
                                "Experienced & certified telecom professionals",
                                "24/7 proactive technical support",
                                "Reliable cloud communication infrastructure",
                                "Flexible solutions for startups & enterprises",
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="text-blue-400" size={18} />
                                    </div>

                                    <div>
                                        <p className="text-lg text-gray-200 font-medium">
                                            {item}
                                        </p>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="relative">

                        <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                            <div className="grid gap-6">

                                <div className="bg-slate-900/70 rounded-2xl p-6 border border-white/10">
                                    <h3 className="text-2xl font-bold">
                                        24/7 Customer Support
                                    </h3>

                                    <p className="text-gray-400 mt-3">
                                        Always-on support to ensure uninterrupted communication for your business.
                                    </p>
                                </div>

                                <div className="bg-slate-900/70 rounded-2xl p-6 border border-white/10">
                                    <h3 className="text-2xl font-bold">
                                        Multilingual Contact Center
                                    </h3>

                                    <p className="text-gray-400 mt-3">
                                        Reach global customers with localized multilingual communication support.
                                    </p>
                                </div>

                                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl p-6">
                                    <h3 className="text-2xl font-bold">
                                        Ready to transform your communication infrastructure?
                                    </h3>

                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 mt-6 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold hover:scale-[1.02] transition"
                                    >
                                        Talk to Our Team
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* TESTIMONIALS */}
            <Testimonial />

            {/* ================= FINAL CTA ================= */}
            <section
                className="
    relative 
    py-20 md:py-28       /* CHANGE: reduced mobile height */
    px-4 sm:px-6
    overflow-hidden
"
                style={{
                    backgroundImage: "url('/hero1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* DARK OVERLAY (fixes bluish issue) */}
                <div className="absolute inset-0 bg-slate-900/70" />

                {/* subtle glow (optional premium touch) */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

                <div className="relative max-w-5xl mx-auto text-center text-white">

                    <h2 className={`
        ${playfair.className} 
        text-4xl sm:text-5xl md:text-6xl   /* CHANGE: responsive scaling */
        font-bold 
        leading-tight
    `}>
                        Ready to modernize your business communication?
                    </h2>

                    <p className={`${cairo.className} text-xl text-white/85 mt-6 max-w-3xl mx-auto`}>
                        Let WYVERN help you deploy scalable, secure, and future-ready communication infrastructure tailored to your business.
                    </p>

                    <div className="flex flex-wrap justify-center gap-5 mt-10">

                        <Link
                            href="/contact"
                            className={`${jost.className} bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:scale-[1.03] transition`}
                        >
                            Schedule Consultation
                        </Link>

                        <Link
                            href="/downloads"
                            className={`${jost.className} border border-white/30 px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition`}
                        >
                            Download App
                        </Link>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}