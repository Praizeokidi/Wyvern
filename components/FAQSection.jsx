"use client";
import { useState } from "react";
import { Jost } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";





const jost = Jost({
    subsets: ["latin"],
});


const faqs = [
    {
        q: "Can I use the WYVERN line to call outside Nigeria?",
        a: "Yes, you can use the WYVERN line to make international calls. However, please note that international calling rates may apply. For more information on rates and supported countries, please contact our customer support."
    },
    {
        q: "Why do I need to bring ID before using VoIP?",
        a: "WYVERN is an NCC licensed telecommunication company and as such one of the requirements to own a Phone Line in Nigeria is to provide a means of identification."
    },
    {
        q: "Can I use WYVERN for my business?",
        a: "Yes,  you can use the WYVERN line for your business as service offerings are tailored to support businesses. "
    },
    {
        q: "How can I get a new WYVERN line?",
        a: "Kindly click on the get your WYVERN line button on the home page, fill the required fields and a WYVERN line will be assigned to you."
    },
    {
        q: "How can I manage my calls?",
        a: "With WYVERN Business line, you can receive concurrent calls on your business line with other features such as call transfers, call conferencing, call forwarding e.t.c"
    },
    {
        q: "How long does it take to activate?",
        a: "Not long at all! All you have to do is download our app on Playstore or IOS and follow the instructions to signup and be assigned a number which can be used via data connection on your phone."
    }
];

export function FAQSection() {
    const [open, setOpen] = useState(null);

    return (
        <section className="bg-gray-100 py-16 px-6">
            <h2 className={`${jost.className} text-center text-2xl text-blue-900 font-bold mb-8`}>
                Frequently Asked Questions
            </h2>

            <div className={`${jost.className} max-w-4xl mx-auto grid md:grid-cols-2 gap-4`}>
                {faqs.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white p-4 rounded shadow cursor-pointer"
                        onClick={() => setOpen(open === i ? null : i)}
                    >
                        <div className="flex justify-between text-gray-700 items-center">

                            {/* QUESTION */}
                            <span className="font-medium">
                                {item.q}
                            </span>

                            {/* TOGGLE ICON */}
                            <span className="text-blue-600 text-xl">
                                {open === i ? "−" : "+"}
                            </span>
                        </div>

                        {/* ANSWER */}
                        <AnimatePresence>
                            {open === i && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="text-sm text-gray-700 mt-3 overflow-hidden"
                                >
                                    {item.a}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </section>
    );
}