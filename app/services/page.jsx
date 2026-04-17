// app/services/page.jsx
'use client';

import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PhoneCall, Headphones, Globe, Server, Users, MessageCircle } from "lucide-react";





const services = [
    {
        title: "Interactive Voice Response (IVR)",
        desc: "WYVERN IVR system solution is designed to cut the cost of phone calls to and from your company...",
        icon: PhoneCall,
        link: "/services/ivr",
    },
    {
        title: "Voice and Video Conference Solution",
        desc: "WYVERN voice and video conferencing solution enables seamless communications, collaboration...",
        icon: MessageCircle,
        link: "/services/video-conference",
    },
    {
        title: "Cloud Hosted PBX",
        desc: "With our Cloud PBX which serves as a smart assistant to your business...",
        icon: Server,
        link: "/services/cloud-pbx",
    },
    {
        title: "SIP Trunking",
        desc: "Our system allows you to make and receive phone calls over the internet...",
        icon: Headphones,
        link: "/services/sip-trunking",

    },
    {
        title: "Contact Center Solution",
        desc: "Elevate your customer support and engagement...",
        icon: Users,
        link: "/services/contact-center",
    },
    {
        title: "Closed User Group",
        desc: "Connect freely within your group with WYVERN CUG line...",
        icon: Globe,
        link: "/services/cug",

    },
];

export default function ServicesPage() {
    return (
        <div className="bg-slate-950">
            {/* <div className="bg-gray-50"> */}
            <Navbar />
            {/* HERO */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-20 px-6 text-center relative ">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-25">Services</h1>
                <p className="text-lg opacity-90">Explore our comprehensive services</p>
                <p className="mt-2 text-sm opacity-70">Home / Services</p>
            </section>

            {/* SERVICES GRID */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-300 mb-4">Services We Offer</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        We’re committed to ensure your voice is heard and provide you time-saving, cost-effective voice solutions.
                    </p>
                </div>



                {/* Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition flex flex-col items-start"
                        >
                            {/* Icon / Image */}
                            <div className="mb-4">
                                <service.icon className="text-red-500 w-12 h-12" />
                            </div>

                            {/* Title */}
                            <h4 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h4>

                            {/* Description */}
                            <p className="text-gray-500 text-sm mb-4">{service.desc}</p>

                            {/* Read More Button */}
                            <Link
                                href={service.link}
                                className="mt-auto inline-flex items-center text-blue-600 text-sm font-medium hover:underline"
                            >
                                Read More
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="currentColor"
                                    viewBox="0 0 448 512"
                                >
                                    <path d="M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* BOOK SESSION */}
            <section className="bg-white py-16 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                        <div>
                            <h2 className="text-3xl font-semibold mb-2 text-gray-800">Book A Session with Us</h2>
                            <p className="text-gray-500 max-w-lg">
                                Book your session effortlessly on our website. Elevate your experience with seamless online scheduling.
                            </p>
                        </div>
                        <button className="mt-6 md:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg">
                            Book Now!
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                            <h3 className="font-semibold mb-2 text-gray-600">Experienced & Qualified Staff</h3>
                            <p className="text-sm text-gray-500">
                                Exceptional service guaranteed with our experienced and qualified staff.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                            <h3 className="font-semibold mb-2 text-gray-600">24/7 Customer Support</h3>
                            <p className="text-sm text-gray-500">
                                Round-the-clock assistance ensuring satisfaction and reliability.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                            <h3 className="font-semibold mb-2 text-gray-600">Multilingual Call Center</h3>
                            <p className="text-sm text-gray-500">
                                Global reach with fluent communication across multiple languages.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLIENT REVIEWS */}
            <section className="bg-gray-100 py-16 px-6 text-center">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">Our Clients Reviews</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                    Discover satisfaction through our clients reviews. Real stories, real experiences.
                </p>

                <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className="text-gray-600 text-sm">
                                Amazing service and support. Highly recommended!
                            </p>
                            <h4 className="mt-4 font-semibold text-gray-800">Client {item}</h4>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />

        </div>
    );
}
