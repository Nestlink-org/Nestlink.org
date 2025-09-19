// components/Header.jsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();
    const pathname = usePathname(); // get current route

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/home' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'Client Portal', path: '/client' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
       ${isScrolled
                    ? 'backdrop-blur-md shadow-lg py-3 bg-black/80 dark:bg-black/80 light:bg-blue-600/80'
                    : 'bg-transparent py-5'}
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
                    {/* Logo image */}
                    <div className="w-20 h-20 ">
                        <img
                            src="/DarkLogo.png"
                            alt="Nestlink Logo"
                            width={100}
                            height={48}
                            className="object-contain rounded-[50px]"
                        />
                    </div>

                    {/* Logo text */}
                    <span className="hidden sm:block text-xl font-bold text-blue-600 dark:text-blue-200">
                        <Logo />
                    </span>
                </motion.div>


                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8 text-base font-medium p-4 rounded-[20px]
                bg-gradient-to-r from-[#030363] via-black to-blue-600
                shadow-[0_4px_15px_white]">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <motion.div
                                key={item.path}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative"
                            >
                                <Link
                                    href={item.path}
                                    className={`transition-colors duration-300 relative
                    ${isActive
                                            ? 'text-[blue] dark:text-[blue]'
                                            : 'text-white dark:text-[] hover:text-blue-600 dark:hover:text-blue-400'
                                        }`}
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

                {/* Theme Toggle + phone no */}
                <div className="flex items-center space-x-4">
                    {/* Theme Toggle */}
                    <motion.button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        whileHover={{ scale: 1.2, rotate: 20 }}
                        whileTap={{ scale: 0.9, rotate: -20 }}
                        className="relative w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <motion.span
                                key="moon"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-white text-xl"
                            >
                                🌙
                            </motion.span>
                        ) : (
                            <motion.span
                                key="sun"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="text-yellow-400 text-xl"
                            >
                                ☀️
                            </motion.span>
                        )}
                    </motion.button>

                    {/* Sign In Button */}
                    <motion.button
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 rounded-lg  text-[blue] font-semibold shadow-lg border-white border"
                    >
                        +254 757 161 1754
                    </motion.button>
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
