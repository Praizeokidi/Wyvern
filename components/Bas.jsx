import Link from "next/link";
import { Jost, Playfair_Display } from "next/font/google";
import { ArrowRight, CalendarCheck } from "lucide-react";

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const jost = Jost({ subsets: ["latin"] });

export default function BookSession() {
    return (
        <section className="relative w-full py-24 px-6 bg-slate-950 overflow-hidden">

            {/* background glow */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

            <div className="relative max-w-7xl mx-auto">

                {/* CARD CONTAINER */}
                <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                        {/* LEFT CONTENT */}
                        <div className="text-center md:text-left max-w-2xl">

                            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                                <CalendarCheck className="text-blue-400 w-5 h-5" />
                                <span className={`${jost.className} text-sm text-gray-400`}>
                                    Instant Scheduling Available
                                </span>
                            </div>

                            <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold text-white leading-tight`}>
                                Book a Session with{" "}
                                <span className="text-blue-400">Wyvern Experts</span>
                            </h2>

                            <p className={`${jost.className} text-gray-400 mt-4 leading-relaxed`}>
                                Get direct access to our communication specialists. We’ll help you
                                design, deploy, and optimize your enterprise communication system in minutes.
                            </p>

                            {/* trust line */}
                            <p className="mt-5 text-sm text-gray-500">
                                ✔ No commitment required • ✔ Instant response • ✔ Tailored consultation
                            </p>

                        </div>

                        {/* RIGHT CTA */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            {/* PRIMARY CTA */}
                            <Link href="/#demo">
                                <button className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-blue-500/30 transition">
                                    Book Now
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </Link>

                            {/* SECONDARY CTA */}
                            <Link href="/contact">
                                <button className="px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/10 transition">
                                    Contact Sales
                                </button>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}