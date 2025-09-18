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
        { label: 'Revenue helped (USD)', value: 120, suffix: 'k+', color: 'from-cyan-400 to-blue-500' },
        { label: 'Projects delivered', value: 342, suffix: '+', color: 'from-purple-400 to-pink-500' },
        { label: 'Enterprise customers', value: 25, suffix: '+', color: 'from-green-400 to-emerald-500' },
        { label: 'Served clients', value: 180, suffix: '+', color: 'from-yellow-400 to-orange-500' },
        { label: 'Positive feedback', value: 97, suffix: '%', color: 'from-red-400 to-rose-500' },
    ];

    const refsCounts = stats.map((s) => useCountOnView(s.value));
    const titleRef = useRef();
    const [isTitleInView, setIsTitleInView] = useState(false);

    // Set up intersection observer for the title
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsTitleInView(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        if (titleRef.current) {
            observer.observe(titleRef.current);
        }

        return () => {
            if (titleRef.current) {
                observer.unobserve(titleRef.current);
            }
        };
    }, []);

    return (
        <section className="py-24 container mx-auto px-6 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM4MDIwZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wLDMwIGMzMCwwIDMwLDAgNjAsME0zMCwwIGMwLDMwIDAsMzAgMCw2MCIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-cyan-400"
                    initial={{
                        x: Math.random() * 100 + 'vw',
                        y: Math.random() * 100 + 'vh',
                        opacity: 0
                    }}
                    animate={{
                        y: [null, (Math.random() - 0.5) * 100],
                        x: [null, (Math.random() - 0.5) * 100],
                        opacity: [0, 0.7, 0],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Glowing orbs */}
            <motion.div
                className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px]"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 7, repeat: Infinity }}
            />

            {/* Title with repeating animation */}
            <div ref={titleRef}>
                <motion.h3
                    className="text-2xl md:text-4xl text-center uppercase tracking-widest mb-16 font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ opacity: 0, y: -20, letterSpacing: '1rem' }}
                    animate={isTitleInView ?
                        { opacity: 1, y: 0, letterSpacing: '0.5rem' } :
                        { opacity: 0, y: -20, letterSpacing: '1rem' }
                    }
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    PROVEN RESULTS
                </motion.h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
                {stats.map((s, idx) => {
                    const [ref, count] = refsCounts[idx];
                    return (
                        <motion.div
                            key={s.label}
                            ref={ref}
                            className="relative p-6 rounded-2xl border border-white/10 bg-gradient-to-b from-gray-900 to-black text-center cursor-pointer group overflow-hidden"
                            initial={{ opacity: 0, y: 30, rotateY: 15 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            whileHover={{
                                y: -10,
                                scale: 1.05,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Animated gradient border */}
                            <div className={`absolute inset-0 rounded-2xl p-px bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            {/* Holographic effect */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{
                                    background: `linear-gradient(to right, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
                                    backgroundSize: '200% 100%',
                                    animation: 'shine 1.5s infinite'
                                }}
                            ></div>

                            {/* Corner accents */}
                            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-cyan-400 opacity-70"></div>
                            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-cyan-400 opacity-70"></div>
                            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-cyan-400 opacity-70"></div>
                            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-cyan-400 opacity-70"></div>

                            {/* Glowing number with digital effect */}
                            <div className="relative">
                                <motion.div
                                    className={`text-4xl md:text-5xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r ${s.color}`}
                                    initial={{ textShadow: "0 0 0px rgba(255,255,255,0)" }}
                                    whileInView={{ textShadow: "0 0 10px currentColor, 0 0 20px currentColor" }}
                                    viewport={{ once: false }}
                                    transition={{ delay: idx * 0.1 + 0.5, duration: 1 }}
                                >
                                    {count}{s.suffix}
                                </motion.div>

                                {/* Digital noise effect on number */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-300"
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                        backgroundSize: '100%'
                                    }}
                                ></div>
                            </div>

                            {/* Label with subtle glow */}
                            <div className="text-sm md:text-base text-gray-300 font-medium relative z-10 group-hover:text-white transition-colors duration-300">
                                {s.label}
                            </div>

                            {/* Animated particles around the card */}
                            {[...Array(4)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className={`absolute w-1 h-1 rounded-full ${s.color.split(' ')[0].replace('from-', 'bg-')}`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    animate={{
                                        x: [0, Math.cos(i * 90) * 15],
                                        y: [0, Math.sin(i * 90) * 15],
                                        scale: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: i * 0.5,
                                    }}
                                />
                            ))}
                        </motion.div>
                    );
                })}
            </div>

            {/* CSS for shine animation */}
            <style jsx>{`
                @keyframes shine {
                    0% { background-position: -100% 0; }
                    100% { background-position: 200% 0; }
                }
            `}</style>
        </section>
    );
}