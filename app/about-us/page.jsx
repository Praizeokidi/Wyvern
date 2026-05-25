"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <main className={`${jost.className} bg-white text-slate-900`}>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative py-36 px-6 text-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/hero2.jpg')" }}
        />

        {/* premium cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/90" />
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />

        <div className="relative max-w-5xl mx-auto">

          <p className="text-blue-300 tracking-[0.35em] uppercase text-xs mb-6">
            About Wyvern
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-white">
            Infrastructure for the
            <span className="text-blue-400"> next generation</span>
            <br /> of communication
          </h1>

          <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Wyvern is a global SaaS infrastructure company building secure,
            scalable communication systems that power modern enterprises,
            platforms, and digital ecosystems.
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Talk to Us
            </Link>

            <Link
              href="/downloads"
              className="border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
            >
              Explore Platform
            </Link>
          </div>

        </div>
      </section>

      {/* ================= BRAND STORY (WHY WE EXIST) ================= */}
      <section className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-blue-600 uppercase tracking-widest text-xs mb-4">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            We are rebuilding how digital communication infrastructure works.
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Most communication systems were not built for modern scale.
            They are fragmented, slow, and insecure at enterprise level.
          </p>

          <p className="text-slate-600 mt-5 leading-relaxed">
            Wyvern exists to eliminate that friction — delivering unified,
            high-performance communication infrastructure that scales globally
            without complexity.
          </p>
        </div>

        <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/about.jpg"
            alt="Wyvern Infrastructure"
            fill
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 to-transparent" />
        </div>

      </section>

      {/* ================= VALUE PROPOSITION ================= */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto text-center mb-16">

          <h2 className="text-4xl font-bold">
            Built like global infrastructure should be
          </h2>

          <p className="text-slate-600 mt-3 max-w-2xl mx-auto">
            Enterprise-grade systems designed for performance, resilience, and scale.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {[
            {
              title: "Security at Core Level",
              desc: "End-to-end encrypted architecture built for enterprise compliance."
            },
            {
              title: "High-Throughput Systems",
              desc: "Optimized infrastructure designed for real-time communication at scale."
            },
            {
              title: "Global Elastic Scaling",
              desc: "Seamlessly expand across regions without architectural limitations."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="p-10 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= PROOF / METRICS ================= */}
      <section className="py-32 px-6 text-center bg-white">

        <h2 className="text-4xl font-bold mb-16">
          Trusted by modern digital teams
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16">

          <div>
            <h3 className="text-6xl font-bold text-blue-600">5+</h3>
            <p className="text-slate-600 mt-3">Years of system engineering</p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-blue-600">10K+</h3>
            <p className="text-slate-600 mt-3">Connected users & systems</p>
          </div>

          <div>
            <h3 className="text-6xl font-bold text-blue-600">99.99%</h3>
            <p className="text-slate-600 mt-3">Uptime reliability target</p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-36 px-6 overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: "url('/hero3.jpg')" }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/75 to-slate-950/95" />
        <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay" />

        <div className="relative max-w-5xl mx-auto text-center text-white">

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            Let’s build the future of communication together
          </h2>

          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Join organizations modernizing their infrastructure with Wyvern’s scalable SaaS systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <Link
              href="/contact"
              className="bg-white text-slate-900 px-10 py-4 rounded-2xl font-semibold hover:scale-105 transition"
            >
              Start a Conversation
            </Link>

            <Link
              href="/downloads"
              className="border border-white/30 px-10 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
            >
              View Platform
            </Link>

          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}