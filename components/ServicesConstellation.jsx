"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, Cloud, Shield, Code, Brain, Network, BarChart3, Lightbulb, Wrench, Star } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

// Updated IT services data with better descriptions and new order
const services = [
    {
        id: 5,
        name: "Software Development",
        description: "Transform your ideas into powerful, scalable applications with our full-stack development expertise. We specialize in custom web and mobile solutions using modern technologies like React, Node.js, Python, and cloud-native architectures. From MVP to enterprise-grade systems, we deliver robust, maintainable code that drives your business forward.",
        image: "/software.webp",
        link: "#",
        icon: Code,
    },
    {
        id: 12,
        name: "AI & Machine Learning",
        description: "Leverage the power of artificial intelligence to automate processes, gain insights from your data, and create intelligent applications. Our AI solutions include predictive analytics, natural language processing, computer vision, and custom ML models tailored to solve your specific business challenges and unlock new opportunities.",
        image: "/ai.jpg",
        link: "#",
        icon: Brain,
    },
    {
        id: 2,
        name: "Cloud Solutions",
        description: "Accelerate your digital transformation with our comprehensive cloud services. We provide end-to-end cloud migration, multi-cloud strategy, DevOps implementation, and cloud optimization. Whether you're on AWS, Azure, or Google Cloud, we ensure scalable, secure, and cost-effective infrastructure that grows with your business.",
        image: "/cloud.png",
        link: "#",
        icon: Cloud,
    },
    {
        id: 11,
        name: "Cybersecurity",
        description: "Protect your digital assets with our enterprise-grade security solutions. We offer comprehensive risk assessments, threat detection, incident response, and security compliance. Our proactive approach includes penetration testing, security monitoring, and employee training to safeguard your business from evolving cyber threats.",
        image: "/security.webp",
        link: "#",
        icon: Shield,
    },
    {
        id: 4,
        name: "Managed IT Services",
        description: "Focus on your core business while we handle your IT infrastructure. Our 24/7 monitoring, proactive maintenance, and dedicated support ensure maximum uptime and performance. We provide complete IT management including network monitoring, backup solutions, patch management, and help desk support.",
        image: "/managed.jpeg",
        link: "#",
        icon: Wrench,
    },
    {
        id: 1,
        name: "Network Infrastructure",
        description: "Build a robust, high-performance network foundation with our infrastructure solutions. We design, implement, and optimize wired and wireless networks, data centers, and connectivity solutions. Our expertise ensures reliable, secure, and scalable network architecture that supports your current and future business needs.",
        image: "/network.jpg",
        link: "#",
        icon: Network,
    },
    {
        id: 6,
        name: "IT Consulting",
        description: "Make informed technology decisions with our strategic IT consulting services. We provide technology assessment, digital roadmap planning, vendor selection, and IT governance. Our experts help align your technology investments with business objectives for maximum ROI and competitive advantage.",
        image: "/consultation.webp",
        link: "#",
        icon: Lightbulb,
    },
    {
        id: 7,
        name: "Data Analytics",
        description: "Turn your data into actionable intelligence with our advanced analytics solutions. We implement BI tools, data visualization, predictive modeling, and real-time analytics dashboards. Uncover hidden patterns, track KPIs, and make data-driven decisions that drive growth and operational efficiency.",
        image: "/data.jpeg",
        link: "#",
        icon: BarChart3,
    },
    {
        id: 8,
        name: "Digital Transformation",
        description: "Reinvent your business for the digital age with our comprehensive transformation services. We help modernize legacy systems, automate workflows, implement digital platforms, and foster innovation culture. Our holistic approach ensures sustainable digital growth and future-ready business models.",
        image: "/Transformation.jpg",
        link: "#",
        icon: Star,
    },
];

const service1 = {
    id: 3,
    name: "IT Support & Maintenance",
    description: "Ensure uninterrupted business operations with our comprehensive IT support and maintenance services. We offer 24/7 technical assistance, proactive system monitoring, regular maintenance, and rapid issue resolution. Our dedicated support team ensures your technology infrastructure remains reliable, secure, and optimized for peak performance.",
    image: "/support.png",
    link: "#",
    icon: Wrench,
};

