// components/home/InnovationSpotlight.jsx
'use client';

import { motion } from 'framer-motion';

const items = [
    { title: 'Realtime Collaboration', desc: 'Work together with 3D scenes.' },
    { title: 'Edge AI', desc: 'Run models near data sources.' },
    { title: 'Zero-trust infra', desc: 'Security-first cloud architectures.' },
];

export default function InnovationSpotlight() {
    return (
        <section className="py-20 container mx-auto px-6">
            <h3 className="text-xl text-blue-300 uppercase tracking-wider mb-6">Innovation spotlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
                {items.map((it, i) => (
                    <motion.div
                        key={it.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5"
                    >
                        <div className="text-xl font-bold mb-2">{it.title}</div>
                        <div className="text-text-secondary text-sm">{it.desc}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
