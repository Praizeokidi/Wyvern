"use client";

import Image from "next/image";
import { useState } from "react";
import { Rubik } from "next/font/google";
import { Kaushan_Script } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Jost } from "next/font/google";
import { Cairo } from "next/font/google";



const rubik = Rubik({ subsets: ["latin"] });

const kaushan = Kaushan_Script({
    subsets: ["latin"],
    weight: ["400"],
});

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});

const jost = Jost({ subsets: ["latin"] });

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
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
    const [index, setIndex] = useState(null);

    return (
        <section className="relative py-20 px-6 text-center bg-gray-100 overflow-hidden min-h-[500px]">

            {/* ================= WORLD MAP BACKGROUND ================= */}
            <div className="absolute inset-0 bg-[url('/world-map.png')] bg-no-repeat bg-center bg-cover scale-x-[1.4] scale-y-[1.1] opacity-100"></div>

            {/* ================= FLOATING AVATARS ================= */}
            <div className="absolute inset-0">
                {/* LEFT SIDE */}
                <Image
                    src="/avatar1.jpg"
                    alt=""
                    width={90}
                    height={90}
                    onClick={() => setIndex(0)}
                    className="cursor-pointer rounded-full absolute top-10 left-10 
          w-20 h-20 object-cover shadow-lg hover:scale-110 transition duration-300"
                />

                <Image
                    src="/avatar2.jpg"
                    alt=""
                    width={90}
                    height={90}
                    onClick={() => setIndex(1)}
                    className="cursor-pointer rounded-full absolute top-1/2 left-6 -translate-y-1/2 
          w-16 h-16 object-cover shadow-lg hover:scale-110 transition duration-300"
                />

                <Image
                    src="/avatar3.jpg"
                    alt=""
                    width={90}
                    height={90}
                    onClick={() => setIndex(2)}
                    className="cursor-pointer rounded-full absolute bottom-10 left-20 
          w-24 h-24 object-cover shadow-lg hover:scale-110 transition duration-300"
                />

                {/* RIGHT SIDE */}
                <Image
                    src="/avatar4.jpg"
                    alt=""
                    width={90}
                    height={90}
                    onClick={() => setIndex(3)}
                    className="cursor-pointer rounded-full absolute top-10 right-10 
          w-20 h-20 object-cover shadow-lg hover:scale-110 transition duration-300"
                />

                <Image
                    src="/avatar5.jpg"
                    alt=""
                    width={90}
                    height={90}
                    onClick={() => setIndex(4)}
                    className="cursor-pointer rounded-full absolute top-1/2 right-6 -translate-y-1/2 
          w-16 h-16 object-cover shadow-lg hover:scale-110 transition duration-300"
                />

                <Image
                    src="/avatar6.jpg"
                    alt=""
                    width={90}
                    height={90}
                    onClick={() => setIndex(5)}
                    className="cursor-pointer rounded-full absolute bottom-16 right-16 
          w-24 h-24 object-cover shadow-lg hover:scale-110 transition duration-300"
                />
            </div>

            {/* ================= CONTENT ================= */}
            <div className="relative z-10 max-w-xl mx-auto">
                <p className={`${kaushan.className} text-blue-600 text-sm mb-2`}>
                    Testimonials ❤️
                </p>

                <h2 className={`${jost.className} text-3xl text-gray-900 font-bold mb-10`}>
                    Happy Clients Say
                </h2>

                {/* ================= TESTIMONIAL CARD ================= */}
                {index !== null && (
                    <div className="bg-white rounded-xl shadow-xl p-6 transition-all duration-500 animate-fadeIn">
                        <p className={`${cairo.className} text-gray-700 italic mb-4`}>
                            &quot;{testimonials[index].text}&quot;
                        </p>

                        <h4 className={`${jost.className} font-semibold text-gray-700`}>
                            {testimonials[index].name}
                        </h4>

                        <p className={`${cairo.className} text-sm text-gray-600`}>
                            {testimonials[index].role}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}