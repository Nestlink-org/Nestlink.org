'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useState } from 'react';

const pricingTiers = [
    {
        title: 'Starter Solutions',
        price: '$20k - $75k',
        description: 'Perfect for startups and small businesses looking to establish their digital presence with essential features.',
        timeline: '3-6 month timeline',
        icon: '🚀',
        features: [
            'Basic web development',
            'Responsive design for all devices',
            'Basic cloud setup & deployment',
            'Up to 10 pages',
            'Contact forms integration',
            'Basic SEO optimization',
            '1 year technical support',
            'Training documentation'
        ],
        cta: 'Get Started',
        popular: false
    },
    {
        title: 'Growth Solutions',
        price: '$75k - $250k',
        description: 'Comprehensive solutions for growing businesses ready to scale with advanced functionality and integrations.',
        timeline: '6-12 month timeline',
        icon: '📈',
        features: [
            'Fullstack development',
            'Custom web applications',
            'Cloud architecture & DevOps',
            'Database design & implementation',
            'API development & integration',
            'AI integration',
            'User authentication systems',
            'Advanced analytics dashboard',
            'Ongoing maintenance & support'
        ],
        cta: 'Start Growing',
        popular: true
    },
    {
        title: 'Enterprise Solutions',
        price: '$250k +',
        description: 'End-to-end digital transformation for large organizations requiring complex systems and strategic guidance.',
        timeline: '12+ month timeline',
        icon: '🏢',
        features: [
            'Digital transformation strategy',
            'Advanced AI & machine learning',
            'Multi-platform development',
            'Legacy system modernization',
            'Strategic consultation',
            'Custom enterprise software',
            'Scalable infrastructure',
            '24/7 dedicated support',
            'Security auditing & compliance',
            'Team training & onboarding'
        ],
        cta: 'Transform Business',
        popular: false
    }
];

export default function Pricing() {
    const [annualBilling, setAnnualBilling] = useState(false);

    return (
        <>
            <Header />
            <section id="pricing" className="relative py-28 px-6 max-w-7xl mx-auto overflow-hidden">
                {/* Animated background elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"
                />

                {/* Hero section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                    >
                        INVESTMENT GUIDE
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        Strategic investment options designed to scale with your business needs.
                        From establishing your digital presence to full-scale transformation,
                        we have a solution that fits your vision and budget.
                    </motion.p>
                </div>

                {/* Pricing tiers */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingTiers.map((tier, index) => (
                        <motion.div
                            key={tier.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className={`relative rounded-2xl p-8 shadow-xl backdrop-blur-sm flex flex-col h-full ${tier.popular
                                ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-2 border-purple-500/30 scale-105 z-10'
                                : 'bg-gradient-to-br from-white/5 to-white/2 border border-white/5'
                                }`}
                        >
                            {/* Popular badge */}
                            {tier.popular && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                                >
                                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                                        MOST POPULAR
                                    </span>
                                </motion.div>
                            )}

                            {/* Tier icon */}
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                                className="text-4xl mb-4 text-center"
                            >
                                {tier.icon}
                            </motion.div>

                            {/* Tier title and price */}
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-2">
                                {tier.title}
                            </h3>
                            <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-center mb-4">
                                {tier.price}
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 text-center mb-6">
                                {tier.description}
                            </p>

                            {/* Timeline */}
                            <div className="bg-white/5 dark:bg-black/10 rounded-lg p-3 text-center mb-6">
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                    {tier.timeline}
                                </span>
                            </div>

                            {/* Features list */}
                            <ul className="mb-8 space-y-3 flex-grow">
                                {tier.features.map((feature, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + i * 0.1 }}
                                        className="flex items-start"
                                    >
                                        <svg className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* CTA button */}
                            <motion.a
                                href="/client"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${tier.popular
                                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg hover:shadow-xl'
                                    : 'bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-white/20 dark:hover:bg-gray-700/50'
                                    }`}
                            >
                                {tier.cta}
                            </motion.a>
                        </motion.div>
                    ))}
                </div>

                {/* CTA section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-20 text-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-12 border border-white/5"
                >
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to transform your business?
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
                        Let's discuss your project requirements and create a customized solution
                        that drives growth and delivers exceptional ROI for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                        >
                            Start a Project
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white/10 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 font-semibold rounded-lg hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all"
                        >
                            Schedule Consultation
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}