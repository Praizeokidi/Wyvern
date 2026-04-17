import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function ClosedUserGroupPage() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
            <Navbar />

            {/* PAGE WRAPPER */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 mt-16 sm:mt-20">

                {/* META INFO */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 gap-3">

                    <div className="flex flex-wrap gap-3">
                        <span>👤 Boss</span>
                        <span>📅 November 24, 2023</span>
                        <span>⏰ 8:00 am</span>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                        <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaFacebookF /> Facebook
                        </button>
                        <button className="bg-blue-400 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
                            <FaTwitter /> Twitter
                        </button>
                    </div>
                </div>

                {/* TITLE */}
                <h1 className="text-2xl sm:text-4xl font-bold text-center mt-6 mb-8 sm:mb-10">
                    Closed User Group
                </h1>

                {/* HERO IMAGE */}
                <div className="bg-white rounded-2xl shadow p-4 sm:p-6 mb-8 flex justify-center">
                    <Image
                        src="/images/cug-illustration.png"
                        alt="CUG Illustration"
                        width={800}
                        height={300}
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* CONTENT */}
                <section className="w-full">

                    <h2 className="text-xl sm:text-2xl font-bold mb-6">
                        Closed User Group
                    </h2>

                    <div className="space-y-6 text-gray-700 leading-relaxed">

                        <div>
                            <h3 className="text-xl sm:text-3xl font-bold mb-3">
                                Unleash Seamless Communication: WYVERN CUG – Your Business’s Backbone
                            </h3>
                            <p className="text-sm sm:text-base">
                                In today’s fast-paced business environment, effective communication is the lifeblood of success...
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-2xl font-semibold mb-2">
                                What is WYVERN Closed User Group (CUG) and How Does it Work?
                            </h3>
                            <p className="text-sm sm:text-base">
                                WYVERN CUG establishes a secure and private network within Nigeria’s existing mobile infrastructure...
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 text-blue-600">
                                Benefits of WYVERN CUG
                            </h3>
                            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                                <li><strong>Enhanced Productivity:</strong> Improve collaboration.</li>
                                <li><strong>Cost Savings:</strong> Reduce internal communication costs.</li>
                                <li><strong>Security:</strong> Protect sensitive data.</li>
                                <li><strong>Flexibility:</strong> Stay connected anywhere.</li>
                                <li><strong>Scalability:</strong> Grow with your business.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                Real World Applications
                            </h3>
                            <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                                <li><strong>Healthcare:</strong> Improve coordination.</li>
                                <li><strong>Finance:</strong> Secure communication.</li>
                                <li><strong>Retail:</strong> Inventory tracking.</li>
                                <li><strong>Construction:</strong> Team coordination.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2">
                                Experience the WYVERN Difference
                            </h3>
                            <p className="text-sm sm:text-base">
                                Choosing WYVERN CUG ensures reliable communication...
                            </p>
                        </div>

                    </div>
                </section>
            </div>

            {/* CTA */}
            <div className="px-4 sm:px-0">
                <BookSession />
            </div>

            <Testimonial />
            <Footer />
        </div>
    );
}