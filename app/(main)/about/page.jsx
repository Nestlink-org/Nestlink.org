// app/about/page.jsx
'use client';

import Header from "@/components/Header";
import Stories from "@/components/Stories";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

// About page components
import AboutHeroSection from "./AboutHeroSection";
import AboutPhilosophy from "./AboutPhilosophy";
import AboutLeadership from "./AboutLeadership";
import AboutCoreValues from "./AboutCoreValues";
import AboutCulture from "./AboutCulture";

import { motion } from 'framer-motion';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background-primary to-background-secondary text-text-primary">

            {/* Header */}
            <Header />

            <main className="relative overflow-hidden">

                {/* Hero Section */}
                <AboutHeroSection />

                {/* Philosophy Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <AboutPhilosophy />
                </motion.div>

                {/* Leadership Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <AboutLeadership />
                </motion.div>

                {/* Core Values Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <AboutCoreValues />
                </motion.div>

                {/* Culture Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <AboutCulture />
                </motion.div>


                {/* Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                >
                    <Testimonials />
                </motion.div>

                {/* Stories Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <Stories />
                </motion.div>


            </main>



        </div>
    );
}
