'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';

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
        <footer className="relative bg-gradient-to-t from-gray-900/90 via-black/80 to-gray-900/90 text-white py-20 px-6 overflow-hidden mt-auto">

            {/* Floating 3D accent shapes */}
            <motion.div
                className="absolute w-32 h-32 bg-blue-600 rounded-full blur-3xl top-10 left-10"
                animate={{ x: [0, 10, 0], y: [0, -10, 0], rotate: [0, 180, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute w-20 h-20 bg-purple-500 rounded-full blur-2xl bottom-20 right-20"
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
                    <Logo />
                    <p className="text-text-secondary mb-4">
                        NestLink is a cutting-edge IT technology company, delivering AI-driven solutions, immersive 3D websites, and scalable cloud infrastructures globally. We blend innovation with design to power modern businesses.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://twitter.com/nestlink" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/company/nestlink" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="https://wa.me/254757161754" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
                            </svg>
                        </a>
                        <a href="https://github.com/Nestlink-org" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="https://discord.gg/nestlink" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0c.14.09.28.19.42.33a10.14 10.14 0 0 1-1.71.83 12.89 12.89 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
                            </svg>
                        </a>
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
                        <li><a href="/home" className="hover:text-blue-400 hover:underline transition">Home</a></li>
                        <li><a href="/services" className="hover:text-blue-400 hover:underline transition">Services</a></li>
                        <li><a href="/pricing" className="hover:text-blue-400 hover:underline transition">Pricing</a></li>
                        <li><a href="/clients" className="hover:text-blue-400 hover:underline transition">Clients Portal</a></li>
                        <li><a href="/about" className="hover:text-blue-400 hover:underline transition">About</a></li>
                        <li><a href="/contact" className="hover:text-blue-400 hover:underline transition">Contact</a></li>
                        <li><a href="/innovation" className="hover:text-blue-400 hover:underline transition">Innovation</a></li>
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
                    <p className="text-text-secondary">Ongata Rongai, Magadi Road, Nairobi, Kenya</p>
                    <p className="text-text-secondary mt-1">Email: info@nestlink.org</p>
                    <p className="text-text-secondary mt-1">Phone: +254 757161754</p>
                    <p className="text-text-secondary mt-1">Phone: +254 796218073</p>
                    <p className="text-text-secondary mt-1">Phone: +254 793867001</p>

                </motion.div>

                {/* Newsletter Subscription */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h3 className="text-xl font-semibold text-blue-300 mb-4">Subscribe</h3>
                    <p className="text-text-secondary mb-4 p-4">
                        Stay updated with the latest innovations and services from <Logo />
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