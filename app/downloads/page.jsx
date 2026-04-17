"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export default function DownloadsPage() {
    const cards = [
        {
            title: "Desktop Users",
            items: [
                "For PC/Laptops only",
                "Premium Support",
                "Soft Phone",
                "Free",
            ],
        },
        {
            title: "WYVERN-Subscriber for Android Users",
            items: [
                "For Subscribers only",
                "Basic Phone Accessories",
                "Dedicated Swiftel Line",
                "Premium Support",
                "Video Conferencing",
                "Free",
            ],
        },
        {
            title: "WYVERN-Enterprise for Android Users",
            items: [
                "For Enterprise only",
                "Basic Phone Accessories",
                "Dedicated Swiftel Line",
                "Premium Support",
                "Video Conferencing",
                "Free",
            ],
        },
    ];

    return (
        <div className="bg-slate-950 text-white min-h-screen">
            <Navbar />

            {/* Header */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950">
                <header className="text-center py-16 px-4 ">
                    <h1 className="text-4xl font-bold mb-4 mt-40">Download Center</h1>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Download WYVERN Softphone and gain access to seamless communication
                    </p>
                    <small className="text-gray-500 block mt-2">
                        Home / Downloads
                    </small>
                </header>

            </section>
            {/* Cards */}
            <section>
                <main className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition"
                        >
                            <h2 className="text-xl font-semibold mb-4">
                                {card.title}
                            </h2>

                            <ul className="space-y-2 text-gray-400 mb-6">
                                {card.items.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>

                            <a
                                href="#"
                                className="block text-center bg-blue-600 py-2 rounded-lg hover:bg-blue-500 transition"
                            >
                                Download →
                            </a>
                        </div>
                    ))}
                </main>
            </section>



            <Footer />
        </div>
    );
}