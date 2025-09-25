'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

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
                            const eased = 1 - Math.pow(1 - t, 3);
                            const value = Math.floor(from + (target - from) * eased);
                            setCount(value);
                            if (t < 1) frameId = requestAnimationFrame(step);
                        };
                        frameId = requestAnimationFrame(step);
                    } else {
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
        { label: 'Revenue helped (USD)', value: 120, suffix: 'k+', color: 'from-cyan-200 to-blue-500' },
        { label: 'Projects delivered', value: 342, suffix: '+', color: 'from-purple-400 to-pink-500' },
        { label: 'Enterprise customers', value: 25, suffix: '+', color: 'from-green-400 to-emerald-500' },
        { label: 'Served clients', value: 180, suffix: '+', color: 'from-yellow-400 to-orange-500' },
        { label: 'Positive feedback', value: 97, suffix: '%', color: 'from-red-400 to-rose-500' },
    ];

    const refsCounts = stats.map((s) => useCountOnView(s.value));
    const titleRef = useRef();
    const [isTitleInView, setIsTitleInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsTitleInView(entry.isIntersecting),
            { threshold: 0.5 }
        );

        if (titleRef.current) observer.observe(titleRef.current);

        return () => {
            if (titleRef.current) observer.unobserve(titleRef.current);
        };
    }, []);

    return (
        <section className="py-24 container mx-auto px-6 relative">
            <div ref={titleRef}>
                <motion.h3
                    className="text-2xl md:text-4xl text-center uppercase tracking-widest mb-16 font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ opacity: 0, y: -20, letterSpacing: '1rem' }}
                    animate={isTitleInView
                        ? { opacity: 1, y: 0, letterSpacing: '0.5rem' }
                        : { opacity: 0, y: -20, letterSpacing: '1rem' }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    PROVEN RESULTS
                </motion.h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {stats.map((s, idx) => {
                    const [ref, count] = refsCounts[idx];
                    return (
                        <Card
                            key={s.label}
                            ref={ref}
                            className="relative p-6 text-center group overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
                        >
                            {/* Gradient border */}
                            <div className={`absolute inset-0 rounded-2xl p-px bg-gradient-to-r ${s.color} opacity-10`}></div>

                            {/* Count number */}
                            <motion.div
                                className={`text-4xl lg:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r ${s.color}`}
                                initial={{ textShadow: "0 0 0px rgba(255,255,255,0)" }}
                                whileInView={{ textShadow: "0 0 10px currentColor, 0 0 20px currentColor" }}
                                viewport={{ once: false }}
                                transition={{ delay: idx * 0.1 + 0.5, duration: 1 }}
                            >
                                {count}{s.suffix}
                            </motion.div>

                            {/* Label */}
                            <div className="text-sm md:text-base font-medium relative z-10 text-foreground">
                                {s.label}
                            </div>

                            {/* Card particles */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-1 h-1 rounded-full ${s.color.split(' ')[0].replace('from-', 'bg-')}`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    animate={{
                                        x: [0, Math.cos(i * 120) * 12],
                                        y: [0, Math.sin(i * 120) * 12],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: i * 0.4,
                                    }}
                                />
                            ))}
                        </Card>
                    );
                })}
            </div>
        </section>
    );
}
