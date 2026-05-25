"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Jost, Cairo } from "next/font/google";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function PrivacyPolicy() {
    return (
        <main className="bg-slate-950 text-white">

            <Navbar />

            {/* HERO */}
            <section className={`${jost.className} relative py-24 text-center overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-3xl mx-auto px-6">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold`}>
                        Privacy & Cookie Policy
                    </h1>

                    <p className="mt-4 text-gray-400">
                        We are committed to protecting your data, transparency, and user trust.
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        Home / Privacy Policy
                    </p>
                </div>
            </section>

            {/* CONTENT */}
            <section className={`${jost.className} max-w-5xl mx-auto px-6 py-16 space-y-10`}>

                {/* INTRO */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur">
                    <h2 className={`${jost.className} text-2xl font-bold mb-4`}>
                        Introduction
                    </h2>

                    <p className={`${jost.className} text-gray-300 leading-relaxed`}>
                        WYVERN complies with GDPR and global data protection standards to ensure your personal data is handled responsibly, securely, and transparently. We only collect necessary information to provide and improve our services, enhance user experience, and maintain system security.
                        <br /><br />
                        This policy explains how we collect, use, and protect your information when you interact with our platform.
                    </p>
                </div>

                {/* SECTION CARD */}
                <PolicyCard title="Information We Collect">
                    We collect data in three ways: server logs, cookies, and information you provide directly through forms or account creation.
                </PolicyCard>

                <PolicyCard title="Web Server Logs">
                    When you use our platform, we automatically collect technical data such as IP address, browser type, device information, access time, and usage patterns to improve system performance and security.
                </PolicyCard>

                <PolicyCard title="Cookies Policy">
                    We use cookies to enhance functionality, analyze traffic, and personalize your experience. You can disable cookies, but some features may not function properly.
                    <ul className="list-disc pl-6 mt-3 space-y-1 text-gray-300">
                        <li>Essential cookies for site functionality</li>
                        <li>Analytics cookies for performance insights</li>
                        <li>Advertising cookies for relevant content</li>
                    </ul>
                </PolicyCard>

                <PolicyCard title="Information You Provide">
                    When you register or contact us, we may collect your name, email, and usage information to deliver support, updates, and services.
                </PolicyCard>

                <PolicyCard title="Security & Data Protection">
                    Your data is stored in secure environments with strict access controls. We do not sell or misuse personal data. Information is only shared when legally required or with trusted service providers under strict confidentiality agreements.
                </PolicyCard>

                <PolicyCard title="Data Sharing & Compliance">
                    We may disclose information only when required by law, court order, or regulatory authority. Any third-party access is strictly limited and controlled.
                </PolicyCard>

                <PolicyCard title="Your Rights">
                    You have the right to access, update, or request deletion of your personal data at any time by contacting our support team.
                </PolicyCard>

                <PolicyCard title="Policy Updates">
                    We may update this policy periodically. Changes will be communicated clearly on this page.
                </PolicyCard>

            </section>

            {/* CTA SECTION */}
            <section className={`${jost.className} py-24 bg-gradient-to-b from-slate-950 to-slate-900`}>
                <div className="max-w-5xl mx-auto px-6">

                    <div className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center backdrop-blur">

                        <h2 className={`${jost.className} text-3xl md:text-4xl font-bold`}>
                            Your privacy matters to us
                        </h2>

                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                            If you have any concerns about your data, our team is available to help you understand or manage your privacy settings.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-4">

                            <Link
                                href="/contact"
                                className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
                            >
                                Contact Support
                            </Link>

                            <Link
                                href="mailto:wyvernglobalservice@gmail.com"
                                className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition"
                            >
                                Email Privacy Team
                            </Link>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

/* ===== Reusable Component ===== */
function PolicyCard({ title, children }) {
    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur hover:bg-white/10 transition">
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <div className="text-gray-300 leading-relaxed">{children}</div>
        </div>
    );
}