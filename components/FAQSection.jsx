"use client";
import { useState } from "react";
import { Jost } from "next/font/google";






const jost = Jost({
    subsets: ["latin"],
});


const faqs = [
    "Can I use the WYVERN line to call outside Nigeria?",
    "Why do I need to bring ID before using VoIP?",
    "Can I use WYVERN for my business?",
    "How can I get a new WYVERN line?",
    "How can I manage my calls?",
    "How long does it take to activate?",
];

export function FAQSection() {
    const [open, setOpen] = useState(null);

    return (
        <section className="bg-gray-100 py-16 px-6">
            <h2 className={`${jost.className} text-center text-2xl text-blue-700 font-bold mb-8`}>
                Frequently Asked Questions
            </h2>

            <div className={`${jost.className} max-w-4xl mx-auto grid md:grid-cols-2 gap-4`}>
                {faqs.map((q, i) => (
                    <div
                        key={i}
                        className="bg-white p-4 rounded shadow cursor-pointer"
                        onClick={() => setOpen(open === i ? null : i)}
                    >
                        <div className="flex justify-between text-gray-700">
                            <span>{q}</span>
                            <span>+</span>
                        </div>

                        {open === i && (
                            <p className="text-sm text-gray-700 mt-2">
                                Sample answer goes here...
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}