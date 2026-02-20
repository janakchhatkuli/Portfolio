"use client";

import { motion } from "framer-motion";

export default function About() {
    const skills = [
        { name: "C++", level: 75, color: "from-slate-600 to-slate-400" },
        { name: "Python", level: 85, color: "from-amber-700 to-amber-500" },
        { name: "Java", level: 65, color: "from-orange-700 to-orange-500" },
        { name: "SQL", level: 80, color: "from-teal-700 to-teal-500" },
        { name: "C", level: 70, color: "from-stone-600 to-stone-400" },
        { name: "HTML", level: 90, color: "from-orange-600 to-amber-500" },
        { name: "CSS", level: 85, color: "from-blue-700 to-blue-500" },
        { name: "JavaScript", level: 80, color: "from-yellow-600 to-amber-500" },
    ];

    return (
        <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-10 sm:gap-12 md:gap-16 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-3 sm:space-y-4"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase tracking-[0.2em]">About Me</h2>
                <div className="h-1 w-16 sm:w-20 bg-amber-600 mx-auto rounded-full"></div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-3xl text-center text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed font-light px-2 sm:px-4"
            >
                I’m a <span className="text-white font-medium">Computer Engineering</span> undergraduate with a strong focus on building efficient, automated, and scalable systems. My passion lies at the intersection of clean backend logic and robust <span className="text-amber-500 font-medium">DevOps architectures</span>.
            </motion.p>

            <div className="w-full flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
                <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-xl sm:text-2xl font-bold text-gray-300 uppercase tracking-widest mt-4 sm:mt-6 md:mt-10"
                >
                    Technical Arsenal
                </motion.h3>

                <div className="w-full max-w-4xl space-y-4 sm:space-y-5 md:space-y-6 px-2 sm:px-4">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm sm:text-base md:text-lg font-semibold text-white tracking-tight">
                                    {skill.name}
                                </span>
                                <span className="text-xs sm:text-sm md:text-base font-mono text-gray-400">
                                    {skill.level}%
                                </span>
                            </div>
                            <div className="relative h-3 sm:h-4 bg-white/5 rounded-full overflow-hidden glass">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: index * 0.1 + 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative overflow-hidden`}
                                >
                                    {/* Shimmer effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                        animate={{
                                            x: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            repeatDelay: 1,
                                            ease: "linear"
                                        }}
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
