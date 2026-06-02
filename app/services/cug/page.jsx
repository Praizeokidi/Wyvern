"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { Jost, Playfair_Display, Cairo } from "next/font/google";



const jost = Jost({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });
const cairo = Cairo({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function ClosedUserGroupPage() {




    return (
        <div className="bg-slate-950 text-white overflow-x-hidden">
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden py-28 md:py-36">

                <div className="absolute inset-0 bg-[url('/cug.jpg')] bg-cover bg-center opacity-15" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT TEXT */}
                    <div>

                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
                            Enterprise Communication Network
                        </div>

                        <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold leading-tight`}>
                            Closed User Group <br />
                            <span className="text-blue-400">Secure Business Communication</span>
                        </h1>

                        <p className={`${cairo.className} text-gray-300 mt-6 text-lg leading-relaxed`}>
                            A private communication ecosystem designed to keep your teams connected,
                            secure, and cost-efficient across all business operations.
                        </p>

                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">

                        <div className="relative w-full max-w-[420px]">

                            <div className="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-full" />

                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

                                <Image
                                    src="/cug.jpg"
                                    alt="CUG"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-6xl mx-auto px-6 py-24">

                <div className="space-y-16">

                    {/* BLOCK 1 */}
                    <div>
                        <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold`}>
                            What is WYVERN CUG?
                        </h2>

                        <p className={`${cairo.className} text-gray-300 mt-4 leading-relaxed`}>
                            WYVERN Closed User Group (CUG) is a secure private network
                            that allows organizations to communicate internally at lower cost,
                            higher speed, and improved security.
                        </p>
                    </div>

                    {/* BLOCK 2 */}
                    <div className="grid md:grid-cols-2 gap-8">

                        {[
                            "Boost productivity through instant internal communication",
                            "Reduce operational communication costs significantly",
                            "Enhance security with private network isolation",
                            "Enable mobility for remote and field teams",
                            "Scale effortlessly as your organization grows",
                            "Improve coordination across departments",
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                                <p className="text-gray-300">{item}</p>
                            </div>
                        ))}

                    </div>

                    {/* BLOCK 3 */}
                    <div>
                        <h3 className={`${jost.className} text-2xl font-semibold`}>
                            Built for Every Industry
                        </h3>

                        <p className="text-gray-400 mt-3">
                            From healthcare to finance and logistics, WYVERN CUG adapts
                            to enterprise communication needs across sectors.
                        </p>
                    </div>

                </div>

            </section>

            {/* ================= CTA SECTION ================= */}
            <section className="relative py-24 px-6 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-black" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,white,transparent_60%)]" />

                <div className="relative max-w-4xl mx-auto text-center">

                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold`}>
                        Ready to transform your internal communication?
                    </h2>

                    <p className="text-gray-300 mt-6">
                        Deploy WYVERN CUG and experience secure, scalable, and cost-efficient business communication.
                    </p>

                    <div className="mt-10">
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition"
                        >
                            Get Started
                        </a>
                    </div>

                </div>

            </section>

            <div className="bg-slate-950">
                <BookSession />
            </div>

            <Testimonial />
            <Footer />
        </div>
    );
}