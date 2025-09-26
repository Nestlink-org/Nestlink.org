'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const services = [
    {
        title: '3D Websites',
        desc: 'Create immersive product experiences with interactive 3D visuals, motion effects, and engaging layouts that capture attention.',
        img: 'https://images.unsplash.com/photo-1633259584604-afdc243122ea?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-blue-500 to-cyan-500',
        tags: ['Tech', 'Innovation', '3D'],
    },
    {
        title: 'Cloud Expansion',
        desc: 'Scale your infrastructure seamlessly with modern cloud solutions, ensuring high availability, fast deployment, and global reach.',
        img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-purple-500 to-pink-500',
        tags: ['Cloud', 'Infrastructure', 'Scalable'],
    },
    {
        title: 'AI Solutions',
        desc: 'Integrate smart automation, predictive analytics, and machine learning models to enhance decision-making and operational efficiency.',
        img: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-green-500 to-teal-500',
        tags: ['AI', 'ML', 'Automation'],
    },
    {
        title: 'UX & Motion',
        desc: 'Design interfaces that delight users with intuitive navigation, motion design, and subtle micro-interactions that boost engagement.',
        img: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-yellow-500 to-orange-500',
        tags: ['UX', 'Motion', 'Design'],
    },
    {
        title: 'Data Pipelines',
        desc: 'Build reliable data pipelines for smooth data ingestion, transformation, and analytics that drive actionable insights.',
        img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-indigo-500 to-blue-500',
        tags: ['Data', 'Analytics', 'Pipelines'],
    },
    {
        title: 'DevOps',
        desc: 'Deploy, monitor, and maintain applications efficiently using modern DevOps practices and automation tools.',
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-red-500 to-pink-500',
        tags: ['DevOps', 'Automation', 'Cloud'],
    },
    {
        title: 'Cybersecurity',
        desc: 'Protect your digital assets with cutting-edge security protocols and threat detection systems.',
        img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-gray-500 to-blue-500',
        tags: ['Security', 'Cyber', 'Protection'],
    },
    {
        title: 'IoT Solutions',
        desc: 'Connect and manage devices seamlessly with our Internet of Things infrastructure and analytics.',
        img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=300&q=80',
        color: 'from-teal-500 to-green-500',
        tags: ['IoT', 'Devices', 'Analytics'],
    },
];

// Star rating component
const StarRating = ({ count }) => (
    <div className="flex items-center mt-1">
        {[...Array(5)].map((_, i) => (
            <motion.svg
                key={i}
                className={`w-4 h-4 ${i < count ? 'text-yellow-400' : 'text-muted-foreground'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
            >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </motion.svg>
        ))}
    </div>
);

export default function ServicesConstellation() {
    return (
        <section className="py-20 md:py-28 container mx-auto px-6 relative">
            {/* Title */}
            <motion.h2
                className="text-4xl md:text-6xl font-bold text-center mb-12"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                Services Constellation
            </motion.h2>

            {/* NestLink Text */}
            <motion.div
                className="text-center text-2xl md:text-3xl font-bold text-foreground mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <span className='text-[#38b6ff]'> Nest</span>Link
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
                {services.map((s, idx) => (
                    <motion.div
                        key={s.title}
                        className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-background cursor-pointer group"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        whileHover={{
                            scale: 1.03,
                            y: -5,
                            transition: { type: 'spring', stiffness: 300 }
                        }}
                    >
                        {/* Image */}
                        <div className="w-full h-40 md:h-48 relative overflow-hidden rounded-t-2xl">
                            <motion.img
                                src={s.img}
                                alt={s.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-backdrop/60 via-transparent to-transparent rounded-t-2xl" />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col gap-3">
                            <h3 className="text-xl font-bold text-foreground">{s.title}</h3>
                            <p className="text-sm text-muted-foreground min-h-[60px]">{s.desc}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {s.tags.map(tag => (
                                    <span key={tag} className="text-xs bg-background/20 px-2 py-1 rounded-full text-foreground/70">
                                        #{tag}
                                    </span>
                                ))}
                            </div>

                            {/* Get Service Button */}
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-3">
                                <Button asChild variant="default" className="w-full">
                                    <a href="/services">Get Service</a>
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Explore Full Services Button */}
            <motion.div className="mt-16 flex justify-center">
                <Button asChild size="lg" variant="default">
                    <a href="/services">Explore Full Services</a>
                </Button>
            </motion.div>
        </section>
    );
}
