'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const values = [
    { value: 'Innovation', desc: 'We foster creativity to deliver cutting-edge solutions.', icon: '💡' },
    { value: 'Collaboration', desc: 'Teamwork and partnerships drive our success.', icon: '🤝' },
    { value: 'Integrity', desc: 'Ethical, transparent, and accountable practices.', icon: '🔒' },
    { value: 'Excellence', desc: 'High standards in every project we deliver.', icon: '⭐' },
];

const stats = [
    { value: 120, suffix: '+', label: 'Projects Completed' },
    { value: 25, suffix: '+', label: 'Enterprise Clients' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
];

const Counter = ({ value, suffix, label }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = value;
            const duration = 1200; // faster than 2s
            const incrementTime = (duration / end) * 20;

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, value]);

    return (
        <div ref={ref}>
            <h4 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2">
                {count}{suffix}
            </h4>
            <p className="text-gray-400 font-medium">{label}</p>
        </div>
    );
};

export default function AboutCoreValues() {
    const ref = useRef(null);

    const floatingVariants = {
        animate: {
            y: [0, -15, 0],
            transition: {
                duration: 3, // faster
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section
            id="core-values"
            ref={ref}
            className="relative py-28 px-6 max-w-6xl mx-auto text-center overflow-hidden"
        >
            {/* Background */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl"
            />

            {/* Floating circles */}
            <motion.div
                variants={floatingVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20"
            />
            <motion.div
                variants={floatingVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.3 }}
                className="absolute top-2/3 right-12 w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/20 to-orange-500/20"
            />
            <motion.div
                variants={floatingVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.6 }}
                className="absolute bottom-1/4 left-20 w-4 h-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20"
            />

            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: -20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }} // faster
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-16 relative z-10"
            >
                Core Values &{' '}
                <motion.span
                    initial={{ backgroundPosition: '0% 50%' }}
                    whileInView={{ backgroundPosition: '100% 50%' }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear"
                    }}
                    className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-[length:200%_auto]"
                >
                    Team Excellence
                </motion.span>
            </motion.h2>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {values.map((v, i) => (
                    <motion.div
                        key={v.value}
                        initial={{ opacity: 0, scale: 0.9, y: 20, rotateY: -15 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0, rotateY: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        whileHover={{
                            y: -10,
                            scale: 1.03,
                            transition: { duration: 0.15 } // faster
                        }}
                        transition={{
                            delay: i * 0.1, // faster stagger
                            duration: 0.5, // faster
                            type: "spring",
                            stiffness: 120
                        }}
                        className="relative rounded-2xl p-8 shadow-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-lg overflow-hidden group"
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                        />
                        <motion.div
                            className="absolute inset-0 rounded-2xl"
                            initial={false}
                            whileHover={{
                                boxShadow: "0 0 0 1px rgba(99, 102, 241, 0.3), 0 0 20px rgba(99, 102, 241, 0.2)",
                                transition: { duration: 0.2 } // faster
                            }}
                        />
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: i * 0.1 + 0.1, duration: 0.4 }}
                            className="text-4xl mb-4"
                        >
                            {v.icon}
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white relative z-10">
                            {v.value}
                        </h3>
                        <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm relative z-10">
                            {v.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Stats */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.6 }} // faster
                className="mt-20 flex justify-around flex-wrap gap-8 text-center relative z-10"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }} // faster
                        className="relative"
                    >
                        <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 blur-lg rounded-full opacity-75 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                            <Counter
                                value={stat.value}
                                suffix={stat.suffix}
                                label={stat.label}
                            />
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Decorative SVG */}
            <motion.div
                initial={{ opacity: 0, pathLength: 0 }}
                whileInView={{ opacity: 1, pathLength: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2, delay: 0.2 }} // faster
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
                <svg width="80%" height="80%" viewBox="0 0 100 100" className="opacity-5">
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
    );
}
