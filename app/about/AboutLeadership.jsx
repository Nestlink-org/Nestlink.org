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

// Scattered positions (spread out so no overlap)
const positions = [
    "top-0 left-0",
    "top-3 right-50",
    "top-45 left-24",
    "top-43 right-20",
    "bottom-10 left-50",
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
                    transition={{ duration: 1 }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
                >
                    Meet Our Leadership
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                    Our leadership team blends innovation, expertise, and vision to drive the future
                    of technology. Each member brings unique strengths and passion to guide us forward.
                </motion.p>
            </div>

            {/* Right side scattered floating images */}
            <div className="relative w-full h-[600px]">
                {leaders.map((leader, i) => (
                    <motion.div
                        key={leader.name}
                        className={`absolute ${positions[i % positions.length]} cursor-pointer`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        whileHover={{ scale: 2, zIndex: 50 }}
                        animate={{
                            y: [0, -10, 0], // floatinn={{
                            repeat: Infinity,
                            duration: 6,
                            ease: "easeInOut",
                            delay: i * 0.5, // stagger float start
                        }}
                    >
                        {/* Card with funky → rectangle on hover (together with zoom) */}
                        <motion.div
                            className={`w-40 h-40 overflow-hidden shadow-lg border-4 border-white/20 ${shapeClasses[i % shapeClasses.length]}`}
                            whileHover={{
                                borderRadius: "0px",
                                scale: 2,
                                transition: { duration: 0.3, ease: "easeInOut" },
                            }}
                            whileTap={{ scale: 1.9 }}
                        >
                            <img
                                src={leader.img}
                                alt={leader.name}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>

                        {/* Role tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-center mt-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500/80 to-purple-600/80 rounded-full px-3 py-1 inline-block"
                        >
                            {leader.role}
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
