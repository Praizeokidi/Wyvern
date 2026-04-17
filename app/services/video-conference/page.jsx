"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import BookSession from "@/components/Bas";
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



export default function VideoConferencePage() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
            <Navbar />

            {/* TOP META */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 mt-16 sm:mt-20">

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 gap-3">

                    {/* META INFO */}
                    <div className="flex flex-wrap gap-3">
                        <span>👤 Boss</span>
                        <span>📅 November 24, 2023</span>
                        <span>⏰ 8:00 am</span>
                    </div>

                    {/* SOCIAL BUTTONS */}
                    <div className="flex flex-wrap gap-2">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaFacebookF /> Facebook
                        </button>
                        <button className="bg-blue-400 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaTwitter /> Twitter
                        </button>
                    </div>

                </div>

                <h1 className={`${rubik.className} text-2xl sm:text-4xl font-bold text-center mt-6 mb-8`}>
                    Voice and Video Conference Solution
                </h1>

            </section>


            <section className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* WRAPPER */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-start gap-8">

                    {/* IMAGE */}

                    <motion.div
                        className="mt-6 bg-white rounded-2xl overflow-hidden relative shadow-[0_15px_40px_rgba(0,0,0,0.18)] border border-gray-100 w-full md:w-1/2"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        whileHover={{ y: -6 }}
                    >
                        {/* 3D glow outline layer */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-white/40 shadow-inner" />

                        <Image
                            src="/vvc.png"
                            alt="Voice and Video Conference"
                            width={702}
                            height={334}
                            className="w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px] object-cover rounded-xl"
                            priority
                        />
                    </motion.div>


                    {/* CONTENT */}
                    <motion.section
                        className="max-w-4xl w-full md:w-1/2 md:mx-0 px-1 sm:px-4 sm:py-5 text-left"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    >

                        <h1 className={`${playfair.className} text-3xl font-bold mb-4`}>
                            Revolutionize Collaboration with Our Voice and Video Conference Solution
                        </h1>

                        <p className={`${inter.className} text-gray-600 mb-6 text-sm sm:text-base leading-relaxed`}>
                            In today’s interconnected world, effective communication is essential for businesses to thrive. Our cutting-edge voice and video conference solution empowers teams to collaborate seamlessly, regardless of their physical location.
                        </p>

                        <h3 className={`${playfair.className} text-3xl font-bold mb-3`} >
                            Experience Unparalleled Connectivity
                        </h3>

                        <p className={`${inter.className} text-sm text-gray-600 mb-6 leading-relaxed`}>
                            Our platform delivers crystal-clear audio and video, ensuring smooth and productive meetings. Whether you’re collaborating with colleagues across the hall or across the globe, our solution provides a seamless and immersive experience
                        </p>
                    </motion.section>
                </div>

                <h3 className={`${jost.className} text-2xl font-bold mb-3`} >
                    Key Features Of Voice and Video Conference Solution
                </h3>

                <div className={`${inter.className} space-y-4 text-medium`}>
                    <p><strong>HD Video Conferencing:</strong> Enjoy high-definition video quality for face-to-face interactions..</p>
                    <p><strong>Crystal Clear Audio:</strong> Experience exceptional audio clarity for seamless communication.</p>
                    <p><strong>Screen Sharing:</strong> Collaborate effortlessly by sharing presentations, documents, and applications.</p>
                    <p><strong>Interactive Whiteboarding:</strong>Brainstorm and collaborate visually with real-time drawing and annotation tools.</p>
                    <p><strong>Secure Communication:</strong> Protect sensitive information with advanced encryption and security protocols.</p>
                    <p><strong>Cross-Platform Compatibility:</strong> Access meetings from any device, including desktops, laptops, tablets, and smartphones.</p>
                </div>

                <h3 className={`${jost.className} text-3xl font-base mt-8 mb-3 text-blue-500`} >
                    Benefits Of Voice and Video Conference Solution
                </h3>

                <div className="space-y-4 text-medium">
                    <p className={`${inter.className}`}>
                        <strong className={`${jost.className} text-lg`}>Enhanced Collaboration</strong> <br />Facilitate real-time collaboration and idea sharing among team members, ensuring everyone is on the same page and can contribute effectively.
                    </p>
                    <p className={`${inter.className}`}>
                        <strong className={`${jost.className} text-lg`}>Increased Productivity</strong> <br />Reduce travel time and expenses while maintaining productivity. Our voice and video solution allows your team to meet virtually, saving time and resources.
                    </p>
                    <p className={`${inter.className}`}>
                        <strong className={`${jost.className} text-lg`}>Improved Decision Making</strong> <br />Make informed decisions through efficient and effective virtual meetings. Our advanced analytics provide insights into meeting performance and participant engagement.
                    </p>
                    <p className={`${inter.className}`}>
                        <strong className={`${jost.className} text-lg`}>Global Reach</strong> <br />Connect with clients, partners, and remote teams worldwide. Break down geographical barriers and collaborate with anyone, anywhere..
                    </p>
                    <p className={`${inter.className}`}>
                        <strong className={`${jost.className} text-lg`}>Cost Savings</strong> <br />Optimize meeting costs by reducing travel expenses and venue rentals. Our voice and video solution offers a cost-effective way to conduct meetings without compromising on quality.
                    </p>
                </div>

                <h3 className={`${playfair.className} text-3xl font-bold mt-8 mb-3`}>
                    <strong>   How It Works</strong>
                </h3>

                <p className={`${inter.className} mb-6 text-sm sm:text-base leading-relaxed`}>
                    Our user-friendly platform allows you to schedule, join, and host meetings with ease. With just a few clicks, you can invite participants, share content, and record meetings for future reference.
                </p>


                <ol className="list-decimal list-inside space-y-2 text-medium">
                    <li className={`${inter.className}`}><span className="font-bold">Schedule Meetings:</span> Set up meetings effortlessly using our intuitive scheduling tool.</li>
                    <li className={`${inter.className} `}><span className="font-bold">Join Anywhere:</span> Access meetings from any device with a stable internet connection.</li>
                    <li className={`${inter.className} `}><span className="font-bold">Collaborate:</span> Share screens, files, and ideas in real-time during meetings.</li>
                    <li className={`${inter.className} `}><span className="font-bold">Record Sessions:</span> Save important discussions for future reference or review.</li>
                </ol>

                <h3 className={`${playfair.className} text-3xl font-bold mt-8 mb-3`}>
                    <strong>Industries Served</strong>
                </h3>

                <p className={`${inter.className} mb-6 text-sm sm:text-base leading-relaxed`}>
                    Our voice and video conferencing solution is designed to meet the unique needs of various industries, including:
                </p>

                <div className="space-y-4 text-medium">
                    <p className={`${inter.className}`}><strong className={`${jost.className} text-xl`}>Healthcare</strong><br />Enhance patient care with virtual consultations and collaborative medical meetings. Our solution ensures secure and confidential communication between healthcare providers and patients.</p>
                    <p className={`${inter.className}`}><strong className={`${jost.className} text-xl`}>Education</strong><br />Facilitate remote learning and virtual classrooms for students and teachers. Our platform supports interactive learning experiences and real-time engagement.</p>
                    <p className={`${inter.className}`}><strong className={`${jost.className} text-xl`}>Finance</strong><br />Conduct secure and confidential financial meetings and consultations. Our advanced encryption ensures the privacy and security of financial data.</p>
                    <p className={`${inter.className}`}><strong className={`${jost.className} text-xl`}>Retail</strong><br />Coordinate with suppliers, partners, and remote teams to streamline operations. Our solution helps improve supply chain efficiency and enhances customer support.</p>
                    <p className={`${inter.className}`}><strong className={`${jost.className} text-xl`}>Technology</strong><br />Foster innovation and collaboration among tech teams, no matter where they are. Our platform supports brainstorming sessions, project planning, and code reviews.</p>
                </div>

                <h3 className={`${playfair.className} text-3xl font-bold mt-8 mb-3`}>
                    <strong>Ready to Transform Meetings?</strong>
                </h3>

                <p className={`${inter.className} mb-6 text-sm sm:text-base leading-relaxed`}>
                    Experience the future of collaboration with our industry-leading voice and video conferencing solution. Contact us today to schedule a demo and discover how we can elevate your team’s productivity.
                    <br />
                    <br />

                    To learn more about how WYVERN can transform your business communication, visit our website or contact our sales team for a personalized consultation.
                </p>

            </section>

            {/* CTA */}
            <BookSession />

            {/* TESTIMONIAL */}
            <Testimonial />

            <Footer />
        </div >
    );
}