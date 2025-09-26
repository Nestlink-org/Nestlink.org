'use client';

import { motion, useAnimation, useScroll } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
    const videoControls = useAnimation();
    const { scrollYProgress } = useScroll();

    // video refs / state for controls
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    // Zoom video in/out on scroll (faster/snappy)
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (progress) => {
            if (progress > 0.2) {
                videoControls.start({
                    scale: 1.08,
                    transition: { duration: 0.3, ease: 'easeOut' }
                });
            } else {
                videoControls.start({
                    scale: 1,
                    transition: { duration: 0.3, ease: 'easeIn' }
                });
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, videoControls]);

    // ensure initial muted autoplay works (browsers allow muted autoplay)
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = isMuted;
        // try to play on mount
        v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
    }, [isMuted]);

    const togglePlay = (e) => {
        if (e) e.stopPropagation();
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) {
            v.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        } else {
            v.pause();
            setIsPlaying(false);
        }
    };

    const toggleMute = (e) => {
        if (e) e.stopPropagation();
        const v = videoRef.current;
        if (!v) return;
        v.muted = !v.muted;
        setIsMuted(v.muted);
    };

    return (
        <section className="container mx-auto px-6 min-h-screen flex items-center">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12 w-full justify-between">

                {/* LEFT: text */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="lg:w-1/2 font-[ClashDisplay] max-w-xl"
                >
                    <h1 className="text-5xl font-bold relative z-10 tracking-tight">
                        <span className="text-foreground">Nest</span>
                        <span className="text-primary">Link</span>
                    </h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: false }}
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
                        transition={{ delay: 0.12, duration: 0.3 }}
                        viewport={{ once: false }}
                        className="mt-6 text-lg text-muted-foreground max-w-xl"
                    >
                        We create immersive, interactive web experiences — 3D visualizations,
                        cloud expansions, and AI-driven tools that scale. Elevate your brand
                        with motion, depth and measurable results.
                    </motion.p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                            <Link href="/projects">
                                <Button size="lg" className="gap-2">
                                    Explore Our Work →
                                </Button>
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
                            <Link href="/pricing">
                                <Button size="lg" variant="outline" className="gap-2">
                                    Talk to Sales
                                </Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Subtle bullet points with ticks in a single row (flex) */}
                    <ul className="mt-6 flex flex-wrap gap-6 text-muted-foreground text-base">
                        <li className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600/10 text-green-400">✓</span>
                            <span>Tailored 3D & AI-driven solutions</span>
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-600/10 text-green-400">✓</span>
                            <span>Scalable cloud-ready platforms</span>
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/10 text-blue-400">✓</span>
                            <span>Performance & accessibility focused</span>
                        </li>
                    </ul>
                </motion.div>

                {/* RIGHT: Video Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, rotateY: 20 }}
                    whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="lg:w-1/2 flex justify-center mt-5 w-full"
                >
                    <motion.div
                        animate={videoControls}
                        className="w-full max-w-3xl relative transform-gpu perspective-1000"
                    >
                        <motion.div
                            whileHover={{ rotateY: 6, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            className="relative rounded-2xl shadow-2xl border border-white/6 bg-card group overflow-hidden"
                        >
                            {/* video container - reduced height on small screens so it won't overlap header */}
                            <div
                                className="overflow-hidden rounded-xl flex items-center justify-center aspect-[16/9]
                  max-h-[180px] sm:max-h-[260px] md:max-h-[360px] lg:max-h-[28rem] w-full"
                            >
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    src="/video.mp4"
                                    autoPlay
                                    muted={isMuted}
                                    loop
                                    playsInline
                                >
                                    Sorry, your browser doesn’t support embedded videos.
                                </video>
                            </div>

                            {/* Glow border on hover */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/70 transition-colors duration-200 pointer-events-none" />

                            {/* Overlay controls (appear on hover) */}
                            <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-20">
                                <button
                                    onClick={togglePlay}
                                    className="p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/70 transition"
                                    aria-label={isPlaying ? 'Pause video' : 'Play video'}
                                >
                                    {isPlaying ? '⏸' : '▶'}
                                </button>
                                <button
                                    onClick={toggleMute}
                                    className="p-2 rounded-full bg-black/40 backdrop-blur-sm text-white hover:bg-black/70 transition"
                                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                                >
                                    {isMuted ? '🔇' : '🔊'}
                                </button>
                            </div>

                            {/* Footer section */}
                            <div className="flex justify-between items-center mt-2 px-3 py-2">
                                <div className="text-sm text-muted-foreground">Realtime metrics</div>

                                {/* Floating badges */}
                                <div className="flex gap-2">
                                    <span className="px-3 py-1 text-xs rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                                        ⚡ 98% uptime
                                    </span>
                                    <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                        📈 2.4k views
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
