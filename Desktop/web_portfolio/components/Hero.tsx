"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-amber-600/8 blur-[80px] sm:blur-[100px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-orange-600/8 blur-[100px] sm:blur-[120px] rounded-full"></div>

            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="w-full md:w-1/2 flex justify-center relative group mb-8 md:mb-0"
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] aspect-square rounded-2xl overflow-hidden border border-white/10 glass shadow-2xl"
                >
                    <Image
                        src="/janak-img-removebg-preview (1).jpg"
                        alt="Janak Chhatkuli"
                        width={400}
                        height={400}
                        className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                        priority
                    />
                </motion.div>
                {/* Decorative elements - hidden on mobile */}
                <div className="hidden sm:block absolute -bottom-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 border-2 border-amber-600/20 rounded-full animate-pulse"></div>
                <div className="hidden sm:block absolute -top-6 -left-6 w-16 h-16 sm:w-24 sm:h-24 border-2 border-orange-600/20 rounded-full animate-bounce duration-[3000ms]"></div>
            </motion.div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-white relative z-10">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-amber-500 font-mono mb-2 text-xs sm:text-sm md:text-base tracking-widest uppercase">Greetings, I am</h2>
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-2 tracking-tighter">
                        Janak
                    </h1>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gray-500 tracking-tighter">
                        Chhatkuli
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 md:mb-10 max-w-lg leading-relaxed md:text-left text-center px-2 sm:px-0"
                >
                    A <span className="text-white font-semibold">Computer Engineering</span> student and aspiring <span className="text-amber-500 font-semibold italic">DevOps engineer</span> who crafts scalable and high-performance solutions.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 w-full sm:w-auto justify-center md:justify-start"
                >
                    <a
                        href="/janak-cv.pdf"
                        download
                        className="relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-bold rounded-xl overflow-hidden group hover:scale-105 transition-transform text-sm sm:text-base w-full sm:w-auto text-center"
                    >
                        <span className="relative z-10">Download CV</span>
                        <div className="absolute inset-x-0 bottom-0 h-0 bg-amber-500 group-hover:h-full transition-all duration-300"></div>
                    </a>
                    <a
                        href="#project"
                        className="px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-white/40 font-bold rounded-xl transition-all hover:bg-white/5 text-sm sm:text-base w-full sm:w-auto text-center"
                    >
                        View Projects
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
