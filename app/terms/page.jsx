"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function TermsOfService() {
    return (
        <main className="bg-slate-950 text-white">

            <Navbar />

            {/* HERO */}
            <section className="relative py-24 text-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-3xl mx-auto px-6">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold`}>
                        Terms of Service
                    </h1>

                    <p className="mt-4 text-gray-400">
                        Please read these terms carefully before using WYVERN services.
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        Home / Terms of Service
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className={`${jost.className} max-w-5xl mx-auto px-6 py-16 space-y-12`}>

                {/* INTRO */}
                <div>
                    <h2 className="text-2xl font-bold">Introduction</h2>
                    <p className="text-gray-400 mt-3 leading-relaxed">
                        Welcome to WYVERN Africa Limited. By accessing or using our telecommunications
                        services—including voice, SMS, SIP trunking, and cloud communication solutions—
                        you agree to be bound by these Terms of Service. If you do not agree, please discontinue use.
                    </p>
                </div>

                {/* SERVICES */}
                <div>
                    <h2 className="text-2xl font-bold">Our Services</h2>
                    <p className="text-gray-400 mt-3 mb-4">
                        WYVERN provides enterprise-grade communication solutions:
                    </p>

                    <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                        <li>SIP trunking and direct inward dialing numbers</li>
                        <li>Cloud-hosted PBX systems</li>
                        <li>Voice and video conferencing solutions</li>
                        <li>Interactive Voice Response (IVR) systems</li>
                    </ol>
                </div>

                {/* USER RESPONSIBILITIES */}
                <div>
                    <h2 className="text-2xl font-bold">User Responsibilities</h2>

                    <ol className="list-decimal pl-6 space-y-2 mt-3 text-gray-300">
                        <li>Provide accurate and complete account information</li>
                        <li>Use services only for lawful purposes</li>
                        <li>Avoid fraudulent or harmful activities</li>
                        <li>Maintain confidentiality of account credentials</li>
                    </ol>
                </div>

                {/* BILLING */}
                <div>
                    <h2 className="text-2xl font-bold">Payments & Billing</h2>
                    <p className="text-gray-400 mt-3 leading-relaxed">
                        All services may be subject to applicable fees. You agree to pay all charges
                        associated with your use of WYVERN services. Failure to pay may result in suspension or termination.
                    </p>
                </div>

                {/* LIABILITY */}
                <div>
                    <h2 className="text-2xl font-bold">Limitation of Liability</h2>
                    <p className="text-gray-400 mt-3 leading-relaxed">
                        WYVERN shall not be liable for any indirect, incidental, or consequential damages,
                        including loss of data, business interruption, or loss of profits arising from service use.
                    </p>
                </div>

                {/* TERMINATION */}
                <div>
                    <h2 className="text-2xl font-bold">Termination</h2>
                    <p className="text-gray-400 mt-3 leading-relaxed">
                        We may suspend or terminate access at any time if terms are violated or if usage
                        harms our platform or users.
                    </p>
                </div>

                {/* CHANGES */}
                <div>
                    <h2 className="text-2xl font-bold">Changes to Terms</h2>
                    <p className="text-gray-400 mt-3 leading-relaxed">
                        We may update these Terms periodically. Continued use after changes implies acceptance.
                    </p>
                </div>

            </section>

            {/* PREMIUM CTA SECTION */}
            <section className={`${jost.className} py-20 bg-slate-950`}>
                <div className="max-w-5xl mx-auto px-6">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center">

                        <h2 className="text-3xl md:text-4xl font-bold">
                            Need clarification?
                        </h2>

                        <p className="text-gray-400 mt-3">
                            Our legal and support team is available to help you understand how WYVERN services operate.
                        </p>

                        <div className="mt-8 flex justify-center gap-4 flex-wrap">

                            <Link
                                href="/contact"
                                className="bg-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
                            >
                                Contact Support
                            </Link>

                            <a
                                href="mailto:wyvernglobalservice@gmail.com"
                                className="border border-white/20 px-6 py-3 rounded-xl hover:bg-white/10 transition"
                            >
                                Email Legal Team
                            </a>

                        </div>

                        <p className="text-gray-500 text-sm mt-6">
                            Last updated: May 2026
                        </p>

                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}