export default function ServicesConstellation() {
    const containerRef = useRef(null);
    const pinRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const ctx = gsap.context(() => {
            const totalServices = services.length;

            const totalScrollDistance = totalServices * 80;

            gsap.to(pinRef.current, {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalScrollDistance}%`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                    anticipatePin: 1,
                },
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: `+=${totalScrollDistance}%`,
                    scrub: 1,
                    pin: false,
                },
            });

            cardsRef.current.forEach((card, index) => {
                if (!card) return;

                tl.fromTo(card,
                    {
                        y: "100%",
                        opacity: 100,
                    },
                    {
                        y: "0%",
                        opacity: 100,
                        duration: 1,
                        ease: "power2.out",
                    },
                    index * 0.5
                );
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const addToCardsRef = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <>
            <section className="py-20 w-full">
                <div className="container mx-auto px-4 text-center">
                    {/* Main Title with different font */}
                    <h1 className="font-bold tracking-tight text-5xl md:text-7xl font-serif mb-6">
                        Our Services
                    </h1>

                    {/* Enhanced descriptive paragraph with icons */}
                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl md:text-2xlleading-relaxed mb-8 font-light  text-black dark:text-gray-400">
                            Empowering businesses with cutting-edge technology solutions that drive innovation,
                            efficiency, and growth in the digital era.
                        </p>

                        {/* Interactive Features Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                                    <Cloud className="w-6 h-6 text-blue-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">Cloud First</span>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">Secure by Design</span>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                                    <Brain className="w-6 h-6 text-purple-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">AI Powered</span>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                                    <Lightbulb className="w-6 h-6 text-orange-600" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">Innovation Driven</span>
                            </div>
                        </div>

                        {/* Stats Section */}
                        <div className="flex justify-center items-center space-x-8 text-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-lg font-semibold text-black dark:text-gray-400">24/7 Support</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                <span className="text-lg font-semibold text-black dark:text-gray-400">99.9% Uptime</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                                <span className="text-lg font-semibold text-black dark:text-gray-400">Expert Team</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Constellation */}
            <div ref={containerRef} className="relative">
                <div ref={pinRef} className="h-screen bg-background relative overflow-hidden">
                    {/* Base card - always visible */}
                    <div className="absolute inset-0 z-10">
                        <ServiceCard service={service1} />
                    </div>

                    {/* Scroll-triggered cards */}
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            ref={addToCardsRef}
                            className="absolute inset-0 z-20 opacity-0"
                        >
                            <ServiceCard service={service} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

function ServiceCard({ service }) {
    const IconComponent = service.icon;

    return (
        <div className="w-full h-full flex flex-col md:flex-row shadow-2xl overflow-hidden border-y bg-background">
            {/* Left side - Gradient + Image */}
            <div className="relative w-full md:w-1/2 h-1/2 md:h-full">
                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 " />
                {/* Image */}
                <Image
                    width={600}
                    height={800}
                    src={service.image}
                    alt={service.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Right side - Content */}
            <div className="flex w-full md:w-1/2 h-1/2 md:h-full flex-col items-center md:items-start justify-center 
           px-6 py-10 md:px-16 text-center md:text-left 0 z-20">
                {/* Service Icon */}
                <div className="mb-6 p-3 bg-[#38b6ff] rounded-2xl inline-flex">
                    <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Section Label with different font */}
                <span className="uppercase tracking-widest font-bold text-sm md:text-base text-[#38b6ff] mb-4 font-mono">
                    Our IT Services
                </span>

                {/* Service Title with different font */}
                <h2 className="mb-6 text-4xl md:text-6xl font-bold leading-tight text-black dark:text-white font-sans">
                    {service.name}
                </h2>

                {/* Enhanced Description */}
                <p className="text-lg md:text-xl leading-relaxed mb-10 dark:text-gray-500 max-w-2xl font-light">
                    {service.description}
                </p>

                {/* Enhanced Button */}
                <a
                    href={"/contact"}
                    className="group flex items-center justify-center gap-3 px-10 py-4 rounded-full font-semibold 
               text-lg transition-all duration-300 bg-gradient-to-r from-[#38b6ff] to-[lightblue] text-black
               hover:from-[#38b6ff] hover:to-[#38b6ff] shadow-lg hover:shadow-xl hover:scale-105"
                >
                    Get Started
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                </a>
            </div>
        </div>
    );
}