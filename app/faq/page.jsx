'use client';


import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Cairo } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Jost } from "next/font/google";
import { FaChevronRight } from "react-icons/fa";


const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});



const faqsLeft = [
    {
        q: "Why do I need Identification and Utility Bill?",
        a: "WYVERN is an NCC licensed telecom company, and ID verification is required to activate a phone line in Nigeria.",
    },
    {
        q: "How can I get a new WYVERN line?",
        a: "Click the Get Your Line button, fill the form, and a free WYVERN line will be assigned to you.",
    },
    {
        q: "You say WYVERN lines are simless, how then do I use the line?",
        a: "Download the WYVERN app on Play Store or iOS, sign up, and use your number via internet connection.",
    },
    {
        q: "Can I use WYVERN Line for voice broadcast?",
        a: "Yes, WYVERN supports broadcast services for campaigns and announcements.",
    },

];

const faqsRight = [

    {
        q: "Can a WYVERN Line be used for business?",
        a: "Yes, WYVERN is optimized for business communication and enterprise use.",
    },
    {
        q: "How do I manage many customer calls?",
        a: "Use WYVERN Business features like call forwarding, conferencing, and multi-line handling.",
    },
    {
        q: "Can call centers use WYVERN Line?",
        a: "Yes. WYVERN supports call monitoring, recording, barging, and reporting for call centers.",
    },

];




const moreFaqsRight = [
    {
        q: "What makes WYVERN Line business-ready?",
        a: "Features include call analytics, routing, recording, and enterprise scalability.",
    },
    {
        q: "Can WYVERN Line be integrate with CRM?",
        a: "Yes, WYVERN can be integrated with most CRM systems.",
    },
    {
        q: "Can I use the WYVERN Line to call outside Nigeria and within Nigeria?",
        a: "Yes. You can make both local and international calls at the same rate.",
    },
];

function FAQItem({ item }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden hover:-translate-y-1">
            {/* HEADER */}
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex justify-between items-center text-left px-5 py-4"
            >
                <span className="font-medium text-gray-800 text-[15px] md:text-base">
                    {item.q}
                </span>

                <span
                    className={`text-gray-500 transition-transform duration-300 ${open ? "rotate-90" : "rotate-0"
                        }`}
                >
                    <FaChevronRight />
                </span>
            </button>

            {/* CONTENT */}
            <motion.div
                initial={false}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                    {item.a}
                </div>
            </motion.div>

        </div>
    );
}

export default function FAQPage() {
    return (
        <div className="bg-gray-50 text-gray-800">
            <Navbar />
            {/* HERO */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950  text-white py-8 px-6 text-center">
                <header className="text-center py-16 px-4 ">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-10`}>FAQS</h1>
                    <p className={`${jost.className} text-lg opacity-90`}>
                        Find answers to commonly asked questions.
                    </p>
                    <small className={`${jost.className} text-gray-500 mt-2 text-sm opacity-100`}>Home / FAQs</small>

                </header>
            </section>

            {/* MAIN FAQ SECTION */}
            <section className={`${jost.className} max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10`}>

                {/* LEFT COLUMN */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-1 "
                >
                    <Image
                        src="/faq4.jpg"
                        alt="Support agent"
                        width={600}
                        height={400}
                        className="rounded-xl object-cover mb-37"
                    />
                    <div className="space-y-4 text-2xl">
                        {faqsRight.map((item, i) => (
                            <FAQItem key={i} item={item} />
                        ))}
                    </div>
                </motion.div>


                {/* RIGHT COLUMN (STACKED) */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-22 "
                >

                    {/* TOP RIGHT */}
                    <div className="">
                        <h2 className="text-4xl font-bold mb-2">
                            Informative Frequently Asked Question
                        </h2>
                        <p className="text-gray-600 text-lg mb-4">
                            Find answers to commonly asked questions.
                        </p>
                        <div className="space-y-4 text-xl">
                            {faqsLeft.map((item, i) => (
                                <FAQItem key={i} item={item} />
                            ))}
                        </div>
                    </div>

                    {/* 🔥 BOTTOM RIGHT (your “last column”) */}
                    <div className="space-y-4 text-xl ">
                        {moreFaqsRight.map((item, i) => (
                            <FAQItem key={i} item={item} />
                        ))}
                    </div>

                </motion.div>

            </section>




            {/* CTA SECTION */}
            <section className={`${jost.className} py-20 bg-gray-50`}>
                <div className="max-w-6xl mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 grid md:grid-cols-2"
                    >

                        {/* LEFT CONTENT */}
                        <div className="p-10 flex flex-col justify-center">

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                                Why you should <br /> choose us
                            </h2>

                            <ul className="mt-6 space-y-4 text-gray-700">
                                <li className="flex gap-2 items-start">
                                    <span className="text-green-500">✔</span>
                                    <span className="font-medium">Easy On-Boarding Process</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-green-500">✔</span>
                                    <span className="font-medium">SIMLESS Network</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-green-500">✔</span>
                                    <span className="font-medium">No Downtime</span>
                                </li>
                                <li className="flex gap-2 items-start">
                                    <span className="text-green-500">✔</span>
                                    <span className="font-medium">Cheaper Call Rates</span>
                                </li>
                            </ul>

                            {/* BUTTONS */}
                            <div className="mt-8 flex gap-4 flex-wrap">
                                <Link
                                    href="/contact"
                                    className="bg-[#0F2A74] text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                                >
                                    Our Pricing →
                                </Link>

                                <Link
                                    href="/services"
                                    className="border border-[#0F2A74] text-[#0F2A74] px-6 py-3 rounded-lg font-semibold hover:bg-[#0F2A74] hover:text-white transition"
                                >
                                    Services
                                </Link>
                            </div>

                        </div>

                        {/* RIGHT IMAGE (INSIDE SAME CARD) */}
                        <div className="relative min-h-[320px] md:min-h-full">
                            <Image
                                src="/staff2.jpg" // replace with your image
                                alt="CTA visual"
                                fill
                                className="object-cover"
                            />

                            {/* subtle overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent" />
                        </div>

                    </motion.div>

                </div>
            </section>
            <Footer />
        </div>
    );
}