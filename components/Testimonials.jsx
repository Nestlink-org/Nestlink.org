// components/home/Testimonials.jsx
'use client';

import { motion } from 'framer-motion';

const leaders = [
    { name: 'Amina K', role: 'CTO - FinTech', quote: 'Nestlink took our product to the next level.', rating: 5 },
    { name: 'John D', role: 'Head of Product', quote: 'Incredible motion & performance.', rating: 5 },
    { name: 'Rui L', role: 'VP Engineering', quote: 'Fast, reliable, highly skilled.', rating: 4 },
];

export default function Testimonials() {
    return (
        <section className="py-20 container mx-auto px-6">
            <h3 className="text-xl text-blue-300 uppercase tracking-wider mb-6">What leaders say</h3>

            <div className="grid md:grid-cols-3 gap-6">
                {leaders.map((l, i) => (
                    <motion.div
                        key={l.name}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                {l.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                            </div>
                            <div>
                                <div className="font-semibold">{l.name}</div>
                                <div className="text-sm text-text-secondary">{l.role}</div>
                            </div>
                        </div>

                        <p className="mt-4 text-text-secondary">“{l.quote}”</p>
                        <div className="mt-4">
                            <div className="flex items-center gap-1">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <div key={idx} className={`text-sm ${idx < l.rating ? 'text-yellow-400' : 'text-white/20'}`}>★</div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
