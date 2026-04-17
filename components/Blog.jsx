'use client';


export default function Blog() {
    return (
        <section className="bg-gradient-to-b from-blue-800 to-slate-950 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-center text-xl font-semibold mb-10">
                    WYVERN Blog
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((post) => (
                        <div
                            key={post}
                            className="bg-slate-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                        >
                            <div className="h-40 bg-gray-300"></div>

                            <div className="p-4">
                                <h3 className="text-sm font-semibold mb-2">
                                    Sample Blog Title
                                </h3>
                                <p className="text-xs text-gray-400">
                                    5 min read • 2024
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}