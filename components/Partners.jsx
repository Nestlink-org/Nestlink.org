'use client';

import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Playfair_Display } from 'next/font/google';

// 🎨 Different font
const playfair = Playfair_Display({ subsets: ['latin'], weight: ['700'] });

const partners = [
   
      {
        "name": "Next.js",
        "logo": "https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png"
    },
    {
        "name": "Tailwind CSS",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
    },
    {
        "name": "Contentful (Headless CMS)",
        "logo": "https://avatars.githubusercontent.com/u/472182?s=200&v=4"
    },
    {
        "name": "FastAPI",
        "logo": "https://avatars.githubusercontent.com/u/156354296?s=48&v=4"
    },
    {
        "name": "PostgreSQL",
        "logo": "https://www.postgresql.org/media/img/about/press/elephant.png"
    },
     {
        "name": "NodeJS",
        "logo": "https://avatars.githubusercontent.com/u/9950313?s=48&v=4"
    }, {
        "name": "MongoDB",
        "logo": "https://www.ortussolutions.com/__media/contentbox:2023/products/MongoDB/MongoDB.svg"
    },   

    {
        "name": "Microsoft Azure",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/120px-Microsoft_Azure.svg.png"
    },
    {
        "name": "Docker",
        "logo": "https://www.stackhero.io/assets/src/images/servicesLogos/docker.svg?012c8713"
    },
    {
        "name": "Kubernetes (K8s)",
        "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Kubernetes_logo_without_workmark.svg/617px-Kubernetes_logo_without_workmark.svg.png?20190926210707"
    },

    {
        "name": "LangGraph",
        "logo": "https://miro.medium.com/v2/resize:fit:720/format:webp/1*9HFsjXjgw6oG2HwQ3Okgwg.png"
    }
];

export default function Partners() {
    const containerRef = useRef(null);
    const [contentWidth, setContentWidth] = useState(0);

    // duplicate at least twice so we can loop seamlessly
    const loopedPartners = [...partners, ...partners];

    useEffect(() => {
        if (containerRef.current) {
            setContentWidth(containerRef.current.scrollWidth / 2);
            // half, because we duplicated
        }
    }, []);

    return (
        <section className="py-16 bg-background dark:bg-background-dark overflow-hidden relative">
            <div className="container mx-auto px-6">
                <h2
                    className={`${playfair.className} text-3xl md:text-4xl font-bold text-center text-foreground dark:text-foreground-dark mb-12`}
                >
                    Powering your idea with Cutting-Edge Technologies
                </h2>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        ref={containerRef}
                        className="flex"
                        animate={{ x: [0, -contentWidth] }}
                        whileHover={{ x: 0 }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 45,
                                ease: 'linear',
                            },
                        }}
                    >
                        {loopedPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-6 w-32 flex flex-col items-center justify-center"
                            >
                                <Card className="mb-3 flex items-center justify-center h-20 w-20 p-4 border border-gray-500/50">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-12 max-w-12 object-contain"
                                        onError={(e) => {
                                            e.currentTarget.src =
                                                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHg9IjMyIiB5PSIzMiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkxPR088L3RleHQ+Cjwvc3ZnPg==';
                                        }}
                                    />
                                </Card>
                                <p className="text-sm font-medium text-center text-foreground dark:text-foreground-dark">
                                    {partner.name}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
