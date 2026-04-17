"use client";

import { useState } from "react";

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
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    WYVERN Recharge
                </h1>

                <p className="text-lg text-gray-600 mb-8">
                    Topup your WYVERN Line today by <br />using the
                    form below.
                </p>

                {/* ================= CARD ================= */}
                <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 shadow-sm p-6 text-left">

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* NAME */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name:
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Type your Name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                            />
                        </div>

                        {/* WYVERN NUMBER */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                WYVERN Number:
                            </label>
                            <input
                                type="text"
                                name="wyvern"
                                value={form.wyvern}
                                onChange={handleChange}
                                placeholder="Type your WYVERN Line"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Your Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="Type your email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                            />
                        </div>

                        {/* AMOUNT */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Amount
                            </label>
                            <input
                                type="number"
                                name="amount"
                                value={form.amount}
                                onChange={handleChange}
                                placeholder="Recharge Amount"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                            />
                        </div>

                        {/* BUTTONS */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Recharge Now
                        </button>

                        <button
                            type="button"
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Go Back Home 🏠
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
}