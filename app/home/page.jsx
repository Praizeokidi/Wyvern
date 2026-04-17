
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import FeaturesStat from "@/components/FeaturesStats";
import Services from "@/components/Services";
import Partners from "@/components/Partners";
import Contact from "@/components/Contact";
import { FAQSection } from "@/components/FAQSection";
import Blog from "@/components/Blog";
import "./globals.css";

export default function Home() {
    return (
        <main className="relative bg-white">
            <Navbar />
            <Hero />
            <Features />
            <FeaturesStat />
            <Services />
            <Partners />
            <Contact />
            <FAQSection />
            <Blog />
            <Footer />
        </main>
    );
}


