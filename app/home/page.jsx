// app/home/page.jsx
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesConstellation from '@/components/ServicesConstellation';
import Journey from '@/components/Journey';
import Stats from '@/components/Stats';
import InnovationSpotlight from '@/components/InnovationSpotlight';
import { motion } from 'framer-motion';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background-primary to-background-secondary text-text-primary">
            <Header />

            <main className="relative overflow-hidden">
                <HeroSection />
                <ServicesConstellation />
                <Journey />
                <Stats />
                <InnovationSpotlight />


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="py-20"
                />
            </main>
        </div>
    );
}
