"use client";

import { useState } from "react";
import { Cairo } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Jost } from "next/font/google";
import { FaHome } from "react-icons/fa";




const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});
const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});




export default function Balance() {
    const [wyvern, setWyvern] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("WYVERN Number:", wyvern);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="text-center max-w-md w-90 ">

                {/* ================= HEADER ================= */}
                <h1 className={`${jost.className} text-5xl font-bold text-gray-900 mb-4`}>
                    WYVERN Balance
                </h1>

                <p className={`${jost.className} text-lg text-gray-600 mb-8`}>
                    Check your WYVERN Line balance today by <br />
                    using the form below.
                </p>

                {/* ================= CARD ================= */}
                <div className="bg-white rounded-xl shadow-md p-6">

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* INPUT */}
                        <div className="text-left">
                            <label className={`${jost.className} block text-sm font-medium text-gray-700 mb-2`}>
                                <strong>WYVERN Number:</strong>
                            </label>
                            <input
                                type="text"
                                value={wyvern}
                                onChange={(e) => setWyvern(e.target.value)}
                                placeholder="e.g. 013430000"
                                className={`${jost.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600`}
                            />
                        </div>

                        {/* BUTTONS */}
                        <button
                            type="submit"
                            className={`${jost.className} w-[280px] bg-gradient-to-r from-[#0F2A74] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2`}
                        >
                            <span>Check Balance</span>
                        </button>

                        <button
                            type="button"
                            className={`${jost.className} w-[280px] bg-gradient-to-r from-[#0F2A74] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2`}
                        >
                            <span>Go Back Home</span>
                            <FaHome className="text-white" />
                        </button>

                        <button
                            type="button"
                            className={`${jost.className} w-[280px] bg-gradient-to-r from-[#0F2A74] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2`}
                        >
                            Top-Up Your WYVERN line
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}