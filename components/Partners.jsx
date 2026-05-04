"use client";

import Image from "next/image";
// import { Maven_Pro } from "next/font/google";
// import { Playfair_Display } from "next/font/google";


// ✅ import your logos
import logo1 from "@/public/logo1.jpg";
import logo2 from "@/public/logo2.jpg";
import logo3 from "@/public/logo3.jpg";
import logo4 from "@/public/logo4.jpg";
import logo5 from "@/public/logo5.jpg";
import { Jost } from "next/font/google";




const jost = Jost({
    subsets: ["latin"],
});
// const playfair = Playfair_Display({
//     subsets: ["latin"],
//     weight: ["400", "500", "600", "700", "800", "900"],
// });

// const mavenPro = Maven_Pro({
//     subsets: ["latin"],
//     weight: ["400", "500", "600", "700"], // optional: include weights you need
// });


export default function Partners() {
    const logos = [logo1, logo2, logo3, logo4, logo5];

    return (
        <section className="bg-gray-100 py-8 px-6">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className={`${jost.className} text-3xl font-bold text-blue-900 mb-8`}>
                    Our Partners
                </h2>

                <div className="bg-white rounded-xl p-10 shadow flex flex-wrap justify-center items-center gap-10">
                    {logos.map((logo, i) => (
                        <div key={i} className="w-32 h-16 relative">
                            <Image
                                src={logo}
                                alt={`Partner ${i + 1}`}
                                width={128}
                                height={64}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}