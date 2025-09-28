'use client';

import { motion, useMotionValue, animate } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
    const { theme } = useTheme();
    const strokeColor = theme === 'dark' ? '#fff' : '#000';

    const globeX = useMotionValue(0);
    const globeY = useMotionValue(0);
    const globeRotate = useMotionValue(0);
    const globeScale = useMotionValue(1);
    const lastScrollY = useRef(0);

    // Set max horizontal offset (pixels)
    const MAX_LEFT_OFFSET = -180; // adjust as needed

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const delta = scrollY - lastScrollY.current;
            lastScrollY.current = scrollY;

            // Calculate new X position but clamp it
            let nextX = globeX.get() - delta * 2;
            if (nextX < MAX_LEFT_OFFSET) nextX = MAX_LEFT_OFFSET;
            if (nextX > 0) nextX = 0;

            animate(globeX, nextX, { type: 'spring', stiffness: 120, damping: 20 });
            animate(globeRotate, globeRotate.get() + delta * 0.2, { type: 'spring', stiffness: 120, damping: 25 });
            animate(globeScale, 1 + Math.sin(scrollY / 1000) * 0.02, { type: 'spring', stiffness: 80, damping: 20 });
            animate(globeY, Math.sin(scrollY / 300) * 15, { type: 'spring', stiffness: 50, damping: 15 });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [globeX, globeY, globeRotate, globeScale]);

    const lineAnimation = { strokeDasharray: 1130, strokeDashoffset: [1130, 0, 0, 1130] };
    const lineTransition = { duration: 10, ease: 'easeInOut', times: [0, 0.4, 0.6, 1], repeat: Infinity };

    return (
        <section className="w-full min-h-screen flex items-center relative overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full relative">

                {/* LEFT SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:w-[55%] w-full font-[ClashDisplay] max-w-4xl z-20 px-6 lg:px-16 relative pt-28 lg:pt-0"
                >
                    <h1 className="text-5xl font-bold tracking-tight">
                        <span className="text-foreground">Nest</span>
                        <span className="text-primary">Link</span>
                    </h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-4"
                    >
                        <span className="block">Organisations built</span>
                        <span className="block text-primary">
                            for the <span className="italic font-extralight">Perfect</span> 3D future
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="mt-6 text-lg text-muted-foreground max-w-xl"
                    >
                        We create immersive, interactive web experiences — 3D visualizations,
                        cloud expansions, and AI-driven tools that scale. Elevate your brand
                        with motion, depth and measurable results.
                    </motion.p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Link href="/projects">
                            <Button size="lg" className="gap-2">
                                Explore Our Work →
                            </Button>
                        </Link>
                        <Link href="/pricing">
                            <Button size="lg" variant="outline" className="gap-2">
                                Talk to Sales
                            </Button>
                        </Link>
                    </div>
                </motion.div>

                {/* RIGHT SECTION: Globe */}
                <motion.div
                    style={{ x: globeX, y: globeY, rotate: globeRotate, scale: globeScale }}
                    className="lg:w-[45%] w-full relative flex flex-col items-end justify-center"
                >
                    <div className="absolute right-0 flex items-center justify-center lg:relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 400 400"
                            className="w-[350px] h-[350px] md:w-[500px] md:h-[500px] transition-opacity duration-500 md:opacity-100 opacity-15 -z-10"
                        >
                            <motion.circle
                                cx="200"
                                cy="200"
                                r="180"
                                fill="none"
                                stroke={strokeColor}
                                strokeWidth="2"
                                initial={{ strokeDashoffset: 1130 }}
                                animate={lineAnimation}
                                transition={lineTransition}
                            />
                            {[...Array(6)].map((_, i) => (
                                <motion.ellipse
                                    key={`meridian-${i}`}
                                    cx="200"
                                    cy="200"
                                    rx={180 - i * 30}
                                    ry="180"
                                    fill="none"
                                    stroke={strokeColor}
                                    strokeWidth="1"
                                    initial={{ strokeDashoffset: 1130 }}
                                    animate={lineAnimation}
                                    transition={lineTransition}
                                />
                            ))}
                            {[...Array(6)].map((_, i) => (
                                <motion.ellipse
                                    key={`latitude-${i}`}
                                    cx="200"
                                    cy="200"
                                    rx="180"
                                    ry={180 - i * 30}
                                    fill="none"
                                    stroke={strokeColor}
                                    strokeWidth="1"
                                    initial={{ strokeDashoffset: 1130 }}
                                    animate={lineAnimation}
                                    transition={lineTransition}
                                />
                            ))}
                        </svg>
                    </div>

                    {/* Floating wireframe lines behind globe */}
                    <div className="absolute inset-0 -z-20 pointer-events-none">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-[2px] h-[120px] bg-gradient-to-b from-transparent via-primary/20 to-transparent rounded"
                                initial={{ y: -60, opacity: 0.2 }}
                                animate={{ y: [-60, 60, -60] }}
                                transition={{
                                    duration: 8 + i,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: i * 0.2
                                }}
                                style={{ left: `${(i * 7) + 20}%` }}
                            />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-md text-center text-muted-foreground space-y-4 mt-6 hidden md:block"
                    >
                        <p>
                            Our 3D-inspired frameworks are not just visuals — they are immersive
                            experiences, engineered to captivate and connect.
                        </p>
                        <p>
                            The future is interactive, and NestLink is building the wireframes
                            that carry ideas across borders, industries, and imaginations.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
