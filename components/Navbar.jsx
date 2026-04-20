"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Jost } from "next/font/google";

const jost = Jost({
    subsets: ["latin"],
});

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Downloads", path: "/downloads" },
        { name: "Recharge", path: "/recharge" },
        { name: "Contact Us", path: "/contact" },
    ];

    const rechargeOptions = [
        { name: "Check-Balance", path: "/recharge/check-balance" },
        { name: "Top-Up", path: "/recharge/top-up" },

    ];

    return (
        <nav className={`${jost.className} w-full bg-blue-900 text-white px-6 py-4 flex justify-between items-center fixed top-0 z-50 shadow`}>
            {/* Logo */}
            <h1 className="text-2xl font-bold">WYVERN</h1>

            {/* Desktop Links */}
            <ul className="hidden md:flex gap-8 text-sm items-center">
                {links.map((link) =>
                    link.name === "Recharge" ? (
                        <li
                            key={link.name}
                            className="relative cursor-pointer"
                            onMouseEnter={() => setOpenDropdown(true)}
                            onMouseLeave={() => setOpenDropdown(false)}
                        >
                            <span className="hover:text-blue-300">
                                {link.name} ▾
                            </span>

                            {/* Dropdown */}
                            <AnimatePresence>
                                {openDropdown && (
                                    <motion.ul
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-8 left-0 bg-blue-800 rounded-lg shadow-lg py-2 w-40"
                                    >
                                        {rechargeOptions.map((item) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.path}
                                                    className="block px-4 py-2 hover:bg-blue-700"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </li>
                    ) : (
                        <li key={link.name} className="hover:text-blue-300 cursor-pointer">
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    )
                )}
            </ul>

            {/* CTA */}
            <button className="hidden md:block bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-400 transition">
                Get Your WYVERN Line
            </button>

            {/* Mobile Hamburger */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : "☰"}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-16 left-0 w-full bg-blue-900 flex flex-col items-center gap-4 py-4 md:hidden"
                    >
                        {links.map((link) =>
                            link.name === "Recharge" ? (
                                <li key={link.name} className="text-center">
                                    <button
                                        onClick={() => setOpenDropdown(!openDropdown)}
                                        className="hover:text-blue-300"
                                    >
                                        {link.name} ▾
                                    </button>

                                    {/* Mobile Dropdown */}
                                    {openDropdown && (
                                        <ul className="mt-2 space-y-2">
                                            {rechargeOptions.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block hover:text-blue-300"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ) : (
                                <li key={link.name}>
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="hover:text-blue-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        )}

                        <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-400 transition mt-2">
                            Get Your Line
                        </button>
                    </motion.ul>
                )}
            </AnimatePresence>
        </nav>
    );
}