// components/home/Stats.jsx
'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function useCountOnView(target) {
    const ref = useRef();
    const [count, setCount] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let started = false;
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !started) {
                        started = true;
                        const duration = 1600;
                        const start = performance.now();
                        const from = 0;

                        const step = (now) => {
                            const t = Math.min(1, (now - start) / duration);
                            const value = Math.floor(from + (target - from) * t);
                            setCount(value);
                            if (t < 1) requestAnimationFrame(step);
                        };
                        requestAnimationFrame(step);
                    }
                });
            },
            { threshold: 0.5 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [target]);

    return [ref, count];
}

export default function Stats() {
    const [rRef, revenue] = useCountOnView(120); // e.g., 120k
    const [pRef, projects] = useCountOnView(342);
    const [uRef, users] = useCountOnView(25);

    return (
        <section className="py-20 container mx-auto px-6">
            <h3 className="text-xl text-blue-300 uppercase tracking-wider mb-6">Proven Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5 text-center"
                >
                    <div ref={rRef} className="text-4xl font-extrabold text-white">
                        {revenue}k+
                    </div>
                    <div className="mt-2 text-text-secondary">Revenue helped (USD)</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5 text-center"
                >
                    <div ref={pRef} className="text-4xl font-extrabold text-white">{projects}+</div>
                    <div className="mt-2 text-text-secondary">Projects delivered</div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.16 }}
                    className="p-8 rounded-2xl bg-gradient-to-br from-white/3 to-white/2 border border-white/5 text-center"
                >
                    <div ref={uRef} className="text-4xl font-extrabold text-white">{users}+</div>
                    <div className="mt-2 text-text-secondary">Enterprise customers</div>
                </motion.div>
            </div>
        </section>
    );
}
