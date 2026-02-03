"use client";

import React, { useState, useEffect } from "react"; // Added React import
import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, CodeXml } from "lucide-react"; // Removed Twitter, added CodeXml

const Navbar = () => {
    // ... (keep existing state logic)
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 md:px-12 ${scrolled
                ? "bg-black/30 backdrop-blur-md border-b border-white/10"
                : "bg-transparent"
                }`}
        >
            <Link href="/" className="font-display text-2xl font-bold tracking-wider text-white">
                PM<span className="text-purple-500">.</span>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
                {["Home", "Projects", "About", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-sm font-medium text-gray-300 transition-colors hover:text-purple-400"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <a
                    href="https://github.com/prateek-mangalgi-dev18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-white"
                >
                    <Github className="h-5 w-5" />
                </a>
                <a
                    href="https://www.linkedin.com/in/prateek-mangalgi-11921a330"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-white"
                >
                    <Linkedin className="h-5 w-5" />
                </a>
                <a
                    href="https://leetcode.com/u/Prateek_Mangalgi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 transition-colors hover:text-white"
                >
                    <CodeXml className="h-5 w-5" />
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
