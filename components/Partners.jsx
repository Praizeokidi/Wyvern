'use client';

export default function Partners() {
    return (
        <div>
            <section className="bg-gray-100 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-xl font-semibold text-blue-700 mb-8">
                        Our Partners
                    </h2>

                    <div className="bg-white rounded-xl p-6 shadow flex flex-wrap justify-center items-center gap-8">
                        {/* Replace with real logos */}
                        {["logo1", "logo2", "logo3", "logo4", "logo5"].map((logo, i) => (
                            <div key={i} className="w-24 h-12 bg-gray-200 rounded"></div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}