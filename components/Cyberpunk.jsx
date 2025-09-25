'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFlipSections() {
    const containerRef = useRef(null);
    const cubeRef = useRef(null);
    const [viewportHeight, setViewportHeight] = useState(0);

    // Update viewport height safely on client
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const updateHeight = () => setViewportHeight(window.innerHeight);
        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    const sections = [
        {
            title: 'CYBERSECURITY SOLUTIONS',
            subtitle: 'Protecting Your Digital Assets',
            description:
                'Our comprehensive cybersecurity services protect your organization from evolving threats. We implement layered security approaches that safeguard your data, applications, and infrastructure.',
            capabilities: [
                'Threat detection and response systems',
                'Vulnerability assessment and penetration testing',
                'Identity and access management solutions',
                'Security information and event management (SIEM)',
                'Compliance and regulatory security frameworks',
            ],
            image:
                'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2070&q=80',
            textColor: 'text-emerald-300',
            bgColor: 'bg-emerald-700/40',
            borderColor: 'border-emerald-500',
            gradient: 'from-emerald-900/50 to-emerald-700/40',
            pattern: 'cyber-pattern',
        },
        {
            title: 'FULL-STACK DEVELOPMENT',
            subtitle: 'Scalable Digital Solutions for Modern Businesses',
            description:
                'Our full-stack development expertise spans from responsive front-end interfaces to robust back-end architectures. We create scalable, secure, and high-performance applications that drive digital transformation.',
            capabilities: [
                'Enterprise-grade web and mobile application development',
                'Cloud-native architecture and microservices implementation',
                'Real-time data processing and WebSocket integrations',
                'Progressive Web Apps (PWAs) with offline functionality',
                'DevOps automation and continuous deployment pipelines',
            ],
            image:
                'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=2070&q=80',
            textColor: 'text-blue-300',
            bgColor: 'bg-blue-700/40',
            borderColor: 'border-blue-500',
            gradient: 'from-blue-900/50 to-blue-700/40',
            pattern: 'code-pattern',
        },
        {
            title: 'BLOCKCHAIN INNOVATION',
            subtitle: 'Secure, Transparent Digital Infrastructure',
            description:
                'Leveraging blockchain technology, we create decentralized solutions that enhance security, transparency, and trust in digital interactions. Our blockchain expertise includes developing smart contracts and custom distributed ledger solutions.',
            capabilities: [
                'Smart contract development and auditing',
                'Custom blockchain network implementation',
                'Tokenization and digital asset management systems',
                'Supply chain transparency solutions',
                'Decentralized finance (DeFi) applications',
            ],
            image:
                'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=2072&q=80',
            textColor: 'text-purple-300',
            bgColor: 'bg-purple-700/40',
            borderColor: 'border-purple-500',
            gradient: 'from-purple-900/50 to-purple-700/40',
            pattern: 'blockchain-pattern',
        },
        {
            title: 'CLOUD INFRASTRUCTURE',
            subtitle: 'Scalable, Secure Cloud Solutions',
            description:
                'We design and implement robust cloud infrastructures that scale with your business needs. Our cloud solutions ensure high availability, security, and performance for your critical applications and data.',
            capabilities: [
                'Multi-cloud architecture design and implementation',
                'Container orchestration with Kubernetes',
                'Serverless computing solutions',
                'Disaster recovery and business continuity planning',
                'Cloud security and compliance frameworks',
            ],
            image:
                'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80',
            textColor: 'text-orange-300',
            bgColor: 'bg-orange-700/40',
            borderColor: 'border-orange-500',
            gradient: 'from-orange-900/50 to-orange-700/40',
            pattern: 'cloud-pattern',
        },
        {
            title: 'AI-POWERED SOLUTIONS',
            subtitle: 'Transforming Industries with Intelligent Systems',
            description:
                'At NestLink, we develop cutting-edge AI solutions that revolutionize how businesses operate. Our neural network architectures and machine learning models process vast datasets to uncover insights, predict trends, and automate complex decision-making processes.',
            capabilities: [
                'Custom AI model development and deployment',
                'Predictive analytics and data intelligence platforms',
                'Computer vision systems for quality control',
                'Natural language processing for customer experience',
                'AI-powered automation for operational efficiency',
            ],
            image:
                'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=2069&q=80',
            textColor: 'text-cyan-300',
            bgColor: 'bg-cyan-700/40',
            borderColor: 'border-cyan-500',
            gradient: 'from-cyan-900/50 to-cyan-700/40',
            pattern: 'neural-pattern',
        },
    ];

    useEffect(() => {
        if (!cubeRef.current || !containerRef.current || !viewportHeight) return;

        const cube = cubeRef.current;

        gsap.set(cube, { willChange: 'transform' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=' + sections.length * viewportHeight,
                scrub: 1,
                pin: true,
                snap: 1 / (sections.length - 1),
                anticipatePin: 1,
            },
        });

        sections.forEach((_, i) => {
            if (i === 0) return;
            tl.to(cube, {
                rotateX: 90 * i,
                duration: 1,
                ease: 'power2.inOut',
            });
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [sections.length, viewportHeight]);

    // CSS variable generator
    const getSectionStyle = (index) => {
        const colors = [
            { color1: '#10b981', color2: '#059669', color3: '#34d399', color4: '#065f46' },
            { color1: '#3b82f6', color2: '#2563eb', color3: '#60a5fa', color4: '#1e40af' },
            { color1: '#8b5cf6', color2: '#7c3aed', color3: '#a78bfa', color4: '#5b21b6' },
            { color1: '#f97316', color2: '#ea580c', color3: '#fb923c', color4: '#9a3412' },
            { color1: '#06b6d4', color2: '#0891b2', color3: '#22d3ee', color4: '#0e7490' },
        ];
        return {
            '--color1': colors[index].color1,
            '--color2': colors[index].color2,
            '--color3': colors[index].color3,
            '--color4': colors[index].color4,
        };
    };

    return (
        <div ref={containerRef} className="relative h-screen w-full">
            <div className="w-full h-full flex items-center justify-center perspective-[1400px] overflow-hidden">
                <div
                    ref={cubeRef}
                    className="relative w-full h-full preserve-3d"
                    style={{ transformStyle: 'preserve-3d' }}
                >
                    {sections.map((section, i) => (
                        <div
                            key={i}
                            className="absolute w-full h-full flex items-center justify-center text-center bg-white overflow-hidden floating-shapes"
                            style={{
                                transform: `rotateX(${-90 * i}deg) translateZ(${viewportHeight / 2}px)`,
                                backgroundImage: `url(${section.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                ...getSectionStyle(i),
                            }}
                        >
                            {/* overlays + content (same as your code) */}
                            <div className={`absolute inset-0 ${section.pattern} ${section.bgColor} z-0`} />
                            <div className={`absolute inset-0 bg-gradient-to-b ${section.gradient} z-0`} />

                            <div className="relative mx-auto max-w-2xl w-full px-6 text-white p-8 rounded-2xl flex flex-col items-center justify-center z-10 mt-16">
                                <h2 className={`text-3xl font-bold mb-6 ${section.textColor}`}>{section.title}</h2>
                                <h3 className="text-xl mb-4">{section.subtitle}</h3>
                                <p className="text-sm mb-4">{section.description}</p>
                                <ul className="space-y-2">
                                    {section.capabilities.map((cap, j) => (
                                        <li key={j} className="flex items-center">
                                            <svg
                                                className="w-5 h-5 mr-2 text-current"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            {cap}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
