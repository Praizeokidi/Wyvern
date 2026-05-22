"use client";

import { useState } from "react";
import { Jost } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ArrowRight } from "lucide-react";

const jost = Jost({ subsets: ["latin"] });

const faqs = [
    {
        q: "Can I use the WYVERN line internationally?",
        a: "Yes. WYVERN supports international calling, subject to applicable global telecom rates and destination coverage."
    },
    {
        q: "Why is ID required for activation?",
        a: "As a licensed NCC telecommunications provider, identity verification is required to comply with regulatory standards in Nigeria."
    },
    {
        q: "Can WYVERN be used for business operations?",
        a: "Absolutely. WYVERN is built for both individuals and enterprise communication workflows with scalable business features."
    },
    {
        q: "How do I get a WYVERN line?",
        a: "Simply request a line via our onboarding system, complete the required form, and your number will be activated instantly."
    },
    {
        q: "What call features are available?",
        a: "Call forwarding, conferencing, transfers, voicemail, and multi-device synchronization are supported."
    },
    {
        q: "How fast is activation?",
        a: "Activation is typically instant after signup via our mobile or web onboarding system."
    }
];

export function FAQSection() {
    const [open, setOpen] = useState(null);

    return (
        <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-14">
                    <h2 className={`${jost.className} text-4xl md:text-5xl font-bold text-white`}>
                        Frequently Asked{" "}
                        <span className="text-blue-400">Questions</span>
                    </h2>

                    <p className={`${jost.className} mt-4 text-gray-400 max-w-2xl mx-auto`}>
                        Everything you need to know about Wyvern’s communication platform, onboarding, and enterprise features.
                    </p>
                </div>

                {/* GRID (KEPT 2-COLUMN STRUCTURE) */}
                <div className={`${jost.className} grid md:grid-cols-2 gap-6`}>

                    {faqs.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur cursor-pointer hover:bg-white/10 transition"
                            onClick={() => setOpen(open === i ? null : i)}
                        >

                            {/* question row */}
                            <div className="flex items-start justify-between gap-4">

                                <div className="flex items-start gap-3">
                                    <HelpCircle className="text-blue-400 w-5 h-5 mt-1" />
                                    <span className="text-white font-medium leading-relaxed">
                                        {item.q}
                                    </span>
                                </div>

                                <span className="text-blue-400 text-xl font-light">
                                    {open === i ? "−" : "+"}
                                </span>
                            </div>

                            {/* answer */}
                            <AnimatePresence>
                                {open === i && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="text-sm text-gray-400 mt-4 leading-relaxed overflow-hidden"
                                    >
                                        {item.a}
                                    </motion.p>
                                )}
                            </AnimatePresence>

                        </motion.div>
                    ))}

                </div>

                {/* CTA SECTION */}
                <div className="mt-16 text-center">

                    <p className={`${jost.className} text-gray-400 mb-6`}>
                        Still have questions? Our team is ready to help you get started.
                    </p>

                    <a
                        href="/contact"
                        className={`${jost.className} inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition`}
                    >
                        Contact Support <ArrowRight className="w-4 h-4" />
                    </a>

                </div>

            </div>
        </section>
    );
}