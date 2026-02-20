"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Linkedin, Github, Facebook, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("#home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link =>
                document.querySelector(link.href)
            );

            let current = "#home";
            sections.forEach((section) => {
                if (section) {
                    const sectionTop = section.getBoundingClientRect().top;
                    if (sectionTop <= 150) {
                        current = `#${section.id}`;
                    }
                }
            });
            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Navbar */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hidden lg:flex fixed right-0 top-0 h-screen w-[25%] glass-sidebar text-[#e5e7eb] flex-col items-center justify-around py-10 z-50"
            >
            <div className="flex flex-col items-center gap-4">
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <Image
                        src="/janak-img-removebg-preview (1).jpg"
                        alt="Janak"
                        width={100}
                        height={100}
                        className="rounded-full aspect-square w-24 relative"
                    />
                </motion.div>
                <h1 className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                    Janak Chhatkuli
                </h1>
            </div>

            <nav className="flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                    <motion.a
                        key={link.name}
                        href={link.href}
                        whileHover={{ scale: 1.1, x: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`text-lg transition-all duration-300 px-12 py-2 rounded-xl relative group ${activeSection === link.href
                                ? "text-amber-500 font-bold"
                                : "text-gray-400 hover:text-white"
                            }`}
                    >
                        {activeSection === link.href && (
                            <motion.div
                                layoutId="active-pill"
                                className="absolute inset-0 bg-white/5 rounded-xl -z-10 border border-white/10"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        {link.name}
                        <span className={`absolute -bottom-1 left-12 right-12 h-0.5 bg-amber-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${activeSection === link.href ? 'scale-x-100' : ''}`}></span>
                    </motion.a>
                ))}
            </nav>

            <div className="flex gap-6">
                {[
                    { Icon: Linkedin, href: "https://linkedin.com/in/yourprofile" },
                    { Icon: Github, href: "https://github.com/yourprofile" },
                    { Icon: Facebook, href: "https://facebook.com/yourprofile" },
                ].map(({ Icon, href }, i) => (
                    <motion.a
                        key={i}
                        href={href}
                        target="_blank"
                        whileHover={{ scale: 1.2, color: "#22d3ee" }}
                        className="text-gray-400 transition-colors"
                    >
                        <Icon size={24} />
                    </motion.a>
                ))}
            </div>
            </motion.div>

            {/* Mobile Navbar */}
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="lg:hidden fixed top-0 left-0 right-0 glass-sidebar z-50 border-b border-white/10"
            >
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
                    <div className="flex items-center gap-3">
                        <Image
                            src="/janak-img-removebg-preview (1).jpg"
                            alt="Janak"
                            width={40}
                            height={40}
                            className="rounded-full aspect-square w-10 sm:w-12"
                        />
                        <h1 className="text-base sm:text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                            Janak Chhatkuli
                        </h1>
                    </div>
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </motion.button>
                </div>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                        >
                            <nav className="flex flex-col gap-2 px-4 sm:px-6 pb-4">
                                {navLinks.map((link) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        whileTap={{ scale: 0.95 }}
                                        className={`text-base transition-all duration-300 px-4 py-3 rounded-xl relative group ${
                                            activeSection === link.href
                                                ? "text-amber-500 font-bold bg-white/5"
                                                : "text-gray-400 hover:text-white hover:bg-white/5"
                                        }`}
                                    >
                                        {link.name}
                                        {activeSection === link.href && (
                                            <motion.div
                                                layoutId="mobile-active-pill"
                                                className="absolute left-0 top-0 bottom-0 w-1 bg-amber-500 rounded-r"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </motion.a>
                                ))}
                                <div className="flex gap-4 pt-4 border-t border-white/10 mt-2">
                                    {[
                                        { Icon: Linkedin, href: "https://linkedin.com/in/yourprofile" },
                                        { Icon: Github, href: "https://github.com/yourprofile" },
                                        { Icon: Facebook, href: "https://facebook.com/yourprofile" },
                                    ].map(({ Icon, href }, i) => (
                                        <motion.a
                                            key={i}
                                            href={href}
                                            target="_blank"
                                            whileHover={{ scale: 1.2, color: "#22d3ee" }}
                                            whileTap={{ scale: 0.9 }}
                                            className="text-gray-400 transition-colors"
                                        >
                                            <Icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </>
    );
}
