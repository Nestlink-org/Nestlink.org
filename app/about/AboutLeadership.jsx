'use client';

import { motion } from 'framer-motion';

const leaders = [
    {
        name: 'Comfortine Siwende O.',
        role: 'CEO',
        img: 'https://randomuser.me/api/portraits/women/68.jpg',
        description: 'Visionary leader with 10+ years in tech entrepreneurship',
        socials: {
            github: '#',
            linkedin: '#',
            twitter: '#',
            gmail: '#',
            whatsapp: '#',
            discord: '#'
        }
    },
    {
        name: 'Melvin Simon O.',
        role: 'CTO',
        img: 'https://randomuser.me/api/portraits/men/65.jpg',
        description: 'Tech innovator specializing in AI and blockchain',
        socials: {
            github: '#',
            linkedin: '#',
            twitter: '#',
            gmail: '#',
            whatsapp: '#',
            discord: '#'
        }
    },
    {
        name: 'Sheldon Billy O.',
        role: 'COO',
        img: 'https://randomuser.me/api/portraits/women/45.jpg',
        description: 'Operations expert with background in scaling startups',
        socials: {
            github: '#',
            linkedin: '#',
            twitter: '#',
            gmail: '#',
            whatsapp: '#',
            discord: '#'
        }
    },
    {
        name: 'Peter Romeo R.',
        role: 'CFO',
        img: 'https://randomuser.me/api/portraits/men/30.jpg',
        description: 'Financial strategist with Fortune 500 experience',
        socials: {
            github: '#',
            linkedin: '#',
            twitter: '#',
            gmail: '#',
            whatsapp: '#',
            discord: '#'
        }
    },
];

// Social media icons with proper SVGs
const SocialIcon = ({ platform, link }) => {
    const icons = {
        github: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
        ),
        linkedin: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
        ),
        twitter: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
        ),
        gmail: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
        ),
        whatsapp: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.526.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
        ),
        discord: (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.566-.406.83a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.83.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 1.961.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.028-.069 8.881 8.881 0 0 1-1.276-.65.05.05 0 0 1-.005-.084c.084-.062.168-.129.248-.191a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.062.164.13.248.191a.05.05 0 0 1-.004.084 8.897 8.897 0 0 1-1.277.651.05.05 0 0 0-.028.07c.24.464.515.907.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-1.961.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
            </svg>
        )
    };

    const colors = {
        github: 'hover:bg-gray-800',
        linkedin: 'hover:bg-blue-600',
        twitter: 'hover:bg-black',
        gmail: 'hover:bg-red-500',
        whatsapp: 'hover:bg-green-500',
        discord: 'hover:bg-purple-600'
    };

    return (
        <motion.a
            href={link}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-white bg-gray-700 transition-colors ${colors[platform]}`}
            aria-label={platform}
        >
            {icons[platform]}
        </motion.a>
    );
};

export default function AboutLeadership() {
    return (
        <section id="leadership" className="py-20 px-6 max-w-7xl mx-auto text-center">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
            >
                Leadership Team
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {leaders.map((leader, i) => (
                    <motion.div
                        key={leader.name}
                        initial={{ opacity: 0, scale: 0.85, rotateY: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: i * 0.2, duration: 0.8 }}
                        className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/5 backdrop-blur-sm p-6 w-80 mx-auto"
                    >
                        {/* Circular profile image */}
                        <div className="relative mb-6">
                            <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 shadow-lg">
                                <img
                                    src={leader.img}
                                    alt={leader.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold py-1 px-3 rounded-full">
                                {leader.role}
                            </div>
                        </div>

                        <div className="text-center">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{leader.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{leader.description}</p>

                            {/* Social links */}
                            <div className="flex justify-center space-x-3 mb-6">
                                {Object.entries(leader.socials).map(([platform, link]) => (
                                    <SocialIcon key={platform} platform={platform} link={link} />
                                ))}
                            </div>

                            {/* Contact button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
                            >
                                Contact {leader.name.split(' ')[0]}
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}