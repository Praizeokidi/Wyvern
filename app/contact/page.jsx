"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Cairo } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Jost } from "next/font/google";
import { motion } from "framer-motion";

const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                setSuccess(result.error);
                return;
            }

            setSuccess("Message sent successfully!");
            e.target.reset();

        } catch (err) {
            setSuccess("Network error");
        } finally {
            setLoading(false);
        }
    };





    return (
        <div className="w-full bg-slate-950">
            <Navbar />
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-10 text-center relative">
                <header className="text-center py-16 px-4 ">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-10`}>Contact Us</h1>
                    <p className={`${jost.className} text-lg opacity-90`}>
                        Get in touch with us today, by using any of the means below.
                    </p>
                    <small className={`${jost.className} text-gray-500 mt-2 text-sm opacity-100`}>Home / Contact</small>
                </header>
            </section>

            {/* ================= CONTACT INFO ================= */}
            <section className="max-w-6xl mx-auto px-6 py-16 -mt-14 grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="relative">
                    <Image
                        src="/contact-agent.png"
                        alt="Support agent"
                        width={600}
                        height={400}
                        className="rounded-xl object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white text-gray-700 opacity-50 shadow-lg px-4 py-2 rounded-lg text-sm font-semibold">
                        1675+ Trusted Clients
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h2 className={`${jost.className} text-2xl font-bold mb-2`}>Get in Touch With Us</h2>
                    <p className={`${jost.className} text-gray-400 mb-6`}>
                        Connect effortlessly. Reach out and let’s start a conversation. <br />
                        Your satisfaction is our priority.
                    </p>

                    <div className="space-y-4 w-80">
                        {/* Email */}
                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                            <Mail className="text-blue-600" />
                            <div>
                                <p className={`${jost.className} font-semibold text-gray-900`}>Email</p>
                                <p className={`${jost.className} text-sm text-gray-600`}>
                                    wyvernglobalservice@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                            <Phone className="text-blue-600" />
                            <div>
                                <p className={`${jost.className} font-semibold text-gray-900`}>Phone</p>
                                <p className={`${jost.className} text-sm text-gray-600`}>+234 805 551 2395</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                            <MapPin className="text-blue-600" />
                            <div>
                                <p className={`${jost.className} font-semibold text-gray-900`}>Visit us</p>
                                <p className={`${jost.className} text-sm text-gray-600`}>
                                    17 touggourt Street , zone 2, wuse, Abuja, FCT, Nigeria
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp CTA */}
                        <div className={`${jost.className}  p-[1px] rounded-2xl  flex justify-center`}>
                            <a
                                href="https://wa.me/2348055512395"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 border border-emerald-600 bg-slate-950/90 backdrop-blur px-5 py-4 rounded-2xl hover:bg-slate-900 transition group"
                            >
                                {/* Icon */}
                                <div className="bg-green-500 p-3 rounded-full shadow-md group-hover:scale-110 transition">
                                    <FaWhatsapp className="text-white" size={20} />
                                </div>

                                {/* Text */}
                                <div className="leading-tight">
                                    <p className="text-xs text-gray-400">Chat with us</p>
                                    <p className="text-sm font-semibold text-white">
                                        WhatsApp Support
                                    </p>
                                </div>
                            </a>
                        </div>

                    </div>



                </div>
            </section>

            {/* ================= CONTACT FORM ================= */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-stretch">
                    {/* Form */}
                    <div className="flex flex-col justify-between h-full">
                        <h2 className={`${jost.className} text-3xl font-bold mb-3 text-gray-800`}>
                            How Can We Help Your Business To Grow?
                        </h2>
                        <p className={`${jost.className} text-lg text-gray-600 mb-6`}>
                            Explore tailored solutions for business growth. Our expertise is
                            your advantage—strategize, innovate, and thrive.
                        </p>

                        {success && (
                            <p className="text-green-600 mb-4">
                                {success}
                            </p>
                        )}

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 text-gray-700 flex flex-col h-full">
                            <input
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className={`${jost.className} w-full border p-3 rounded-lg`}
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className={`${jost.className} w-full border p-3 rounded-lg`}
                            />

                            <textarea
                                name="message"
                                placeholder="Message"
                                rows={4}
                                className={`${jost.className} w-full border p-3 rounded-lg`}
                            />

                            <motion.button
                                type="submit"
                                disabled={loading}
                                className="bg-gradient-to-r from-blue-900 to-blue-500 font-semibold text-white px-6 py-3 rounded-lg w-full"
                            >
                                {loading ? "Sending..." : "Send Message"}
                            </motion.button>
                        </form>
                    </div>

                    {/* Image */}
                    <div>
                        <Image
                            src="/contact-agent-2.png"
                            alt="Team working"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>
            </section >

            <Footer />
        </div >
    );
}