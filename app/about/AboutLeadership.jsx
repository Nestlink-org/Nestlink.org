'use client';

import { motion } from 'framer-motion';

// Leadership team
const leaders = [
    { name: 'Comfortine Siwende O.', role: 'CEO', img: '/comfortine.png' },
    { name: 'Melvin Simon O.', role: 'CTO', img: '/simo.png' },
    { name: 'Sheldon Billy O.', role: 'COO', img: '/sheldon.png' },
    { name: 'Peter Romeo R.', role: 'CFO', img: 'https://randomuser.me/api/portraits/men/30.jpg' },
    { name: 'Sophia W.', role: 'CMO', img: '/Babe.jpeg' },
];

// Scattered positions with responsive adjustments
const positions = [
    "top-0 left-0",
    "top-3 right-10",
    "top-44 left-20 md:top-44 md:left-20",
    "top-44 right-16 sm:top-52 sm:top-60",
    "bottom-10 left-40",
];

// Funky border radius styles
const shapeClasses = [
    "rounded-tl-[40%] rounded-bl-[40%] rounded-br-[40%] rounded-tr-[40%]",
    "rounded-br-[40%] rounded-bl-[40%] rounded-tl-[40%] rounded-tr-[10%]",
    "rounded-full",
    "rounded-tl-[40%] rounded-br-[40%] rounded-tr-[40%]",
    "rounded-tl-3xl rounded-tr-[40%] rounded-bl-[40%] rounded-br-[40%]",
];

export default function AboutLeadership() {
    return (
        <section
            id="leadership"
            className="relative py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
            {/* Left side text */}
            <div>
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    Meet Our Leadership
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                    Our leadership team blends innovation, expertise, and vision to drive the future
                    of technology. Each member brings unique strengths and passion to guide us forward.
                </motion.p>
            </div>

            {/* Right side scattered floating images */}
            <div className="relative w-full h-[600px]">
                {/* Single glowing lightblue orb in the background */}
                <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 6, repeat: Infinity }}
                />

                {leaders.map((leader, i) => (
                    <motion.div
                        key={leader.name}
                        className={`absolute ${positions[i % positions.length]} cursor-pointer`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ scale: 2, zIndex: 50 }}
                        animate={{
                            y: [0, -10, 0],
                            repeat: Infinity,
                            duration: 4,
                            ease: "easeInOut",
                            delay: i * 0.2,
                        }}
                    >
                        {/* Card with hover effect */}
                        <motion.div
                            className={`w-40 h-40 overflow-hidden border border-white/30 ${shapeClasses[i % shapeClasses.length]}`}
                            whileHover={{
                                borderRadius: "0px",
                                scale: 2,
                                transition: { duration: 0.3, ease: "easeInOut" },
                            }}
                            whileTap={{ scale: 2 }}
                        >
                            <img
                                src={leader.img}
                                alt={leader.name}
                                className="w-full h-full object-cover"
                            />

                            {/* Role appears on hover inside the picture */}
                            <motion.div
                                className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-semibold text-lg opacity-0"
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.2 }}
                            >
                                {leader.role}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
