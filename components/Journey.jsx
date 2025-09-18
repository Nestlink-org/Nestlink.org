'use client';

import { motion } from 'framer-motion';

const steps = [
    { year: '2016', title: 'Foundation', desc: 'We began with a passionate small team and ambitious ideas, laying the foundation for innovative solutions that would scale with time.' },
    { year: '2018', title: 'Early Growth', desc: 'Expanded our team, onboarded our first clients, and refined workflows to deliver reliable, high-quality services.' },
    { year: '2019', title: 'Product Market Fit', desc: 'Launched our first flagship product, validated market demand, and strengthened our product strategy with user-centric insights.' },
    { year: '2021', title: 'Cloud Expansion', desc: 'Migrated client systems to scalable cloud infrastructure, improving reliability, performance, and security across services.' },
    { year: '2023', title: 'AI Integration', desc: 'Introduced AI-driven solutions for automation and analytics, delivering smarter, faster, and more precise decision-making tools.' },
    { year: '2025', title: 'Global Scaling', desc: 'Expanded into multiple international markets, providing robust, secure, and innovative IT solutions worldwide.' },
];

export default function Journey() {
    const itemVariants = {
        hidden: { opacity: 0, y: 50, rotateX: -45 },
        visible: { opacity: 1, y: 0, rotateX: 0 },
    };

    return (
        <section className="py-24 flex justify-center bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM4MDIwZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wLDMwIGMzMCwwIDMwLDAgNjAsME0zMCwwIGMwLDMwIDAsMzAgMCw2MCIvPjwvZz48L3N2Zz4=')] opacity-20"></div>

            {/* Glowing orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-[100px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px]"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 7, repeat: Infinity }}
            />

            <div className="w-full max-w-6xl px-6 relative z-10">
                {/* Title */}
                <motion.h2
                    className="text-5xl md:text-7xl font-black text-white text-center mb-20 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                    initial={{ opacity: 0, y: -30, letterSpacing: '1rem' }}
                    whileInView={{ opacity: 1, y: 0, letterSpacing: '0.05em' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                >
                    OUR JOURNEY
                </motion.h2>

                <div className="relative">
                    {/* Central animated line */}
                    <motion.div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, delay: 0.5 }}
                    />

                    {/* Glowing pulse along the line */}
                    <motion.div
                        className="absolute top-0 left-1/2 transform -translate-x-1/2 h-20 w-3 bg-cyan-300 rounded-full blur-md"
                        animate={{ y: [0, 800, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Timeline items */}
                    <div className="flex flex-col gap-24">
                        {steps.map((s, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={s.year}
                                    className="flex flex-col md:flex-row items-center justify-between relative"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    variants={itemVariants}
                                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                                >
                                    {/* Year with hexagon shape and animated border */}
                                    <motion.div
                                        className={`relative flex items-center justify-center w-24 h-24 z-10
                      ${isLeft ? 'md:order-1' : 'md:order-2'}`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        {/* Hexagon background */}
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                            <motion.path
                                                d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 Z"
                                                fill="url(#gradient)"
                                                stroke="url(#borderGradient)"
                                                strokeWidth="2"
                                                initial={{ pathLength: 0 }}
                                                whileInView={{ pathLength: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: idx * 0.2 }}
                                            />
                                            <defs>
                                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#0ea5e9" />
                                                    <stop offset="100%" stopColor="#8b5cf6" />
                                                </linearGradient>
                                                <linearGradient id="borderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#22d3ee" />
                                                    <stop offset="50%" stopColor="#a855f7" />
                                                    <stop offset="100%" stopColor="#ec4899" />
                                                </linearGradient>
                                            </defs>
                                        </svg>

                                        {/* Year text */}
                                        <span className="text-white font-bold text-xl relative z-10">{s.year}</span>

                                        {/* Floating particles */}
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-1 h-1 rounded-full bg-cyan-300"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                animate={{
                                                    x: [0, Math.cos(i * 72) * 20],
                                                    y: [0, Math.sin(i * 72) * 20],
                                                    scale: [0, 1, 0],
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    delay: i * 0.3,
                                                }}
                                            />
                                        ))}
                                    </motion.div>

                                    {/* Connecting line from year to central line */}
                                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r ${isLeft ? 'left-24 w-[calc(50%-6rem)] from-cyan-400 to-purple-500' : 'right-24 w-[calc(50%-6rem)] from-purple-500 to-cyan-400'}`}></div>

                                    {/* Description Card with futuristic design */}
                                    <motion.div
                                        className={`md:max-w-md text-white p-6 rounded-xl relative overflow-hidden border
                      ${isLeft ? 'md:ml-auto md:order-2 border-cyan-400/30' : 'md:mr-auto md:order-1 border-purple-400/30'}`}
                                        initial={{ opacity: 0, x: isLeft ? 100 : -100, rotateY: 45 }}
                                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.8, delay: idx * 0.1 + 0.3 }}
                                        whileHover={{
                                            y: -5,
                                            boxShadow: isLeft
                                                ? "0 0 20px rgba(34, 211, 238, 0.5)"
                                                : "0 0 20px rgba(168, 85, 247, 0.5)"
                                        }}
                                    >
                                        {/* Background pattern */}
                                        <div className={`absolute inset-0 opacity-5 ${isLeft ? 'bg-cyan-400' : 'bg-purple-400'}`} style={{
                                            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2%, transparent 2.5%)`,
                                            backgroundSize: '30px 30px'
                                        }}></div>

                                        {/* Glowing border effect */}
                                        <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isLeft ? 'bg-cyan-400/20' : 'bg-purple-400/20'}`}></div>

                                        {/* Corner accents */}
                                        <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${isLeft ? 'border-cyan-400' : 'border-purple-400'}`}></div>
                                        <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${isLeft ? 'border-cyan-400' : 'border-purple-400'}`}></div>
                                        <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${isLeft ? 'border-cyan-400' : 'border-purple-400'}`}></div>
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${isLeft ? 'border-cyan-400' : 'border-purple-400'}`}></div>

                                        <h4 className="text-xl font-bold mb-3 relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                                            {s.title}
                                        </h4>
                                        <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                                            {s.desc}
                                        </p>

                                        {/* Hover glow effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0"
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}