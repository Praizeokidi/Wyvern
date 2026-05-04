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


export default function Recharge() {
    const [form, setForm] = useState({
        name: "",
        wyvern: "",
        email: "",
        amount: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">

            <div className="text-center max-w-md w-90 mt-20 mb-10">

                {/* ================= HEADER ================= */}
                <h1 className={`${jost.className} text-5xl font-bold text-gray-900 mb-4`}>
                    WYVERN Recharge
                </h1>

                <p className={`${jost.className} text-lg text-gray-600 mb-8`}>
                    Topup your WYVERN Line today by <br />using the
                    form below.
                </p>

                {/* ================= CARD ================= */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 shadow-sm p-6 text-left">

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* NAME */}
                        <div>
                            <label className={`${jost.className} block text-sm font-medium text-gray-700 mb-1`}>
                                <strong>  Name: </strong>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Type your Name"
                                className={`${jost.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600`}
                            />
                        </div>

                        {/* WYVERN NUMBER */}
                        <div>
                            <label className={`${jost.className} block text-sm font-medium text-gray-700 mb-1`}>
                                <strong>    WYVERN Number:</strong>
                            </label>
                            <input
                                type="text"
                                name="wyvern"
                                value={form.wyvern}
                                onChange={handleChange}
                                placeholder="Type your WYVERN Line"
                                className={`${jost.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600`}
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className={`${jost.className} block text-sm font-medium text-gray-700 mb-1`}>
                                <strong>    Your Email: </strong>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Type your email"
                                className={`${jost.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600`}
                            />
                        </div>

                        {/* AMOUNT */}
                        <div>
                            <label className={`${jost.className} block text-sm font-medium text-gray-700 mb-1`}>
                                <strong>   Amount </strong>
                            </label>
                            <input
                                type="number"
                                name="amount"
                                value={form.amount}
                                onChange={handleChange}
                                placeholder="Recharge Amount"
                                className={`${jost.className} w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600`}
                            />
                        </div>

                        {/* BUTTONS */}
                        <button
                            type="submit"
                            className={`${jost.className} w-full bg-gradient-to-r from-[#0F2A74] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2`}
                        >
                            <span>Recharge Now </span>
                        </button>

                        <button
                            type="button"
                            className={`${jost.className} w-full bg-gradient-to-r from-[#0F2A74] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2`}
                        >
                            <span> Go Back Home</span>
                            <FaHome className="text-white" />
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}