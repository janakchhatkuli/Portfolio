"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex bg-background min-h-screen relative selection:bg-amber-600/30 overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Premium Mesh Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-amber-600/8 blur-[140px] rounded-full"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[10%] w-[60%] h-[60%] bg-orange-600/8 blur-[160px] rounded-full"
        />
        <motion.div
          animate={{
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-stone-600/5 blur-[120px] rounded-full"
        />
      </div>

      {/* Main Content Area */}
      <main className="w-full lg:w-[75%] flex flex-col items-center relative z-10 pt-16 lg:pt-0">

        <div className="max-w-6xl w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-10">
          <Hero />
          <About />
          <Projects />
          <Contact />

          <footer className="py-12 sm:py-16 md:py-20 text-center text-gray-600 text-xs sm:text-sm border-t border-white/5">
            <p>© {new Date().getFullYear()} Janak Chhatkuli. Crafted with Next.js & Tailwind.</p>
          </footer>
        </div>
      </main>

      {/* Right Sidebar Navbar - Desktop */}
      <div className="hidden lg:block w-[25%] h-screen sticky top-0">
        <Navbar />
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <Navbar />
      </div>
    </div>
  );
}

