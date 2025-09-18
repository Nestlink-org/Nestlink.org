// components/home/Stories.jsx
'use client';

import { motion } from 'framer-motion';

const stories = [
    { title: 'Fintech Platform', img: '', summary: 'Cut costs by 40% and increased conversions.' },
    { title: 'Retail AR', img: '', summary: 'Immersive product try-ons led to +25% sales.' },
    { title: 'Logistics AI', img: '', summary: 'Route optimization saved 18% fuel.' },
];

export default function Stories() {
    return (
        <section className="py-20 container mx-auto px-6">
            <h3 className="text-xl text-blue-300 uppercase tracking-wider mb-6">Transformation Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {stories.map((s, i) => (
                    <motion.div
                        key={s.title}
                        initial={{ opacity: 0, y: 20, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/3 to-white/2 border border-white/5"
                    >
                        <div className="h-40 bg-gradient-to-tr from-blue-700 to-purple-700/80 flex items-center justify-center text-3xl text-white">
                            IMG
                        </div>
                        <div className="p-6">
                            <h4 className="text-lg font-bold">{s.title}</h4>
                            <p className="mt-2 text-sm text-text-secondary">{s.summary}</p>
                            <div className="mt-4">
                                <a className="text-blue-300 hover:underline" href="#">Read case study →</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
