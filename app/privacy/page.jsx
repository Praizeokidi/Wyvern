'use client';


import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display } from "next/font/google";
import { Inter } from "next/font/google";
import { Jost } from "next/font/google";
import { Cairo } from "next/font/google";


const cairo = Cairo({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // optional but recommended
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});
const inter = Inter({ subsets: ["latin"] });

const jost = Jost({
    subsets: ["latin"],
});



export default function PrivacyPolicy() {
    return (
        <main className="bg-gray-50 text-gray-800">

            <Navbar />

            {/* HERO */}
            <section className="bg-gradient-to-b from-slate-500 to-slate-950 text-white py-8 px-6 text-center">
                <header className="text-center py-16 px-4 ">
                    <h1 className={`${jost.className} text-4xl md:text-5xl font-bold mb-4 mt-10`}>
                        Privacy & Cookie Policy
                    </h1>

                    <p className={`${jost.className} text-lg opacity-90`}>
                        Your privacy is important to us
                    </p>

                    <p className={`${jost.className} mt-2 text-sm opacity-70`}>
                        Home / Privacy Policy
                    </p>
                </header>
            </section>

            {/* CONTENT WRAPPER (FIXED) */}
            <section className="max-w-6xl mx-auto px-20 py-12 space-y-8">

                <div className="mb-1">

                    <h2 className={`${jost.className} text-4xl text-gray-900 font-bold`}>
                        Introduction
                    </h2>

                    <p className={`${jost.className} text-gray-600 text-lg leading-relaxed`}>
                        WYVERN ensures it manages your personal data in line with the General Data Protection Regulation (GDPR) and as such we are committed to fair information practices and we respect the privacy and security of our users. Our goal is to provide you with a personalized Internet experience that delivers the information, resources, and services that are most relevant and helpful to you. In order to achieve this goal, we sometimes collect information during your visit to understand what differentiates you from each of our millions of other users, and we may also ask you for personal information that enables us to give you access to some parts of our web site. We will not disclose your information to any person outside our organisation except as described in this Privacy Policy.

                        <br />
                        <br />
                        To demonstrate our commitment to your privacy, we have prepared this statement disclosing our privacy practices. This statement describes what personal identifying information is collected, how and when we might use your information, how we protect your information, who has access to your information, and how you can correct any inaccuracies in the information.  In today’s interconnected world, effective communication is essential for businesses to thrive. Our cutting-edge voice and video conference solution empowers teams to collaborate seamlessly, regardless of their physical location.

                    </p>

                </div>

                {/* ALL OTHER SECTIONS GO LIKE THIS */}
                <div className="mb-8">
                    <h3 className={`${jost.className} text-gray-900 text-xl font-bold`}>
                        Information Collected By Us
                    </h3>

                    <p className={`${cairo.className} text-gray-600 text-lg leading-relaxed`}>
                        We collect certain information from and about our visitors in three ways: from our web server logs, by means of cookies, and directly from you.

                    </p>
                </div>

                {/* repeat pattern for remaining sections */}

                <h3 className={`${jost.className} text-gray-900 text-xl font-bold mb-1`} >
                    Web Server Logs
                </h3>

                <p className={`${cairo.className} text-gray-600 text-lg leading-relaxed`}>
                    When you visit our WYVERN sites, we may track information to administer the site and analyze its usage. Examples of information we may track include your internet protocol address, what kind of browser or computer you use, the number of links you click within the site, the state or country from which you accessed the site, the date and time of your visit, the name of your internet services provider, the last page you viewed before visiting our site, and the pages you viewed on the site.
                </p>

                <h3 className={`${jost.className} text-gray-900 -mt-3 text-xl font-bold mb-1`} >
                    Cookies
                </h3>
                <p className={`${cairo.className} text-gray-600 mb-1 text-lg leading-relaxed`}>
                    If your browser allows it, our web sites use cookies, which are small text files which your computer creates or modifies on instruction of the page opened in your browser. These are used to save your preferences and login information. Enabling these cookies is not strictly necessary for the website to work but it will provide you with a better browsing experience. You can delete or block these cookies, but if you do that some features of this site may not work as intended. We use the following cookies:
                </p>
                <ol className={`${cairo.className} text-gray-600 -mt-1 mb-1 text-lg leading-relaxed list-decimal list-outside pl-5 `}>
                    <li> Site functionality cookies – these cookies allow you to navigate the site and use our features.</li>
                    <li>Site analytics cookies – these cookies allow us to measure and analyze how our customers use the site, to improve its functionality and the user experience.</li>
                    <li>Targeting or advertising cookies – these cookies are used to deliver ads relevant to our users.</li>
                </ol>

                <h3 className={`${jost.className} text-gray-900 mb-1 text-xl font-bold`} >
                    Information from You
                </h3>
                <p className={`${cairo.className} text-gray-600 mb-3 text-lg leading-relaxed`}>
                    Visitors can register to obtain access to some parts of our web site (i.e. support pages). Some of the information requested will be required for registration, and some may be optional. Also, we may ask you to disclose personal information to enable us to provide assistance and information to you. In many cases we believe it is in our legitimate interests to use your data to facilitate contact (for example to provide product updates to existing customers or to deliver support services), however, when required, we will ask for your consent to use your personal information for the intended purpose. We will not use it for any other purposes without your explicit consent. If you would like your data to be deleted at any point in time please email us at <a
                        href="mailto:wyvernglobalservice@gmail.com"
                        className="text-blue-500 hover:text-blue-400 underline transition"
                    >
                        wyvernglobalservice@gmail.com
                    </a>
                </p>

                <h3 className={`${jost.className} text-gray-900 text-xl font-bold mb-3`} >
                    Use and Access to Information
                </h3>

                <h3 className={`${jost.className} text-gray-900 text-xl font-bold`} >
                    Security and Confidentiality
                </h3>
                <p className={`${cairo.className} text-gray-600 -mt-8 mb-6 text-lg leading-relaxed`}>
                    We use technical security measures to prevent the loss, misuse and alteration of information under our control and information about our subscribers and their website usage is maintained in a secure environment. Information about our subscribers and their website usage is not shared with third parties for any marketing purposes. We do not disclose any information about any subscribers’ usage of our website except in specific cases, for example if required to do so by law, and we do not share information with any unaffiliated third parties for marketing purposes unless you expressly give us permission to do so.
                </p>

                <h3 className={`${jost.className} text-gray-900 text-xl font-bold`} >
                    Identifiable Information
                </h3>
                <p className={`${cairo.className} text-gray-600 -mt-8 mb-6 text-lg leading-relaxed`}>
                    We will share your personal data as required by law or by the order of any competent court or governmental authority or in matters of public safety or policy. Under strict conditions of confidentiality we may share your personal data with agents and contractors who use it on our behalf or in connection with their relationship with us. We will also share your personal data as may be needed in connection with the enforcement of agreements.
                </p>

                <h3 className={`${jost.className} text-gray-900 -mt-2 text-xl font-bold`} >
                    Anonymous Information
                </h3>
                <p className={`${cairo.className} text-gray-600 -mt-8 mb-6 text-lg leading-relaxed`}>
                    We may provide summary statistics about the interests and preferences of visitors of our web site, traffic patterns and related site information. These statistics do not include personally identifiable information.
                </p>

                <h3 className={`${jost.className} text-gray-900 -mt-2 text-xl font-bold`} >
                    Promotional Messages
                </h3>
                <p className={`${cairo.className} text-gray-600 -mt-8 mb-6 text-lg leading-relaxed`}>
                    You will not receive any promotional messages from us unless you opted to allow us to do so. If you don’t want to receive promotional materials from us, you can opt out at any time. Please use our contact page to send us a message clearly stating that you wish to opt out and stop receiving promotional messages.
                </p>

                <h3 className={`${jost.className} text-gray-900 -mt-2 text-xl font-bold`} >
                    Privacy Policy Changes
                </h3>
                <p className={`${cairo.className} text-gray-600 -mt-8 mb-6 text-lg leading-relaxed`}>
                    If our information practices change in a significant way, we will post and highlight the policy changes.
                </p>



            </section>

            <Footer />

        </main>
    )
}