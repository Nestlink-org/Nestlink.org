'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AboutHeroSection() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const titleRef = useRef();
    const [isTitleInView, setIsTitleInView] = useState(false);

    // Intersection Observer
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

    // Theme detection
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);
        const handler = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Floating dots
    const FloatingParticles = () => (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(50)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{
                        backgroundColor: isDarkMode ? '#fff' : '#333',
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
                        duration: Math.random() * 4 + 4,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}
        </div>
    );

    return (
        <section
            className={cn(
                'relative py-40 text-center px-6',
                isDarkMode ? 'bg-background text-foreground' : 'bg-muted text-foreground'
            )}
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Animated Grid overlay */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(to right, ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)'
                            } 1px, transparent 1px),
                                         linear-gradient(to bottom, ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.15)'
                            } 1px, transparent 1px)`,
                        backgroundSize: '50px 50px',
                    }}
                    animate={{ backgroundPosition: ['0 0', '100px 100px'] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />

                {/* Floating particles */}
                <FloatingParticles />

                {/* Glowing orbs */}
                <motion.div
                    className="absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl"
                    style={{ backgroundColor: 'rgba(96, 165, 250, 0.2)' }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full blur-3xl"
                    style={{ backgroundColor: 'rgba(147, 197, 253, 0.2)' }}
                    animate={{ scale: [1.3, 1, 1.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
                {/* Animated Title */}
                <div ref={titleRef}>
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                        style={{ color: 'var(--foreground)' }}
                        initial={{ opacity: 0, y: -40, letterSpacing: '1rem' }}
                        animate={
                            isTitleInView
                                ? { opacity: 1, y: 0, letterSpacing: '0.05em' }
                                : { opacity: 0, y: -40, letterSpacing: '1rem' }
                        }
                        transition={{ duration: 1.2, ease: 'easeOut' }}
                    >
                        DISCOVER{' '}
                        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                            NestLink
                        </span>
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
                    <p className="text-xl md:text-2xl leading-relaxed">
                        At{' '}
                        <span className="font-semibold text-primary">NestLink</span>, we
                        merge cutting-edge technology with boundless creativity to
                        deliver intelligent digital solutions that empower businesses
                        globally. Our philosophy is innovation-driven and people-first.
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
                            <div className="text-3xl md:text-4xl font-bold text-primary">
                                150+
                            </div>
                            <div className="text-sm text-foreground/60 mt-1">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary">
                                98%
                            </div>
                            <div className="text-sm text-foreground/60 mt-1">Success Rate</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary">
                                5+
                            </div>
                            <div className="text-sm text-foreground/60 mt-1">Years</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* CTA Buttons */}
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
                                boxShadow: '0 10px 25px -5px rgba(96, 165, 250, 0.4)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(buttonVariants(), 'px-8 py-4 rounded-full')}
                        >
                            Meet Our Team
                        </motion.button>
                    </Link>

                    <Link href="#core-values">
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                boxShadow: '0 10px 25px -5px rgba(147, 197, 253, 0.4)',
                            }}
                            whileTap={{ scale: 0.95 }}
                            className={cn(
                                buttonVariants({ variant: 'outline' }),
                                'px-8 py-4 rounded-full'
                            )}
                        >
                            Our Core Values
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
                    <span className="text-foreground/60 text-sm mb-2">
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1, repeat: Infinity }}
                            className="w-1 h-3 bg-primary rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
