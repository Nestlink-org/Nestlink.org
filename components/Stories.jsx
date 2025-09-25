'use client';

import { motion } from 'framer-motion';
import { Heart, Share, Repeat, Download, MessageCircle } from 'lucide-react';

const stories = [
    {
        title: 'Fintech Platform',
        summary: 'Cut costs by 40% and increased conversions by streamlining payment processing and implementing AI-driven fraud detection.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Sarah Johnson',
        handle: '@sarahfintech',
        followers: '12.5K',
        date: '2h ago',
        likes: 245,
        retweets: 89,
        shares: 34,
        downloads: 12,
        comments: 42,
        quote: "This platform revolutionized our financial operations! 💰✨ #FintechInnovation"
    },
    {
        title: 'Retail AR Experience',
        summary: 'Immersive product try-ons led to +25% sales and reduced return rates by 18% through better visualization.',
        image: 'https://images.unsplash.com/photo-1626571969883-c6f81f56b5a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Marcus Chen',
        handle: '@marcusretail',
        followers: '8.7K',
        date: '5h ago',
        likes: 312,
        retweets: 124,
        shares: 56,
        downloads: 23,
        comments: 78,
        quote: "Augmented Reality is changing retail forever! 🛍️👓 #FutureOfShopping"
    },
    {
        title: 'Logistics AI',
        summary: 'Route optimization AI saved 18% fuel costs and improved delivery times by 27% across our network.',
        image: 'https://images.unsplash.com/photo-1569144157591-c60f3f82f137?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Transport Solutions Co.',
        handle: '@transportsolutions',
        followers: '23.4K',
        date: '1d ago',
        likes: 512,
        retweets: 201,
        shares: 89,
        downloads: 45,
        comments: 123,
        quote: "Our AI routes are saving the planet one delivery at a time! 🌍🚚 #GreenLogistics"
    },
    {
        title: 'Smart Agriculture',
        summary: 'AI crop monitoring improved yield by 30% while reducing water usage by 22% through precision farming techniques.',
        image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'FarmTech Innovations',
        handle: '@farmtech',
        followers: '15.2K',
        date: '1d ago',
        likes: 423,
        retweets: 167,
        shares: 72,
        downloads: 38,
        comments: 95,
        quote: "Growing more with less! 🌱🤖 #PrecisionFarming #SustainableAg"
    },
    {
        title: 'Healthcare App',
        summary: 'Telemedicine adoption increased patient satisfaction scores by 45% and reduced no-show rates by 60%.',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Dr. Emily Rodriguez',
        handle: '@dremilyhealth',
        followers: '45.8K',
        date: '2d ago',
        likes: 892,
        retweets: 345,
        shares: 156,
        downloads: 67,
        comments: 234,
        quote: "Healthcare should be accessible to everyone, everywhere! 🏥❤️ #Telemedicine"
    },
    {
        title: 'E-commerce Analytics',
        summary: 'Advanced customer insights boosted revenue by 22% and increased customer retention by 35%.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'E-Commerce Insights',
        handle: '@ecomanalytics',
        followers: '19.3K',
        date: '2d ago',
        likes: 567,
        retweets: 234,
        shares: 98,
        downloads: 43,
        comments: 167,
        quote: "Data is the new oil, and we're refining it! 📊💡 #Ecommerce #DataDriven"
    },
    {
        title: 'AI Chatbots',
        summary: 'Automated support reduced response time by 70% and handled 80% of common queries without human intervention.',
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Tech Support AI',
        handle: '@supportai',
        followers: '32.1K',
        date: '3d ago',
        likes: 678,
        retweets: 278,
        shares: 123,
        downloads: 56,
        comments: 189,
        quote: "Our AI never sleeps! ⚡️🤖 #CustomerService #Automation"
    },
    {
        title: 'Supply Chain Optimization',
        summary: 'Saved 15% in logistics costs and improved delivery reliability by 40% through predictive analytics.',
        image: 'https://images.unsplash.com/photo-1601584115197-04dfa1f4950f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Logistics Pro',
        handle: '@logisticspro',
        followers: '28.7K',
        date: '3d ago',
        likes: 432,
        retweets: 189,
        shares: 87,
        downloads: 34,
        comments: 145,
        quote: "Optimizing the world's supply chains, one algorithm at a time! 📦🌐 #SupplyChain"
    },
    {
        title: 'Energy Management',
        summary: 'Smart grids reduced energy waste by 20% and peak demand by 15% through intelligent load balancing.',
        image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Green Energy Solutions',
        handle: '@greenenergy',
        followers: '37.5K',
        date: '4d ago',
        likes: 765,
        retweets: 321,
        shares: 145,
        downloads: 67,
        comments: 212,
        quote: "Powering the future sustainably! ⚡️🌿 #CleanEnergy #SmartGrid"
    },
    {
        title: 'EdTech Platform',
        summary: 'Personalized learning improved engagement by 35% and test scores by 28% through adaptive algorithms.',
        image: 'https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'EduTech Innovations',
        handle: '@edutech',
        followers: '41.2K',
        date: '4d ago',
        likes: 823,
        retweets: 367,
        shares: 178,
        downloads: 89,
        comments: 256,
        quote: "Education transformed through technology! 🎓💻 #EdTech #FutureOfLearning"
    },
    {
        title: 'Healthcare AI',
        summary: 'Predicted patient risk with 92% accuracy, enabling early intervention and reducing complications by 40%.',
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Health AI Research',
        handle: '@healthai',
        followers: '52.7K',
        date: '5d ago',
        likes: 945,
        retweets: 412,
        shares: 201,
        downloads: 98,
        comments: 312,
        quote: "Saving lives with predictive AI! 🏥❤️ #HealthTech #AIforGood"
    },
    {
        title: 'Retail Analytics',
        summary: 'Customer insights improved upsells by 18% and customer lifetime value by 32% through personalized recommendations.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        name: 'Retail Insights Pro',
        handle: '@retailanalytics',
        followers: '26.8K',
        date: '5d ago',
        likes: 587,
        retweets: 245,
        shares: 112,
        downloads: 54,
        comments: 178,
        quote: "Understanding customers better than they understand themselves! 🛒📈 #RetailTech"
    }
];

