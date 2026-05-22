"use client";

import Image from "next/image";
import { useState } from "react";
import { Jost, Cairo, Playfair_Display, Kaushan_Script } from "next/font/google";
import { Quote, ArrowRight } from "lucide-react";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const kaushan = Kaushan_Script({
    subsets: ["latin"],
    weight: ["400"],
});

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechCorp",
        text: "This service transformed our communication completely!",
    },
    {
        name: "Sarah Lee",
        role: "Manager, BizGroup",
        text: "Reliable, scalable and super easy to use.",
    },
    {
        name: "Michelle Smith",
        role: "CTO, InnovateX",
        text: "Highly recommend for any growing business.",
    },
    {
        name: "Daniel Scott",
        role: "CTO, InnovateX",
        text: "Great performance and amazing support.",
    },
    {
        name: "Angela White",
        role: "Founder, StartUpX",
        text: "Our customer experience improved instantly.",
    },
    {
        name: "Chris Brown",
        role: "Director, BizWorld",
        text: "Scalable and very easy to integrate.",
    },
];

export default function Testimonial() {
    const [index, setIndex] = useState(0);

    return (
        <section className="relative py-28 px-6 bg-slate-950 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            {/* world map overlay */}
            <div className="absolute inset-0 bg-[url('/world-map.png')] bg-center bg-no-repeat opacity-10" />

            <div className="relative max-w-7xl mx-auto text-center">

                {/* HEADER */}
                <p className={`${kaushan.className} text-blue-400 text-sm mb-2`}>
                    Global Trust Network
                </p>

                <h2 className={`${jost.className} text-4xl md:text-5xl font-bold text-white`}>
                    Loved by{" "}
                    <span className="text-blue-400">Teams Worldwide</span>
                </h2>

                <p className={`${jost.className} mt-4 text-gray-400 max-w-2xl mx-auto`}>
                    Real feedback from organizations using Wyvern to power their communication infrastructure.
                </p>

                {/* MAIN LAYOUT */}
                <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">

                    {/* ================= AVATARS ================= */}
                    <div className="relative h-[320px]">

                        {/* floating avatars */}
                        {testimonials.map((t, i) => (
                            <Image
                                key={i}
                                src={`/avatar${(i % 6) + 1}.jpg`}
                                alt={t.name}
                                width={80}
                                height={80}
                                onClick={() => setIndex(i)}
                                className={`absolute rounded-full cursor-pointer object-cover border-2 border-white/20 shadow-lg hover:scale-110 transition duration-300
                ${i === 0
                                        ? "top-0 left-10 w-20 h-20"
                                        : i === 1
                                            ? "top-1/3 left-0 w-16 h-16"
                                            : i === 2
                                                ? "bottom-0 left-16 w-24 h-24"
                                                : i === 3
                                                    ? "top-0 right-10 w-20 h-20"
                                                    : i === 4
                                                        ? "top-1/2 right-0 w-16 h-16"
                                                        : "bottom-0 right-16 w-24 h-24"
                                    }`}
                            />
                        ))}

                    </div>

                    {/* ================= TESTIMONIAL CARD ================= */}
                    <div className="relative">

                        {/* glow behind card */}
                        <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-2xl" />

                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-10 text-left shadow-2xl">

                            <Quote className="text-blue-400 w-8 h-8 mb-6" />

                            <p className={`${cairo.className} text-gray-200 text-lg leading-relaxed`}>
                                “{testimonials[index].text}”
                            </p>

                            <div className="mt-6">
                                <h4 className="text-white font-semibold">
                                    {testimonials[index].name}
                                </h4>
                                <p className="text-gray-400 text-sm">
                                    {testimonials[index].role}
                                </p>
                            </div>

                            {/* mini navigation */}
                            <div className="flex gap-2 mt-6">
                                {testimonials.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setIndex(i)}
                                        className={`w-2.5 h-2.5 rounded-full transition ${i === index ? "bg-blue-400" : "bg-white/20"
                                            }`}
                                    />
                                ))}
                            </div>

                        </div>

                    </div>
                </div>

                {/* CTA SECTION */}
                <div className={`${jost.className}  mt-20`}>

                    <p className="text-gray-400 mb-6">
                        Want to experience the same results for your business?
                    </p>

                    <Link href="/contact">
                        <button className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition">
                            Get Started Today
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>

                </div>

            </div>
        </section>
    );
}