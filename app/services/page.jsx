'use client';

import Header from '@/components/Header';
import { motion, useAnimation } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const services = [
    {
        title: 'Software Development',
        desc: 'Custom software solutions built with modern technologies and best practices. We create scalable, maintainable applications that solve real business problems.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-developer-looking-at-code-while-working-on-laptop-34639-large.mp4',
        color: 'from-blue-800 to-cyan-600',
        tools: ['Node.js', 'Python', 'Java', 'C#', 'PostgreSQL', 'MongoDB'],
        features: ['Custom Applications', 'API Development', 'Database Design', 'System Architecture']
    },
    {
        title: 'Website Development & Design',
        desc: 'Stunning, responsive websites with modern frameworks and cutting-edge design. We focus on user experience, performance, and conversion optimization.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-programmer-working-on-a-laptop-34637-large.mp4',
        color: 'from-blue-900 to-sky-500',
        tools: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'FastAPI', 'Framer Motion'],
        features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'UI/UX Design']
    },
    {
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance apps that users love.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-woman-demonstrating-tablet-app-36975-large.mp4',
        color: 'from-indigo-900 to-blue-500',
        tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
        features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Push Notifications']
    },
    {
        title: 'Cloud & DevOps',
        desc: 'End-to-end cloud infrastructure and DevOps solutions. We automate deployments, ensure scalability, and maintain robust cloud environments.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-server-racks-in-a-dark-datacenter-40950-large.mp4',
        color: 'from-black to-blue-700',
        tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
        features: ['Cloud Migration', 'Infrastructure as Code', 'Auto Scaling', '24/7 Monitoring']
    },
    {
        title: 'AI & Machine Learning',
        desc: 'Intelligent solutions powered by artificial intelligence and machine learning. We transform data into actionable insights and automation.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-ai-brain-circuit-40809-large.mp4',
        color: 'from-blue-950 to-cyan-400',
        tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Computer Vision'],
        features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Integration']
    },
    {
        title: 'Cybersecurity',
        desc: 'Comprehensive security solutions to protect your digital assets. We implement robust security measures and threat detection systems.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-padlock-with-rotating-gears-40823-large.mp4',
        color: 'from-black to-blue-600',
        tools: ['Penetration Testing', 'Encryption', 'Firewalls', 'Security Audits', 'Zero Trust'],
        features: ['Threat Detection', 'Vulnerability Assessment', 'Data Protection', 'Security Compliance']
    },
    {
        title: 'Networking Solutions',
        desc: 'Reliable and secure network infrastructure for businesses of all sizes. We design, implement, and maintain robust networking systems.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-ethernet-cables-41243-large.mp4',
        color: 'from-blue-800 to-sky-400',
        tools: ['Cisco', 'Juniper', 'SD-WAN', 'VPN', 'Wireless', 'Network Monitoring'],
        features: ['Network Design', 'Implementation', 'Troubleshooting', 'Performance Optimization']
    },
    {
        title: 'IoT Development',
        desc: 'Internet of Things solutions that connect devices and enable smart automation. We build IoT ecosystems that drive efficiency and innovation.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-smart-home-device-40787-large.mp4',
        color: 'from-blue-900 to-cyan-500',
        tools: ['Arduino', 'Raspberry Pi', 'MQTT', 'AWS IoT', 'Sensor Networks', 'Edge Computing'],
        features: ['Device Connectivity', 'Data Collection', 'Remote Monitoring', 'Automation Systems']
    },
    {
        title: 'Blockchain Development',
        desc: 'Decentralized applications and smart contracts built on blockchain technology. We create secure, transparent, and innovative solutions.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-abstract-blockchain-animation-40887-large.mp4',
        color: 'from-black to-blue-500',
        tools: ['Ethereum', 'Solidity', 'Web3.js', 'Smart Contracts', 'NFTs', 'DeFi'],
        features: ['Smart Contracts', 'dApps', 'Tokenization', 'Blockchain Integration']
    },
    {
        title: 'Data Analytics',
        desc: 'Transform your data into actionable insights with advanced analytics and visualization tools. Make data-driven decisions with confidence.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-data-analysis-graphs-and-charts-40801-large.mp4',
        color: 'from-blue-800 to-sky-500',
        tools: ['Tableau', 'Power BI', 'Python', 'R', 'SQL', 'Data Visualization'],
        features: ['Data Visualization', 'Business Intelligence', 'Reporting', 'Predictive Modeling']
    },
    {
        title: 'UX/UI Design',
        desc: 'Beautiful, intuitive user interfaces that enhance user experience and drive engagement. We design with purpose and precision.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-designer-working-on-interface-sketch-36979-large.mp4',
        color: 'from-indigo-900 to-blue-400',
        tools: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing'],
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
        title: 'Digital Marketing',
        desc: 'Comprehensive digital marketing strategies that drive growth and increase brand visibility across all digital channels.',
        video: 'https://assets.mixkit.co/videos/preview/mixkit-digital-marketing-analytics-40805-large.mp4',
        color: 'from-blue-950 to-cyan-500',
        tools: ['SEO', 'Google Analytics', 'Social Media', 'Content Marketing', 'PPC', 'Email Marketing'],
        features: ['SEO Optimization', 'Social Media Management', 'Content Strategy', 'Performance Analytics']
    }
];

