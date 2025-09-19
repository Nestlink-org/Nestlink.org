'use client';

import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real application, you would send the form data to a backend
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                subject: '',
                message: ''
            });
        }, 3000);
    };

    const contactMethods = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            ),
            title: "Phone",
            description: "Speak directly with our team",
            details: "+254-757-161-754, +254-796-218-073, +254-793-867-001",
            action: "Call now",
            link: "tel:+254757161754"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Email",
            description: "Send us a message anytime",
            details: "hello@nestlink.com",
            action: "Send email",
            link: "mailto:hello@nestlink.com"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: "Office",
            description: "Visit our headquarters",
            details: "Ongata Rongai, 4th Avenue Magadi Road",
            action: "Get directions",
            link: "https://maps.google.com"
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            ),
            title: "Live Chat",
            description: "Talk with us in real-time",
            details: "Available Mon-Fri, 9am-5pm EST",
            action: "Start chat",
            link: "#chat"
        }
    ];

    const faqs = [
        {
            question: "How long does it take to start a project?",
            answer: "Typically, we can begin your project within 1-3 days after the initial consultation and agreement signing. Complex projects may require additional planning time."
        },
        {
            question: "Do you offer ongoing support after project completion?",
            answer: "Yes, we offer various support packages to ensure your solution continues to perform optimally. This includes maintenance, updates, and technical support."
        },
        {
            question: "Can you work with our existing technology stack?",
            answer: "Absolutely! We're experienced with a wide range of technologies and can integrate with your existing systems or recommend improvements where needed."
        }
    ];

    return (
        <>
            <Header />
            <section className="min-h-screen py-20 px-6 mt-15">
                {/* Animated background elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5 }}
                    className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-3xl"
                />

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-3xl"
                />

                <div className="max-w-7xl mx-auto">
                    {/* Header section */}
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
                        >
                            Let's Start Something <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Amazing</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
                        >
                            Ready to transform your ideas into reality? Get in touch with our team to discuss your project,
                            request a quote, or learn more about our services.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Get in touch</h2>

                            <div className="space-y-6 mb-10">
                                {contactMethods.map((method, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, amount: 0.5 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="flex items-start p-6 bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all"
                                    >
                                        <div className="flex-shrink-0 p-3 bg-purple-500/10 text-purple-500 rounded-lg mr-4">
                                            {method.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                                                {method.title}
                                            </h3>
                                            <p className="text-gray-700 dark:text-gray-300 mb-2">
                                                {method.description}
                                            </p>
                                            <p className="text-gray-900 dark:text-white font-medium mb-3">
                                                {method.details}
                                            </p>
                                            <a
                                                href={method.link}
                                                className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
                                            >
                                                {method.action}
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Social media links */}
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Follow us</h3>
                                <div className="flex space-x-4">
                                    {[
                                        { name: 'Twitter', icon: '🐦', link: '#' },
                                        { name: 'LinkedIn', icon: '💼', link: '#' },
                                        { name: 'GitHub', icon: '🐙', link: '#' },
                                        { name: 'Dribbble', icon: '🎨', link: '#' }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            whileHover={{ y: -5 }}
                                            className="w-12 h-12 flex items-center justify-center bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all"
                                            aria-label={social.name}
                                        >
                                            <span className="text-xl">{social.icon}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
                        >
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send us a message</h2>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="p-6 bg-green-500/10 border border-green-500/20 rounded-xl text-center"
                                >
                                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="Your company"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="quote">Request a Quote</option>
                                                <option value="partnership">Partnership</option>
                                                <option value="support">Technical Support</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-white/5 dark:bg-gray-800/50 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all cursor-pointer"
                                    >
                                        Send Message
                                    </motion.button>
                                </form>
                            )}
                        </motion.div>
                    </div>

                    {/* FAQ section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-20"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">Frequently Asked Questions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-10">
                            <p className="text-gray-700 dark:text-gray-300 mb-4">
                                Have more questions?
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
                            >
                                Contact our support team
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}