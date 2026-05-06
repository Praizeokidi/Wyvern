"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Jost } from "next/font/google";
import WyvernFormModal from "@/components/get-your-line";






const jost = Jost({ subsets: ["latin"] });


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


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
            <div
                className={`transition-all duration-300 border-b 
    ${scrolled
                        ? "bg-white text-black shadow-md backdrop-blur-0"
                        : "bg-white/5 backdrop-blur-md text-white border-white/10"
                    }`}
            >
                <div className="flex justify-between items-center px-6 py-4">

                    {/* Logo */}
                    <Link href="/" className="inline-block">
                        <motion.h1
                            className={`cursor-pointer transition text-2xl font-bold tracking-wider ${scrolled
                                ? "text-gray-800 hover:text-blue-600"
                                : "text-white/80 hover:text-white"
                                }`}
                            whileHover={{ scale: 1.05 }}
                        > <motion.span

                        >WYVERN</motion.span>

                        </motion.h1>
                    </Link>

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
                                        className={`cursor-pointer transition ${scrolled
                                            ? "text-gray-800 hover:text-blue-600"
                                            : "text-white/80 hover:text-white"
                                            }`}
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
                                                className={`absolute top-10 left-0 w-48 rounded-xl p-2 transition-all duration-300 border
    ${scrolled
                                                        ? "bg-white text-gray-800 shadow-lg border-gray-200 backdrop-blur-0"
                                                        : "bg-white/5 text-white shadow-2xl border-white/10 backdrop-blur-md"
                                                    }`}
                                            >
                                                {rechargeOptions.map((item) => (
                                                    <motion.li
                                                        key={item.name}
                                                        whileHover={{ scale: 1.03 }}
                                                    >
                                                        <Link
                                                            href={item.path}
                                                            className={`block px-4 py-2 rounded-lg transition
    ${scrolled
                                                                    ? "hover:bg-gray-100 text-gray-800"
                                                                    : "hover:bg-white/10 text-white"
                                                                }`}     >
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
                                        className={`transition ${scrolled
                                            ? "text-gray-800 hover:text-blue-600"
                                            : "text-white/80 hover:text-white"
                                            }`}
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
                        onClick={() => setModalOpen(true)}
                        className="hidden md:block px-5 py-2 rounded-xl bg-gradient-to-r from-blue-900 to-blue-500 text-white shadow-lg relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="relative z-10">Get Your WYVERN Line</span>

                        {/* Glow Effect */}
                        <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition" />
                    </motion.button>



                    {/* Mobile Toggle */}
                    <button
                        className={`md:hidden text-2xl transition-all duration-300 p-2 rounded-md ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/10"
                            }`}
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
                                        className="text-white text-lg hover:text-cyan-300 transition"
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
                                                        className="block text-white/90 hover:text-white transition"
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
                                    className="block text-lg text-white"
                                >
                                    {link.name}
                                </Link>
                            )
                        )
                        }
                        {/* 
                        <button
                            onClick={() => {
                                setModalOpen(true);
                                setIsOpen(false);
                            }}
                            className="w-full bg-blue-500 py-3 rounded-xl mt-4"
                        >
                            Get Your WYVERN Line
                        </button> */}
                    </motion.div >
                )}
            </AnimatePresence >
            <WyvernFormModal open={modalOpen} setOpen={setModalOpen} />
        </nav >
    );
}