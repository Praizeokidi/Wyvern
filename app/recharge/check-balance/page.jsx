"use client";

import { useState } from "react";

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
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                    WYVERN Balance
                </h1>

                <p className="text-lg text-gray-600 mb-8">
                    Check your WYVERN Line balance today by <br />
                    using the form below.
                </p>

                {/* ================= CARD ================= */}
                <div className="bg-white rounded-xl shadow-md p-6">

                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* INPUT */}
                        <div className="text-left">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                <strong>WYVERN Number:</strong>
                            </label>
                            <input
                                type="text"
                                value={wyvern}
                                onChange={(e) => setWyvern(e.target.value)}
                                placeholder="e.g. 013430000"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-600"
                            />
                        </div>

                        {/* BUTTONS */}
                        <button
                            type="submit"
                            className="w-70 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Check Balance
                        </button>

                        <button
                            type="button"
                            className="w-70  bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Go Back Home 🏠
                        </button>

                        <button
                            type="button"
                            className="w-70  bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Top-Up Your WYVERN line
                        </button>

                    </form>
                </div>

            </div>
        </div>
    );
}