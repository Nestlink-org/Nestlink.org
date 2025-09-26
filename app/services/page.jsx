'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
    {
        title: 'Software Development',
        desc: 'Custom software solutions built with modern technologies and best practices. We create scalable, maintainable applications that solve real business problems.',
        video: '/video.mp4',
        color: 'from-blue-800 to-cyan-600',
        tools: ['Node.js', 'Python', 'Java', 'C#', 'PostgreSQL', 'MongoDB'],
        features: ['Custom Applications', 'API Development', 'Database Design', 'System Architecture']
    },
    {
        title: 'Website Development & Design',
        desc: 'Stunning, responsive websites with modern frameworks and cutting-edge design. We focus on user experience, performance, and conversion optimization.',
        video: '/web.mp4',
        color: 'from-blue-900 to-sky-500',
        tools: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'FastAPI', 'Framer Motion'],
        features: ['Responsive Design', 'SEO Optimization', 'Performance Tuning', 'UI/UX Design']
    },
    {
        title: 'Mobile App Development',
        desc: 'Native and cross-platform mobile applications for iOS and Android. We build intuitive, high-performance apps that users love.',
        video: '/mobile.mp4',
        color: 'from-indigo-900 to-blue-500',
        tools: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
        features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Push Notifications']
    },
    {
        title: 'Cloud & DevOps',
        desc: 'End-to-end cloud infrastructure and DevOps solutions. We automate deployments, ensure scalability, and maintain robust cloud environments.',
        video: '/devops.mp4',
        color: 'from-black to-blue-700',
        tools: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Monitoring'],
        features: ['Cloud Migration', 'Infrastructure as Code', 'Auto Scaling', '24/7 Monitoring']
    },
    {
        title: 'AI & Machine Learning',
        desc: 'Intelligent solutions powered by artificial intelligence and machine learning. We transform data into actionable insights and automation.',
        video: '/ai.mp4',
        color: 'from-blue-950 to-cyan-400',
        tools: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'NLP', 'Computer Vision'],
        features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Integration']
    },
    {
        title: 'Cybersecurity',
        desc: 'Comprehensive security solutions to protect your digital assets. We implement robust security measures and threat detection systems.',
        video: '/cyber.mp4',
        color: 'from-black to-blue-600',
        tools: ['Penetration Testing', 'Encryption', 'Firewalls', 'Security Audits', 'Zero Trust'],
        features: ['Threat Detection', 'Vulnerability Assessment', 'Data Protection', 'Security Compliance']
    },
    {
        title: 'Networking Solutions',
        desc: 'Reliable and secure network infrastructure for businesses of all sizes. We design, implement, and maintain robust networking systems.',
        video: '/network.mp4',
        color: 'from-blue-800 to-sky-400',
        tools: ['Cisco', 'Juniper', 'SD-WAN', 'VPN', 'Wireless', 'Network Monitoring'],
        features: ['Network Design', 'Implementation', 'Troubleshooting', 'Performance Optimization']
    },
    {
        title: 'IoT Development',
        desc: 'Internet of Things solutions that connect devices and enable smart automation. We build IoT ecosystems that drive efficiency and innovation.',
        video: '/iot.mp4',
        color: 'from-blue-900 to-cyan-500',
        tools: ['Arduino', 'Raspberry Pi', 'MQTT', 'AWS IoT', 'Sensor Networks', 'Edge Computing'],
        features: ['Device Connectivity', 'Data Collection', 'Remote Monitoring', 'Automation Systems']
    },
    {
        title: 'Blockchain Development',
        desc: 'Decentralized applications and smart contracts built on blockchain technology. We create secure, transparent, and innovative solutions.',
        video: '/blochain.mp4',
        color: 'from-black to-blue-500',
        tools: ['Ethereum', 'Solidity', 'Web3.js', 'Smart Contracts', 'NFTs', 'DeFi'],
        features: ['Smart Contracts', 'dApps', 'Tokenization', 'Blockchain Integration']
    },
    {
        title: 'Data Analytics',
        desc: 'Transform your data into actionable insights with advanced analytics and visualization tools. Make data-driven decisions with confidence.',
        video: '/data.mp4',
        color: 'from-blue-800 to-sky-500',
        tools: ['Tableau', 'Power BI', 'Python', 'R', 'SQL', 'Data Visualization'],
        features: ['Data Visualization', 'Business Intelligence', 'Reporting', 'Predictive Modeling']
    },
    {
        title: 'UX/UI Design',
        desc: 'Beautiful, intuitive user interfaces that enhance user experience and drive engagement. We design with purpose and precision.',
        video: '/ui.mp4',
        color: 'from-indigo-900 to-blue-400',
        tools: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research', 'Wireframing'],
        features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems']
    },
    {
        title: 'Digital Marketing',
        desc: 'Comprehensive digital marketing strategies that drive growth and increase brand visibility across all digital channels.',
        video: '/iot.mp4',
        color: 'from-blue-950 to-cyan-500',
        tools: ['SEO', 'Google Analytics', 'Social Media', 'Content Marketing', 'PPC', 'Email Marketing'],
        features: ['SEO Optimization', 'Social Media Management', 'Content Strategy', 'Performance Analytics']
    }
];

