"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Code2, Layers, Cpu, Globe } from "lucide-react";

export default function Projects() {
    const projectList = [
        {
            name: "Task Tracker CLI",
            link: "https://github.com/janakchhatkuli/Task-Tracker-CLI",
            desc: "Robust Command Line Interface for efficient task management and productivity tracking.",
            tech: ["Python", "Click", "SQLite"],
            icon: <TerminalIcon className="w-10 h-10 text-amber-500" />
        },
        {
            name: "Expense Tracker",
            link: "#",
            desc: "Full-stack financial management app with real-time data visualization and budget alerts.",
            tech: ["React", "Node.js", "MongoDB"],
            icon: <Layers className="w-10 h-10 text-teal-500" />
        },
        {
            name: "The Asylum",
            link: "#",
            desc: "Immersive web experience featuring custom GLSL shaders and interactive 3D elements.",
            tech: ["Three.js", "WebGL", "GSAP"],
            icon: <Cpu className="w-10 h-10 text-slate-400" />
        },
        {
            name: "HMS",
            link: "#",
            desc: "Comprehensive Hospital Management System with secure patient records and scheduling.",
            tech: ["Java", "Spring Boot", "MySQL"],
            icon: <Globe className="w-10 h-10 text-emerald-500" />
        },
        {
            name: "Github Tracker",
            link: "#",
            desc: "Real-time Github activity monitor with custom webhooks and dashboard statistics.",
            tech: ["Next.js", "GitHub API", "Tailwind"],
            icon: <Github className="w-10 h-10 text-gray-400" />
        },
        {
            name: "More to Come...",
            link: "#",
            desc: "Currently working on a Large Language Model integration for automated DevOps workflows.",
            tech: ["AI", "DevOps", "Innovation"],
            icon: <Code2 className="w-10 h-10 text-orange-500" />
        },
    ];

    return (
        <section id="project" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 flex flex-col items-center gap-10 sm:gap-12 md:gap-16 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-3 sm:space-y-4"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase tracking-[0.2em]">Featured Creations</h2>
                <div className="h-1 w-16 sm:w-20 bg-amber-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-7xl">
                {projectList.map((project, index) => (
                    <motion.div
                        key={project.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -12 }}
                        onClick={() => project.link !== "#" && window.open(project.link, "_blank")}
                        className="group relative glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 hover:border-amber-500/40 cursor-pointer transition-all duration-500 flex flex-col h-full overflow-hidden"
                    >
                        {/* Background Accent */}
                        <div className="absolute top-0 right-0 -mr-6 sm:-mr-10 -mt-6 sm:-mt-10 w-24 h-24 sm:w-32 sm:h-32 bg-amber-600/5 blur-[40px] sm:blur-[50px] group-hover:bg-amber-600/10 transition-colors rounded-full"></div>

                        <div className="mb-4 sm:mb-6 flex justify-between items-start">
                            <div className="p-3 sm:p-4 bg-white/5 rounded-xl sm:rounded-2xl group-hover:bg-amber-600/10 transition-colors border border-white/5 group-hover:border-amber-600/20">
                                {project.icon}
                            </div>
                            <div className="flex gap-2 sm:gap-3">
                                {project.link !== "#" && <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-amber-500 transition-colors" />}
                                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-white transition-colors" />
                            </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white tracking-tight">{project.name}</h3>
                        <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors mb-4 sm:mb-6 leading-relaxed flex-grow">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-white/5">
                            {project.tech.map(t => (
                                <span key={t} className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold px-2 sm:px-3 py-0.5 sm:py-1 bg-white/5 rounded-full text-amber-500 border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* Hover Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-amber-600/0 to-transparent group-hover:from-amber-600/5 pointer-events-none transition-all"></div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

function TerminalIcon({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
    );
}

