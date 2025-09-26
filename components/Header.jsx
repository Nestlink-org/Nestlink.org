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
import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins',
});

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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${poppins.variable} font-sans
       ${isScrolled
                    ? 'backdrop-blur-md py-3 bg-[lightblue] dark:bg-black'
                    : 'bg-[lightblue] dark:bg-[black] py-5'
                }
      `}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <Logo />
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 text-base font-medium px-6 py-3 rounded-[20px] backdrop-blur-sm bg-gray-100/50 dark:bg-gray-900/10">
                    {navItems.map((item) => {
                        const isActive = pathname === item.path;
                        return (
                            <motion.div key={item.path} className="relative group">
                                <Link
                                    href={item.path}
                                    className={`transition-colors duration-200 relative pb-1
                    ${isActive
                                            ? 'text-primary font-semibold'
                                            : 'text-foreground hover:text-primary'
                                        }
                  `}
                                >
                                    {item.name}
                                </Link>

                                {/* Cool hover underline */}
                                <span
                                    className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary
                    transition-all duration-300 group-hover:w-full"
                                />

                                {/* Active link underline (crazy glowing bar) */}
                                {isActive && (
                                    <motion.span
                                        layoutId="activeLink"
                                        className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full 
                      bg-gradient-to-r from-primary to-secondary shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </nav>

                {/* Theme Toggle + Contact + Hamburger */}
                <div className="flex items-center space-x-4">
                    {mounted && (
                        <div className="flex items-center space-x-2">
                            <Sun className="w-5 h-5 text-sky-400 dark:text-sky-500 transition-colors duration-150" />
                            <Switch
                                checked={theme === 'dark'}
                                onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                            />
                            <Moon className="w-5 h-5 text-blue-400 dark:text-blue-300 transition-colors duration-150" />
                        </div>
                    )}

                    <Link href="/contact" className="hidden md:block">
                        <Button variant="outline">{'Contact Us'}</Button>
                    </Link>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-foreground text-3xl"
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? '✖' : '☰'}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-gray-100/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg p-6 space-y-6 text-center"
                    >
                        {navItems.map((item) => {
                            const isActive = pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`block text-lg font-semibold transition-colors duration-200 relative pb-1
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
        </header>
    );
};

export default Header;
