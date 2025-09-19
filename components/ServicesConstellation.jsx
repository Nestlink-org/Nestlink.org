'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const services = [
    {
        title: '3D Websites',
        desc: 'Create immersive product experiences with interactive 3D visuals, motion effects, and engaging layouts that capture attention.',
        img: 'https://images.unsplash.com/photo-1633259584604-afdc243122ea?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-blue-500 to-cyan-500',
        stars: 5,
    },
    {
        title: 'Cloud Expansion',
        desc: 'Scale your infrastructure seamlessly with modern cloud solutions, ensuring high availability, fast deployment, and global reach.',
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-purple-500 to-pink-500',
        stars: 4,
    },
    {
        title: 'AI Solutions',
        desc: 'Integrate smart automation, predictive analytics, and machine learning models to enhance decision-making and operational efficiency.',
        img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-green-500 to-teal-500',
        stars: 5,
    },
    {
        title: 'UX & Motion',
        desc: 'Design interfaces that delight users with intuitive navigation, motion design, and subtle micro-interactions that boost engagement.',
        img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-yellow-500 to-orange-500',
        stars: 4,
    },
    {
        title: 'Data Pipelines',
        desc: 'Build reliable data pipelines for smooth data ingestion, transformation, and analytics that drive actionable insights.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-indigo-500 to-blue-500',
        stars: 3,
    },
    {
        title: 'DevOps',
        desc: 'Deploy, monitor, and maintain applications efficiently using modern DevOps practices and automation tools.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-red-500 to-pink-500',
        stars: 4,
    },
    {
        title: 'Cybersecurity',
        desc: 'Protect your digital assets with cutting-edge security protocols and threat detection systems.',
        img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-gray-500 to-blue-500',
        stars: 5,
    },
    {
        title: 'IoT Solutions',
        desc: 'Connect and manage devices seamlessly with our Internet of Things infrastructure and analytics.',
        img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-teal-500 to-green-500',
        stars: 4,
    },
];

// Star rating component
const StarRating = ({ count }) => {
    return (
        <div className="flex items-center mt-1">
            {[...Array(5)].map((_, i) => (
                <motion.svg
                    key={i}
                    className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
            ))}
        </div>
    );
};

// Floating particles component
const FloatingParticles = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        width: Math.random() * 4 + 1,
                        height: Math.random() * 4 + 1,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.7 + 0.3,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        x: [0, Math.random() * 10 - 5, 0],
                        opacity: [0.3, 1, 0.3],
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

