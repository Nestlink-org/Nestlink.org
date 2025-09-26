'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
    { year: '2022', month: 'Mar', title: 'Humble Beginnings', desc: 'Three students - Comfortine, Sheldon, and Simon - started creating web pages as personal projects, laying the foundation for what would become NestLink.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { year: '2022', month: 'Aug', title: 'First Clients & Hackathons', desc: 'Landed our first small clients and began participating in hackathons, discovering our potential as a team.', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { year: '2022', month: 'Dec', title: 'NestLink Foundation', desc: 'Formally established NestLink as an organization, transforming from student developers into a professional team.', image: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { year: '2023', month: 'Jun', title: 'Service Expansion', desc: 'Expanded service offerings beyond web development to include comprehensive IT solutions.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { year: '2023', month: 'Nov', title: 'Cloud & AI Integration', desc: 'Integrated cloud infrastructure and AI capabilities into our solutions for scalable, intelligent services.', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
    { year: '2024', month: 'Present', title: 'Full-Spectrum IT Solutions', desc: 'Providing end-to-end IT services - web, cloud, AI, cybersecurity, and digital transformation.', image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' },
];

export default function Journey() {
    const itemVariants = { hidden: { opacity: 0, rotateY: 20, scale: 0.9 }, visible: { opacity: 1, rotateY: 0, scale: 1 } };
    const titleRef = useRef();
    const [isTitleInView, setIsTitleInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => setIsTitleInView(entry.isIntersecting), { threshold: 0.5 });
        if (titleRef.current) observer.observe(titleRef.current);
        return () => { if (titleRef.current) observer.unobserve(titleRef.current); };
    }, []);

    return (
        <section className="py-24 flex justify-center bg-background relative overflow-hidden">
            <div className="w-full max-w-6xl px-6 relative z-10">
                {/* Title */}
                <div ref={titleRef}>
                    <motion.h2 className="text-5xl md:text-7xl font-black text-center mb-20 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
                        initial={{ opacity: 0, y: -30, letterSpacing: '1rem' }}
                        animate={isTitleInView ? { opacity: 1, y: 0, letterSpacing: '0.05em' } : { opacity: 0, y: -30, letterSpacing: '1rem' }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        OUR JOURNEY
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Central line */}
                    <motion.div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500"
                        initial={{ height: 0 }} whileInView={{ height: "100%" }} viewport={{ once: true }} transition={{ duration: 2, delay: 0.5 }} />

                    <div className="flex flex-col gap-24">
                        {steps.map((s, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <motion.div key={s.year + s.month} className="flex flex-col md:flex-row items-center justify-between relative"
                                    initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={itemVariants} transition={{ duration: 0.8, delay: idx * 0.15 }}
                                >
                                    {/* Hexagon with bigger size & subtle blue background */}
                                    <motion.div className={`relative flex flex-col items-center justify-center w-36 h-36 z-10 rounded-full bg-blue-100/20 ${isLeft ? 'md:order-1' : 'md:order-2'}`}
                                        whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                                            <defs>
                                                <linearGradient id={`gradient${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#0ea5e9" />
                                                    <stop offset="100%" stopColor="#8b5cf6" />
                                                </linearGradient>
                                                <linearGradient id={`borderGradient${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                    <stop offset="0%" stopColor="#22d3ee" />
                                                    <stop offset="50%" stopColor="#a855f7" />
                                                    <stop offset="100%" stopColor="#ec4899" />
                                                </linearGradient>
                                            </defs>
                                            <motion.path d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 Z" fill={`url(#gradient${idx})`} stroke={`url(#borderGradient${idx})`} strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: idx * 0.2 }} />
                                        </svg>
                                        <span className="text-foreground font-bold text-[32px] relative z-10">{s.year}</span>
                                        <span className="text-muted-foreground text-[20px] relative z-10">{s.month}</span>
                                    </motion.div>

                                    {/* Connecting line */}
                                    <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 h-0.5 bg-gradient-to-r ${isLeft ? 'left-28 w-[calc(50%-7rem)] from-cyan-400 to-purple-500' : 'right-28 w-[calc(50%-7rem)] from-purple-500 to-cyan-400'}`}></div>

                                    {/* Description card */}
                                    <motion.div className={`md:max-w-lg rounded-xl bg-[#c5e2f1] dark:bg-background border border-border text-foreground relative overflow-hidden ${isLeft ? 'md:ml-auto md:order-2 border-cyan-400/30' : 'md:mr-auto md:order-1 border-purple-400'}`}
                                        initial={{ opacity: 0, x: isLeft ? 100 : -100, rotateY: 45 }}
                                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 + 0.3 }}
                                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <motion.img src={s.image} alt={s.title} className="w-full h-full object-cover" initial={{ scale: 1.1 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-70"></div>
                                        </div>

                                        <div className="p-6">
                                            <h4 className="text-xl font-bold mb-3 text-foreground">{s.title}</h4>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
