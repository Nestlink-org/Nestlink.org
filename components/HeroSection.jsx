'use client';

import { motion, useMotionValue, animate, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import TypingEffect from './TypingEffect';

export default function HeroSection() {
    const { theme } = useTheme();
    const strokeColor = theme === 'dark' ? '#38b6ff' : '#38b6ff';
    const containerRef = useRef(null);
    const [isCaptured, setIsCaptured] = useState(false);

    const globeRotate = useMotionValue(0);

    // ===== SCROLL ANIMATION CONFIGURATION =====
    // Adjust these values to control when the capture effect starts/ends
    const CAPTURE_START = 100; // Pixels scrolled to start capture
    const CAPTURE_END = 400;   // Pixels scrolled where effect is maximum

    // Scroll transformations - these create the "picture frame" effect
    const { scrollY } = useScroll();
    const scale = useTransform(scrollY, [CAPTURE_START, CAPTURE_END], [1, 0.85]);
    const y = useTransform(scrollY, [CAPTURE_START, CAPTURE_END], [0, -80]);
    const opacity = useTransform(scrollY, [CAPTURE_START, CAPTURE_END], [1, 0.8]);
    const borderRadius = useTransform(scrollY, [CAPTURE_START, CAPTURE_END], [0, 24]);

    // ===== GLOBE ROTATION ANIMATION =====
    useEffect(() => {
        // Adjust rotation speed here (higher duration = slower rotation)
        animate(globeRotate, 360, {
            duration: 120,
            repeat: Infinity,
            ease: "linear"
        });
    }, [globeRotate]);

    // ===== SCROLL CAPTURE DETECTION =====
    useEffect(() => {
        const unsubscribe = scrollY.on("change", (latest) => {
            // Toggle capture state based on scroll position
            if (latest > CAPTURE_START && !isCaptured) {
                setIsCaptured(true);
            } else if (latest <= CAPTURE_START && isCaptured) {
                setIsCaptured(false);
            }
        });

        return () => unsubscribe();
    }, [scrollY, isCaptured]);

    // ===== GLOBE WIREFRAME ANIMATION CONFIG =====
    const lineAnimation = {
        strokeDasharray: 1130,
        strokeDashoffset: [1130, 0, 0, 1130]
    };
    const lineTransition = {
        duration: 40,
        ease: 'easeInOut',
        times: [0, 0.4, 0.6, 1],
        repeat: Infinity
    };

    // ===== NESTLINK MARKER POSITIONS =====
    // Adjust these coordinates to change marker distribution on the globe
    const nestlinkMarkers = [
        { x: 120, y: 120 }, { x: 160, y: 100 }, { x: 200, y: 80 },
        { x: 240, y: 100 }, { x: 280, y: 120 }, { x: 150, y: 150 },
        { x: 190, y: 140 }, { x: 230, y: 150 }, { x: 270, y: 160 },
        { x: 130, y: 180 }, { x: 170, y: 190 }, { x: 210, y: 200 },
        { x: 250, y: 190 }, { x: 290, y: 180 }, { x: 140, y: 220 },
        { x: 180, y: 230 }, { x: 220, y: 240 }, { x: 260, y: 230 },
        { x: 300, y: 220 }, { x: 110, y: 140 }, { x: 300, y: 140 },
        { x: 100, y: 100 }, { x: 320, y: 100 }, { x: 340, y: 120 },
        { x: 90, y: 160 }, { x: 330, y: 160 }, { x: 350, y: 180 },
        { x: 80, y: 200 }, { x: 340, y: 200 }, { x: 360, y: 220 },
        { x: 70, y: 240 }, { x: 320, y: 260 }, { x: 360, y: 260 },
        { x: 120, y: 260 }, { x: 200, y: 280 }, { x: 280, y: 260 },
        { x: 160, y: 300 }, { x: 240, y: 320 }, { x: 300, y: 300 },
        { x: 180, y: 340 }, { x: 260, y: 360 }
    ];


    return (
        <motion.section
            ref={containerRef}
            style={{
                scale,
                y,
                opacity,
                borderRadius
            }}
            className="w-full min-h-screen flex items-center relative overflow-hidden bg-background transition-all duration-300"
        >
            {/* ===== CAPTURE OVERLAY EFFECTS ===== */}

            {/* Frosted glass overlay - appears during capture */}
            <motion.div
                className="absolute inset-0 bg-background/60 backdrop-blur-md z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: isCaptured ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* Border frame - becomes more visible during capture */}
            <motion.div
                className="absolute inset-0 border-3 border-black pointer-events-none z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: isCaptured ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* Shadow effect for depth */}
            <motion.div
                className="absolute inset-0 shadow-2xl shadow-primary/20 rounded-2xl pointer-events-none z-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: isCaptured ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />

            {/* ===== MAIN CONTENT ===== */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full relative z-20">

                {/* ===== LEFT TEXT SECTION ===== */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.3 }}
                    className="font-[ClashDisplay] w-full lg:ml-20 lg:w-[60%] lg:mt-0 mt-20"
                >
                    {/* Main title with capture effect */}
                    <motion.h1
                        className="text-5xl font-bold relative z-10 tracking-tight"
                        animate={{
                            filter: isCaptured ? 'grayscale(0.3) brightness(0.9)' : 'grayscale(0) brightness(1)'
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <span className="text-primary">Nest</span>
                        <span className="text-foreground">Link</span>
                    </motion.h1>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
                        animate={{
                            filter: isCaptured ? 'grayscale(0.2) brightness(0.95)' : 'grayscale(0) brightness(1)'
                        }}

                    >
                        <span className="block">Organisations built for</span>

                        <span className="text-primary italic font-extralight font-[cursive]">
                            <TypingEffect
                                texts={["Perfect 3D Future", "Innovative Designs", "Next-Gen Tech", "Sustainable Solutions", "Your Betterment"]}
                                typingDelay={100}
                                deletingDelay={50}
                                pauseDelay={1500}
                            />
                        </span>


                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12, duration: 0.3 }}
                        viewport={{ once: false }}
                        className="mt-6 text-lg text-muted-foreground max-w-xl"
                        animate={{
                            opacity: isCaptured ? 0.7 : 1
                        }}

                    >
                        We create immersive, interactive web experiences — 3D visualizations,
                        cloud expansions, and AI-driven tools that scale. Elevate your brand
                        with motion, depth and measurable results.
                    </motion.p>

                    {/* Buttons with capture scaling */}
                    <motion.div
                        className="mt-8 flex flex-wrap items-center gap-4"
                        animate={{
                            scale: isCaptured ? 0.95 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    >
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
                    </motion.div>

                    {/* Feature list */}
                    <motion.ul
                        className="mt-6 flex flex-wrap gap-6 text-muted-foreground text-base"
                        animate={{
                            opacity: isCaptured ? 0.8 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    >
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

                        <li className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/10 text-purple-400">✓</span>
                            <span>Seamless integration with modern tools</span>
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/10 text-yellow-400">✓</span>
                            <span>Optimized for speed and reliability</span>
                        </li>

                        <li className="flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/10 text-pink-400">✓</span>
                            <span>User-centric design & experience</span>
                        </li>
                    </motion.ul>

                </motion.div>

                {/* ===== RIGHT 3D SECTION ===== */}
                <div className="w-full lg:w-[55%] relative flex flex-col items-center justify-center min-h-[80vh]">

                    {/* Animated Grid Background */}
                    <motion.div
                        className="absolute inset-0 overflow-hidden"
                        animate={{
                            opacity: isCaptured ? 0.4 : 0.2
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `
                                    linear-gradient(#38b6ff 2px, transparent 2px),
                                    linear-gradient(90deg, #38b6ff 2px, transparent 2px)
                                `,
                                backgroundSize: '50px 50px',
                            }}
                            animate={{
                                backgroundPosition: isCaptured ? '0px 0px' : ['0px 0px', '50px 50px']
                            }}
                            transition={{
                                duration: isCaptured ? 0 : 10,
                                repeat: isCaptured ? 0 : Infinity,
                                ease: "linear"
                            }}
                        />
                    </motion.div>

                    {/* ===== MAIN GLOBE WITH MARKERS ===== */}
                    <motion.div
                        style={{ rotate: globeRotate }}
                        className="relative "
                        animate={{
                            scale: isCaptured ? 0.9 : 1,
                            filter: isCaptured ? 'sepia(0.2) brightness(0.85)' : 'none'
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 400 400"
                            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
                        >
                            {/* Globe Outer Circle */}
                            <motion.circle
                                cx="200"
                                cy="200"
                                r="180"
                                fill="none"
                                stroke={strokeColor}
                                strokeWidth="2"
                                initial={{ strokeDashoffset: 1130 }}
                                animate={isCaptured ? { strokeDashoffset: 0 } : lineAnimation}
                                transition={isCaptured ? { duration: 0 } : lineTransition}
                            />

                            {/* Latitude Lines */}
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
                                    animate={isCaptured ? { strokeDashoffset: 0 } : lineAnimation}
                                    transition={isCaptured ? { duration: 0 } : lineTransition}
                                />
                            ))}

                            {/* Longitude Lines */}
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
                                    animate={isCaptured ? { strokeDashoffset: 0 } : lineAnimation}
                                    transition={isCaptured ? { duration: 0 } : lineTransition}
                                />
                            ))}

                            {/* ===== NESTLINK MARKERS ===== */}
                            {nestlinkMarkers.map((marker, index) => (
                                <g key={`marker-${index}`}>
                                    {/* Pulsing dot */}
                                    <motion.circle
                                        cx={marker.x}
                                        cy={marker.y}
                                        r="3"
                                        fill="#38b6ff"
                                        animate={{
                                            scale: isCaptured ? 1.2 : [1, 1.8, 1],
                                            opacity: isCaptured ? 0.8 : [0.4, 1, 0.4]
                                        }}
                                        transition={{
                                            duration: isCaptured ? 0.3 : 2.5,
                                            repeat: isCaptured ? 0 : Infinity,
                                            delay: isCaptured ? 0 : index * 0.2
                                        }}
                                    />
                                    {/* NestLink text */}
                                    <motion.text
                                        x={marker.x + 6}
                                        y={marker.y + 3}
                                        fontSize="8"
                                        fill="#38b6ff"
                                        fontFamily="Arial, sans-serif"
                                        fontWeight="bold"
                                        textAnchor="start"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: isCaptured ? 0.9 : [0, 1, 1, 0]
                                        }}
                                        transition={{
                                            duration: isCaptured ? 0.3 : 4,
                                            repeat: isCaptured ? 0 : Infinity,
                                            delay: isCaptured ? 0 : index * 0.3,
                                            times: isCaptured ? [0, 1] : [0, 0.2, 0.7, 1]
                                        }}
                                    >
                                        NestLink
                                    </motion.text>
                                </g>
                            ))}
                        </svg>

                        {/* Floating 3D Cubes */}
                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={`cube-${i}`}
                                className="absolute w-4 h-4 border border-primary"
                                style={{
                                    top: `${30 + i * 40}%`,
                                    left: `${20 + i * 20}%`,
                                }}
                                animate={{
                                    rotateX: isCaptured ? 0 : [0, 180, 360],
                                    rotateY: isCaptured ? 0 : [0, 180, 360],
                                    scale: isCaptured ? 1.1 : [1, 1.2, 1]
                                }}
                                transition={{
                                    duration: isCaptured ? 0.3 : 4 + i * 2,
                                    repeat: isCaptured ? 0 : Infinity,
                                    delay: isCaptured ? 0 : i * 1
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* ===== INFORMATIVE SECTION ===== */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-2xl"
                        animate={{
                            scale: isCaptured ? 0.92 : 1,
                            opacity: isCaptured ? 0.85 : 1
                        }}

                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 backdrop-blur-sm bg-background/30 p-6 rounded-2xl">
                            {/* Left info card */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <span className="text-lg">🌍</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground">3D Infrastructure</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    Our 3D-inspired frameworks are not just visuals — they are immersive
                                    experiences, engineered to captivate and connect across all devices.
                                </p>
                                <div className="flex gap-2 mt-2">
                                    {['⚡', '🔗', '🎯'].map((icon, idx) => (
                                        <div
                                            key={idx}
                                            className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center text-xs"
                                        >
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right info card */}
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                                        <span className="text-lg">🚀</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-foreground">Interactive Future Ready</h3>
                                </div>
                                <p className="text-muted-foreground leading-relaxed text-sm">
                                    The future is interactive, and NestLink is building the wireframes
                                    that carry ideas across borders, industries, and imaginations.
                                </p>
                                <div className="flex gap-2 mt-2">
                                    {['🤖', '☁️', '✨'].map((icon, idx) => (
                                        <div
                                            key={idx}
                                            className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center text-xs"
                                        >
                                            {icon}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ===== CYBERPUNK GLOW EFFECT ===== */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        animate={{
                            opacity: isCaptured ? 0.3 : 1
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                            animate={{
                                scale: isCaptured ? 1.1 : [1, 1.2, 1],
                                opacity: isCaptured ? 0.2 : [0.3, 0.6, 0.3]
                            }}
                            transition={{
                                duration: isCaptured ? 0.3 : 4,
                                repeat: isCaptured ? 0 : Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* ===== CAPTURE INDICATOR BADGE ===== */}
            <motion.div
                className="absolute top-6 right-6 bg-primary/90 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm z-30 flex items-center gap-2 shadow-lg"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{
                    opacity: isCaptured ? 1 : 0,
                    scale: isCaptured ? 1 : 0.8,
                    y: isCaptured ? 0 : -20
                }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            >
                <span className="text-base">📸</span>
                View Captured
            </motion.div>
        </motion.section>
    );
}