"use client";

import { useState } from "react";

export default function WyvernFormModal() {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState("personal");

    return (
        <div>
            {/* ================= TRIGGER BUTTON ================= */}
            <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
            >
                GET YOUR WYVERN LINE
            </button>

            {/* ================= MODAL ================= */}
            {open && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4">

                    <div className="bg-white w-full max-w-4xl rounded-xl shadow-lg overflow-hidden">

                        {/* ================= HEADER ================= */}
                        <div className="flex justify-between items-center p-4 border-b">
                            <h2 className="font-bold text-lg">Get WYVERN Line</h2>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-600 hover:text-black"
                            >
                                ✕
                            </button>
                        </div>

                        {/* ================= TABS ================= */}
                        <div className="flex border-b">
                            <button
                                onClick={() => setTab("personal")}
                                className={`flex-1 py-3 font-semibold ${tab === "personal"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100"
                                    }`}
                            >
                                Personal
                            </button>

                            <button
                                onClick={() => setTab("business")}
                                className={`flex-1 py-3 font-semibold ${tab === "business"
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100"
                                    }`}
                            >
                                Business
                            </button>
                        </div>

                        {/* ================= FORM CONTENT ================= */}
                        <div className="p-6 max-h-[80vh] overflow-y-auto">

                            {/* ================= PERSONAL FORM ================= */}
                            {tab === "personal" && (
                                <form className="grid gap-3">

                                    <input placeholder="First Name" className="border p-2 rounded" />
                                    <input placeholder="Last Name" className="border p-2 rounded" />
                                    <input placeholder="Mobile Number" className="border p-2 rounded" />
                                    <input placeholder="Residential Address" className="border p-2 rounded" />
                                    <input placeholder="Email" className="border p-2 rounded" />
                                    <input placeholder="NIN Number" className="border p-2 rounded" />

                                    <select className="border p-2 rounded">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>

                                    <input type="date" className="border p-2 rounded" />

                                    <select className="border p-2 rounded">
                                        <option>National ID</option>
                                        <option>International Passport</option>
                                        <option>Drivers License</option>
                                        <option>Voters Card</option>
                                    </select>

                                    <input type="file" className="border p-2 rounded" />
                                    <input type="file" className="border p-2 rounded" />
                                    <input type="file" className="border p-2 rounded" />

                                    <button className="bg-blue-600 text-white py-2 rounded mt-3">
                                        Submit Personal Request
                                    </button>
                                </form>
                            )}

                            {/* ================= BUSINESS FORM ================= */}
                            {tab === "business" && (
                                <form className="grid gap-3">

                                    <input placeholder="Business Name" className="border p-2 rounded" />
                                    <input placeholder="CAC Reg No" className="border p-2 rounded" />
                                    <input placeholder="Mobile Number" className="border p-2 rounded" />
                                    <input placeholder="Business Address" className="border p-2 rounded" />
                                    <input placeholder="Email" className="border p-2 rounded" />
                                    <input placeholder="NIMC Number" className="border p-2 rounded" />

                                    <input type="date" className="border p-2 rounded" />

                                    <select className="border p-2 rounded">
                                        <option>CAC Registration</option>
                                        <option>National ID</option>
                                        <option>International Passport</option>
                                        <option> Drivers License</option>
                                    </select>

                                    <input type="file" className="border p-2 rounded" />
                                    <input type="file" className="border p-2 rounded" />
                                    <input type="file" className="border p-2 rounded" />

                                    <button className="bg-blue-600 text-white py-2 rounded mt-3">
                                        Submit Business Request
                                    </button>
                                </form>
                            )}

                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}