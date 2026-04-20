"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

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
        <nav className={`${jost.className} fixed top-0 w-full z-50`}>
            {/* Glass Background */}
            <div className="backdrop-blur-xl bg-white/10 border-b border-white/10 shadow-lg">
                <div className="flex justify-between items-center px-6 py-4">

                    {/* Logo */}
                    <motion.h1
                        className="text-2xl font-bold text-white tracking-wider"
                        whileHover={{ scale: 1.05 }}
                    >
                        WYVERN
                    </motion.h1>

                    {/* Desktop Links */}
                    <ul className="hidden md:flex gap-10 items-center text-sm relative">
                        {links.map((link) =>
                            link.name === "Recharge" ? (
                                <li
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => setOpenDropdown(true)}
                                    onMouseLeave={() => setOpenDropdown(false)}
                                >
                                    <motion.span
                                        className="cursor-pointer text-white/80 hover:text-white transition"
                                        whileHover={{ y: -2 }}
                                    >
                                        {link.name} ▾
                                    </motion.span>

                                    {/* Dropdown */}
                                    <AnimatePresence>
                                        {openDropdown && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-10 left-0 w-48 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-2xl p-2"
                                            >
                                                {rechargeOptions.map((item) => (
                                                    <motion.li
                                                        key={item.name}
                                                        whileHover={{ scale: 1.03 }}
                                                    >
                                                        <Link
                                                            href={item.path}
                                                            className="block px-4 py-2 rounded-lg hover:bg-white/10 transition"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ) : (
                                <motion.li
                                    key={link.name}
                                    whileHover={{ y: -2 }}
                                    className="relative group"
                                >
                                    <Link
                                        href={link.path}
                                        className="text-white/80 group-hover:text-white transition"
                                    >
                                        {link.name}
                                    </Link>

                                    {/* Animated underline */}
                                    <motion.span
                                        layoutId="underline"
                                        className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 group-hover:w-full transition-all duration-300"
                                    />
                                </motion.li>
                            )
                        )}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                        className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 text-white shadow-lg relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Get Your WYVERN Line</span>

                        {/* Glow Effect */}
                        <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition" />
                    </motion.button>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white text-xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? "✖" : "☰"}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-black/80 backdrop-blur-xl px-6 py-6 space-y-4"
                    >
                        {links.map((link) =>
                            link.name === "Recharge" ? (
                                <div key={link.name}>
                                    <button
                                        onClick={() => setOpenDropdown(!openDropdown)}
                                        className="text-white text-lg"
                                    >
                                        {link.name} ▾
                                    </button>

                                    <AnimatePresence>
                                        {openDropdown && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 mt-2 space-y-2"
                                            >
                                                {rechargeOptions.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block text-white/80"
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-white text-lg"
                                >
                                    {link.name}
                                </Link>
                            )
                        )}

                        <button className="w-full bg-blue-500 py-3 rounded-xl mt-4">
                            Get Your Line
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}