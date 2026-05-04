'use client';
import { Jost } from "next/font/google";
import Image from "next/image";

const posts = [
    { id: 1, image: "/hero1.jpg", title: "Experience Seemless Internet Speed" },
    { id: 2, image: "/hero2.jpg", title: "Maximise Your Potential" },
    { id: 3, image: "/hero3.jpg", title: "Stay Connected with Ease" },
    { id: 4, image: "/hero4.jpg", title: "Boost Your Productivity with Our Tools" },
    { id: 5, image: "/hero5.png", title: "Transform Your Workspace" },
    { id: 6, image: "/hero6.png", title: "Organise Video Conferences Effortlessly" }
];

const jost = Jost({
    subsets: ["latin"],
});

export default function Blog() {
    return (
        <section className="bg-gradient-to-b from-blue-800 to-slate-950 text-white py-11 px-6">
            <div className="max-w-6xl mx-auto">

                <h2 className={`${jost.className} text-center text-3xl font-bold mb-10`}>
                    WYVERN Blog
                </h2>

                <div className={`${jost.className} grid md:grid-cols-3 gap-6`}>

                    {/* ✅ FIXED: now using posts array */}
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-slate-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <div className="relative h-40 w-full">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-4">
                                <h3 className="text-sm font-semibold mb-2">
                                    {post.title}
                                </h3>
                                <p className="text-xs text-gray-400">
                                    5 min read • 2026
                                </p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}