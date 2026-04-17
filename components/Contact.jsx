'use client';
import { MdEmail, MdPhone } from "react-icons/md";


export default function Contact() {
    return (
        <div>
            <section className="bg-slate-950 from-blue-600 to-blue-400 text-white py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

                    {/* LEFT: CONTACT */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
                        <p className="text-blue-100 mb-6">
                            Get in touch with us today by using any of the means below.
                        </p>

                        <p className="mb-2 flex items-center gap-2">
                            <MdEmail className="text-blue-400" size={16} />
                            <span>wyvernglobalservice@gmail.com</span>
                        </p>

                        <p className="mb-2 flex items-center gap-2">
                            <MdPhone className="text-blue-400" size={16} />
                            <span>+234 805 551 2395</span>
                        </p>

                        <p className="flex items-center gap-2">
                            <span>📍</span>
                            <span>Abuja, Nigeria</span>
                        </p>
                    </div>

                    {/* RIGHT: BOOK DEMO */}
                    <div className="bg-slate-900 p-6 rounded-xl shadow-lg">
                        <h3 className="text-lg font-semibold mb-4">BOOK A DEMO TODAY</h3>

                        <div className="space-y-3">
                            {["Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed"].map((day) => (
                                <div
                                    key={day}
                                    className="bg-gray-200 text-black px-4 py-2 rounded flex justify-between"
                                >
                                    <span>{day}</span>
                                    <span>9am - 5pm</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}