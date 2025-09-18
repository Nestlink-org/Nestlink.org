// app/about/page.jsx
'use client';

import Header from "@/components/Header";
import Stories from "@/components/Stories";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background-primary to-background-secondary text-text-primary">
            {/* Header */}
            <Header />

            <main className="relative overflow-hidden">
                {/* Stories Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Stories />
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Testimonials />
                </motion.div>

                {/* Spacer / Intro Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="py-20 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Discover More About Us
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto">
                        We innovate, transform, and deliver cutting-edge solutions for businesses globally.
                        Our expertise spans across AI, 3D interfaces, cloud infrastructures, and immersive experiences.
                    </p>
                </motion.div>
            </main>


        </div>
    );
}
