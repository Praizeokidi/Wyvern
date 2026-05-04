import Link from "next/link";
import { Jost } from "next/font/google";
import { Playfair_Display } from "next/font/google";


const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const jost = Jost({
    subsets: ["latin"],
});





export default function BookSession() {
    return (
        <section className="w-full py-10 px-4 sm:px-6 bg-gray-50 text-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* LEFT CONTENT */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className={`${playfair.className} text-2xl sm:text-3xl font-bold mb-4 text-gray-900`}>
                        Book A Session with Us
                    </h2>

                    <p className={`${jost.className} text-gray-600 leading-relaxed text-sm sm:text-base max-w-xl mx-auto md:mx-0`}>
                        Book your session effortlessly on our website. Elevate your
                        experience with seamless online scheduling. Your satisfaction is
                        just a click away. Book now!
                    </p>
                </div>

                {/* RIGHT BUTTON */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                    <Link href="/contact">
                        <button className={`${jost.className} bg-[#2d7fb0] hover:bg-[#1f5f85] text-white
                        px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg
                        rounded-lg shadow-md transition duration-300`}>
                            Book Now!
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
}