import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { Fraunces } from "next/font/google";
import { Poppins } from "next/font/google";


const fraunces = Fraunces({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});





export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

                {/* About */}
                <div>
                    <h3 className={`${fraunces.className} font-bold text-xl mb-3`}>WYVERN</h3> {/* replace with logo when available */}
                    <p className={`${poppins.className} text-sm text-blue-200`}>
                        Licensed telecom company delivering voice, SMS, and video communication solutions.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition">
                            <FaFacebookF size={14} />
                        </a>
                        <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition">
                            <FaTwitter size={14} />
                        </a>
                        <a href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700 transition">
                            <FaInstagram size={14} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className={`${fraunces.className} font-bold mb-3`}>Quick Links</h3>
                    <ul className={`${poppins.className} space-y-2 text-sm`}>

                        <li>
                            <Link href="/" className="flex items-center gap-2 hover:text-blue-400 transition">
                                <span>▶</span> Home
                            </Link>
                        </li>

                        <li>
                            <Link href="/services" className="flex items-center gap-2 hover:text-blue-400 transition">
                                <span>▶</span> Services
                            </Link>
                        </li>

                        <li>
                            <Link href="/downloads" className="flex items-center gap-2 hover:text-blue-400 transition">
                                <span>▶</span> Downloads
                            </Link>
                        </li>



                        <li>
                            <Link href="/contact" className="flex items-center gap-2 hover:text-blue-400 transition">
                                <span>▶</span> Contact Us
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className={`${fraunces.className} font-bold mb-3`}>Contact Us</h3>


                    <p className={`${poppins.className} text-sm text-blue-200 flex items-center gap-2`}>
                        <MdEmail className="text-blue-400" size={16} />
                        <span>wyvernglobalservice@gmail.com</span>

                    </p>
                    <p className={`${poppins.className} text-sm text-blue-200 flex items-center gap-2`}>
                        <MdPhone className="text-blue-400" size={16} />
                        <span> +234 805 551 2395 </span>
                    </p>
                </div>

            </div>

            <div className={`${poppins.className} text-center mt-6 text-sm text-blue-300`}>
                © {new Date().getFullYear()} WYVERN. All rights reserved.
            </div>
        </footer>
    );
}