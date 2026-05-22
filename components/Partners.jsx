"use client";

import Image from "next/image";
import Link from "next/link";
import { Jost } from "next/font/google";

// logos
import logo1 from "@/public/logo1.jpg";
import logo2 from "@/public/logo2.jpg";
import logo3 from "@/public/logo3.jpg";
import logo4 from "@/public/logo4.jpg";
import logo5 from "@/public/logo5.jpg";

const jost = Jost({ subsets: ["latin"] });

export default function Partners() {
    const logos = [logo1, logo2, logo3, logo4, logo5];

    return (
        <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto text-center">

                {/* HEADER */}
                <h2 className={`${jost.className} text-4xl md:text-5xl font-bold text-white`}>
                    Trusted by{" "}
                    <span className="text-blue-400">Global Partners</span>
                </h2>

                <p className={`${jost.className} mt-4 text-lg text-gray-400 max-w-2xl mx-auto`}>
                    We collaborate with organizations and technology partners driving innovation, reliability, and global communication infrastructure.
                </p>

                {/* LOGO GRID */}
                <div className="mt-14 relative">

                    {/* soft glow behind logos */}
                    <div className="absolute inset-0 blur-3xl opacity-30 bg-blue-500/20 rounded-3xl" />

                    <div className="relative bg-white rounded-2xl p-10 shadow-xl border border-gray-200">

                        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14">

                            {logos.map((logo, i) => (
                                <div
                                    key={i}
                                    className="relative w-36 h-20 flex items-center justify-center opacity-80 hover:opacity-100 transition duration-300"
                                >
                                    <Image
                                        src={logo}
                                        alt={`Partner ${i + 1}`}
                                        fill
                                        className="object-contain transition hover:scale-105 duration-300"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>
                </div>

                {/* CTA SECTION */}
                <div className="mt-16 flex flex-col items-center">

                    <p className={`${jost.className} text-gray-400 mb-6 max-w-xl`}>
                        Want to become a strategic partner or integrate with Wyvern’s communication infrastructure?
                    </p>

                    <div className="flex gap-4 flex-wrap justify-center">

                        <Link href="/contact">
                            <button className={`${jost.className} px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition`}>
                                Become a Partner
                            </button>
                        </Link>

                        <Link href="/services">
                            <button className={`${jost.className} px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition`}>
                                Explore Solutions
                            </button>
                        </Link>

                    </div>
                </div>

            </div>
        </section>
    );
}