// app/services/page.jsx
'use client';
import { Jost } from "next/font/google";
import Testimonial from "@/components/Testimonials";
import Link from "next/link";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PhoneCall, Headphones, Globe, Server, Users, MessageCircle } from "lucide-react";
import { Cairo } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { motion } from "framer-motion";

const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});


const gridContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.2,
        },
    },
};

const gridItem = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};


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
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-10 px-6 text-center relative ">
                <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-25`}>Services We Offer</h1>
                <p className={`${jost.className} text-lg opacity-90`}>Explore our comprehensive services, We’re committed to ensure your voice is heard and
                    <br /> provide you time-saving, cost-effective voice solutions.
                </p>
                <p className={`${jost.className}  text-gray-500 mt-2 text-sm opacity-100`}>Home / Services</p>
            </section>

            {/* SERVICES GRID */}
            <section className="max-w-6xl mx-auto py-16 px-6">
                {/* Section Header */}
                {/* <div className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-300 mb-4">Services We Offer</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                    </p>
                </div> */}



                {/* Grid */}
                <div className="-mt-5 grid md:grid-cols-3 gap-8">
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
                            <h4 className={`${jost.className} text-lg font-semibold mb-2 text-gray-800`}>{service.title}</h4>

                            {/* Description */}
                            <p className={`${cairo.className} text-gray-500 text-sm mb-4`}>{service.desc}</p>

                            {/* Read More Button */}
                            <Link
                                href={service.link}
                                className={`${jost.className} mt-auto inline-flex items-center text-blue-600 text-sm font-medium hover:underline`}
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
                            <h2 className={`${playfair.className} text-4xl font-bold mb-2 text-gray-800`}> <strong> Book A Session with Us</strong></h2>
                            <p className={`${cairo.className} text-gray-500 text-xl max-w-lg`}>
                                Book your session effortlessly on our website. Elevate your experience with seamless online scheduling.
                            </p>
                        </div>
                        <button className={`${cairo.className} mt-6 md:mt-0 bg-blue-600 text-lg font-bold text-white px-6 py-3 rounded-lg`}>
                            Book Now!
                        </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                            <h3 className={`${jost.className} font-semibold mb-2 text-2xl text-gray-700`}>Experienced & Qualified Staff</h3>
                            <p className={`${jost.className} text-md text-gray-500`}>
                                Exceptional service guaranteed with our experienced and qualified staff. With expertise and professionalism
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                            <h3 className={`${jost.className} font-semibold mb-2 text-2xl text-gray-700`}>24/7 Customer <br /> Support</h3>
                            <p className={`${jost.className} text-md text-gray-500`}>
                                Your business thrives with round-the-clock assistance, ensuring satisfaction and reliability at every hour.   </p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                            <h3 className={`${jost.className} font-semibold mb-2 text-2xl text-gray-700`}>Multilingual Call <br /> Center</h3>
                            <p className={`${jost.className} text-md text-gray-500`}>
                                Global reach, local touch. Fluent communication assured with our multilingual service
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CLIENT REVIEWS */}
            <Testimonial />
            {/* <section className="bg-gray-100 py-8 px-6 text-center">
                <h2 className={`${jost.className} text-3xl font-semibold mb-4 text-gray-900`}>Our Clients Reviews</h2>
                <p className={`${jost.className} text-gray-500 max-w-2xl mx-auto`}>
                    Discover satisfaction through our clients reviews. Real stories, real experiences.
                </p>

                <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white p-6 rounded-2xl shadow-sm">
                            <p className={`${jost.className} text-gray-600 text-sm`}>
                                Amazing service and support. Highly recommended!
                            </p>
                            <h4 className={`${jost.className} mt-4 font-semibold text-gray-800`}>Client {item}</h4>
                        </div>
                    ))}
                </div>
            </section> */}
            <Footer />

        </div>
    );
}
