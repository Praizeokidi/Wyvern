import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Jost } from "next/font/google";




const jost = Jost({
    subsets: ["latin"],
});


export default function ClosedUserGroupPage() {
    return (
        <div className="bg-gray-50 text-gray-800 overflow-x-hidden">
            <Navbar />

            {/* HERO */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-15 px-6 text-center relative ">
                <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-25`}>Closed User Group</h1>

            </section>

            {/* HERO IMAGE */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="bg-white rounded-2xl shadow p-4 sm:p-6 mb-8 flex justify-center">
                    <Image
                        src="/cug.jpg"
                        alt="CUG Illustration"
                        width={500}
                        height={300}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </section>

            {/* CONTENT */}
            <section className={`${jost.className} max-w-6xl mx-auto px-4 sm:px-6 pb-10 mt-6 sm:mt-10`}>


                <h2 className="text-3xl font-semibold mb-6">
                    Closed User Group
                </h2>

                <div className="space-y-6 text-gray-700 leading-relaxed">

                    <div>
                        <h3 className="text-xl sm:text-3xl font-bold mb-3">
                            Power Your Business with Seamless Communication – WYVERN CUG
                        </h3>
                        <p className="text-sm sm:text-base">
                            In today’s high-speed business world, communication isn’t just important—it’s mission-critical. Every decision, every transaction, and every customer interaction depends on how quickly and effectively your teams can connect. That’s where WYVERN Closed User Group (CUG) comes in—designed to simplify communication and keep your business running at peak efficiency.           </p>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-2xl font-semibold mb-2">
                            What is WYVERN Closed User Group (CUG)?
                        </h3>
                        <p className="text-sm sm:text-base mb-3">
                            WYVERN Closed User Group (CUG) creates a secure, private communication network within Nigeria’s mobile infrastructure—exclusively for your organization. It allows your employees to connect instantly through a dedicated system built for speed, reliability, and confidentiality.

                            Unlike conventional communication channels, WYVERN CUG ensures your team stays connected within a controlled environment, enabling smoother collaboration and faster execution across departments.          </p>

                        <h3 className="text-md font-semibold mb-1">
                            Effortless Setup, Immediate Impact
                        </h3>
                        <p className="text-sm sm:text-base">
                            Getting started is straightforward. Our experts partner with you to understand your operational needs, then deploy and configure your CUG system to fit seamlessly into your existing workflow. The result? Minimal disruption and maximum efficiency from day one.          </p>

                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-blue-600">
                            Why WYVERN CUG is a Game-Changer
                        </h3>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-base">
                            <li><strong>Boost Productivity Across Teams:</strong> Enable faster communication, reduce delays, and empower your workforce to collaborate in real time—whether they’re in the office or on the move.</li>
                            <li><strong>Cut Communication Costs Significantly:</strong> Reduce your call and SMS expenses with preferential in-group rates, helping you optimize spending without sacrificing quality.</li>
                            <li><strong>Built-In Security You Can Trust:</strong> Keep sensitive business conversations protected within a secure private network, reducing risks and strengthening data confidentiality.</li>
                            <li><strong>Work Anywhere, Stay Connected:</strong> With full mobile compatibility, your team remains connected and productive—no matter where business takes them.</li>
                            <li><strong>Scales as You Grow:</strong> Easily expand your network as your organization evolves, without the need for complex upgrades or disruptions.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                            Designed for Every Industry
                        </h3>
                        <p>WYVERN CUG delivers real value across multiple sectors:</p>
                        <ul className="list-disc pl-5 sm:pl-6 space-y-1 text-sm sm:text-base">
                            <li><strong>Healthcare:</strong> Enhance coordination, improve response times, and enable secure communication among medical teams</li>
                            <li><strong>Finance:</strong> Support secure transactions and improve collaboration across branches</li>
                            <li><strong>Retail:</strong> Streamline operations, manage inventory efficiently, and strengthen customer engagement</li>
                            <li><strong>Construction:</strong> Improve on-site communication, coordination, and safety management</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-2">
                            Experience Smarter Communication with WYVERN CUG
                        </h3>
                        <p className="text-sm sm:text-base">
                            Choosing WYVERN CUG means investing in a smarter, faster, and more secure way to communicate. It’s more than a service—it’s a foundation for better teamwork, improved efficiency, and sustained business growth.
                            <br />
                            <strong>Ready to Upgrade Your Communication? </strong> <br />
                            Take the next step toward seamless connectivity. Visit our website or speak with our team today for a personalized consultation and see how WYVERN CUG can transform the way your business communicates.
                        </p>
                    </div>

                </div>
            </section >


            {/* CTA */}
            < div className="px-4 sm:px-0" >
                <BookSession />
            </div >

            <Testimonial />
            <Footer />
        </div >
    );
}