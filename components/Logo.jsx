'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import Link from 'next/link';

export default function Logo() {
    const { theme } = useTheme();

    // Dynamic color for "Link"
    const linkColor = theme === 'light' ? 'text-black' : 'text-white';

    return (
        <Link href="/home">
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center cursor-pointer"
            >
                {/* NestLink Text */}
                <h1 className="text-2xl font-bold relative z-10">
                    <span className="text-[#38b6ff]">Nest</span>
                    <span className={linkColor}>Link</span>
                </h1>

                {/* Stars above N */}
                <div className="absolute -top-5 left-0 flex flex-col items-center">
                    {/* Big star */}
                    <motion.svg
                        className="w-4 h-4 text-[#38b6ff]"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        animate={{ y: [0, -3, 0], rotate: [0, 20, 0], opacity: [1, 0.6, 1] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    >
                        <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.164L12 18.896l-7.334 3.86 1.4-8.164L.132 9.21l8.2-1.192z" />
                    </motion.svg>

                    {/* Bottom two stars forming triangle */}
                    <div className="flex justify-between w-7">
                        <motion.svg
                            className="w-2 h-2 text-[#38b6ff]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            animate={{ y: [0, -2, 0], rotate: [0, 180, 0], opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 2.5 }}
                        >
                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.164L12 18.896l-7.334 3.86 1.4-8.164L.132 9.21l8.2-1.192z" />
                        </motion.svg>
                        <motion.svg
                            className="w-3 h-3 text-[#38b6ff]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            animate={{ y: [0, -2, 0], rotate: [0, -150, 0], opacity: [1, 0.5, 1] }}
                            transition={{ repeat: Infinity, duration: 3 }}
                        >
                            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.782 1.4 8.164L12 18.896l-7.334 3.86 1.4-8.164L.132 9.21l8.2-1.192z" />
                        </motion.svg>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
