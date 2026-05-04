"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import { Cairo } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Jost } from "next/font/google";



const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});


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
        <div className="bg-slate-950">
            <Navbar />

            {/* Header */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-10 px-6 text-center relative">
                <header className="text-center py-16 px-4 ">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-10`}>Download Center</h1>
                    <p className={`${jost.className} text-lg opacity-90`}>
                        Download WYVERN Softphone and gain access to seamless communication
                    </p>
                    <small className={`${jost.className} text-gray-500 mt-2 text-sm opacity-100`}>
                        Home / Downloads
                    </small>
                </header>

            </section>
            {/* Cards */}
            <section>
                <main className="max-w-5xl -mt-10 mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/10 transition flex flex-col h-full"
                        >
                            <h2 className={`${jost.className} text-xl font-semibold mb-4`}>
                                {card.title}
                            </h2>

                            <ul className={`${jost.className} space-y-2 text-gray-400 mb-6`}>
                                {card.items.map((item, i) => (
                                    <li key={i}>• {item}</li>
                                ))}
                            </ul>

                            <a
                                href="#"
                                className={`${jost.className} font-semibold mt-auto block text-center bg-blue-600 py-2 rounded-lg hover:bg-blue-500 transition`}
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