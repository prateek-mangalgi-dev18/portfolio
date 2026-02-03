"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030014]"
        >
            {/* Background Gradients */}
            <div className="absolute top-[-20%] left-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" />
            <div className="absolute bottom-[-20%] right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[100px]" />

            <div className="z-10 flex max-w-5xl flex-col items-center text-center px-4">


                <motion.h1
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-8xl"
                >
                    Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Experiences</span>
                    <br />
                    <span className="whitespace-nowrap">Not Just Websites</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-6 max-w-lg text-lg text-gray-400 sm:text-xl"
                >
                    I'm Prateek Mangalgi. A full-stack developer crafting immersive, high-performance web applications with next-gen tech.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="mt-10 flex gap-4"
                >
                    <a
                        href="#projects"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-3 font-medium text-black transition-all hover:bg-gray-200"
                    >
                        <span className="mr-2">View Work</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                    <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-purple-500 to-transparent animate-pulse" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
