'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const leaders = [
    {
        name: 'Amina Kowalski',
        role: 'CTO - FinTech Innovations',
        company: 'WealthFront Technologies',
        quote: 'Nestlink took our product to the next level with their exceptional technical expertise and innovative approach. The team delivered beyond our expectations.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'John Delaney',
        role: 'Head of Product',
        company: 'Streamline Analytics',
        quote: 'The attention to detail in motion design and performance optimization was incredible. Our users noticed the difference immediately.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Rui Li',
        role: 'VP Engineering',
        company: 'Nexus Systems',
        quote: 'Fast, reliable, and highly skilled team. They integrated seamlessly with our existing workflows and delivered ahead of schedule.',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Maria Rodriguez',
        role: 'CEO',
        company: 'HealthTech Solutions',
        quote: 'The scalability and security implementations have positioned us for tremendous growth. Exceptional partnership throughout.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'David Chen',
        role: 'Technical Director',
        company: 'AutoTech Industries',
        quote: 'Their AI integration capabilities transformed our data processing pipeline. The results speak for themselves.',
        rating: 5,
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Sarah Johnson',
        role: 'Product Manager',
        company: 'EduTech Platforms',
        quote: 'The user experience improvements led to a 40% increase in engagement. The team truly understands user-centric design.',
        rating: 4,
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80'
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDarkMode, setIsDarkMode] = useState(true);

    // Detect theme (connect to your theme context)
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(mediaQuery.matches);

        const handler = (e) => setIsDarkMode(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    // Theme-aware colors
    const textColor = isDarkMode ? 'text-gray-100' : 'text-gray-800';
    const secondaryTextColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
    const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';
    const cardBg = isDarkMode ? 'bg-gray-800/50' : 'bg-white/80';
    const hoverBg = isDarkMode ? 'hover:bg-gray-700/30' : 'hover:bg-gray-100/80';

    // Auto-rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % leaders.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 container mx-auto px-6 relative">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h3 className={`text-3xl md:text-4xl font-bold mb-4 ${textColor}`}>
                    Trusted by Industry Leaders
                </h3>
                <p className={`max-w-2xl mx-auto ${secondaryTextColor}`}>
                    Discover what executives and technical leaders say about their experience working with our team
                </p>
            </motion.div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {leaders.map((leader, i) => (
                    <motion.div
                        key={leader.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className={`p-6 rounded-xl ${cardBg} border ${borderColor} backdrop-blur-sm ${hoverBg} transition-all duration-300 h-full flex flex-col`}
                    >
                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-4">
                            {Array.from({ length: 5 }).map((_, idx) => (
                                <div key={idx} className={`text-sm ${idx < leader.rating ? 'text-yellow-400' : 'text-gray-400'}`}>
                                    ★
                                </div>
                            ))}
                        </div>

                        {/* Quote */}
                        <p className={`mb-6 italic ${secondaryTextColor} flex-1`}>
                            "{leader.quote}"
                        </p>

                        {/* Author */}
                        <div className="flex items-center gap-4 pt-4 border-t border-gray-700/30">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold overflow-hidden">
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className={`font-semibold ${textColor}`}>{leader.name}</div>
                                <div className={`text-sm ${secondaryTextColor}`}>{leader.role}</div>
                                <div className={`text-xs ${secondaryTextColor} opacity-70`}>{leader.company}</div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Featured Testimonial (Carousel) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-4xl mx-auto"
            >
                <div className={`p-8 rounded-xl ${cardBg} border ${borderColor} backdrop-blur-sm text-center`}>
                    <div className="flex justify-center mb-6">
                        {Array.from({ length: 5 }).map((_, idx) => (
                            <div key={idx} className={`text-lg ${idx < leaders[currentIndex].rating ? 'text-yellow-400' : 'text-gray-400'}`}>
                                ★
                            </div>
                        ))}
                    </div>

                    <p className={`text-xl italic mb-8 ${secondaryTextColor}`}>
                        "{leaders[currentIndex].quote}"
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold overflow-hidden">
                            <img
                                src={leaders[currentIndex].image}
                                alt={leaders[currentIndex].name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div>
                            <div className={`font-semibold text-lg ${textColor}`}>{leaders[currentIndex].name}</div>
                            <div className={secondaryTextColor}>{leaders[currentIndex].role}</div>
                            <div className={`text-sm ${secondaryTextColor} opacity-70`}>{leaders[currentIndex].company}</div>
                        </div>
                    </div>

                    {/* Carousel indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {leaders.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentIndex(idx)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex
                                    ? 'bg-blue-500 w-6'
                                    : 'bg-gray-500 hover:bg-gray-400'
                                    }`}
                                aria-label={`View testimonial from ${leaders[idx].name}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center"
            >
                <div>
                    <div className={`text-3xl font-bold ${textColor}`}>98%</div>
                    <div className={secondaryTextColor}>Client Satisfaction</div>
                </div>
                <div>
                    <div className={`text-3xl font-bold ${textColor}`}>150+</div>
                    <div className={secondaryTextColor}>Projects Completed</div>
                </div>
                <div>
                    <div className={`text-3xl font-bold ${textColor}`}>4.9/5</div>
                    <div className={secondaryTextColor}>Average Rating</div>
                </div>
                <div>
                    <div className={`text-3xl font-bold ${textColor}`}>100%</div>
                    <div className={secondaryTextColor}>Recommendation Rate</div>
                </div>
            </motion.div>
        </section>
    );
}