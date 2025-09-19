'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function AboutHeroSection() {
    const [isDarkMode, setIsDarkMode] = useState(true);
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

    // Connect to your theme context
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handler = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Floating particles component
    const FloatingParticles = () => {
        return (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(50)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                            width: Math.random() * 4 + 1,
                            height: Math.random() * 4 + 1,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.7,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, Math.random() * 20 - 10, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>
        );
    };

    return (
        <section className="relative py-40 text-center px-6 bg-gradient-to-br ">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>

                {/* Floating particles */}
                <FloatingParticles />

                {/* Glowing orbs */}
                <motion.div
                    className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Animated Title */}
                <div ref={titleRef}>
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-white"
                        initial={{ opacity: 0, y: -40, letterSpacing: '1rem' }}
                        animate={isTitleInView ?
                            { opacity: 1, y: 0, letterSpacing: '0.05em' } :
                            { opacity: 0, y: -40, letterSpacing: '1rem' }
                        }
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        DISCOVER <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">NestLink</span>
                    </motion.h1>
                </div>

                {/* Animated Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.3, duration: 1 }}
                    className="mt-8 max-w-4xl mx-auto"
                >
                    <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                        At <span className="font-semibold text-cyan-400">NestLink</span>, we merge cutting-edge technology with boundless creativity to deliver intelligent digital solutions that empower businesses globally. Our philosophy is innovation-driven and people-first.
                    </p>

                    {/* Stats Bar */}
                    <motion.div
                        className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400">150+</div>
                            <div className="text-sm text-white/60 mt-1">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400">98%</div>
                            <div className="text-sm text-white/60 mt-1">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-cyan-400">5+</div>
                            <div className="text-sm text-white/60 mt-1">Years</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Animated CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.9, duration: 1 }}
                    className="mt-16 flex justify-center gap-6 flex-wrap"
                >
                    <Link href="#leadership">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg shadow-lg relative overflow-hidden group"
                        >
                            <span className="relative z-10">Meet Our Team</span>
                            <motion.div
                                className="absolute inset-0 bg-white/20"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.button>
                    </Link>

                    <Link href="#core-values">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-700 to-indigo-700 text-white font-semibold text-lg shadow-lg border border-blue-500/30 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Our Core Values</span>
                            <motion.div
                                className="absolute inset-0 bg-white/10"
                                initial={{ x: '-100%' }}
                                whileHover={{ x: '100%' }}
                                transition={{ duration: 0.6 }}
                            />
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 1.2, duration: 1 }}
                    className="mt-20 flex flex-col items-center"
                >
                    <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </div>

            {/* Animated Background Shapes */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-400/10 blur-xl"
                animate={{
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-24 h-24 rounded-full bg-blue-400/10 blur-xl"
                animate={{
                    x: [0, -15, 0],
                    y: [0, 15, 0],
                }}
                transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            />
        </section>
    );
}