export default function ServicesConstellation() {
    const [activeService, setActiveService] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [constellationVisible, setConstellationVisible] = useState(true);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.82, rotate: -5 },
        visible: { opacity: 1, scale: 1, rotate: 0 },
    };

    const toggleConstellation = () => {
        setConstellationVisible(!constellationVisible);
    };

    return (
        <section className="py-20 md:py-28 container mx-auto px-6 relative overflow-hidden" id="work">
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 "></div>
                <FloatingParticles />
            </div>

            {/* Interactive cosmic cursor effect */}
            <motion.div
                className="absolute rounded-full -z-10 bg-gradient-to-r from-blue-500/10 to-purple-500/10 "
                animate={{
                    x: mousePosition.x - 100,
                    y: mousePosition.y - 100,
                }}
                transition={{ type: "spring", damping: 20 }}
                style={{ width: 200, height: 200 }}
            />

            {/* Heading & Intro */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto mb-16 relative"
            >
                <motion.div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />

                <h2 className="text-4xl md:text-6xl font-bold mb-6 ">
                    Services Constellation
                </h2>

                <p className="text-text-secondary text-lg md:text-xl mb-6">
                    Explore the cosmic range of solutions we provide. Each service is a star in our constellation of expertise.
                </p>

                <motion.button
                    onClick={toggleConstellation}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-full border border-secondary text-secondary text-sm mb-8 flex items-center gap-2 mx-auto"
                >
                    {constellationVisible ? 'NestLink' : 'Enjoy Our services'}
                    <span className="text-lg">{constellationVisible ? '✨' : '🌌'}</span>
                </motion.button>
            </motion.div>

            <div className="relative">
                {/* Animated grid lines */}
                {constellationVisible && (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute border border-white/2"
                                style={{
                                    top: `${i * 10}%`,
                                    left: 0,
                                    right: 0,
                                    height: 1,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                        {[...Array(10)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute border border-white/5"
                                style={{
                                    left: `${i * 10}%`,
                                    top: 0,
                                    bottom: 0,
                                    width: 1,
                                }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            />
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
                    {services.map((s, idx) => (
                        <motion.div
                            key={s.title}
                            className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-blue-900 to-gray-800 backdrop-blur-md cursor-pointer group "
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            whileHover={{
                                scale: 1,
                                rotate: Math.random() * 2 - 1,
                                y: -5,
                                transition: { type: 'spring', stiffness: 300 }
                            }}
                            onHoverStart={() => setActiveService(idx)}
                            onHoverEnd={() => setActiveService(null)}
                        >
                            {/* Glow effect based on service color */}
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-gradient-to-br ${s.color} rounded-2xl blur-xl -z-10`}></div>

                            {/* Service Image */}
                            <div className="w-full h-40 md:h-48 relative overflow-hidden">
                                <motion.img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-full object-cover rounded-t-2xl"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-t-2xl"
                                    initial={{ opacity: 0.6 }}
                                    whileHover={{ opacity: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                />

                                {/* Service title overlay */}
                                <div className="absolute bottom-3 left-4 z-10">
                                    <h3 className="text-xl font-bold text-white">{s.title}</h3>
                                    <StarRating count={s.stars} />
                                </div>
                            </div>

                            {/* Service Text */}
                            <div className="p-5 flex flex-col gap-3">
                                <p className="text-sm text-gray-300 min-h-[60px]">{s.desc}</p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {['Tech', 'Innovation', 'Solution'].map(tag => (
                                        <span key={tag} className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Get Service Button */}
                                <motion.a
                                    href="/services"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`mt-3 inline-block text-center bg-gradient-to-r ${s.color} text-white px-4 py-2 rounded-full shadow-lg font-semibold relative overflow-hidden`}
                                >
                                    <span className="relative z-10">Get Service</span>
                                    <motion.div
                                        className={`absolute inset-0 bg-white/20`}
                                        initial={{ x: '-100%' }}
                                        whileHover={{ x: '100%' }}
                                        transition={{ duration: 0.6 }}
                                    />
                                </motion.a>
                            </div>

                            {/* Animated border */}
                            <motion.div
                                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${s.color} p-[1px] -z-10`}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="bg-gray-900 rounded-2xl w-full h-full"></div>
                            </motion.div>

                            {/* Floating 3D accent dots */}
                            <motion.div
                                className="absolute w-4 h-4 rounded-full bg-blue-500/30 blur-xl -top-2 -left-2"
                                animate={{ x: [0, 4, 0], y: [0, -4, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                            />
                            <motion.div
                                className="absolute w-3 h-3 rounded-full bg-purple-500/30 blur-lg -bottom-1 -right-1"
                                animate={{ x: [0, -3, 0], y: [0, 3, 0] }}
                                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Constellation connections */}
                {constellationVisible && (
                    <svg className="absolute inset-0 pointer-events-none w-full h-full">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
                            </linearGradient>
                        </defs>
                        {services.map((_, i) => {
                            if (i >= services.length - 1) return null;
                            return (
                                <motion.line
                                    key={i}
                                    x1="50%"
                                    y1="50%"
                                    x2="50%"
                                    y2="50%"
                                    stroke="url(#lineGradient)"
                                    strokeWidth="1"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: activeService === i ? 0.3 : 0.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            );
                        })}
                    </svg>
                )}

                {/* See All Services Button */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <motion.a
                        href="/services"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4), 0 5px 10px -5px rgba(139, 92, 246, 0.4)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full shadow-xl font-semibold text-lg relative overflow-hidden"
                    >
                        <span>Explore Full Constellation</span>
                        <motion.span
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            →
                        </motion.span>

                        {/* Button shine effect */}
                        <motion.div
                            className="absolute inset-0 bg-white/20"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '100%' }}
                            transition={{ duration: 0.6 }}
                        />
                    </motion.a>
                </motion.div>
            </div>

            {/* Cosmic background elements */}
            <motion.div
                className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
                className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5]
                }}
                transition={{ duration: 10, repeat: Infinity }}
            />
        </section>
    );
}