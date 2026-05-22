"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Cairo, Playfair_Display, Jost } from "next/font/google";
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

export default function ContactPage() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        const formData = new FormData(e.target);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                setSuccess(result.error);
                return;
            }

            setSuccess("Your message has been received. Our team will respond shortly.");
            e.target.reset();
        } catch {
            setSuccess("Network error. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full bg-slate-950 text-white">
            <Navbar />

            {/* ================= HERO ================= */}
            <section className={`${jost.className} relative py-28 text-center overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-3xl mx-auto px-6">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold`}>
                        Contact <span className="text-blue-400">Our Team</span>
                    </h1>

                    <p className="mt-4 text-gray-400">
                        We’re here to help you build, scale, and optimize your communication infrastructure.
                    </p>

                    <p className="mt-2 text-sm text-gray-500">
                        Home / Contact
                    </p>
                </div>
            </section>

            {/* ================= CONTACT INFO ================= */}
            <section className={`${jost.className} max-w-6xl mx-auto px-6 py-16 -mt-16 grid md:grid-cols-2 gap-12 items-center`}>

                {/* IMAGE */}
                <div className="relative">
                    <Image
                        src="/contact-agent.png"
                        alt="Support agent"
                        width={600}
                        height={400}
                        className="rounded-2xl shadow-2xl"
                    />

                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur border border-white/10 text-white px-4 py-2 rounded-xl text-sm">
                        1675+ Trusted Clients
                    </div>
                </div>

                {/* INFO */}
                <div>
                    <h2 className={`${jost.className} text-2xl font-bold`}>
                        Get in Touch With Us
                    </h2>

                    <p className="text-gray-400 mt-2 mb-8">
                        Let’s start a conversation that drives real business growth.
                    </p>

                    <div className="space-y-4">

                        {/* EMAIL */}
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                            <Mail className="text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Email</p>
                                <p className="text-white text-sm">wyvernglobalservice@gmail.com</p>
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                            <Phone className="text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Phone</p>
                                <p className="text-white text-sm">+234 805 551 2395</p>
                            </div>
                        </div>

                        {/* ADDRESS */}
                        <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-xl">
                            <MapPin className="text-blue-400" />
                            <div>
                                <p className="text-sm text-gray-400">Office</p>
                                <p className="text-white text-sm">
                                    17 Touggourt Street, Zone 2, Wuse, Abuja
                                </p>
                            </div>
                        </div>

                        {/* WHATSAPP CTA */}
                        <a
                            href="https://wa.me/2348055512395"
                            target="_blank"
                            className="flex items-center gap-4 mt-6 bg-gradient-to-r from-green-500/20 to-green-600/10 border border-green-500/30 p-4 rounded-xl hover:scale-[1.02] transition"
                        >
                            <div className="bg-green-500 p-3 rounded-full">
                                <FaWhatsapp className="text-white" />
                            </div>

                            <div>
                                <p className="text-sm text-gray-400">Instant Support</p>
                                <p className="text-white font-semibold">Chat on WhatsApp</p>
                            </div>

                            <ArrowRight className="ml-auto text-green-400" />
                        </a>

                    </div>
                </div>
            </section>

            {/* ================= CONTACT FORM ================= */}
            <section className={`${jost.className}  relative py-20`}>
                <div className="absolute inset-0 bg-slate-900" />

                <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-stretch">

                    {/* ================= FORM CARD ================= */}
                    <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl space-y-6">

                        {/* HEADER INSIDE FORM (REQUESTED CHANGE) */}
                        <div>
                            <h2 className={`${jost.className} text-3xl font-bold`}>
                                Let’s Build Something{" "}
                                <span className="text-blue-400">Powerful</span>
                            </h2>

                            <p className="text-gray-400 mt-3">
                                Share your needs and our team will design a tailored solution for your business.
                            </p>
                        </div>

                        {/* SUCCESS MESSAGE */}
                        {success && (
                            <div className="bg-green-500/10 border border-green-500/30 text-green-400 p-3 rounded-xl">
                                {success}
                            </div>
                        )}

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white"
                            />

                            <input
                                name="email"
                                placeholder="Email Address"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white"
                            />

                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Your Message"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:shadow-lg transition"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </button>

                        </form>
                    </div>

                    {/* ================= RIGHT IMAGE (MOVED HERE) ================= */}
                    <div className="relative flex items-stretch">

                        <Image
                            src="/contact-agent-2.png"
                            alt="Team working"
                            width={600}
                            height={400}
                            className="rounded-2xl shadow-2xl object-cover w-full h-full"
                        />

                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
}