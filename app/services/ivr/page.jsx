"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { motion } from "framer-motion";
import { Rubik } from "next/font/google";
import { Inter } from "next/font/google";
// import { Abril_Fatface } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Jost } from "next/font/google";



const rubik = Rubik({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// const abril = Abril_Fatface({
//     subsets: ["latin"],
//     weight: "400",
// });

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const jost = Jost({
    subsets: ["latin"],
});


export default function IVRPage() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
            <Navbar />

            {/* HERO */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-10 px-6 text-center relative ">
                <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-25`}>Interactive Voice Response (IVR)</h1>

            </section>


            {/* IMAGE CARD */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6">
                {/* WRAPPER */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-start gap-8">

                    {/* IMAGE BLOCK */}
                    <motion.div
                        className="mt-11 bg-white rounded-2xl overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.18)] border border-gray-100 w-full md:w-1/2"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        whileHover={{ y: -6 }}
                    >
                        <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-white/40 shadow-inner" />

                        <Image
                            src="/ivrr.jpg"
                            alt="IVR"
                            width={756}
                            height={456}
                            className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] object-cover rounded-xl"
                            priority
                        />
                    </motion.div>

                    {/* CONTENT BLOCK (NOW motion.div) */}
                    <motion.section
                        className="max-w-6xl w-full md:w-1/2 md:mx-0 px-1 sm:px-4 sm:py-11 text-left"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >
                        <h4 className={`${jost.className} text-3xl font-semibold mb-1`}>
                            <strong>Interactive Voice Response (IVR) System Solution: The new way of Transforming  Business Communication</strong>
                        </h4>

                        <p className={`${jost.className} text-gray-600 mb-6 text-md leading-relaxed`}>
                            Interactive Voice Response (IVR) System is designed to cut phone call
                            costs by an impressive 50%, while also strengthening client service
                            and marketing strategies.
                        </p>

                        <h3 className={`${playfair.className} text-3xl font-bold mb-2`}><strong> What is an IVR System?</strong></h3>

                        <p className={`${jost.className} text-lg font-bold text-gray-600 mb-2`}>Auto-Receptionist Service in Nigeria</p>

                        <p className={`${jost.className} text-md text-gray-600 mb-4`}>
                            An IVR system functions as an auto-receptionist, helping to direct
                            callers to specific departments or services using keypad inputs.
                        </p>

                        <ul className={`${jost.className} list-disc ml-5 text-md text-gray-600 mb-6 space-y-1`}>
                            <li>Press 1 for Sales</li>
                            <li>Press 2 for Accounts</li>
                            <li>Press 3 for Technical Support</li>
                        </ul>


                    </motion.section>

                </div>
                <h3 className={`${playfair.className} text-3xl font-semibold mb-4 mt-4`}>
                    <strong>   Key Benefits of WYVERN’s Interactive Voice Response System</strong>
                </h3>
                <div className="space-y-4 text-sm text-gray-900">
                    <p className={`${jost.className}`}>
                        <strong className={`${jost.className} text-xl font-bold mb-2`}>
                            Ease of Management and Enhanced Collaboration
                        </strong>
                        <br />
                        Our IVR system is designed for ease of management, allowing your business to handle multiple calls simultaneously. This capability enhances collaboration within the organization, ensuring smooth and efficient communication across all departments.</p>

                    <p className={`${jost.className}`}>
                        <strong className={`${jost.className} text-xl font-bold mb-2`}>
                            Comprehensive Analytics and Reporting Tools
                        </strong>
                        <br />
                        WYVERN’s IVR provides detailed analytics and reporting tools that offer valuable insights into call volumes, customer behaviors, and system performance. These insights facilitate data-driven decision-making and continuous improvement, ensuring your business remains competitive and efficient.

                        Explore the importance of call analytics.</p>
                    <p className={`${jost.className}`}>
                        <strong className={`${jost.className} text-xl font-bold mb-2`}>
                            Streamlined Business Communication and Marketing Efficiency
                        </strong>
                        <br />
                        By streamlining all business communications, the WYVERN Interactive voice response system enhances marketing and lead management proficiency. This ensures flawless execution of marketing strategies, resulting in higher lead conversion rates and improved business outcomes.

                        Read about lead management best practices.</p>
                    <p className={`${jost.className}`}>
                        <strong className={`${jost.className} text-xl font-bold mb-2`}>
                            Efficient Call Routing and Queuing Capabilities
                        </strong>
                        <br />
                        Our Interactive voice response solution boasts efficient call routing and queuing capabilities, directing calls to the most appropriate agents or departments. This minimizes wait times and optimizes call management, leading to enhanced customer satisfaction.

                        Understand call routing techniques.</p>
                </div>

                <h3 className={`${playfair.className} text-3xl font-bold mb-2 mt-4`}>
                    Why Choose WYVERN’s Interactive Voice Response System Solution?
                </h3>

                <p className={`${inter.className} text-sm text-gray-600 mt-1 mb-2`}>
                    By integrating WYVERN’s advanced IVR system solution, you are investing in a robust tool that reduces costs, improves customer service, and supports comprehensive marketing strategies. Here’s why it stands out:
                </p>

                <ul className={`${inter.className} list-disc ml-5 text-sm text-gray-600 space-y-2`}>
                    <li>Reduce call costs by up to 50%</li>
                    <li>Professional customer experience</li>
                    <li>Improved marketing efficiency</li>
                    <li>Data-driven insights</li>
                </ul>

                <h3 className={`${playfair.className} text-3xl font-bold mb-4 mt-4`}>
                    Experience the Future of Business Communication
                </h3>
                <p className={`${inter.className} text-sm text-gray-600 mt-1 mb-2`}>
                    Transform your business operations with WYVERN’s advanced IVR system solution. Invest in a tool that not only cuts costs but also enhances customer service and supports comprehensive marketing strategies.

                    For more detailed information about our IVR system and other communication solutions. </p>
            </section>



            {/* CTA */}
            <BookSession />

            {/* TESTIMONIAL */}
            <Testimonial />

            <Footer />
        </div>
    );
}