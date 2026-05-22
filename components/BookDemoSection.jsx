"use client";

import { useState } from "react";
import { Jost, Cairo } from "next/font/google";
import { Mail, Phone } from "lucide-react";




const jost = Jost({ subsets: ["latin"] });
const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function BookDemoSection() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(false);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        try {
            const res = await fetch("/api/book-demo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) throw new Error("Request failed");

            setSuccess(true);
            e.target.reset();
        } catch (err) {
            alert("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative bg-slate-950 py-28 px-6 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* ================= LEFT ================= */}
                <div className="space-y-6">

                    <h2 className={`${jost.className} text-4xl md:text-5xl font-bold text-white leading-tight`}>
                        Book a{" "}
                        <span className="text-blue-400">Live Demo</span>{" "}
                        with Our Experts
                    </h2>

                    <p className={`${jost.className} text-gray-400 text-lg leading-relaxed`}>
                        See how Wyvern powers enterprise communication systems with
                        reliability, scalability, and real-time efficiency.
                    </p>

                    {/* trust bullets */}
                    <div className={`${jost.className} space-y-3 text-gray-300 text-sm`}>

                        <p>✔ Personalized walkthrough tailored to your business</p>
                        <p>✔ Live system demonstration with real use cases</p>
                        <p>✔ No commitment — just clarity on how it works</p>

                    </div>

                    {/* contact block */}
                    <div className={`${jost.className} mt-6 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur`}>


                        <div className="flex items-center gap-3 text-gray-300">
                            <Mail className="w-4 h-4 text-blue-400" />
                            <span>wyvernglobalservice@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-300">
                            <Phone className="w-4 h-4 text-blue-400" />
                            <span>+234 805 551 2395</span>
                        </div>



                    </div>
                </div>

                {/* ================= RIGHT FORM ================= */}
                <div className="relative">

                    {/* glow behind form */}
                    <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-2xl" />

                    <div className={`${jost.className} relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl`}>

                        <h3 className={`${cairo.className} text-2xl font-bold text-white mb-6`}>
                            Schedule Your Demo
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <input
                                name="name"
                                required
                                placeholder="Full Name"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white outline-none focus:border-blue-500"
                            />

                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Email Address"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white outline-none focus:border-blue-500"
                            />

                            <input
                                name="company"
                                placeholder="Company Name"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white outline-none focus:border-blue-500"
                            />

                            <input
                                name="phone"
                                placeholder="Phone Number"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white outline-none focus:border-blue-500"
                            />

                            <input
                                name="date"
                                type="date"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white outline-none focus:border-blue-500"
                            />

                            <textarea
                                name="message"
                                placeholder="What would you like to see in the demo?"
                                rows="4"
                                className="w-full p-3 rounded-lg bg-slate-900 border border-white/10 text-white outline-none focus:border-blue-500"
                            />

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition py-3 rounded-lg font-semibold text-white shadow-lg"
                            >
                                {loading ? "Scheduling..." : "Book Demo"}
                            </button>

                            {success && (
                                <div className="mt-3 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm">
                                    ✔ Your demo request has been received. Our team will contact you shortly.
                                </div>
                            )}

                        </form>

                    </div>
                </div>

            </div>
        </section>
    );
}