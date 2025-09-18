// components/home/Journey.jsx
'use client';

import { motion } from 'framer-motion';

const steps = [
    { year: '2016', title: 'Foundation', desc: 'Started with a small team and big ideas.' },
    { year: '2019', title: 'Product Market Fit', desc: 'Launched first flagship product.' },
    { year: '2021', title: 'Cloud Expansion', desc: 'Migrated clients to scalable infra.' },
    { year: '2024', title: 'Global Scaling', desc: 'Expanded to multiple markets.' },
];

export default function Journey() {
    return (
        <section className="py-20 container mx-auto px-6">
            <h3 className="text-xl text-blue-300 uppercase tracking-wider mb-6">Our Journey</h3>
            <div className="grid md:grid-cols-4 gap-6">
                {steps.map((s, i) => (
                    <motion.div
                        key={s.year}
                        initial={{ opacity: 0, y: 20, rotateX: 6 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.12, duration: 0.6 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5 backdrop-blur-sm"
                    >
                        <div className="text-sm text-blue-300 font-semibold">{s.year}</div>
                        <div className="text-lg font-bold mt-2">{s.title}</div>
                        <p className="mt-3 text-text-secondary text-sm">{s.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
