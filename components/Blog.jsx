"use client";

import { Jost } from "next/font/google";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const jost = Jost({ subsets: ["latin"] });

const posts = [
    { id: 1, image: "/hero1.jpg", title: "Experience Seamless Internet Speed" },
    { id: 2, image: "/hero2.jpg", title: "Maximise Your Digital Potential" },
    { id: 3, image: "/hero3.jpg", title: "Stay Connected with Enterprise Ease" },
    { id: 4, image: "/hero4.jpg", title: "Boost Productivity with Smart Tools" },
    { id: 5, image: "/hero5.png", title: "Transform Your Workspace Experience" },
    { id: 6, image: "/hero6.png", title: "Organise Video Conferences Effortlessly" }
];

export default function Blog() {
    return (
        <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto">

                {/* HEADER */}
                <div className="text-center mb-14">

                    <h2 className={`${jost.className} text-4xl md:text-5xl font-bold text-white`}>
                        Insights from the{" "}
                        <span className="text-blue-400">Wyvern Blog</span>
                    </h2>

                    <p className={`${jost.className} mt-4 text-gray-400 max-w-2xl mx-auto`}>
                        Explore industry insights, product updates, and communication strategies powering modern enterprises.
                    </p>

                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-8">

                    {posts.map((post, index) => (
                        <article
                            key={post.id}
                            className={`group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition duration-300 shadow-lg ${index === 0 ? "md:col-span-2 md:row-span-2" : ""
                                }`}
                        >

                            {/* image */}
                            <div className={`relative w-full ${index === 0 ? "h-80" : "h-48"}`}>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />

                                {/* overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                            </div>

                            {/* content */}
                            <div className={`${jost.className}  p-5`}>

                                <p className="text-xs text-gray-400 mb-2">
                                    5 min read • 2026
                                </p>

                                <h3 className="text-white font-semibold text-lg leading-snug group-hover:text-blue-400 transition">
                                    {post.title}
                                </h3>

                                <Link
                                    href="#"
                                    className="mt-4 inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:gap-3 transition"
                                >
                                    Read Article <ArrowRight className="w-4 h-4" />
                                </Link>

                            </div>
                        </article>
                    ))}

                </div>

                {/* CTA SECTION */}
                <div className={`${jost.className}  mt-16 text-center`}>

                    <p className="text-gray-400 mb-6">
                        Want more insights and enterprise communication strategies?
                    </p>

                    <Link href="/">
                        <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition">
                            Explore All Articles
                        </button>
                    </Link>

                </div>

            </div>
        </section>
    );
}