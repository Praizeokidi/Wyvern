"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Jost } from "next/font/google";




const jost = Jost({
    subsets: ["latin"],
});

export default function ContactCenterPage() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">

            <Navbar />

            {/* HERO */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-15 px-6 text-center relative ">
                <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-25`}>Contact Center Solution</h1>

            </section>

            {/* ================= HEADER ================= */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-3 mt-1">

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
            <section className={`${jost.className} max-w-6xl mx-auto px-4 sm:px-6 pb-10 mt-6 sm:mt-10`}>

                <h2 className="text-3xl font-semibold mb-4">
                    Contact Center Solution
                </h2>

                <h3 className="text-blue-600 text-2xl sm:text-4xl font-semibold mb-1">
                    Transform Customer Engagement with a Smarter Contact Center Solution
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    In today’s fast-moving and highly competitive market, customer experience is no longer optional—it’s a key differentiator. Our advanced contact center solution equips your business with the tools to deliver seamless, memorable interactions that build trust, increase satisfaction, and accelerate growth.
                </p>

                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    Redefining Customer Engagement
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    Our all-in-one contact center platform is built to elevate every interaction. Whether your customers reach out via phone, email, live chat, or social media, you’ll have a unified system that keeps conversations consistent, efficient, and personalized—across every touchpoint.  </p>

                <h4 className="font-semibold text-base sm:text-lg mb-2">
                    Powerful Features Designed for Performance
                </h4>

                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6 text-sm sm:text-base">
                    <li><strong>Omnichannel Capabilities:</strong> Engage customers effortlessly across multiple channels while maintaining a consistent brand experience.
                    </li>
                    <li><strong>Intelligent IVR (Interactive Voice Response):</strong> Route calls with precision and offer self-service options that reduce wait times and improve efficiency
                    </li>
                    <li><strong>CRM & System Integration (CTI):</strong> Connect your tools and data for a smarter workflow, enabling agents to respond faster and more effectively.
                    </li>
                    <li><strong>Call Recording & Quality Assurance:</strong> Track performance, maintain service standards, and continuously improve customer interactions.
                    </li>
                    <li><strong>Advanced Analytics & Insights:</strong> Unlock actionable data to better understand customer behavior and refine your strategy.
                    </li>
                    <li><strong>Predictive Dialing:</strong> Boost outbound campaign success with optimized dialing that increases connection rates and conversions.
                    </li>
                </ul>

                {/* BENEFITS */}
                <h3 className="text-2xl font-semibold mb-3">
                    Why Businesses Choose Our Solution?
                </h3>

                <div className="space-y-4 text-sm sm:text-base text-gray-600">

                    <p>
                        <strong>Elevated Customer Satisfaction:</strong> Deliver fast, personalized, and effective support that keeps customers coming back.
                    </p>

                    <p>
                        <strong>Greater Operational Efficiency:</strong> Reduce response times, streamline workflows, and maximize team performance.
                    </p>

                    <p>
                        <strong>Empowered Agents:</strong> Provide your team with intuitive tools that enhance productivity and job satisfaction.
                    </p>

                    <p>
                        <strong>Smarter Decision-Making:</strong> Turn real-time data into strategic insights that drive better business outco
                    </p>

                    <p>
                        <strong>Built to Scale:</strong> Whether you are a growing startup or an established enterprise, our solution adapts to your needs as you expand.
                    </p>
                </div>

                {/* PARTNER SECTION */}
                <h3 className="font-semibold text-xl sm:text-2xl mt-8 mb-3">
                    Partner with Us Let’s Build Better Customer Experiences Together
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    When you choose our contact center solution, you’re not just upgrading your communication system—you’re investing in long-term customer loyalty and business success. Our team works closely with you to tailor the platform to your exact requirements, ensuring you get maximum value from day one.   <br /><br />
                    <strong>Ready to transform your customer experience?</strong>
                    <br /> Get in touch today to book a demo and discover how our solution can take your business to the next level.
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