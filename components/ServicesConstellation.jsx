// components/home/ServicesConstellation.jsx
'use client';

import { motion } from 'framer-motion';

const services = [
    { title: '3D Websites', desc: 'Interactive product experiences' },
    { title: 'Cloud Expansion', desc: 'Scale with modern infra' },
    { title: 'AI Solutions', desc: 'Smart automation & insights' },
    { title: 'UX & Motion', desc: 'Interfaces that delight' },
    { title: 'Data Pipelines', desc: 'Reliable analytics' },
    { title: 'DevOps', desc: 'Deploy with confidence' },
];

export default function ServicesConstellation() {
    return (
        <section className="py-20 container mx-auto px-6" id="work">
            <h3 className="text-xl text-blue-300 uppercase tracking-wider mb-6">Our Services</h3>
            <h2 className="text-3xl font-bold mb-8">Services constellation</h2>

            <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((s, idx) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, scale: 0.9, y: 12 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.08, duration: 0.6 }}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5 backdrop-blur-sm shadow-lg"
                        >
                            <div className="text-2xl font-semibold mb-2 text-white">{s.title}</div>
                            <div className="text-sm text-text-secondary">{s.desc}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Constellation lines (decorative) */}
                <svg className="absolute inset-0 pointer-events-none" preserveAspectRatio="none">
                    <g stroke="rgba(99,102,241,0.08)" strokeWidth="1">
                        <line x1="10%" y1="20%" x2="45%" y2="40%" />
                        <line x1="45%" y1="40%" x2="80%" y2="20%" />
                        <line x1="30%" y1="70%" x2="60%" y2="60%" />
                    </g>
                </svg>
            </div>
        </section>
    );
}
