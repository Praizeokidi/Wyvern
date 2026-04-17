import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full bg-slate-950">
            <Navbar />
            {/* ================= HERO ================= */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-20 text-center relative">
                <h1 className="text-4xl font-bold mb-3 mt-25">Contact Us</h1>
                <p className="text-lg opacity-90">
                    Get in touch with us today, by using any of the means below.
                </p>
                <p className="mt-4 text-sm opacity-80">Home / Contact</p>
            </section>

            {/* ================= CONTACT INFO ================= */}
            <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
                {/* Image */}
                <div className="relative">
                    <Image
                        src="/contact-agent.jpg"
                        alt="Support agent"
                        width={600}
                        height={400}
                        className="rounded-xl object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white shadow-lg px-4 py-2 rounded-lg text-sm font-semibold">
                        1675+ Trusted Clients
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Get in Touch With Us</h2>
                    <p className="text-gray-600 mb-6">
                        Connect effortlessly. Reach out and let’s start a conversation.
                        Your satisfaction is our priority.
                    </p>

                    <div className="space-y-4 w-80">
                        {/* Email */}
                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                            <Mail className="text-blue-600" />
                            <div>
                                <p className="font-semibold text-gray-400">Email</p>
                                <p className="text-sm text-gray-600">
                                    wyvernglobalservice@gmail.com
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                            <Phone className="text-blue-600" />
                            <div>
                                <p className="font-semibold text-gray-400">Phone</p>
                                <p className="text-sm text-gray-600">+234 805 551 2395</p>
                            </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                            <MapPin className="text-blue-600" />
                            <div>
                                <p className="font-semibold text-gray-400">Visit us</p>
                                <p className="text-sm text-gray-600">
                                    17 touggourt Street , zone 2, wuse, Abuja, FCT, Nigeria
                                </p>
                            </div>
                        </div>
                        {/* WhatsApp Button */}
                        <div className="flex items-center gap-4 bg-gray-100 p-4 rounded-lg">
                            <div>
                                <button className="mt-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full flex items-center justify-center shadow-lg transition ml-30">
                                    <FaWhatsapp size={24} />
                                </button>
                            </div>
                        </div>

                    </div>



                </div>
            </section>

            {/* ================= CONTACT FORM ================= */}
            <section className="bg-gray-50 py-16">
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                    {/* Form */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">
                            How Can We Help Your Business To Grow?
                        </h2>
                        <p className="text-gray-500 mb-6">
                            Explore tailored solutions for business growth. Our expertise is
                            your advantage—strategize, innovate, and thrive.
                        </p>

                        <form className="space-y-4 text-gray-400">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border p-3 rounded-lg"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border p-3 rounded-lg"
                            />
                            <textarea
                                placeholder="Message"
                                rows={4}
                                className="w-full border p-3 rounded-lg"
                            ></textarea>

                            <button className="bg-[#2d7fb0] hover:bg-[#1f5f85] text-white px-6 py-3 rounded-lg w-full">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Image */}
                    <div>
                        <Image
                            src="/contact-team.jpg"
                            alt="Team working"
                            width={600}
                            height={400}
                            className="rounded-xl object-cover"
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}