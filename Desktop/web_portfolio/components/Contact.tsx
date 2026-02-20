"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-10 flex flex-col items-center gap-10 sm:gap-12 md:gap-16 relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-3 sm:space-y-4"
            >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase tracking-[0.2em]">Get In Touch</h2>
                <div className="h-1 w-16 sm:w-20 bg-amber-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 sm:space-y-8"
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 tracking-tight">Let's collaborate on something great.</h3>
                    <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-4 sm:gap-6">
                        <div className="flex items-center gap-4 sm:gap-6 group">
                            <div className="p-3 sm:p-4 glass rounded-xl sm:rounded-2xl group-hover:bg-amber-600/10 transition-colors flex-shrink-0">
                                <Mail className="text-amber-500 w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email Me</p>
                                <p className="text-white text-sm sm:text-lg break-words">janakchhatkuli@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 group">
                            <div className="p-3 sm:p-4 glass rounded-xl sm:rounded-2xl group-hover:bg-amber-600/10 transition-colors flex-shrink-0">
                                <Phone className="text-amber-500 w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Call Me</p>
                                <p className="text-white text-sm sm:text-lg">+977 98XXXXXXXX</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 sm:gap-6 group">
                            <div className="p-3 sm:p-4 glass rounded-xl sm:rounded-2xl group-hover:bg-amber-600/10 transition-colors flex-shrink-0">
                                <MapPin className="text-amber-500 w-5 h-5 sm:w-6 sm:h-6" />
                            </div>
                            <div className="min-w-0">
                                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Visit Me</p>
                                <p className="text-white text-sm sm:text-lg">Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-6"
                >
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">Full Name</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white focus:border-amber-600/50 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">Email Address</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white focus:border-amber-600/50 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">Message</label>
                        <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm sm:text-base text-white focus:border-amber-600/50 outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white font-bold py-3 sm:py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20 text-sm sm:text-base"
                    >
                        Send Message <Send className="w-4 h-4" />
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}

