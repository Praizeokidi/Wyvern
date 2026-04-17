"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import { Cairo } from "next/font/google";



const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});


const widgetVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function CustomerStats() {
    return (
        <div className="bg-white mb-16">
            <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 rounded-xl shadow-lg bg-gray-100 mt-10">

                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* LEFT */}
                    <motion.div
                        className="w-full md:w-1/2 text-center md:text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={widgetVariants}
                    >

                        {/* IMAGE INPUT ADDED HERE */}
                        <div className="w-full flex justify-center md:justify-start mb-6">
                            <Image
                                src="/Virtual-Assistant.png"   // replace with your image path
                                alt="Customer Support"
                                width={400}
                                height={250}
                                className="rounded-xl shadow-md w-full max-w-md h-auto object-cover"
                                priority
                            />
                        </div>

                        <p className={`${cairo.className} mt-4 text-gray-700 leading-relaxed`}>
                            WYVERN is a fully licensed telecommunications company regulated by the Nigerian Communications Commission (NCC). We specialize in delivering reliable and affordable voice, data, SMS, and video communication services to individuals and businesses across Nigeria.
                        </p>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        className="w-full md:w-1/2 flex flex-col justify-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={widgetVariants}
                    >
                        {/* STATS GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">

                            <div className="bg-blue-50 p-6 rounded-xl shadow-lg">
                                <CountUp
                                    end={10}
                                    duration={3}
                                    suffix="+"
                                    className="text-4xl font-bold text-blue-600"
                                />
                                <p className="mt-2 text-gray-700">
                                    Years of Experience
                                </p>
                            </div>

                            <div className="bg-green-50 p-6 rounded-xl shadow-lg">
                                <CountUp
                                    end={5000}
                                    duration={3}
                                    separator=","
                                    className="text-4xl font-bold text-green-600"
                                />
                                <p className="mt-2 text-gray-700">
                                    Customers Served
                                </p>
                            </div>

                        </div>

                        <p className={`${cairo.className} text-gray-700 leading-relaxed text-center md:text-left`}>
                            With a strong track record of satisfied clients and years of experience,
                            we’re proud to deliver exceptional service across every interaction.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}