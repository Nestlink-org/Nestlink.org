'use client';

import Header from '@/components/Header';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'Organization Website',
        description: 'A modern, responsive corporate website with CMS integration, e-commerce functionality, and seamless user experience across all devices.',
        tools: ['React', 'Next.js', 'Tailwind CSS', 'Contentful', 'Framer Motion'],
        url: '#',
        category: 'Web Development'
    },
    {
        id: 2,
        title: 'Project Management System - DNLS',
        description: 'Comprehensive project management solution with task tracking, team collaboration, time management, and advanced reporting capabilities.',
        tools: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'Chart.js'],
        url: '#',
        category: 'SaaS'
    },
    {
        id: 3,
        title: 'AI Powered Dermatology Assistant',
        description: 'AI-driven platform that helps users identify skin conditions through image analysis with 95% accuracy and provides preliminary recommendations.',
        tools: ['Python', 'TensorFlow', 'React Native', 'Firebase', 'Computer Vision'],
        url: '#',
        category: 'AI/Healthcare'
    },
    {
        id: 4,
        title: 'Smart Secure Health System - SSHS',
        description: 'End-to-end encrypted health records system with IoT integration for real-time patient monitoring and secure data sharing between providers.',
        tools: ['Blockchain', 'React', 'Node.js', 'IoT Sensors', 'HIPAA Compliance'],
        url: '#',
        category: 'Healthcare Tech'
    },
    {
        id: 5,
        title: 'AI Driven Early Crop Disease Detection',
        description: 'Agricultural solution using drone imagery and machine learning to identify crop diseases early, preventing widespread damage and increasing yields.',
        tools: ['Python', 'Drone APIs', 'Machine Learning', 'React', 'Google Maps API'],
        url: '#',
        category: 'AgriTech'
    },
    {
        id: 6,
        title: 'Secure Attendance System',
        description: 'Biometric and RFID-based attendance system with facial recognition, geo-fencing, and real-time reporting for enterprises and educational institutions.',
        tools: ['React Native', 'Node.js', 'Biometric APIs', 'MySQL', 'AWS'],
        url: '#',
        category: 'Enterprise Solution'
    },
    {
        id: 7,
        title: 'Blockchain Server Infrastructure',
        description: 'Scalable blockchain infrastructure for secure transactions, smart contracts, and decentralized applications with custom consensus mechanisms.',
        tools: ['Ethereum', 'Solidity', 'Web3.js', 'Go', 'Docker'],
        url: '#',
        category: 'Blockchain'
    },
    {
        id: 8,
        title: 'E-Commerce Platform for Disabilities',
        description: 'Accessible online shopping experience designed specifically for people with disabilities, featuring voice navigation, screen reader compatibility, and adaptive interfaces.',
        tools: ['React', 'Web Accessibility', 'Voice APIs', 'Node.js', 'MongoDB'],
        url: '#',
        category: 'E-Commerce'
    },
    {
        id: 9,
        title: 'Professional Portfolios Platform',
        description: 'Customizable portfolio builder for professionals to showcase their work, with templates, analytics, and integration with professional networks.',
        tools: ['Next.js', 'Tailwind CSS', 'GraphQL', 'AWS S3', 'Stripe'],
        url: '#',
        category: 'Web Development'
    },
    {
        id: 10,
        title: 'Madini Health Network',
        description: 'Telemedicine platform connecting patients with specialists across Africa, featuring video consultations, e-prescriptions, and medical record management.',
        tools: ['React Native', 'WebRTC', 'MongoDB', 'Twilio', 'Redis'],
        url: '#',
        category: 'HealthTech'
    },
    {
        id: 11,
        title: 'AI-Powered Cybersecurity Suite',
        description: 'Comprehensive cybersecurity solution using AI to detect threats in real-time, prevent data breaches, and automate incident response.',
        tools: ['Python', 'Machine Learning', 'React', 'Elasticsearch', 'Kubernetes'],
        url: '#',
        category: 'Cybersecurity'
    },
    {
        id: 12,
        title: 'Smart City IoT Platform',
        description: 'Integrated IoT platform for smart cities managing traffic flow, energy consumption, waste management, and public safety through connected sensors.',
        tools: ['IoT Protocols', 'React', 'Node.js', 'Data Visualization', 'Cloud Infrastructure'],
        url: '#',
        category: 'IoT'
    },
    {
        id: 13,
        title: 'VR Training Simulator',
        description: 'Immersive virtual reality training simulations for high-risk industries, providing realistic scenarios without physical danger.',
        tools: ['Unity', 'C#', 'VR Hardware', 'Blender', 'WebGL'],
        url: '#',
        category: 'VR/AR'
    },
    {
        id: 14,
        title: 'Predictive Analytics Dashboard',
        description: 'Business intelligence platform with predictive analytics, custom reporting, and data visualization for informed decision-making.',
        tools: ['React', 'D3.js', 'Python', 'TensorFlow', 'Big Data Processing'],
        url: '#',
        category: 'Data Science'
    },
    {
        id: 15,
        title: 'Voice Assistant Integration Platform',
        description: 'Platform enabling businesses to integrate voice assistant capabilities into their applications and services with custom skills and actions.',
        tools: ['Node.js', 'AWS Lambda', 'Voice APIs', 'React', 'NLP'],
        url: '#',
        category: 'Voice Technology'
    }
];

