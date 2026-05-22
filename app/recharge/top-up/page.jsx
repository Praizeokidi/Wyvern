"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { CreditCard, ArrowRight, User, Phone, Mail, Wallet } from "lucide-react";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function Recharge() {
    const [form, setForm] = useState({
        name: "",
        wyvern: "",
        email: "",
        amount: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            // simulate API call (replace with Paystack/Flutterwave later)
            await new Promise((res) => setTimeout(res, 1500));

            setSuccess("Recharge request initiated successfully. Processing payment...");
            setForm({ name: "", wyvern: "", email: "", amount: "" });

        } catch (err) {
            setSuccess("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`${jost.className} min-h-screen bg-slate-950 text-white flex items-center justify-center px-4`}>

            <div className="w-full max-w-lg">

                {/* HEADER */}
                <div className="text-center mb-10">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold`}>
                        WYVERN <span className="text-blue-400">Recharge</span>
                    </h1>

                    <p className="text-gray-400 mt-3">
                        Securely top up your line in seconds. Fast, reliable, and encrypted billing system.
                    </p>
                </div>

                {/* CARD */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
                    {/* SUCCESS MESSAGE */}
                    {success && (
                        <div className="text-sm text-green-400 bg-green-500/10 border border-green-500/20 p-3 rounded-xl">
                            {success}
                        </div>
                    )}
                    {/* FORM */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* NAME */}
                        <div>
                            <label className="text-sm text-gray-400 flex items-center gap-2 mb-2">
                                <User size={14} />
                                Full Name
                            </label>
                            <input
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                className="w-full p-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* WYVERN NUMBER */}
                        <div>
                            <label className="text-sm text-gray-400 flex items-center gap-2 mb-2">
                                <Phone size={14} />
                                WYVERN Number
                            </label>
                            <input
                                name="wyvern"
                                value={form.wyvern}
                                onChange={handleChange}
                                placeholder="e.g. 013430000"
                                className="w-full p-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* EMAIL */}
                        <div>
                            <label className="text-sm text-gray-400 flex items-center gap-2 mb-2">
                                <Mail size={14} />
                                Email Address
                            </label>
                            <input
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full p-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* AMOUNT */}
                        <div>
                            <label className="text-sm text-gray-400 flex items-center gap-2 mb-2">
                                <Wallet size={14} />
                                Recharge Amount (₦)
                            </label>
                            <input
                                name="amount"
                                type="number"
                                value={form.amount}
                                onChange={handleChange}
                                placeholder="Enter amount"
                                className="w-full p-3 rounded-xl bg-slate-900 border border-white/10 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                            />
                        </div>

                        {/* PRIMARY CTA */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:shadow-lg transition"
                        >
                            {loading ? "Processing..." : "Proceed to Payment"}
                            <ArrowRight size={16} />
                        </button>



                        {/* SECONDARY CTA */}
                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white hover:bg-white/10 transition"
                        >
                            <CreditCard size={16} />
                            View Payment Methods
                        </button>

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
                </div>

                {/* FOOT NOTE */}
                <p className="text-center text-gray-500 text-xs mt-6">
                    Secure WYVERN Billing System • Powered by Encrypted Transactions
                </p>

            </div>
        </div>
    );
}