export default function Stories() {
    return (
        <section className="h-screen flex justify-center items-center px-6 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiM4MDIwZmYiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wLDMwIGMzMCwwIDMwLDAgNjAsME0zMCwwIGMwLDMwIDAsMzAgMCw2MCIvPjwvZz48L3N2Zz4=')] opacity-10"></div>

            {/* Floating particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-blue-400"
                    initial={{
                        x: Math.random() * 100 + 'vw',
                        y: Math.random() * 100 + 'vh',
                        opacity: 0
                    }}
                    animate={{
                        y: [null, (Math.random() - 0.5) * 100],
                        x: [null, (Math.random() - 0.5) * 100],
                        opacity: [0, 0.7, 0],
                    }}
                    transition={{
                        duration: Math.random() * 5 + 3,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="w-full max-w-6xl mx-auto relative z-10">
                <motion.h3
                    className="text-2xl md:text-4xl text-center uppercase tracking-widest mb-12 font-black text-[lightblue]"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Transformation Stories
                </motion.h3>

                <div className="relative h-[70vh] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 absolute w-full"
                        animate={{ y: ['0%', '-100%'] }}
                        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
                    >
                        {stories.concat(stories).map((s, i) => (
                            <motion.div
                                key={`${s.title}-${i}`}
                                className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                                whileHover={{ y: -5, scale: 1.02 }}
                            >
                                {/* Header with profile info */}
                                <div className="p-4 flex items-center gap-3 border-b border-gray-700">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0"></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-1">
                                            <h4 className="font-bold text-white truncate">{s.name}</h4>
                                            <span className="text-blue-400">✓</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <span>{s.handle}</span>
                                            <span className="text-xs">•</span>
                                            <span>{s.date}</span>
                                        </div>
                                    </div>
                                    <div className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                                        {s.followers} followers
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <p className="text-white mb-3">{s.quote}</p>

                                    <div className="h-48 bg-gray-700 rounded-lg overflow-hidden mb-3 relative">
                                        <img
                                            src={s.image}
                                            alt={s.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                                            <h4 className="text-lg font-bold text-white">{s.title}</h4>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-300 mb-4">{s.summary}</p>

                                    {/* Engagement stats */}
                                    <div className="flex justify-between text-sm text-gray-400 mb-4">
                                        <span>{s.likes} Likes</span>
                                        <span>{s.retweets} Retweets</span>
                                        <span>{s.comments} Comments</span>
                                        <span>{s.downloads} Downloads</span>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex justify-between border-t border-gray-700 pt-3">
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                                            <MessageCircle size={18} />
                                            <span className="text-xs">{s.comments}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors">
                                            <Repeat size={18} />
                                            <span className="text-xs">{s.retweets}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors">
                                            <Heart size={18} />
                                            <span className="text-xs">{s.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
                                            <Share size={18} />
                                            <span className="text-xs">{s.shares}</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors">
                                            <Download size={18} />
                                            <span className="text-xs">{s.downloads}</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Gradient overlays for smooth scrolling effect */}
                    <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}