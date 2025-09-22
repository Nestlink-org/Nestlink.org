'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollFlipSections() {
    const containerRef = useRef(null);
    const cubeRef = useRef(null);

    // Section data with unique colors and enhancements
    const sections = [
        {
            title: "CYBERSECURITY SOLUTIONS",
            subtitle: "Protecting Your Digital Assets",
            description: "Our comprehensive cybersecurity services protect your organization from evolving threats. We implement layered security approaches that safeguard your data, applications, and infrastructure.",
            capabilities: [
                "Threat detection and response systems",
                "Vulnerability assessment and penetration testing",
                "Identity and access management solutions",
                "Security information and event management (SIEM)",
                "Compliance and regulatory security frameworks"
            ],
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2070&q=80",
            textColor: "text-emerald-300",
            bgColor: "bg-emerald-700/40",
            borderColor: "border-emerald-500",
            gradient: "from-emerald-900/50 to-emerald-700/40",
            pattern: "cyber-pattern"
        },
        {
            title: "FULL-STACK DEVELOPMENT",
            subtitle: "Scalable Digital Solutions for Modern Businesses",
            description: "Our full-stack development expertise spans from responsive front-end interfaces to robust back-end architectures. We create scalable, secure, and high-performance applications that drive digital transformation.",
            capabilities: [
                "Enterprise-grade web and mobile application development",
                "Cloud-native architecture and microservices implementation",
                "Real-time data processing and WebSocket integrations",
                "Progressive Web Apps (PWAs) with offline functionality",
                "DevOps automation and continuous deployment pipelines"
            ],
            image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=2070&q=80",
            textColor: "text-blue-300",
            bgColor: "bg-blue-700/40",
            borderColor: "border-blue-500",
            gradient: "from-blue-900/50 to-blue-700/40",
            pattern: "code-pattern"
        },
        {
            title: "BLOCKCHAIN INNOVATION",
            subtitle: "Secure, Transparent Digital Infrastructure",
            description: "Leveraging blockchain technology, we create decentralized solutions that enhance security, transparency, and trust in digital interactions. Our blockchain expertise includes developing smart contracts and custom distributed ledger solutions.",
            capabilities: [
                "Smart contract development and auditing",
                "Custom blockchain network implementation",
                "Tokenization and digital asset management systems",
                "Supply chain transparency solutions",
                "Decentralized finance (DeFi) applications"
            ],
            image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=2072&q=80",
            textColor: "text-purple-300",
            bgColor: "bg-purple-700/40",
            borderColor: "border-purple-500",
            gradient: "from-purple-900/50 to-purple-700/40",
            pattern: "blockchain-pattern"
        },
        {
            title: "CLOUD INFRASTRUCTURE",
            subtitle: "Scalable, Secure Cloud Solutions",
            description: "We design and implement robust cloud infrastructures that scale with your business needs. Our cloud solutions ensure high availability, security, and performance for your critical applications and data.",
            capabilities: [
                "Multi-cloud architecture design and implementation",
                "Container orchestration with Kubernetes",
                "Serverless computing solutions",
                "Disaster recovery and business continuity planning",
                "Cloud security and compliance frameworks"
            ],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80",
            textColor: "text-orange-300",
            bgColor: "bg-orange-700/40",
            borderColor: "border-orange-500",
            gradient: "from-orange-900/50 to-orange-700/40",
            pattern: "cloud-pattern"
        },
        {
            title: "AI-POWERED SOLUTIONS",
            subtitle: "Transforming Industries with Intelligent Systems",
            description: "At NestLink, we develop cutting-edge AI solutions that revolutionize how businesses operate. Our neural network architectures and machine learning models process vast datasets to uncover insights, predict trends, and automate complex decision-making processes.",
            capabilities: [
                "Custom AI model development and deployment",
                "Predictive analytics and data intelligence platforms",
                "Computer vision systems for quality control",
                "Natural language processing for customer experience",
                "AI-powered automation for operational efficiency"
            ],
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=2069&q=80",
            textColor: "text-cyan-300",
            bgColor: "bg-cyan-700/40",
            borderColor: "border-cyan-500",
            gradient: "from-cyan-900/50 to-cyan-700/40",
            pattern: "neural-pattern"
        }
    ];

    useEffect(() => {
        if (!cubeRef.current || !containerRef.current) return;

        const cube = cubeRef.current;

        // Optimize performance by using will-change
        gsap.set(cube, { willChange: 'transform' });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=' + (sections.length * window.innerHeight),
                scrub: 1, // Smoother scrubbing
                pin: true,
                snap: 1 / (sections.length - 1),
                anticipatePin: 1,
            },
        });

        // Smoother flip animation with longer duration
        sections.forEach((_, i) => {
            if (i === 0) return;
            tl.to(cube, {
                rotateX: 90 * i,
                duration: 1, // Longer duration for smoother animation
                ease: 'power2.inOut',
                overwrite: 'auto'
            });
        });

        // Clean up
        return () => {
            if (tl.scrollTrigger) {
                tl.scrollTrigger.kill();
            }
            tl.kill();
        };
    }, [sections.length]);

    // Function to get CSS custom properties for each section
    const getSectionStyle = (index) => {
        const colors = [
            { color1: '#10b981', color2: '#059669', color3: '#34d399', color4: '#065f46' },
            { color1: '#3b82f6', color2: '#2563eb', color3: '#60a5fa', color4: '#1e40af' },
            { color1: '#8b5cf6', color2: '#7c3aed', color3: '#a78bfa', color4: '#5b21b6' },
            { color1: '#f97316', color2: '#ea580c', color3: '#fb923c', color4: '#9a3412' },
            { color1: '#06b6d4', color2: '#0891b2', color3: '#22d3ee', color4: '#0e7490' }
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
            {/* Custom patterns CSS */}
            <style jsx>{`
                .cyber-pattern {
                    background-image: 
                        linear-gradient(to right, rgba(5, 150, 105, 0.1) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(5, 150, 105, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                .code-pattern {
                    background-image: 
                        radial-gradient(circle, rgba(37, 99, 235, 0.1) 1px, transparent 1px);
                    background-size: 20px 20px;
                }
                .blockchain-pattern {
                    background-image: 
                        linear-gradient(45deg, rgba(168, 85, 247, 0.1) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(168, 85, 247, 0.1) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, rgba(168, 85, 247, 0.1) 75%),
                        linear-gradient(-45deg, transparent 75%, rgba(168, 85, 247, 0.1) 75%);
                    background-size: 20px 20px;
                }
                .cloud-pattern {
                    background-image: 
                        radial-gradient(circle at 100% 100%, transparent 15px, rgba(249, 115, 22, 0.1) 15px, rgba(249, 115, 22, 0.1) 17px, transparent 17px),
                        radial-gradient(circle at 0 100%, transparent 15px, rgba(249, 115, 22, 0.1) 15px, rgba(249, 115, 22, 0.1) 17px, transparent 17px),
                        radial-gradient(circle at 100% 0, transparent 15px, rgba(249, 115, 22, 0.1) 15px, rgba(249, 115, 22, 0.1) 17px, transparent 17px),
                        radial-gradient(circle at 0 0, transparent 15px, rgba(249, 115, 22, 0.1) 15px, rgba(249, 115, 22, 0.1) 17px, transparent 17px);
                    background-size: 50px 50px;
                }
                .neural-pattern {
                    background-image: 
                        radial-gradient(circle, rgba(6, 182, 212, 0.1) 1px, transparent 1px);
                    background-size: 30px 30px;
                    background-position: 0 0, 15px 15px;
                }
                .floating-shapes::before {
                    content: '';
                    position: absolute;
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    background: linear-gradient(45deg, var(--color1), var(--color2));
                    filter: blur(60px);
                    opacity: 0.15;
                    animation: float 20s infinite ease-in-out;
                    z-index: 0;
                }
                .floating-shapes::after {
                    content: '';
                    position: absolute;
                    width: 150px;
                    height: 150px;
                    border-radius: 20px;
                    background: linear-gradient(135deg, var(--color3), var(--color4));
                    filter: blur(50px);
                    opacity: 0.1;
                    animation: float 18s infinite ease-in-out reverse;
                    z-index: 0;
                }
                @keyframes float {
                    0%, 100% { transform: translate(0, 0) rotate(0deg); }
                    25% { transform: translate(50px, -50px) rotate(5deg); }
                    50% { transform: translate(0, -80px) rotate(0deg); }
                    75% { transform: translate(-50px, -30px) rotate(-5deg); }
                }
            `}</style>

            <div className="w-full h-full flex items-center justify-center perspective-[1400px] overflow-hidden">
                {/* Cube wrapper */}
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
                                transform: `rotateX(${-90 * i}deg) translateZ(${window.innerHeight / 2}px)`,
                                backgroundImage: `url(${section.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                ...getSectionStyle(i)
                            }}
                        >
                            {/* Pattern overlay - reduced opacity */}
                            <div className={`absolute inset-0 ${section.pattern} ${section.bgColor} z-0`} />

                            {/* Gradient overlay - reduced opacity */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${section.gradient} z-0`} />

                            {/* Animated grid lines - reduced opacity */}
                            <div className="absolute inset-0 opacity-10 z-0">
                                <div className="absolute top-0 left-0 w-full h-px bg-white animate-moveLine"></div>
                                <div className="absolute top-1/4 left-0 w-full h-px bg-white animate-moveLine delay-1000"></div>
                                <div className="absolute top-1/2 left-0 w-full h-px bg-white animate-moveLine delay-2000"></div>
                                <div className="absolute top-3/4 left-0 w-full h-px bg-white animate-moveLine delay-3000"></div>

                                <div className="absolute left-0 top-0 h-full w-px bg-white animate-moveLineVertical"></div>
                                <div className="absolute left-1/4 top-0 h-full w-px bg-white animate-moveLineVertical delay-1000"></div>
                                <div className="absolute left-1/2 top-0 h-full w-px bg-white animate-moveLineVertical delay-2000"></div>
                                <div className="absolute left-3/4 top-0 h-full w-px bg-white animate-moveLineVertical delay-3000"></div>
                            </div>

                            {/* Centered content with reduced backdrop blur and more margin */}
                            <div className={`relative mx-auto max-w-2xl w-full px-6 text-white p-8 rounded-2xl flex flex-col items-center justify-center z-10 ${section.borderColor} mt-16`}>
                                {/* Section indicator */}
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black px-4 py-1 rounded-full border border-gray-700">
                                    <span className="text-xs font-bold text-white">{i + 1} / {sections.length}</span>
                                </div>

                                {/* Animated title underline with top margin */}
                                <h2 className={`text-3xl md:text-3xl font-bold mb-6 mt-6 ${section.textColor} relative text-white`}>
                                    {section.title}
                                    <span className="absolute bottom-0 left-0 w-0 h-1 bg-current animate-expandLine"></span>
                                </h2>

                                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-white">
                                    {section.subtitle}
                                </h3>

                                <p className="text-[12px] text-white  mb-4 ">
                                    {section.description}
                                </p>

                                <div className="mb-8 text-left w-full">
                                    <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-current" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        Our Capabilities:
                                    </h4>
                                    <ul className="space-y-3">
                                        {section.capabilities.map((cap, j) => (
                                            <li key={j} className="flex items-start text-white group">
                                                <svg
                                                    className="w-5 h-5 text-current mt-0.5 mr-3 flex-shrink-0 transform group-hover:scale-110 transition-transform"
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
                                                <span className="group-hover:translate-x-1 transition-transform">{cap}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <a
                                    href="/services"
                                    className={`inline-block px-8 py-3 bg-black/40 border ${section.borderColor} text-white font-bold rounded-full cursor-pointer mb-5`}
                                >
                                    <span className="relative z-10 cursor-pointer">EXPLORE OUR SOLUTIONS</span>
                                    <span className={`absolute inset-0 bg-current opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full`}></span>
                                </a>

                                {/* Floating particles with reduced opacity */}
                                <div className="absolute -inset-4 overflow-hidden z-0 ">
                                    {[...Array(10)].map((_, k) => (
                                        <div
                                            key={k}
                                            className="absolute w-2 h-2 bg-white rounded-full animate-float"
                                            style={{
                                                left: `${Math.random() * 100}%`,
                                                top: `${Math.random() * 100}%`,
                                                animationDelay: `${k * 0.7}s`,
                                                animationDuration: `${8 + Math.random() * 10}s`
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Animation keyframes with smoother animations */}
            <style jsx global>{`
                @keyframes moveLine {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                @keyframes moveLineVertical {
                    0% { transform: translateY(-100%); }
                    100% { transform: translateY(100%); }
                }
                @keyframes expandLine {
                    0% { width: 0; }
                    100% { width: 100%; }
                }
                @keyframes float {
                    0% { transform: translateY(0) rotate(0deg); opacity: 0; }
                    50% { opacity: 0.7; }
                    100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
                }
                .animate-moveLine {
                    animation: moveLine 12s linear infinite;
                }
                .animate-moveLineVertical {
                    animation: moveLineVertical 12s linear infinite;
                }
                .animate-expandLine {
                    animation: expandLine 2.5s ease-out forwards;
                    animation-delay: 0.5s;
                }
                .animate-float {
                    animation: float linear infinite;
                }
                .delay-1000 {
                    animation-delay: 1s;
                }
                .delay-2000 {
                    animation-delay: 2s;
                }
                .delay-3000 {
                    animation-delay: 3s;
                }
            `}</style>
        </div>
    );
}