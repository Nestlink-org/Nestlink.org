'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function useCountOnView(target) {
    const ref = useRef();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let frameId;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const duration = 1600;
                        const start = performance.now();
                        const from = 0;

                        const step = (now) => {
                            const t = Math.min(1, (now - start) / duration);
                            const value = Math.floor(from + (target - from) * t);
                            setCount(value);
                            if (t < 1) frameId = requestAnimationFrame(step);
                        };
                        frameId = requestAnimationFrame(step);
                    } else {
                        // Reset to 0 when not in view
                        setCount(0);
                        cancelAnimationFrame(frameId);
                    }
                });
            },
            { threshold: 0.5 }
        );

        io.observe(el);
        return () => {
            io.disconnect();
            cancelAnimationFrame(frameId);
        };
    }, [target]);

    return [ref, count];
}

export default function Stats() {
    const stats = [
        { label: 'Revenue helped (USD)', value: 120, suffix: 'k+' },
        { label: 'Projects delivered', value: 342, suffix: '+' },
        { label: 'Enterprise customers', value: 25, suffix: '+' },
        { label: 'Served clients', value: 180, suffix: '+' },
        { label: 'Positive feedback', value: 97, suffix: '%' },
    ];

    const refsCounts = stats.map((s) => useCountOnView(s.value));

    return (
        <section className="py-20 container mx-auto px-6">
            <motion.h3
                className="text-xl md:text-2xl text-center text-blue-300 uppercase tracking-wider mb-12 font-semibold"
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Proven Results
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {stats.map((s, idx) => {
                    const [ref, count] = refsCounts[idx];
                    return (
                        <motion.div
                            key={s.label}
                            ref={ref}
                            className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/2 border border-white/5 text-center shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: idx * 0.08, duration: 0.6 }}
                        >
                            <div className="text-3xl md:text-4xl font-extrabold text-white mb-2">{count}{s.suffix}</div>
                            <div className="text-sm md:text-base text-text-secondary">{s.label}</div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}
