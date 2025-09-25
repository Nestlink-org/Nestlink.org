'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/home' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Pricing', path: '/pricing' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'backdrop-blur-md py-3 bg-black/70 dark:bg-black/80' : 'bg-transparent py-5'}
      `}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2"
                >
                    <span className="text-xl font-bold text-blue-600 dark:text-blue-200">
                        <Logo />
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-base font-medium px-6 py-3 rounded-[20px] backdrop-blur-sm bg-black/50 dark:bg-white/10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <motion.div key={item.path} whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }} className="relative">
                                <Link
                                    href={item.path}
                                    className={`transition-colors duration-300 relative
                    ${isActive
                                            ? 'text-blue-400 dark:text-blue-300'
                                            : 'text-white hover:text-blue-400 dark:hover:text-blue-300'}
                  `}
                                >
                                    {item.name}
                                </Link>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeLink"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Theme Toggle + Contact + Hamburger */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle */}
                    {mounted && (
                        <motion.button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            whileHover={{ scale: 1.2, rotate: 20 }}
                            whileTap={{ scale: 0.9, rotate: -20 }}
                            className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? "🌙" : "☀️"}
                        </motion.button>
                    )}

                    {/* Contact (Desktop only) */}
                    <a href="/contact" className="hidden md:block">
                        <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-4 py-2 rounded-lg text-blue-600 dark:text-white font-semibold shadow-lg border border-blue-500 dark:border-white cursor-pointer"
                        >
                            Contact Us
                        </motion.button>
                    </a>

                    {/* Hamburger (Mobile only) */}
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-white text-3xl"
                        whileTap={{ scale: 0.8 }}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? "✖" : "☰"}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md shadow-lg p-6 space-y-6 text-center"
                    >
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`block text-lg font-semibold transition-colors
                    ${isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'}
                  `}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}

                        {/* Contact (inside mobile menu) */}
                        <a href="/contact" onClick={() => setMenuOpen(false)}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full px-4 py-2 rounded-lg text-blue-600 dark:text-white font-semibold shadow-lg border border-blue-500 dark:border-white cursor-pointer"
                            >
                                Contact Us
                            </motion.button>
                        </a>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
