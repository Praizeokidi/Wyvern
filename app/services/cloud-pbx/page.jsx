"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import BookSession from "@/components/Bas";
import Testimonial from "../../../components/Testimonials";
import { Jost } from "next/font/google";



const jost = Jost({
    subsets: ["latin"],
});



export default function CloudPbx() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
            <Navbar />


            {/* HERO */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-10 px-6 text-center relative ">
                <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-25`}>Cloud Hosted PBX</h1>

            </section>


            {/* IMAGE CARD */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-2xl shadow p-4 sm:p-6 flex justify-center">
                    <Image
                        src="/pbx.jpg"
                        alt="cloud pbx"
                        width={1000}
                        height={700}
                        className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto object-contain"
                    />
                </div>
            </section>

            {/* CONTENT */}
            <section className={`${jost.className} max-w-6xl mx-auto px-4 sm:px-6 mt-6 sm:mt-10`}>

                <h2 className={`${jost.className} text-3xl font-bold mb-1`}>
                    Cloud Hosted PBX
                </h2>

                <p className={`${jost.className} font-semibold`}>
                    Transform The Way Your Business Communicates with Our Next-Gen Cloud Hosted PBX.
                </p>

                <p className={`${jost.className} text-gray-600 mb-6 text-sm sm:text-base leading-relaxed`}>
                    In a world where speed and responsiveness define success, your business can’t afford communication gaps. Our advanced Cloud Hosted PBX works like an intelligent command center routing every call to the right person, wherever they are, whether in the office, remote, or on the move. The result? Seamless connectivity, zero missed opportunities, and a more productive, agile team.
                </p>

                <h3 className={`${jost.className} text-xl sm:text-2xl font-bold mb-4`}>
                    Key Benefits of Our Cloud Hosted PBX
                </h3>

                <h4 className={`${jost.className} text-base font-bold mb-1`}>
                    Say Goodbye Server Maintenance Issues.
                </h4>
                <p className={`${jost.className} text-gray-600 mb-5 text-sm leading-relaxed`}>
                    Managing on-premise servers can be complex, time-consuming, and expensive especially for businesses with limited IT support. With our Cloud PBX, you can eliminate those burdens entirely. No more maintenance, no more unexpected costs—just a streamlined, reliable communication system that lets you focus on growing your business.
                </p>

                <h4 className={`${jost.className} text-base font-bold mb-1`}>
                    Elevate Your Brand Presence
                </h4>
                <p className={`${jost.className} text-gray-600 mb-5 text-sm leading-relaxed`}>
                    First impressions can define your business. With our Cloud Hosted PBX, you project a polished, professional image from the very first interaction. Features like intelligent auto-attendants, personalized greetings, and smart call routing ensure every customer experience feels seamless and premium strengthening trust and elevating your brand reputation.
                </p>

                <h4 className={`${jost.className} text-base font-bold mb-1`}>
                    Work Without Boundaries
                </h4>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    Modern business demands flexibility, and your communication system should keep up. Our Cloud PBX empowers your team to stay connected from anywhere—whether in the office, at home, or on the move. With uninterrupted access to your phone system, collaboration becomes effortless and productivity reaches new heights. </p>

                <h4 className="text-base font-bold mb-1">
                    Built for Reliability You Can Trust
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Downtime isn’t an option when communication drives your business. That’s why our Cloud PBX is powered by secure, enterprise-grade data centers with built-in redundancy and failover systems. The result is consistent uptime, dependable performance, and complete peace of mind—so your business never misses a beat.
                </p>

                <h3 className="text-2xl font-semibold mt-8 mb-1 text-blue-500">
                    Transform the Way Your Business Communicates
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Our Cloud Hosted PBX is built for simplicity and control, giving you the power to manage your communication system with ease. Add or remove lines, scale extensions, and adapt instantly—without the usual costs or complexity. Whether you’re a growing startup or an established enterprise, it’s a solution designed to evolve alongside your business.

                    More than just a phone system, it’s a smarter way to connect—flexible, reliable, and ready to meet your changing needs. Step into a new standard of business communication built for today and prepared for tomorrow. </p>

                <h3 className="text-lg sm:text-2xl font-extrabold mt-8 mb-1">
                    Explore Smarter Communication Solutions
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Discover a full suite of advanced communication tools designed to streamline operations and boost productivity. From voice to messaging and beyond, our solutions are engineered to help your business stay connected, responsive, and ahead of the curve.
                    Don’t settle for outdated systems—embrace a modern communication experience that drives efficiency, enhances collaboration, and positions your business for growth.
                </p>
            </section>

            {/* CTA + TESTIMONIAL */}
            <div className="px-4 sm:px-0">
                <BookSession />

            </div>
            <Testimonial />
            <Footer />
        </div>
    );
}