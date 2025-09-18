'use client';

import { motion } from 'framer-motion';

const services = [
    {
        title: '3D Websites',
        desc: 'Create immersive product experiences with interactive 3D visuals, motion effects, and engaging layouts that capture attention.',
        img: 'https://images.unsplash.com/photo-1633259584604-afdc243122ea?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
        title: 'Cloud Expansion',
        desc: 'Scale your infrastructure seamlessly with modern cloud solutions, ensuring high availability, fast deployment, and global reach.',
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
        title: 'AI Solutions',
        desc: 'Integrate smart automation, predictive analytics, and machine learning models to enhance decision-making and operational efficiency.',
        img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
        title: 'UX & Motion',
        desc: 'Design interfaces that delight users with intuitive navigation, motion design, and subtle micro-interactions that boost engagement.',
        img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
        title: 'Data Pipelines',
        desc: 'Build reliable data pipelines for smooth data ingestion, transformation, and analytics that drive actionable insights.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
        title: 'DevOps',
        desc: 'Deploy, monitor, and maintain applications efficiently using modern DevOps practices and automation tools.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
        title: 'Cybersecurity',
        desc: 'Protect your digital assets',
        img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
    {
        title: 'IoT Solutions',
        desc: 'Connect and manage devices seamlessly',
        img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80'
    },
];

export default function ServicesConstellation() {
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.82, rotate: -5 },
        visible: { opacity: 1, scale: 1, rotate: 0 },
    };

    return (
        <section className="py-20 md:py-28 container mx-auto px-6" id="work">
            {/* Heading & Intro */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-3xl mx-auto mb-12"
            >
                <h3 className="text-xl text-blue-300 uppercase tracking-wider mb-2">Our Services</h3>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Services Constellation
                </h2>
                <p className="text-text-secondary text-sm md:text-base">
                    Explore the full range of solutions we provide. Each service is carefully crafted to bring your ideas to life with immersive 3D, scalable infrastructure, and intelligent systems.
                </p>
            </motion.div>

            <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
                    {services.map((s, idx) => (
                        <motion.div
                            key={s.title}
                            className="relative rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-sm cursor-pointer"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            variants={cardVariants}
                            transition={{ duration: 0.8, delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02, rotate: 1.2, transition: { type: 'spring', stiffness: 200 } }}
                        >
                            {/* Service Image */}
                            <div className="w-full h-36 md:h-44 relative">
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="w-full h-full object-cover rounded-t-2xl"
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-t-2xl"
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </div>

                            {/* Service Text */}
                            <div className="p-4 md:p-5 flex flex-col gap-3">
                                <h3 className="text-lg font-semibold text-white">{s.title}</h3>
                                <p className="text-sm text-text-secondary">{s.desc}</p>

                                {/* Get Service Button */}
                                <motion.a
                                    href="#contact"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="mt-2 inline-block text-center bg-gradient-to-br from-blue-600 to-purple-600 text-white px-3 py-1.5 rounded-full shadow-md font-semibold"
                                >
                                    Get Service
                                </motion.a>
                            </div>

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

                {/* See All Services Button */}
                <div className="mt-10 flex justify-center">
                    <motion.a
                        href="/services"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="inline-block bg-gradient-to-br from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-semibold"
                    >
                        See All Services
                    </motion.a>
                </div>

                {/* Decorative constellation lines */}
                <svg className="absolute inset-0 pointer-events-none">
                    <g stroke="rgba(99,102,241,0.08)" strokeWidth="1">
                        <line x1="10%" y1="25%" x2="45%" y2="50%" />
                        <line x1="45%" y1="50%" x2="80%" y2="25%" />
                        <line x1="30%" y1="70%" x2="60%" y2="60%" />
                    </g>
                </svg>
            </div>
        </section>
    );
}
