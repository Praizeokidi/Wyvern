import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonial from "@/components/Testimonials";
import BookSession from "@/components/Bas";
import { Jost, Playfair_Display, Cairo } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "600", "700"] });
const cairo = Cairo({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export default function SipTrunkingPage() {
    return (
        <div className={`${jost.className} bg-slate-950 text-white overflow-x-hidden`}>
            <Navbar />

            {/* ================= HERO ================= */}
            <section className="relative overflow-hidden py-28 md:py-36">

                {/* background layers */}
                <div className="absolute inset-0 bg-[url('/sip-trunking.jpg')] bg-cover bg-center opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950/95 to-slate-950" />
                <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

                    {/* LEFT TEXT */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
                            Cloud Voice Infrastructure
                        </div>

                        <h1 className={`${playfair.className} text-5xl md:text-6xl font-bold leading-tight`}>
                            SIP Trunking <br />
                            <span className="text-blue-400">Modern Voice Connectivity</span>
                        </h1>

                        <p className={`${cairo.className} text-gray-300 mt-6 text-lg leading-relaxed`}>
                            Transform your business communication with scalable, cost-efficient
                            and carrier-grade SIP Trunking built for modern enterprises.
                        </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[600px] lg:max-w-[680px]">

                            <div className="absolute -inset-10 bg-blue-500/10 blur-3xl rounded-full" />

                            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl">

                                <Image
                                    src="/sip-trunk.jpg"
                                    alt="SIP Trunking"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto object-contain p-8"
                                />

                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-14 lg:-mt-16 relative z-10">

                <div className="space-y-16">

                    {/* BLOCK 1 */}
                    <div>
                        <h2 className={`${playfair.className} text-3xl md:text-4xl font-bold`}>
                            What is SIP Trunking?
                        </h2>

                        <p className={`${cairo.className} text-gray-300 mt-4 leading-relaxed`}>
                            SIP Trunking replaces traditional phone lines with a secure internet-based
                            communication system that connects your PBX to the global telecom network.
                        </p>
                    </div>

                    {/* BLOCK 2 GRID */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Reduce communication costs significantly",
                            "Scale instantly without physical lines",
                            "Enable remote & hybrid workforce connectivity",
                            "Improve call quality & reliability",
                            "Integrate easily with existing PBX systems",
                            "Global connectivity with local flexibility",
                        ].map((item, i) => (
                            <div key={i} className="flex gap-3">
                                <div className="w-2 h-2 mt-2 rounded-full bg-blue-400" />
                                <p className="text-gray-300">{item}</p>
                            </div>
                        ))}
                    </div>

                    {/* BLOCK 3 */}
                    <div>
                        <h3 className={`${jost.className} text-2xl font-semibold`}>
                            How SIP Trunking Works
                        </h3>

                        <p className="text-gray-400 mt-3 leading-relaxed">
                            SIP Trunking connects your internal phone system (PBX) to the internet,
                            replacing physical phone lines with a flexible, cloud-based voice network.
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Virtual Numbers",
                                desc: "Get global numbers without physical infrastructure."
                            },
                            {
                                title: "Smart Call Routing",
                                desc: "Route calls efficiently to improve response time."
                            },
                            {
                                title: "Call Recording",
                                desc: "Monitor and improve communication quality."
                            },
                            {
                                title: "Seamless Integration",
                                desc: "Works with existing PBX and CRM systems."
                            },
                        ].map((f, i) => (
                            <div
                                key={i}
                                className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
                            >
                                <h4 className="text-white font-semibold text-lg">{f.title}</h4>
                                <p className="text-gray-400 mt-2 text-sm">{f.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ================= CTA ================= */}
            <section className="relative py-24 px-6 overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-black" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#3b82f6,transparent_60%)]" />

                <div className="relative max-w-4xl mx-auto text-center">

                    <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold`}>
                        Upgrade to Enterprise Voice Infrastructure
                    </h2>

                    <p className="text-gray-300 mt-6">
                        Deploy SIP Trunking with WYVERN and experience scalable, secure,
                        and cost-efficient communication.
                    </p>

                    <div className="mt-10">
                        <button className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-2xl font-semibold transition">
                            Get Started
                        </button>
                    </div>

                </div>
            </section>

            <BookSession />
            <Testimonial />
            <Footer />
        </div>
    );
}