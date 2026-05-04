"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";



export default function ContactCenterPage() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">

            <Navbar />

            {/* ================= HEADER ================= */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 mt-16 sm:mt-20">

                {/* META */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 gap-3">

                    {/* <div className="flex flex-wrap gap-3">
                        <span>👤 Boss</span>
                        <span>📅 November 24, 2023</span>
                        <span>⏰ 8:00 am</span>
                    </div> */}

                    <div className="flex gap-2 flex-wrap">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaFacebookF /> Facebook
                        </button>
                        <button className="bg-blue-400 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaTwitter /> Twitter
                        </button>
                    </div>
                </div>

                {/* TITLE */}
                <h1 className="text-2xl sm:text-4xl font-bold text-center mt-8 sm:mt-12 mb-8">
                    Contact Center Solution
                </h1>

                {/* IMAGE */}
                <motion.div
                    className="mt-6 bg-white rounded-2xl overflow-hidden relative
               shadow-[0_20px_50px_rgba(0,0,0,0.25)]
               border border-gray-100"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    whileHover={{ y: -6 }}
                >
                    {/* 3D glow outline layer */}
                    <div className="absolute inset-0 rounded-2xl pointer-events-none 
                    ring-1 ring-white/40 shadow-inner" />

                    <Image
                        src="/call-center.png"
                        alt="Contact Center"
                        width={700}
                        height={300}
                        className="w-full h-auto object-cover"
                        priority

                    />
                </motion.div>

            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-10 mt-6 sm:mt-10">

                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                    Contact Center Solution
                </h2>

                <h3 className="text-blue-600 text-2xl sm:text-4xl font-semibold mb-4">
                    Elevate Your Customer Experience with Our Contact Center Solution
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    In today’s competitive business landscape, delivering exceptional
                    customer experiences is paramount...
                </p>

                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    Transforming Customer Interactions
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    Our platform offers tools to enhance every customer touchpoint...
                </p>

                <h4 className="font-semibold text-base sm:text-lg mb-2">
                    Key Features
                </h4>

                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6 text-sm sm:text-base">
                    <li>Omnichannel Support</li>
                    <li>Interactive Voice Response (IVR)</li>
                    <li>Computer Telephony Integration (CTI)</li>
                    <li>Call Recording and Quality Management</li>
                    <li>Advanced Analytics</li>
                    <li>Predictive Dialer</li>
                </ul>

                {/* BENEFITS */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                    Benefits of Our Contact Center Solution
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-gray-600">

                    <p>
                        <strong>Improved Customer Satisfaction:</strong> Deliver personalized and efficient resolutions...
                    </p>

                    <p>
                        <strong>Increased Operational Efficiency:</strong> Streamline processes and reduce handling times...
                    </p>

                    <p>
                        <strong>Enhanced Agent Productivity:</strong> Equip agents with the tools they need...
                    </p>

                    <p>
                        <strong>Data-Driven Decision Making:</strong> Leverage advanced analytics for insights...
                    </p>

                    <p>
                        <strong>Scalability:</strong> Our solution grows with your business needs...
                    </p>
                </div>

                {/* PARTNER SECTION */}
                <h3 className="font-semibold text-xl sm:text-2xl mt-8 mb-3">
                    Partner with Us
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    By choosing our contact center solution, you’re investing in a powerful tool...
                    <br /><br />
                    Ready to elevate your customer experience? Contact us today...
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