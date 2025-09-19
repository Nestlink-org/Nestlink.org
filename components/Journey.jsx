'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        year: '2022',
        month: 'Mar',
        title: 'Humble Beginnings',
        desc: 'Three students - Comfortine, Sheldon, and Simon - started creating web pages as personal projects, laying the foundation for what would become NestLink.',
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        year: '2022',
        month: 'Aug',
        title: 'First Clients & Hackathons',
        desc: 'Landed our first small clients and began participating in hackathons, where we discovered our potential and started dreaming bigger as a team.',
        image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        year: '2022',
        month: 'Dec',
        title: 'NestLink Foundation',
        desc: 'Formally established NestLink as an organization, transforming from student developers into a professional team with a clear vision and mission.',
        image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        year: '2023',
        month: 'Jun',
        title: 'Service Expansion',
        desc: 'Expanded our service offerings beyond web development to include comprehensive IT solutions, responding to growing client needs and market opportunities.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        year: '2023',
        month: 'Nov',
        title: 'Cloud & AI Integration',
        desc: 'Integrated cloud infrastructure and AI capabilities into our solutions, delivering more scalable, intelligent, and cutting-edge services to our clients.',
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
    {
        year: '2024',
        month: 'Present',
        title: 'Full-Spectrum IT Solutions',
        desc: 'Now providing end-to-end IT services - from web development and cloud solutions to AI integration, cybersecurity, and comprehensive digital transformation.',
        image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    },
];

export default function Journey() {
    const itemVariants = {
        hidden: { opacity: 0, rotateY: 20, scale: 0.9 },
        visible: { opacity: 1, rotateY: 0, scale: 1 },
    };

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
        <section className="py-24 flex justify-center bg-gradient-to-b from-black via-purple-900/10 to-black relative overflow-hidden">


            {/* Glowing orbs */}
            <motion.div
                className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-black blur-[70px]"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-800 blur-[70px]"
                animate={{ scale: [1.2, 1, 1.2] }}
                transition={{ duration: 7, repeat: Infinity }}
            />

            <div className="w-full max-w-6xl px-6 relative z-10">
                {/* Title with repeating animation */}
                <div ref={titleRef}>
                    <motion.h2
                        className="text-5xl md:text-7xl font-black  text-center mb-20 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ opacity: 0, y: -30, letterSpacing: '1rem' }}
                        animate={isTitleInView ?
                            { opacity: 1, y: 0, letterSpacing: '0.05em' } :
                            { opacity: 0, y: -30, letterSpacing: '1rem' }
                        }
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        OUR JOURNEY
                    </motion.h2>
                </div>

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
                                    key={s.year + s.month}
                                    className="flex flex-col md:flex-row items-center justify-between relative"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    variants={itemVariants}
                                    transition={{ duration: 0.8, delay: idx * 0.15 }}
                                >
                                    {/* Year with hexagon shape and animated border */}
                                    <motion.div
                                        className={`relative flex flex-col items-center justify-center w-30 h-30 z-10
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

                                        {/* Year and month text */}
                                        <span className="text-white font-bold text-[30px] relative z-10">{s.year}</span>
                                        <span className="text-cyan-300 text-[20px] relative z-10">{s.month}</span>

                                        {/* Floating particles */}
                                        {[...Array(5)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-3 h-3 rounded-full bg-cyan-100"
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
                                        className={`md:max-w-lg text-white rounded-xl bg-gradient-to-br from-[#00142f] via-blue-800/50 to-[black] relative overflow-hidden border
                      ${isLeft ? 'md:ml-auto md:order-2 border-cyan-400/30' : 'md:mr-auto md:order-1 border-purple-400'}`}
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

                                        {/* Image at the top of the card */}
                                        <div className="h-48 overflow-hidden relative">
                                            <motion.img
                                                src={s.image}
                                                alt={s.title}
                                                className="w-full h-full object-cover"
                                                initial={{ scale: 1.1 }}
                                                whileInView={{ scale: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2 }}
                                            />
                                            {/* Gradient overlay for better text contrast */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#00142f] via-transparent to-transparent opacity-70"></div>
                                        </div>

                                        {/* Content area */}
                                        <div className="p-6">
                                            <h4 className="text-xl font-bold mb-3 relative z-10 bg-clip-text text-white">
                                                {s.title}
                                            </h4>
                                            <p className="text-sm text-gray-300 leading-relaxed relative z-10">
                                                {s.desc}
                                            </p>
                                        </div>

                                        {/* Glowing border effect */}
                                        <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isLeft ? 'bg-cyan-400/20' : 'bg-purple-400/20'}`}></div>

                                        {/* Corner accents */}
                                        <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${isLeft ? 'border-cyan-400' : 'border-purple-400'}`}></div>
                                        <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 ${isLeft ? 'border-cyan-400' : 'border-purple-400'}`}></div>
                                        <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 ${isLeft ? 'border-cyan-400' : 'border-purple-400'}`}></div>
                                        <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${isLeft ? 'border-cyan-400' : 'border-purple-400'}`}></div>

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