export default function ServicesWeOffer() {
    const [flippedCards, setFlippedCards] = useState({});

    const toggleFlip = (index) =>
        setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));

    return (
        <>
            <Header />
            <section className="py-24 container mx-auto px-6 relative" id="services">
                {/* Grid Background */}
                <div
                    className="absolute inset-0 -z-10 opacity-20 animate-[backgroundMove_30s_linear_infinite]"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

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
                                opacity: Math.random() * 0.7
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                                opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                                duration: Math.random() * 10 + 10,
                                repeat: Infinity,
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                </div>

                {/* Title */}
                <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
                    <h2 className="text-5xl md:text-5xl font-black mb-6 text-[#38b6ff]">
                        SERVICES WE OFFER
                    </h2>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
                        Transforming ideas into exceptional digital experiences through cutting-edge technology and innovative solutions.
                        We deliver comprehensive services tailored to your unique business needs.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10 bg-[#c5e2f1] dark:bg-background">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="relative h-96 cursor-pointer perspective"
                            onClick={() => toggleFlip(index)}
                        >
                            <Card className="w-full h-full rounded-2xl" style={{ transformStyle: 'preserve-3d' }}>
                                {/* Front */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl overflow-hidden p-0"
                                    animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ backfaceVisibility: 'hidden' }}
                                >
                                    <div className="relative h-40 overflow-hidden">
                                        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                                            <source src={service.video} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                        <div className="absolute bottom-4 left-4 z-10">
                                            <h3 className="text-xl font-bold">{service.title}</h3>
                                            <div className="flex gap-1 mt-1">
                                                {service.features.slice(0, 2).map((feature, i) => (
                                                    <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded-full">{feature}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <p className="text-sm mb-4 line-clamp-3">{service.desc}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {service.tools.slice(0, 3).map((tool, i) => (
                                                <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded">{tool}</span>
                                            ))}
                                            {service.tools.length > 3 && <span className="text-xs">+{service.tools.length - 3} more</span>}
                                        </div>
                                        <Button variant=" outline " className="w-full animate-bounce text-[#38b6ff]" onClick={(e) => e.stopPropagation()}>
                                            Click the Video to see credentials
                                        </Button>
                                    </div>
                                </motion.div>

                                {/* Back */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl overflow-hidden p-5 flex flex-col"
                                    animate={{ rotateY: flippedCards[index] ? 0 : 180 }}
                                    transition={{ duration: 0.5 }}
                                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                >
                                    <h4 className="text-lg font-bold mb-4">Service Details</h4>
                                    <div className="mb-4">
                                        <h5 className="text-sm font-semibold mb-2">What we deliver:</h5>
                                        <ul className="space-y-1">
                                            {service.features.map((feature, i) => (
                                                <li key={i} className="text-xs flex items-start">
                                                    <span className="mr-2">•</span>{feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h5 className="text-sm font-semibold mb-2">Technologies we use:</h5>
                                        <div className="flex flex-wrap gap-1">
                                            {service.tools.map((tool, i) => (
                                                <span key={i} className="text-xs bg-cyan-500/20 px-2 py-1 rounded">{tool}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <Button asChild className="mt-auto w-full">
                                        <a href="/contact" onClick={(e) => e.stopPropagation()}>Get This Service</a>
                                    </Button>
                                </motion.div>
                            </Card>
                        </div>
                    ))}
                </div>
            </section>

            <style jsx>{`
        @keyframes backgroundMove {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
      `}</style>
        </>
    );
}
