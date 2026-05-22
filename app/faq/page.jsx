"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Jost } from "next/font/google";
import { FaChevronRight } from "react-icons/fa";

const jost = Jost({ subsets: ["latin"] });

const faqsLeft = [
    {
        q: "Why do I need Identification and Utility Bill?",
        a: "WYVERN is an NCC licensed telecom company, and ID verification is required to activate a phone line in Nigeria.",
    },
    {
        q: "How can I get a new WYVERN line?",
        a: "Click the Get Your Line button, fill the form, and a free WYVERN line will be assigned to you.",
    },
    {
        q: "You say WYVERN lines are SIMless, how do I use it?",
        a: "Download the WYVERN app on Play Store or iOS, sign up, and use your number via internet connection.",
    },
    {
        q: "Can I use WYVERN Line for voice broadcast?",
        a: "Yes, WYVERN supports broadcast services for campaigns and announcements.",
    },
];

const faqsRight = [
    {
        q: "Can WYVERN Line be used for business?",
        a: "Yes, WYVERN is optimized for business communication and enterprise use.",
    },
    {
        q: "How do I manage many customer calls?",
        a: "Use WYVERN Business features like call forwarding, conferencing, and multi-line handling.",
    },
    {
        q: "Can call centers use WYVERN Line?",
        a: "Yes. It supports monitoring, recording, barging, and analytics.",
    },
];

const moreFaqsRight = [
    {
        q: "What makes WYVERN Line business-ready?",
        a: "Features include analytics, routing, recording, and enterprise scalability.",
    },
    {
        q: "Can WYVERN integrate with CRM?",
        a: "Yes, WYVERN integrates with most CRM systems.",
    },
    {
        q: "Can I call internationally?",
        a: "Yes. You can make local and international calls seamlessly.",
    },
];

function FAQItem({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left px-5 py-4"
            >
                <span className="text-sm md:text-base font-medium text-white">
                    {item.q}
                </span>

                <FaChevronRight
                    className={`text-gray-400 transition-transform ${open ? "rotate-90" : ""}`}
                />
            </button>

            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                className="overflow-hidden"
            >
                <div className="px-5 pb-4 text-gray-300 text-sm leading-relaxed">
                    {item.a}
                </div>
            </motion.div>
        </div>
    );
}

export default function FAQPage() {
    return (
        <div className="bg-slate-950 text-white">
            <Navbar />

            {/* HERO */}
            <section className="relative py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-3xl mx-auto px-6">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold`}>
                        Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-gray-400">
                        Everything you need to understand WYVERN services in one place.
                    </p>
                </div>
            </section>

            {/* MAIN GRID */}
            <section className={`${jost.className} max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10`}>

                {/* LEFT COLUMN (IMAGE + RIGHT FAQ FIRST ON MOBILE ORDER FIXED) */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-6"
                >
                    <Image
                        src="/faq4.jpg"
                        alt="Support agent"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-xl object-cover"
                    />

                    {/* FAQ STACK (naturally AFTER image on mobile) */}
                    <div className="space-y-4">
                        {faqsRight.map((item, i) => (
                            <FAQItem key={i} item={item} />
                        ))}
                    </div>
                </motion.div>

                {/* RIGHT COLUMN */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-10"
                >

                    {/* FIXED POSITION HEADING */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Everything you need to know
                        </h2>

                        <p className="text-gray-400 mt-2 mb-6">
                            Clear answers to help you get started quickly and confidently.
                        </p>

                        <div className="space-y-4">
                            {faqsLeft.map((item, i) => (
                                <FAQItem key={i} item={item} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {moreFaqsRight.map((item, i) => (
                            <FAQItem key={i} item={item} />
                        ))}
                    </div>

                </motion.div>
            </section>

            {/* PREMIUM CTA */}
            <section className={`${jost.className} py-24 bg-slate-950`}>
                <div className="max-w-6xl mx-auto px-6">

                    <div className="grid md:grid-cols-2 bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

                        {/* LEFT */}
                        <div className="p-10">
                            <h2 className="text-3xl md:text-4xl font-bold">
                                Still need help?
                            </h2>

                            <p className="text-gray-400 mt-3">
                                Our support team is ready to guide you through onboarding, setup, and enterprise solutions.
                            </p>

                            <ul className="mt-6 space-y-3 text-gray-300">
                                <li>✔ Fast onboarding support</li>
                                <li>✔ Enterprise-grade assistance</li>
                                <li>✔ CRM integration help</li>
                                <li>✔ 24/7 technical guidance</li>
                            </ul>

                            <div className="mt-8 flex gap-4 flex-wrap">
                                <Link
                                    href="/contact"
                                    className="bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
                                >
                                    Contact Support
                                </Link>

                                <Link
                                    href="/services"
                                    className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
                                >
                                    Explore Services
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="relative min-h-[320px] md:min-h-full">
                            <Image
                                src="/staff2.jpg"
                                alt="Support team"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent" />
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}