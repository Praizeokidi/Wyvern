"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import BookSession from "@/components/Bas";
import Testimonial from "../../../components/Testimonials";

export default function CloudPbx() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
            <Navbar />

            {/* TOP META */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 mt-16 sm:mt-20">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 gap-3">

                    {/* LEFT META */}
                    <div className="flex flex-wrap gap-3">
                        <span>👤 Boss</span>
                        <span>📅 November 24, 2023</span>
                        <span>⏰ 8:00 am</span>
                    </div>

                    {/* SOCIAL BUTTONS */}
                    <div className="flex gap-2 flex-wrap">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaFacebookF /> Facebook
                        </button>
                        <button className="bg-blue-400 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaTwitter /> Twitter
                        </button>
                    </div>
                </div>

                <h1 className="text-2xl sm:text-4xl font-bold text-center mt-6 mb-8 sm:mb-10">
                    Cloud Hosted PBX
                </h1>
            </section>

            {/* IMAGE CARD */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-2xl shadow p-4 sm:p-6 flex justify-center">
                    <Image
                        src="/ivr.png"
                        alt="IVR"
                        width={256}
                        height={256}
                        className="w-40 sm:w-64 h-auto object-contain"
                    />
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 mt-6 sm:mt-10">

                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                    Cloud Hosted PBX
                </h2>

                <p className="font-semibold">
                    Revolutionize Your Business Communication with Our Cloud Hosted PBX
                </p>

                <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                    In today’s fast-paced business environment, maintaining seamless communication is crucial for success...
                </p>

                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                    Key Benefits of Our Cloud Hosted PBX
                </h3>

                <h4 className="text-base font-bold mb-2">
                    Eliminate Server Maintenance Hassles
                </h4>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    Maintaining on-premises servers can be both challenging and costly...
                </p>

                <h4 className="text-base font-bold mb-2">
                    Enhance Your Professional Image
                </h4>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    First impressions matter. Our Cloud Hosted PBX allows small businesses...
                </p>

                <h4 className="text-base font-bold mb-2">
                    Remote Work Flexibility
                </h4>
                <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    Employees can access the phone system from anywhere with internet...
                </p>

                <h4 className="text-base font-bold mb-2">
                    High Reliability and Uptime
                </h4>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Our Cloud PBX is hosted in secure data centers with redundancy...
                </p>

                <h3 className="text-lg sm:text-xl font-semibold mt-8 mb-3 text-blue-500">
                    How Our Cloud Hosted PBX Transforms Communication
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    Our Cloud PBX solutions are designed for easy management...
                </p>

                <h3 className="text-lg sm:text-2xl font-extrabold mt-8 mb-3">
                    Learn More About Our Communication Solutions
                </h3>

                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    For more detailed information about our PBX and other solutions...
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