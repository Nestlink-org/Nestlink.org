// components/home/HeroSection.jsx
'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useScroll } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    const videoControls = useAnimation();
    const { scrollYProgress } = useScroll();

    // Zoom video in/out on scroll
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (progress) => {
            if (progress > 0.2) {
                videoControls.start({
                    scale: 1.1,
                    transition: { duration: 0.8, ease: 'easeOut' }
                });
            } else {
                videoControls.start({
                    scale: 1,
                    transition: { duration: 0.8, ease: 'easeIn' }
                });
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, videoControls]);

    return (
        <section className="container mx-auto px-6 h-screen flex items-center">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 w-full">

                {/* LEFT: text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="lg:w-1/2"
                >
                    <h1 className="text-5xl font-bold relative z-10">
                        @<span>Nest</span>
                        <span className="text-primary">Link</span>.Org
                    </h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                    >
                        <span className="block">Organisations built</span>
                        <span className="block text-gradient">for the 3D future</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: false }}
                        className="mt-6 text-lg text-muted-foreground max-w-xl"
                    >
                        We create immersive, interactive web experiences — 3D visualizations,
                        cloud expansions, and AI-driven tools that scale. Elevate your brand
                        with motion, depth and measurable results.
                    </motion.p>

                    <div className="mt-8 flex items-center gap-4">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Link href="/projects">
                                <Button size="lg" className="gap-2">
                                    Explore Our Work →
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <Link href="/pricing">
                                <Button size="lg" variant="outline" className="gap-2">
                                    Talk to Sales
                                </Button>
                            </Link>
                        </motion.div>

                        <Button size="lg" variant="secondary">Hello</Button>
                    </div>
                </motion.div>

                {/* RIGHT: Video Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center"
                >
                    <motion.div
                        animate={videoControls}
                        className="w-full max-w-2xl relative transform-gpu perspective-1000"
                    >
                        <motion.div
                            whileHover={{ rotateY: 8, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 160, damping: 18 }}
                            className="rounded-2xl shadow-2xl bg-card border p-6"
                        >
                            {/* autoplaying local tech video */}
                            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                                <video
                                    className="w-full h-full object-cover"
                                    src="/video.mp4"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    Sorry, your browser doesn’t support embedded videos.
                                </video>
                            </div>

                            <div className="mt-4 flex justify-between items-center">
                                <div className="text-sm text-muted-foreground">
                                    Realtime metrics
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
