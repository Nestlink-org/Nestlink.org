'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const items = [
    {
        title: 'Realtime Collaboration',
        desc: 'Work seamlessly together on 3D scenes, enabling teams to co-create, review, and iterate in real-time, enhancing productivity and creativity.',
        icon: '👥',
        features: ['Live co-editing', 'Version control', 'Comment threads', 'Presence indicators']
    },
    {
        title: 'Edge AI',
        desc: 'Run AI models closer to your data sources, reducing latency and improving efficiency for real-time insights and smarter decision-making.',
        icon: '🧠',
        features: ['Low-latency processing', 'Offline capability', 'Privacy-first', 'Auto-optimization']
    },
    {
        title: 'Zero-trust Infrastructure',
        desc: 'Implement a security-first approach in cloud architectures, ensuring all requests are verified and minimizing risk of unauthorized access.',
        icon: '🔒',
        features: ['Multi-factor auth', 'Micro-segmentation', 'Continuous verification', 'Encrypted everything']
    },
    {
        title: 'Immersive UX',
        desc: 'Design experiences that blend advanced UI, motion design, and interactive 3D environments to engage users on a deeper level.',
        icon: '🕶️',
        features: ['3D interactions', 'Smooth animations', 'Haptic feedback', 'Voice integration']
    },
    {
        title: 'Predictive Analytics',
        desc: 'Leverage historical and real-time data to anticipate trends, optimize operations, and provide actionable insights.',
        icon: '📊',
        features: ['Machine learning', 'Real-time dashboards', 'Custom alerts', 'Trend forecasting']
    },
    {
        title: 'Sustainable Tech',
        desc: 'Develop eco-friendly solutions that reduce energy consumption while maintaining high performance and reliability.',
        icon: '🌱',
        features: ['Energy monitoring', 'Carbon footprint tracking', 'Eco-mode optimization', 'Green hosting']
    },
];

export default function InnovationSpotlight() {
    const titleRef = useRef();
    const [isTitleInView, setIsTitleInView] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Detect theme changes (you would connect this to your actual theme toggle)
    useEffect(() => {
        // This is a placeholder - connect to your actual theme context
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handler = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

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

    // Theme-aware colors
    const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-800';
    const secondaryTextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
    const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
    const cardBg = isDarkMode ? 'bg-gray-800/50' : 'bg-white/80';
    const hoverBg = isDarkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-100/80';

    return (
        <section className="py-16 container mx-auto px-6 relative">
            {/* Section Heading with repeating animation */}
            <div ref={titleRef} className="mb-12">
                <motion.h3
                    className={`text-3xl md:text-4xl font-bold text-center mb-4 ${textColor}`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={isTitleInView ?
                        { opacity: 1, y: 0 } :
                        { opacity: 0, y: -20 }
                    }
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Innovation Documentation
                </motion.h3>
                <p className={`text-center max-w-2xl mx-auto ${secondaryTextColor}`}>
                    Detailed overview of our core technological innovations and capabilities
                </p>
            </div>

            {/* Document-style content */}
            <div className="max-w-4xl mx-auto">
                {/* Introduction */}
                <motion.div
                    className={`p-6 rounded-lg ${cardBg} border ${borderColor} mb-8 backdrop-blur-sm`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className={`text-xl font-semibold mb-3 ${textColor}`}>Overview</h4>
                    <p className={secondaryTextColor}>
                        Our innovation portfolio represents cutting-edge solutions designed to address modern
                        technological challenges. Each innovation is thoroughly documented with features,
                        use cases, and implementation guidelines.
                    </p>
                </motion.div>

                {/* Innovation items in document format */}
                <div className="space-y-6">
                    {items.map((it, i) => (
                        <motion.div
                            key={it.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`p-6 rounded-lg ${cardBg} border ${borderColor} backdrop-blur-sm ${hoverBg} transition-all duration-300`}
                        >
                            {/* Header with icon and title */}
                            <div className="flex items-start gap-4 mb-4">
                                <span className="text-3xl flex-shrink-0">{it.icon}</span>
                                <div>
                                    <h4 className={`text-xl font-semibold ${textColor}`}>{it.title}</h4>
                                    <p className={`mt-1 ${secondaryTextColor}`}>{it.desc}</p>
                                </div>
                            </div>

                            {/* Features list */}
                            <div className="ml-12">
                                <h5 className={`font-medium mb-2 ${textColor}`}>Key Features:</h5>
                                <ul className={`grid grid-cols-1 md:grid-cols-2 gap-2 ${secondaryTextColor} text-sm`}>
                                    {it.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Metadata footer */}
                            <div className={`mt-4 pt-4 border-t ${borderColor} flex justify-between items-center text-xs ${secondaryTextColor}`}>
                                <span>Last updated: {new Date().toLocaleDateString()}</span>
                                <span>Status: <span className="text-green-500">Active</span></span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Documentation footer */}
                <motion.div
                    className={`p-6 rounded-lg ${cardBg} border ${borderColor} mt-8 backdrop-blur-sm`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h4 className={`text-xl font-semibold mb-3 ${textColor}`}>Implementation Guidelines</h4>
                    <p className={`mb-4 ${secondaryTextColor}`}>
                        Each innovation comes with comprehensive documentation, API references, and integration guides.
                        Our technical team provides support throughout the implementation process.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button className={`px-4 py-2 rounded border ${borderColor} ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors ${textColor}`}>
                            View API Docs
                        </button>
                        <button className={`px-4 py-2 rounded border ${borderColor} ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors ${textColor}`}>
                            Download Whitepaper
                        </button>
                        <button className={`px-4 py-2 rounded border ${borderColor} ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors ${textColor}`}>
                            Request Demo
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Version info */}
            <motion.div
                className={`text-center mt-12 text-xs ${secondaryTextColor}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Document Version 2.1.0 • Updated {new Date().toLocaleDateString()}
            </motion.div>
        </section>
    );
}