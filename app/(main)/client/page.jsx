'use client';

import Header from '../../../components/Header.jsx';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ClientPortal() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Sample project data
    const projects = [
        {
            id: 1,
            name: 'E-Commerce Platform',
            status: 'In Development',
            progress: 75,
            deadline: '2023-12-15',
            tasks: 18,
            completed: 12
        },
        {
            id: 2,
            name: 'Mobile App Development',
            status: 'Design Phase',
            progress: 35,
            deadline: '2024-02-28',
            tasks: 24,
            completed: 8
        },
        {
            id: 3,
            name: 'Website Redesign',
            status: 'Completed',
            progress: 100,
            deadline: '2023-11-10',
            tasks: 15,
            completed: 15
        }
    ];

    // Sample messages
    const messages = [
        {
            id: 1,
            from: 'Project Manager',
            subject: 'Feedback on latest design iteration',
            date: '2023-11-20',
            read: false
        },
        {
            id: 2,
            from: 'Development Team',
            subject: 'API integration completed',
            date: '2023-11-18',
            read: true
        },
        {
            id: 3,
            from: 'Billing Department',
            subject: 'Invoice #INV-2023-11-001',
            date: '2023-11-15',
            read: true
        }
    ];

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real application, you would validate credentials against a backend
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setEmail('');
        setPassword('');
    };

    if (!isLoggedIn) {

        return (
            <>
                <Header />
                <section className="min-h-screen py-20 px-6 flex items-center justify-center bg-gradient-to-br from-background-primary to-background-secondary">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full max-w-md bg-white/5 dark:bg-gray-900/70 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl"
                    >
                        <div className="text-center mb-8">
                            <motion.h1
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl font-bold text-gray-900 dark:text-white mb-2"
                            >
                                Client Portal
                            </motion.h1>
                            <p className="text-gray-700 dark:text-gray-300">
                                Access your projects, communicate with our team, and track progress
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        id="remember"
                                        className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-white/10 rounded"
                                    />
                                    <label htmlFor="remember" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                        Remember me
                                    </label>
                                </div>

                                <a href="#" className="text-sm text-purple-500 hover:text-purple-400">
                                    Forgot password?
                                </a>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                            >
                                Sign In
                            </motion.button>
                        </form>

                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-700 dark:text-gray-300">
                                Don't have an account?{' '}
                                <a href="#contact" className="text-purple-500 hover:text-purple-400 font-medium">
                                    Contact us
                                </a>
                            </p>
                        </div>
                    </motion.div>
                </section>
            </>
        );
    }

    return (
        <>

            <section className="min-h-screen bg-gradient-to-br from-background-primary to-background-secondary">
                {/* Header */}
                <header className="bg-white/5 dark:bg-gray-900/70 backdrop-blur-sm border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center">
                                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Client Portal</h1>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button className="p-2 rounded-full bg-white/5 dark:bg-gray-800/50 hover:bg-white/10">
                                    <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleLogout}
                                    className="px-4 py-2 bg-white/5 dark:bg-gray-800/50 hover:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg transition-all"
                                >
                                    Sign Out
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Welcome message */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome back!</h2>
                        <p className="text-gray-700 dark:text-gray-300">Here's the latest update on your projects.</p>
                    </motion.div>

                    {/* Navigation tabs */}
                    <div className="border-b border-white/10 mb-8">
                        <nav className="-mb-px flex space-x-8">
                            {['dashboard', 'projects', 'messages', 'files', 'support'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-4 px-1 text-sm font-medium border-b-2 transition-all ${activeTab === tab
                                        ? 'border-purple-500 text-purple-500'
                                        : 'border-transparent text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Dashboard content */}
                    {activeTab === 'dashboard' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        >
                            {/* Project status cards */}
                            {projects.map((project) => (
                                <div key={project.id} className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                                        <span className={`px-2 py-1 text-xs rounded-full ${project.status === 'Completed'
                                            ? 'bg-green-500/20 text-green-500'
                                            : project.status === 'In Development'
                                                ? 'bg-blue-500/20 text-blue-500'
                                                : 'bg-yellow-500/20 text-yellow-500'
                                            }`}>
                                            {project.status}
                                        </span>
                                    </div>

                                    <div className="mb-4">
                                        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300 mb-1">
                                            <span>Progress</span>
                                            <span>{project.progress}%</span>
                                        </div>
                                        <div className="w-full bg-white/10 rounded-full h-2">
                                            <div
                                                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                                                style={{ width: `${project.progress}%` }}
                                            ></div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="text-gray-700 dark:text-gray-300">Deadline</p>
                                            <p className="text-gray-900 dark:text-white font-medium">{project.deadline}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-700 dark:text-gray-300">Tasks</p>
                                            <p className="text-gray-900 dark:text-white font-medium">{project.completed}/{project.tasks}</p>
                                        </div>
                                    </div>

                                    <button className="w-full mt-4 py-2 bg-white/5 dark:bg-gray-700/50 hover:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg transition-all">
                                        View Details
                                    </button>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {/* Messages content */}
                    {activeTab === 'messages' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden"
                        >
                            <div className="border-b border-white/10 px-6 py-4">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Messages</h3>
                            </div>

                            <div className="divide-y divide-white/10">
                                {messages.map((message) => (
                                    <div key={message.id} className={`px-6 py-4 hover:bg-white/5 transition-all ${!message.read ? 'bg-blue-500/5' : ''}`}>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className={`font-medium ${!message.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                                    {message.from}
                                                </h4>
                                                <p className={`${!message.read ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                                    {message.subject}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-700 dark:text-gray-300">{message.date}</p>
                                                {!message.read && (
                                                    <span className="inline-block mt-1 w-2 h-2 bg-blue-500 rounded-full"></span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="px-6 py-4 border-t border-white/10">
                                <button className="w-full py-2 bg-white/5 dark:bg-gray-700/50 hover:bg-white/10 text-gray-700 dark:text-gray-300 rounded-lg transition-all">
                                    New Message
                                </button>
                            </div>
                        </motion.div>
                    )}

                    {/* Support content */}
                    {activeTab === 'support' && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-6"
                        >
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get Help & Support</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="bg-white/5 dark:bg-gray-900/50 p-4 rounded-lg">
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Documentation</h4>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                        Access guides, tutorials, and FAQs for your projects.
                                    </p>
                                    <button className="text-sm text-purple-500 hover:text-purple-400">
                                        View Documentation →
                                    </button>
                                </div>

                                <div className="bg-white/5 dark:bg-gray-900/50 p-4 rounded-lg">
                                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Knowledge Base</h4>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                                        Find answers to common questions and troubleshooting guides.
                                    </p>
                                    <button className="text-sm text-purple-500 hover:text-purple-400">
                                        Browse Knowledge Base →
                                    </button>
                                </div>
                            </div>

                            <div className="bg-white/5 dark:bg-gray-900/50 p-6 rounded-lg">
                                <h4 className="font-medium text-gray-900 dark:text-white mb-4">Contact Support</h4>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div className="text-center p-4 bg-white/5 dark:bg-gray-800/50 rounded-lg">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 text-blue-500 rounded-full mb-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <h5 className="font-medium text-gray-900 dark:text-white mb-1">Call Us</h5>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">+1 (555) 123-4567</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs">Mon-Fri, 9am-5pm EST</p>
                                    </div>

                                    <div className="text-center p-4 bg-white/5 dark:bg-gray-800/50 rounded-lg">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 text-green-500 rounded-full mb-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <h5 className="font-medium text-gray-900 dark:text-white mb-1">Email Us</h5>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">support@nestlink.com</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs">24/7 response</p>
                                    </div>

                                    <div className="text-center p-4 bg-white/5 dark:bg-gray-800/50 rounded-lg">
                                        <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 text-purple-500 rounded-full mb-3">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                            </svg>
                                        </div>
                                        <h5 className="font-medium text-gray-900 dark:text-white mb-1">Live Chat</h5>
                                        <p className="text-gray-700 dark:text-gray-300 text-sm">Start a chat</p>
                                        <p className="text-gray-700 dark:text-gray-300 text-xs">Mon-Fri, 9am-5pm EST</p>
                                    </div>
                                </div>

                                <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all">
                                    Submit a Support Ticket
                                </button>
                            </div>
                        </motion.div>
                    )}
                </div>
            </section>
        </>
    );
}