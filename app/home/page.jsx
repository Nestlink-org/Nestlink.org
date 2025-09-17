// app/HomePage.jsx
'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white">
            <header className="container mx-auto px-6 py-8">
                <nav className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    >
                        YourBrand
                    </motion.div>
                    <div className="hidden md:flex space-x-8">
                        {['Home', 'About', 'Services', 'Contact', 'Innovation', 'Portal'].map((item, index) => (
                            <motion.a
                                key={item}
                                href="#"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-blue-200 hover:text-white transition-colors"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="md:w-1/2 mb-10 md:mb-0"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Transforming <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Digital</span> Experiences
                        </h1>
                        <p className="text-xl text-blue-200 mb-8">
                            We create innovative solutions that push the boundaries of technology and design.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold"
                        >
                            Explore Our Work
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="md:w-1/2"
                    >
                        <div className="bg-blue-800/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-700/30">
                            <div className="aspect-video bg-gradient-to-br from-blue-700/40 to-purple-700/40 rounded-xl flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-4xl mb-4">🚀</div>
                                    <p>3D Visualizations Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}