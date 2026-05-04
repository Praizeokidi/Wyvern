import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";

export default function SipTrunkingPage() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
            <Navbar />

            {/* ================= HEADER ================= */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10 mt-16 sm:mt-20">

                {/* Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 gap-3">

                    {/* <div className="flex flex-wrap gap-3">
                        <span>👤 Boss</span>
                        <span>📅 November 24, 2023</span>
                        <span>⏰ 8:00 am</span>
                    </div> */}

                    <div className="flex flex-wrap gap-2">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaFacebookF /> Facebook
                        </button>
                        <button className="bg-blue-400 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaTwitter /> Twitter
                        </button>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center mt-6 mb-6">
                    SIP Trunking
                </h1>

                {/* IMAGE */}
                <div className="bg-white rounded-2xl shadow p-4 sm:p-6 flex justify-center">
                    <Image
                        src="/sip-trunking.jpg"
                        alt="SIP Trunking"
                        width={256}
                        height={256}
                        className="w-40 sm:w-64 h-auto object-contain"
                    />
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">

                <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                    SIP Trunking
                </h2>

                <h3 className="text-blue-600 text-xl sm:text-3xl font-semibold mb-3">
                    Unleash the Power of SIP Trunking: Revolutionize Your Business Communication
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    SIP Trunking is a cutting-edge concept—it’s the present and future of
                    business communication...
                </p>

                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    Demystifying SIP Trunking: What Is It & How Does It Work?
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    SIP trunking utilizes the power of the internet...
                </p>

                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    Reap the Rewards: Top Benefits of Implementing WYVERN.ng SIP Trunking
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6 text-sm sm:text-base">
                    <li>Cost Savings compared to traditional systems</li>
                    <li>Unparalleled Scalability for business growth</li>
                    <li>Enhanced Flexibility across devices</li>
                    <li>Crystal Clear Communication quality</li>
                </ul>

                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    Unveiling the Mechanics: How SIP Trunking Functions
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    Think of it as a digital bridge connecting your PBX...
                </p>

                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    Key Features of SIP Trunking
                </h3>

                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6 text-sm sm:text-base">
                    <li>Virtual Phone Numbers</li>
                    <li>Customizable Call Routing</li>
                    <li>Call Recording</li>
                    <li>Seamless Integration</li>
                </ul>

                <h3 className="text-blue-600 text-lg sm:text-xl font-semibold mb-2">
                    Choosing the Perfect SIP Trunking Provider
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
                    Selecting the right provider is crucial for your business communications...
                </p>

                <h3 className="font-semibold text-lg sm:text-xl mb-2">
                    Ready to Upgrade Your Communications?
                </h3>

                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    By switching to SIP Trunking, you’re investing in the future...
                </p>

                <div className="mt-4 text-gray-700 text-sm sm:text-base">
                    <h4 className="font-semibold mb-2">Additional Resources:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Visit wyvern.com/service/sip-trunking</li>
                        <li>Contact our sales team for consultation</li>
                    </ul>
                </div>
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