const categories = ['All', 'Web Development', 'SaaS', 'AI/Healthcare', 'Healthcare Tech', 'AgriTech', 'Enterprise Solution', 'Blockchain', 'E-Commerce', 'HealthTech', 'Cybersecurity', 'IoT', 'VR/AR', 'Data Science', 'Voice Technology'];

export default function ProjectsShowcase() {
    const [activeCategory, setActiveCategory] = useState('All');
    const ref = useRef(null);

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(project => project.category === activeCategory);

    // Floating animation for background elements
    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <>
            <Header></Header>
            <section id="projects" className="relative py-28 px-6 max-w-7xl mx-auto ">
                {/* Animated background elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 blur-3xl"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-3xl"
                />

                {/* Floating circles */}
                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"
                />

                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-2/3 right-12 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500"
                />

                <motion.div
                    variants={floatingVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-1/4 left-20 w-4 h-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500"
                />

                <motion.h2
                    initial={{ opacity: 0, y: -20, rotateX: -10 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center"
                >
                    Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">Projects</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center max-w-3xl mx-auto"
                >
                    Explore our portfolio of innovative solutions that have transformed industries and delivered exceptional value to our clients.
                </motion.p>

                {/* Category filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="flex flex-wrap justify-center gap-3 mb-16"
                > <h1 className='font-bold '>Filter here:</h1>
                    {categories.map((category, index) => (
                        <motion.button
                            key={category}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                                : 'bg-white/5 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/50'
                                }`}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.9, y: 20, rotateY: -15 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            whileHover={{
                                y: -10,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.8,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="relative rounded-2xl p-6 shadow-2xl bg-gradient-to-br from-[#09011b] via-[#131375] to-black border border-white backdrop-blur-lg overflow-hidden group h-full flex flex-col"
                        >
                            {/* Hover effect background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                initial={false}
                            />

                            {/* Animated border on hover */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl"
                                initial={false}
                                whileHover={{
                                    boxShadow: "0 0 0 1px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.2)",
                                    transition: { duration: 0.3 }
                                }}
                            />

                            {/* Category badge */}
                            <div className="mb-4">
                                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-500 dark:text-purple-300">
                                    {project.category}
                                </span>
                            </div>

                            {/* Project title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 relative z-10">
                                {project.title}
                            </h3>

                            {/* Project description */}
                            <p className="text-gray-700 dark:text-gray-300 text-sm mb-5 flex-grow relative z-10">
                                {project.description}
                            </p>

                            {/* Tools used */}
                            <div className="mb-5 relative z-10">
                                <h4 className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-2">Tools & Technologies:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: false, amount: 0.5 }}
                                            transition={{ delay: index * 0.1 + i * 0.1 }}
                                            className="px-2 py-1 text-xs rounded-md bg-white/20 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300"
                                        >
                                            {tool}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>

                            {/* See Project button */}
                            <motion.a
                                href={project.url}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.5 }}
                                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium text-sm transition-all hover:shadow-lg relative z-10"
                            >
                                See the Project
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                {/* Additional decorative element */}
                <motion.div
                    initial={{ opacity: 0, pathLength: 0 }}
                    whileInView={{ opacity: 1, pathLength: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10"
                >
                    <svg width="90%" height="90%" viewBox="0 0 100 100" className="opacity-5">
                        <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="0.5"
                        />
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6366F1" />
                                <stop offset="100%" stopColor="#10B981" />
                            </linearGradient>
                        </defs>
                    </svg>
                </motion.div>
            </section>
        </>
    );
}