export default function ServicesWeOffer() {
    const titleRef = useRef();
    const [isTitleInView, setIsTitleInView] = useState(false);
    const [flippedCards, setFlippedCards] = useState({});
    const [isDarkMode, setIsDarkMode] = useState(true);

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
        // This should be replaced with your actual theme context
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handler = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const toggleFlip = (index) => {
        setFlippedCards(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <>
            <Header />
            <section className="py-24 container mx-auto px-6 relative " id="services">
                {/* Hero Section Background */}
                <div className="absolute inset-0 -z-10 "></div>

                {/* Animated grid overlay */}
                <div className="absolute inset-0 -z-10 opacity-20" style={{
                    backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}></div>

                {/* Floating particles */}
                <div className="absolute inset-0 -z-10">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute rounded-full bg-cyan-400"
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

                {/* Header with Hero Section Styling */}
                <div ref={titleRef} className="text-center max-w-4xl mx-auto mb-20 relative">
                    <motion.h2
                        className="text-5xl md:text-7xl font-black mb-6 text-white"
                        initial={{ opacity: 0, y: -30, letterSpacing: '1rem' }}
                        animate={isTitleInView ?
                            { opacity: 1, y: 0, letterSpacing: '0.05em' } :
                            { opacity: 0, y: -30, letterSpacing: '1rem' }
                        }
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        SERVICES WE OFFER
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        Transforming ideas into exceptional digital experiences through cutting-edge technology and innovative solutions.
                        We deliver comprehensive services tailored to your unique business needs.
                    </motion.p>

                    {/* Hero section decoration */}
                    <motion.div
                        className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 8, repeat: Infinity }}
                    />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="relative h-96 cursor-pointer group"
                            initial={{ opacity: 0, y: 50, rotateY: -180 }}
                            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            onClick={() => toggleFlip(index)}
                        >
                            {/* 3D Flip Container */}
                            <motion.div
                                className="relative w-full h-full"
                                animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                                transition={{ duration: 0.6 }}
                                style={{ transformStyle: 'preserve-3d' }}
                            >
                                {/* Front of Card */}
                                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-br from-black to-blue-900 shadow-2xl shadow-cyan-500/20">
                                    {/* Video Background */}
                                    <div className="relative h-40 overflow-hidden">
                                        <video
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                        >
                                            <source src={service.video} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                                        {/* Service Title */}
                                        <div className="absolute bottom-4 left-4 z-10">
                                            <h3 className="text-xl font-bold text-white">{service.title}</h3>
                                            <div className="flex gap-1 mt-1">
                                                {service.features.slice(0, 2).map((feature, i) => (
                                                    <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded-full text-cyan-200">
                                                        {feature}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                                            {service.desc}
                                        </p>

                                        {/* Tools Preview */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.tools.slice(0, 3).map((tool, i) => (
                                                <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded text-cyan-200">
                                                    {tool}
                                                </span>
                                            ))}
                                            {service.tools.length > 3 && (
                                                <span className="text-xs text-cyan-400">+{service.tools.length - 3} more</span>
                                            )}
                                        </div>

                                        {/* Flip Hint - Enhanced UI */}
                                        <motion.div
                                            className="flex items-center justify-center gap-2 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/30"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                                            <span className="text-sm font-medium text-cyan-300">Click to see credentials</span>
                                            <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </motion.div>
                                    </div>

                                    {/* Gradient Border */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} p-[2px] -z-10 opacity-80`}>
                                        <div className="bg-black rounded-2xl w-full h-full"></div>
                                    </div>
                                </div>

                                {/* Back of Card (Details) */}
                                <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-cyan-500/30 bg-gradient-to-br from-black to-blue-900 shadow-2xl shadow-cyan-500/20 rotate-y-180 p-5">
                                    <div className="h-full flex flex-col">
                                        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            Service Details
                                        </h4>

                                        {/* Features List */}
                                        <div className="mb-4">
                                            <h5 className="text-sm font-semibold text-cyan-300 mb-2">What we deliver:</h5>
                                            <ul className="space-y-1">
                                                {service.features.map((feature, i) => (
                                                    <li key={i} className="text-xs text-gray-300 flex items-start">
                                                        <span className="text-cyan-400 mr-2">•</span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Tools List */}
                                        <div className="mb-4">
                                            <h5 className="text-sm font-semibold text-cyan-300 mb-2">Technologies we use:</h5>
                                            <div className="flex flex-wrap gap-1">
                                                {service.tools.map((tool, i) => (
                                                    <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded text-cyan-200">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Get Service Button */}
                                        <motion.a
                                            href="/contact"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`mt-auto bg-gradient-to-r ${service.color} text-white px-4 py-3 rounded-full font-semibold text-center block shadow-lg shadow-cyan-500/20`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Get This Service
                                        </motion.a>

                                        {/* Flip Back Hint */}
                                        <div className="text-center text-xs text-cyan-400 mt-3 flex items-center justify-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                            </svg>
                                            Click to flip back
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="text-center mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                        Ready to Transform Your Business?
                    </h3>
                    <p className="max-w-2xl mx-auto mb-8 text-white/80">
                        Let's discuss how our services can help you achieve your goals and drive innovation.
                    </p>
                    <motion.a
                        href="/contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-cyan-500/30"
                    >
                        Start Your Project Today
                        <motion.span
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            →
                        </motion.span>
                    </motion.a>
                </motion.div>

                {/* Background Orbs */}
                <motion.div
                    className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 10, repeat: Infinity }}
                />
            </section>
        </>
    );
}