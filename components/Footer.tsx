"use client";

import React from "react";

const Footer = () => {
    return (
        <footer id="contact" className="w-full border-t border-white/10 bg-black py-12 text-center">
            <div className="flex flex-col items-center justify-center gap-6">
                <h2 className="font-display text-2xl font-bold text-white">Let's Build Something Amazing</h2>
                <p className="max-w-md text-gray-400">
                    Open for opportunities and collaborations. Reach out to discuss your next project.
                </p>
                <a
                    href="mailto:prateekmangalgi924@gmail.com"
                    className="rounded-full bg-purple-600 px-8 py-3 font-medium text-white transition-colors hover:bg-purple-700"
                >
                    Get in Touch
                </a>
                <a
                    href="mailto:prateekmangalgi924@gmail.com"
                    className="mt-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                    prateekmangalgi924@gmail.com
                </a>
                <div className="mt-8 text-sm text-gray-600">
                    &copy; {new Date().getFullYear()} Prateek Mangalgi. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
