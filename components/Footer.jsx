'use client';

import { motion } from 'framer-motion';

/**
 * Footer Component
 * A futuristic, animated 3D-inspired footer with multiple sections:
 * - Company Info
 * - Quick Links
 * - Contact
 * - Newsletter subscription
 * - Social media icons
 * Includes subtle floating accents, gradients, hover interactions, and smooth 3D feel.
 */
export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-t from-gray-900/90 via-black/80 to-gray-900/90 text-white py-20 px-6 overflow-hidden">

            {/* Floating 3D accent shapes */}
            <motion.div
                className="absolute w-32 h-32 bg-blue-600/30 rounded-full blur-3xl top-10 left-10"
                animate={{ x: [0, 10, 0], y: [0, -10, 0], rotate: [0, 180, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute w-20 h-20 bg-purple-500/40 rounded-full blur-2xl bottom-20 right-20"
                animate={{ x: [0, -8, 0], y: [0, 8, 0], rotate: [0, -180, 0] }}
                transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
            />

            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
                {/* Company Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-bold text-blue-400 mb-4">NestLink</h2>
                    <p className="text-text-secondary mb-4">
                        NestLink is a cutting-edge IT technology company, delivering AI-driven solutions, immersive 3D websites, and scalable cloud infrastructures globally. We blend innovation with design to power modern businesses.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-white/70 hover:text-blue-400 transition">Twitter</a>
                        <a href="#" className="text-white/70 hover:text-blue-400 transition">LinkedIn</a>
                        <a href="#" className="text-white/70 hover:text-blue-400 transition">GitHub</a>
                    </div>
                </motion.div>

                {/* Quick Links */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-text-secondary">
                        <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="#work" className="hover:text-blue-400 transition">Services</a></li>
                        <li><a href="#journey" className="hover:text-blue-400 transition">Journey</a></li>
                        <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                        <li><a href="#innovation" className="hover:text-blue-400 transition">Innovation</a></li>
                    </ul>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">Contact Us</h3>
                    <p className="text-text-secondary">123 Tech Street, Nairobi, Kenya</p>
                    <p className="text-text-secondary mt-1">Email: info@nestlink.org</p>
                    <p className="text-text-secondary mt-1">Phone: +254 712 345 678</p>
                </motion.div>

                {/* Newsletter Subscription */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">Subscribe</h3>
                    <p className="text-text-secondary mb-4">
                        Stay updated with the latest innovations and services from NestLink.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="flex-1 p-2 rounded-md bg-gray-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 text-white"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-md font-semibold shadow-md"
                        >
                            Subscribe
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Footer bottom line */}
            <motion.div
                className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/60 relative z-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8 }}
            >
                © 2025 NestLink. All rights reserved. Crafted with ❤️ by our team.
            </motion.div>
        </footer>
    );
}
