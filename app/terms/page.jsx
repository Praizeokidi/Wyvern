'use client';

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import { Cairo } from "next/font/google";





const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({ subsets: ["latin"] });

const jost = Jost({
    subsets: ["latin"],
});

export default function TermsOfService() {
    return (
        <main className="bg-gray-50 text-gray-800">
            <Navbar />

            {/* HERO */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-8 px-6 text-center">
                <header className="text-center py-16 px-4 ">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-10`}>
                        Terms of Service
                    </h1>
                    <p className={`${jost.className} text-lg opacity-90`}>
                        Please read these terms carefully before using our services
                    </p>
                    <p className={`${jost.className} mt-2 text-sm opacity-70`}>
                        Home / Terms of Service
                    </p>
                </header>
            </section>

            {/* CONTENT */}
            <section className="max-w-6xl mx-auto px-6 py-12 space-y-8">


                <section className="mb-1">

                    {/* INTRO */}
                    <h2 className={`${jost.className} text-3xl text-gray-900 font-bold`}>
                        Introduction
                    </h2>
                    <p className={`${jost.className} text-gray-600 mb-4 text-base leading-relaxed`}>
                        Welcome to WYVERN Africa Limited. By accessing or using our telecommunications
                        services, including voice, SMS, SIP trunking, and cloud communication solutions,
                        you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
                    </p>
                </section>
                {/* SERVICES */}
                <h2 className={`${jost.className} text-2xl text-gray-800 font-bold mb-2`}>
                    Our Services
                </h2>
                <p className={`${jost.className} text-gray-600 mb-2`}>
                    WYVERN provides communication solutions designed for individuals and businesses.
                    These include:
                </p>

                <ol className=" list-decimal list-outside pl-6 space-y-1 marker:font-semibold">
                    <li className={`${jost.className} text-gray-600 leading-snug`}>
                        SIP trunking and direct inward dialing numbers
                    </li>
                    <li className={`${jost.className} text-gray-600 leading-snug`}>
                        Cloud-hosted PBX systems
                    </li>
                    <li className={`${jost.className} text-gray-600 leading-snug`}>
                        Voice and video conferencing solutions
                    </li>
                    <li className={`${jost.className} text-gray-600 leading-snug`}>
                        Interactive Voice Response (IVR) systems
                    </li>
                </ol>

                {/* USER RESPONSIBILITIES */}
                <h2 className={`${jost.className} text-2xl text-gray-800 font-bold -mt-4 mb-1`}>
                    User Responsibilities
                </h2>
                <p className={`${jost.className} text-gray-600 mb-2 leading-relaxed`}>
                    By using our services, you agree to:
                </p>

                <ol className={`${jost.className} list-decimal list-outside pl-6 space-y-1`}>
                    <li className=" text-gray-600 leading-snug">
                        Provide accurate and complete information when registering
                    </li>
                    <li className=" text-gray-600 leading-snug">
                        Use the service only for lawful purposes
                    </li>
                    <li className=" text-gray-600 leading-snug">
                        Not engage in fraudulent, abusive, or harmful activities
                    </li>
                    <li className=" text-gray-600 leading-snug">
                        Maintain the confidentiality of your account details
                    </li>
                </ol>

                {/* PAYMENTS */}
                <h2 className={`${jost.className} text-gray-800 text-2xl -mt-4 font-bold mb-1`}>
                    Payments & Billing
                </h2>
                <p className={`${jost.className} text-gray-600 mb-2 leading-relaxed`}>
                    All services may be subject to applicable fees. You agree to pay all charges
                    associated with your use of WYVERN services. Failure to make payments may
                    result in suspension or termination of your service.
                </p>

                {/* LIMITATION */}
                <h2 className={`${jost.className} text-gray-800 text-2xl font-bold mt-4 mb-1`}>
                    Limitation of Liability
                </h2>
                <p className={`${jost.className} text-gray-600 mb-4 leading-relaxed`}>
                    WYVERN shall not be liable for any indirect, incidental, or consequential damages,
                    including loss of data, business interruption, or loss of profits arising from the use
                    or inability to use our services.
                </p>

                {/* TERMINATION */}
                <h2 className={`${jost.className} text-gray-800 text-2xl font-bold mt-4 mb-1`}>
                    Termination
                </h2>
                <p className={`${jost.className} text-gray-600 mb-4 leading-relaxed`}>
                    We reserve the right to suspend or terminate your access to our services at any time
                    if you violate these terms or engage in activities that harm our platform or users.
                </p>

                {/* CHANGES */}
                <h2 className={`${jost.className} text-gray-800 text-2xl font-bold mt-4 mb-1`}>
                    Changes to Terms
                </h2>
                <p className={`${jost.className} text-gray-600 mb-6 leading-relaxed`}>
                    WYVERN may update these Terms of Service from time to time. Continued use of our
                    services after changes constitutes acceptance of the updated terms.
                </p>

                {/* CONTACT */}
                <h2 className={`${jost.className} text-gray-800 text-2xl font-bold mt-8 mb-1`}>
                    Contact Us
                </h2>
                <p className={`${jost.className} text-gray-600`}>
                    If you have any questions about these Terms, please contact us at:
                </p>

                <p className={`${jost.className} text-gray-700 -mt-7`}>
                    Email:
                    <a
                        href="mailto:wyvernglobalservice@gmail.com"
                        className="text-blue-600 hover:underline ml-1"
                    >
                        wyvernglobalservice@gmail.com
                    </a>
                </p>
                <p className={`${jost.className} text-gray-700 -mt-7 -mb-7`}>
                    Phone:
                    <a href="tel:+2348055512395" className="text-blue-600 hover:underline ml-1">
                        +234 805 551 2395
                    </a>
                </p>



            </section>

            <Footer />
        </main>
    );
}