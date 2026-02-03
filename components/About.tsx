"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section id="about" className="relative w-full overflow-hidden bg-[#050505] px-6 py-24 md:px-12">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 h-[300px] w-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid gap-12 lg:grid-cols-2 lg:items-center"
                >
                    <div>
                        <h2 className="mb-6 font-display text-4xl font-bold text-white md:text-5xl">
                            Who I <span className="text-cyan-400">Am</span>
                        </h2>
                        <div className="space-y-4 text-lg text-gray-400">
                            <p>
                                I am a passionate Full Stack Developer tailored for the modern web. My journey is defined by a relentless pursuit of innovation, merging clean code with captivating design.
                            </p>
                            <p>
                                From building complex AI-driven dashboards like MediBotix to real-time communication tools, I thrive on solving difficult problems. I don't just write code; I architect systems that scale and experiences that resonate.
                            </p>
                            <p>
                                My stack includes <span className="text-white">Next.js, React, Node.js, and Cloud Infrastructure</span>, but I'm always exploring the bleeding edge of technology.
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-square w-full rounded-2xl bg-gradient-to-tr from-purple-500/20 to-cyan-500/20 border border-white/10 p-8 flex items-center justify-center">
                            {/* Abstract Visual or Image Placeholder */}
                            <div className="text-center">
                                <div className="text-6xl font-bold text-white/20 mb-2">DEV</div>
                                <div className="text-sm tracking-widest text-purple-400">CREATIVE TECHNOLOGIST</div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
