'use client';
import { useEffect } from "react";
import { MdEmail, MdPhone } from "react-icons/md";
import { Jost, Cairo } from "next/font/google";



const jost = Jost({ subsets: ["latin"] });
const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Contact() {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <section className="bg-slate-950 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                {/* ================= LEFT: CONTACT ================= */}
                <div>
                    <h2 className={`${jost.className} text-3xl font-bold mb-4`}>
                        Get In Touch With Us
                    </h2>

                    <p className={`${jost.className} text-blue-100 mb-6`}>
                        Get in touch with us today by using any of the means below.
                    </p>

                    <p className={`${jost.className} mb-2 flex items-center gap-2`}>
                        <MdEmail className="text-blue-400" size={16} />
                        <span>wyvernglobalservice@gmail.com</span>
                    </p>

                    <p className={`${jost.className} mb-2 flex items-center gap-2`}>
                        <MdPhone className="text-blue-400" size={16} />
                        <span>+234 805 551 2395</span>
                    </p>

                    <p className={`${jost.className} flex items-center gap-2`}>
                        <span>📍</span>
                        <span>Abuja, Nigeria</span>
                    </p>
                </div>

                {/* ================= RIGHT: BOOK DEMO ================= */}
                <div className="bg-slate-900 p-6 rounded-xl shadow-lg">

                    <h3 className={`${cairo.className} text-2xl font-semibold mb-3`}>
                        BOOK A DEMO TODAY
                    </h3>

                    <p className={`${jost.className} mb-4`}>
                        Reach out and let’s start a conversation{" "}
                        <strong>your satisfaction is our priority.</strong>
                    </p>

                    {/* ================= REAL BOOKING CALENDAR ================= */}
                    <div className="w-full rounded-lg overflow-hidden border border-gray-700">

                        <div
                            className="calendly-inline-widget w-full h-[650px]"
                            data-url="https://calendly.com/praizeokidi/30min"
                        ></div>


                    </div>

                </div>
            </div>
        </section>
    );
}