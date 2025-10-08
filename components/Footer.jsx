'use client';

import { motion } from 'framer-motion';
import Logo from './Logo';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { subscribeNewsletter } from "@/lib/api";
import { Loader } from 'lucide-react';


export default function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 150 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <footer className="relative bg-[#000000] text-white py-20 px-6 overflow-hidden mt-auto">

      {/* Floating 3D accent shapes */}
      <motion.div
        className="absolute w-32 h-32 bg-[lightblue] rounded-full blur-3xl top-10 left-10"
        animate={{ x: [0, 10, 0], y: [0, -10, 0], rotate: [0, 180, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-20 h-20 bg-[lightblue]  rounded-full blur-2xl bottom-20 right-20"
        animate={{ x: [0, -8, 0], y: [0, 8, 0], rotate: [0, -180, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <Logo />
          <p className="text-text-secondary mb-4">
            NestLink is a cutting-edge IT technology company, delivering AI-driven solutions, immersive 3D websites, and scalable cloud infrastructures globally. We blend innovation with design to power modern businesses.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://twitter.com/nestlink" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="https://linkedin.com/company/nestlink" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://wa.me/254757161754" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488" />
              </svg>
            </a>
            <a href="https://github.com/Nestlink-org" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://discord.gg/nestlink" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-blue-400 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0c.14.09.28.19.42.33a10.14 10.14 0 0 1-1.71.83 12.89 12.89 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold text-blue-300 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-text-secondary">
            <li><a href="/home" className="hover:text-blue-400 hover:underline transition">Home</a></li>
            <li><a href="/about" className="hover:text-blue-400 hover:underline transition">About</a></li>
            <li><a href="/services" className="hover:text-blue-400 hover:underline transition">Services</a></li>
            <li><a href="/projects" className="hover:text-blue-400 hover:underline transition">Projects</a></li>
            <li><a href="/pricing" className="hover:text-blue-400 hover:underline transition">Pricing</a></li>
            <li><a href="/clients" className="hover:text-blue-400 hover:underline transition">Clients Portal</a></li>
            <li><a href="/contact" className="hover:text-blue-400 hover:underline transition">Contact</a></li>

          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold text-blue-300 mb-4">Contact Us</h3>
          <p className="text-text-secondary">Ongata Rongai, Magadi Road, Nairobi, Kenya</p>
          <p className="text-text-secondary mt-1">Email: info@nestlink.dev</p>
          <p className="text-text-secondary mt-1">Phone: +254 757161754</p>

        </motion.div>

        {/* Newsletter Subscription */}
        <div>
          <motion.div className="space-y-4" variants={fadeUp}>
            <h4 className="text-lg font-semibold relative inline-block">
              Stay Updated
              <span className="absolute bottom-0 left-0 w-10 h-0.5 bg-[var(--primary)]"></span>
            </h4>
            <p className="text-muted-foreground text-sm">
              Subscribe for the latest news, career opportunities, and services
              updates.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setisLoading(true)
                if (!email) {
                  toast.error("Please enter your email address");
                  setisLoading(false)
                  return;
                }

                try {
                  const result = await subscribeNewsletter(email);

                  if (result.ok) {
                    setEmail("");
                    toast.success(
                      "Thank you for subscribing to our newsletter!"
                    );
                    setisLoading(false)
                  } else {
                    throw new Error(result.error || "Subscription failed");
                    setisLoading(false)

                  }
                } catch (error) {
                  console.error("Newsletter subscription error:", error);
                  if (error.message.includes("already subscribed")) {
                    toast.error("This email is already subscribed.");
                    setisLoading(false)

                  } else {
                    toast.error("Subscription failed. Please try again.");
                    setisLoading(false)

                  }
                }
              }}
              className="flex rounded-md shadow-sm"
            >
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Enter your email"
                value={email}
                className="flex-1 px-3 py-2 rounded-l-md border border-r-0 border-input focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                required
              />
              <button
                type="submit"
                className="px-4 rounded-r-md bg-[var(--primary)] flex justify-center items-center text-primary-foreground cursor-pointer text-sm font-medium hover:bg-[var(--secondary)] transition-colors"
              >
                {isLoading ? <Loader className='animate-spin' /> : "Subscribe"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer bottom line */}
      <motion.div
        className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-white/60 relative z-10 flex items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        © 2025 All rights reserved | <a href="https://nestlink-org.vercel.app/" target='blank'>
          <img
            src="/2.png"
            alt="NestLink Logo"
            className="h-5 w-auto object-contain inline-block"
          />
        </a>
      </motion.div>
    </footer>
  );
}