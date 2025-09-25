'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Sun, Moon } from 'lucide-react';

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
        ${isScrolled ? 'backdrop-blur-md py-3 bg-background/70 dark:bg-background-dark/80' : 'bg-transparent py-5'}
      `}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2"
                >
                    <Logo />
                </motion.div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-base font-medium px-6 py-3 rounded-[20px] backdrop-blur-sm bg-background/50 dark:bg-background-dark/10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <motion.div
                                key={item.path}
                                whileHover={{ scale: 1.05, y: -1 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative"
                            >
                                <Link
                                    href={item.path}
                                    className={`transition-colors duration-300 relative
                    ${isActive ? 'text-primary dark:text-primary-dark' : 'text-foreground hover:text-primary dark:hover:text-primary-dark'}
                  `}
                                >
                                    {item.name}
                                </Link>
                                {isActive && (
                                    <motion.div
                                        layoutId="activeLink"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Theme Toggle + Contact + Hamburger */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle with icons */}
                    {mounted && (
                        <motion.div whileTap={{ scale: 0.95 }} className="flex items-center space-x-2">
                            <Sun className="w-5 h-5 text-sky-400 dark:text-sky-500 transition-colors duration-300" />
                            <Switch
                                checked={theme === 'dark'}
                                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                            />
                            <Moon className="w-5 h-5 text-blue-400 dark:text-blue-300 transition-colors duration-300" />
                        </motion.div>
                    )}

                    {/* Contact Button */}
                    <Link href="/contact" className="hidden md:block">
                        <Button variant="outline">{'Contact Us'}</Button>
                    </Link>

                    {/* Hamburger for mobile */}
                    <motion.button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-foreground text-3xl"
                        whileTap={{ scale: 0.8 }}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? '✖' : '☰'}
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
                        className="md:hidden absolute top-full left-0 right-0 bg-background/90 dark:bg-background-dark/90 backdrop-blur-md shadow-lg p-6 space-y-6 text-center"
                    >
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`block text-lg font-semibold transition-colors
                    ${isActive ? 'text-primary' : 'text-foreground hover:text-primary'}
                  `}
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}

                        <Link href="/contact" onClick={() => setMenuOpen(false)}>
                            <Button className="w-full">{'Contact Us'}</Button>
                        </Link>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
