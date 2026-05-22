"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { Phone, CreditCard, ArrowRight } from "lucide-react";
import { Jost, Cairo } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export default function Balance() {
    const [wyvern, setWyvern] = useState("");
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        try {
            // simulate API call (replace with real endpoint later)
            await new Promise((res) => setTimeout(res, 1200));

            setResult({
                number: wyvern,
                balance: "₦2,450.00",
                status: "Active"
            });

        } catch (err) {
            setResult({ error: "Unable to fetch balance" });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${jost.className}  min-h-screen bg-slate-950 text-white flex items-center justify-center px-4`}>

            <div className="w-full max-w-lg">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold`}>
                        WYVERN <span className="text-blue-400">Balance Portal</span>
                    </h1>

                    <p className="text-gray-400 mt-3">
                        Securely check your line balance, status, and usage in real time.
                    </p>
                </div>

                {/* CARD */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">

                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-5">

                        <div>
                            <label className="text-sm text-gray-400 flex items-center gap-2 mb-2">
                                <Phone size={14} />
                                WYVERN Number
                            </label>

                            <input
                                type="text"
                                value={wyvern}
                                onChange={(e) => setWyvern(e.target.value)}
                                placeholder="e.g. 013430000"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* PRIMARY CTA */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:shadow-lg transition"
                        >
                            {loading ? "Checking..." : "Check Balance"}
                            <ArrowRight size={16} />
                        </button>

                        {/* SECONDARY CTA */}
                        <Link href="/recharge/top-up">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition"
                            >
                                <CreditCard size={16} />
                                Top Up Line
                            </button>
                        </Link>
                        {/* TERTIARY CTA */}
                        <Link href="/">
                            <button
                                type="button"
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-gray-400 hover:text-white transition"
                            >
                                <FaHome />
                                Back to Home
                            </button>
                        </Link>

                    </form>

                    {/* RESULT SECTION */}
                    {result && (
                        <div className="mt-6 p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-sm">
                            {result.error ? (
                                <p className="text-red-400">{result.error}</p>
                            ) : (
                                <div className="space-y-1">
                                    <p>Number: <span className="text-white">{result.number}</span></p>
                                    <p>Balance: <span className="text-green-400 font-semibold">{result.balance}</span></p>
                                    <p>Status: <span className="text-blue-400">{result.status}</span></p>
                                </div>
                            )}
                        </div>
                    )}

                </div>

                {/* FOOT NOTE */}
                <p className="text-center text-gray-500 text-xs mt-6">
                    Secure WYVERN Telecom Service Portal
                </p>

            </div>
        </div>
    );
}