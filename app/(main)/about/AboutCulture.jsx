'use client';

import { motion } from 'framer-motion';

const cultures = [
    {
        title: 'Collaborative Spaces',
        desc: 'Open workspaces encourage team creativity and problem solving.',
        story: 'Every Friday, our teams gather in our innovation hubs where magic happens. Last quarter, a casual conversation between our UX designer and backend engineer sparked the idea for our award-winning feature that reduced customer onboarding time by 68%.'
    },
    {
        title: 'Innovation Time',
        desc: 'Dedicated time each week for exploring new ideas and prototypes.',
        story: 'Our "20% Time" program has been running for three years, resulting in 12 patented technologies and 4 entirely new product offerings. Just last month, Sarah from marketing developed a customer segmentation tool during her innovation hours that\'s now used company-wide.'
    },
    {
        title: 'Continuous Learning',
        desc: 'Workshops, mentorships, and courses for skill growth.',
        story: 'When Peter joined us fresh from college, he had basic coding skills. Through our mentorship program and learning stipend, he\'s now among lead AI specialist, having published two research papers and leading our most ambitious machine learning project to date.'
    },
];

const successStories = [
    {
        quote: "The culture of trust and experimentation at NestLink allowed me to pivot from traditional design thinking to pioneering our voice interface system that now serves over 50,000 users daily.",
        author: "Sheldon B., Senior Project Developer",
        years: "3 years at NestLink"
    },
    {
        quote: "I never thought my side project would become a core company product. The leadership saw potential in my prototype and gave me the resources and team to build it into what it is today.",
        author: "Comfortine S., Engineering Lead",
        years: "3 years at NestLink"
    }
];

export default function AboutCulture() {
    return (
        <section className="py-20 px-6 max-w-6xl mx-auto text-center bg-gradient-to-br from-background-primary to-background-secondary">
            <motion.h2
                initial={{ opacity: 0, y: -20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6 }} // faster
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12"
            >
                Our Culture: Where Ideas Become Reality
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.1, duration: 0.5 }} // faster
                className="text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-3xl mx-auto"
            >
                At NestLink, we don't just build products—we cultivate environments where creativity flourishes,
                partnerships form naturally, and breakthroughs happen when we least expect them. Here are the pillars
                of our culture that make extraordinary outcomes part of our everyday routine.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {cultures.map((c, i) => (
                    <motion.div
                        key={c.title}
                        initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, rotateY: i % 2 === 0 ? 10 : -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: false, amount: 0.5 }}
                        transition={{ delay: i * 0.08, duration: 0.5 }} // faster
                        whileHover={{ y: -5, transition: { duration: 0.15 } }} // faster
                        className="rounded-2xl p-6 shadow-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/5 backdrop-blur-sm hover:shadow-2xl transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{c.title}</h3>
                        <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm mb-4">{c.desc}</p>
                        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-gray-600 my-4"></div>
                        <p className="text-gray-600 dark:text-gray-400 text-xs italic">{c.story}</p>
                    </motion.div>
                ))}
            </div>

            {/* Success Stories */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }} // faster
                className="mb-12"
            >
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Voices From Our Team</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {successStories.map((story, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.5 }}
                            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }} // faster
                            className="bg-white/5 dark:bg-black/10 p-6 rounded-2xl border border-white/10 backdrop-blur-sm text-left"
                        >
                            <svg className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{story.quote}"</p>
                            <div>
                                <p className="text-gray-900 dark:text-white font-medium">{story.author}</p>
                                <p className="text-gray-600 dark:text-gray-400 text-sm">{story.years}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ delay: 0.4, duration: 0.5 }} // faster
                className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-8 rounded-2xl border border-blue-200 dark:border-blue-800/30 max-w-4xl mx-auto"
            >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">The NestLink Story</h3>
                <p className="text-gray-700 dark:text-gray-300">
                    What began as a small startup in a garage 3 years ago has blossomed into a community of
                    innovators who believe technology should serve humanity. Our culture is our compass—it guides
                    our decisions, shapes our products, and reminds us that behind every line of code is a person
                    striving to make a difference. We're not just building the future; we're ensuring it's a future
                    worth living in.
                </p>
            </motion.div>
        </section>
    );
}
