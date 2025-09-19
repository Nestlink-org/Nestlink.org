'use client';

import { useState, useEffect, useRef } from 'react';

export default function ScrollFlipSections() {
    const [currentSection, setCurrentSection] = useState(0);
    const containerRef = useRef(null);
    const sectionRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ];

    // Section data with organization capabilities - 5 sections total
    const sections = [
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
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
            color: "from-blue-600 to-cyan-500",
            textColor: "text-purple-300"
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
            image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            color: "from-cyan-600 to-emerald-500",
            textColor: "text-blue-300"
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
            image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            color: "from-purple-600 to-blue-500",
            textColor: "text-cyan-300"
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
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
            color: "from-orange-600 to-red-500",
            textColor: "text-yellow-300"
        },
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
            image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
            color: "from-green-600 to-teal-500",
            textColor: "text-emerald-300"
        }
    ];

    // Handle scroll events with immediate response
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;

            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const containerTop = containerRef.current.offsetTop;
            const scrollWithinContainer = scrollPosition - containerTop;

            // Calculate current section based on scroll position with immediate response
            const newSection = Math.max(0, Math.min(
                Math.floor(scrollWithinContainer / (windowHeight * 0.8)), // Trigger at 20% scroll
                sections.length - 1
            ));

            if (newSection !== currentSection) {
                setCurrentSection(newSection);
            }
        };

        // Use requestAnimationFrame for smoother scrolling
        let ticking = false;
        const scrollHandler = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', scrollHandler, { passive: true });
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [currentSection, sections.length]);

    return (
        <div ref={containerRef} className="relative">
            {/* Sections */}
            {sections.map((section, index) => (
                <section
                    key={index}
                    ref={sectionRefs[index]}
                    className="h-screen relative flex items-center justify-center overflow-hidden"
                    style={{
                        zIndex: sections.length - index,
                        perspective: '1000px'
                    }}
                >
                    {/* Content with immediate flip animation */}
                    <div
                        className={`w-[90%] h-full flex items-center justify-center transition-transform duration-500 ease-out`}
                        style={{
                            transform: `rotateX(${currentSection === index ? 0 : currentSection > index ? 90 : -90}deg)`,
                            transformStyle: 'preserve-3d',
                            opacity: currentSection === index ? 1 : 0.3,
                            transition: 'transform 500ms ease-out, opacity 500ms ease-out'
                        }}
                    >
                        <div className="absolute inset-0">
                            <img
                                src={section.image}
                                alt={section.title}
                                className="w-full h-full object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-b ${section.color} opacity-80`}></div>
                        </div>

                        <div className="relative z-10 text-center max-w-4xl px-8">
                            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${section.textColor}`}>
                                {section.title}
                            </h2>
                            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-white">
                                {section.subtitle}
                            </h3>
                            <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                                {section.description}
                            </p>

                            <div className="mb-8 text-left max-w-2xl mx-auto">
                                <h4 className="text-xl font-semibold text-white mb-4">Our Capabilities:</h4>
                                <ul className="space-y-2">
                                    {section.capabilities.map((capability, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-200">{capability}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href="/services"
                                className="inline-block px-6 py-3 bg-black/40 border border-cyan-500/50 text-cyan-300 font-medium hover:bg-cyan-500/20 transition-all"
                            >
                                EXPLORE OUR SOLUTIONS
                            </a>

                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}