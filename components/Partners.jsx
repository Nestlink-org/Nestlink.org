'use client';

import { motion } from 'framer-motion';

const partners = [
    {
        name: 'Vercel',
        logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png'
    },
    {
        name: 'Next.js',
        logo: 'https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png'
    },
    {
        name: 'React',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        name: 'JavaScript',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
    },
    {
        name: 'Tailwind CSS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },
    {
        name: 'GitHub',
        logo: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
        name: 'FastAPI',
        logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png'
    },
    {
        name: 'Rocket.new',
        logo: 'https://rocket.new/favicon.ico'
    },
    {
        name: 'Kali Linux',
        logo: 'https://www.kali.org/images/kali-logo.svg'
    },
    {
        name: 'Oracle',
        logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png'
    },
    {
        name: 'DeepSeek',
        logo: 'https://www.deepseek.com/favicon.ico'
    },
    {
        name: 'ChatGPT',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg'
    },
    {
        name: 'Microsoft',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
    },
    {
        name: 'Google',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg'
    },
    {
        name: 'Amazon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
    }
];

export default function Partners() {
    // Duplicate the partners for seamless looping
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-16 bg-black overflow-hidden relative">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Our Trusted Partners
                </h2>

                <div className="relative w-full overflow-hidden">
                    <motion.div
                        className="flex"
                        animate={{
                            x: ['0%', '-100%']
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 30,
                                ease: 'linear'
                            }
                        }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 mx-6 w-32 flex flex-col items-center justify-center"
                            >
                                <div className="bg-white p-4 rounded-lg shadow-lg mb-3 flex items-center justify-center h-20 w-20">
                                    <img
                                        src={partner.logo}
                                        alt={partner.name}
                                        className="max-h-12 max-w-12 object-contain"
                                        onError={(e) => {
                                            // Fallback for broken images
                                            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRkZGIi8+Cjx0ZXh0IHg9IjMyIiB5PSIzMiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiPkxPR088L3RleHQ+Cjwvc3ZnPg==";
                                        }}
                                    />
                                </div>
                                <p className="text-white text-sm font-medium text-center">
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