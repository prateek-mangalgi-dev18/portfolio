"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projectsData = [
    {
        title: "MediBotix",
        description: "An advanced healthcare assistant platform utilizing AI for diagnostics and patient management. Features a secure dashboard and real-time operational metrics.",
        tags: ["React", "AI Integration", "Healthcare", "Dashboard"],
        links: {
            demo: "https://medibotix.vercel.app/",
            repo: "https://github.com/prateek-mangalgi-dev18/medibotix",
        },
    },
    {
        title: "CodePilot",
        description: "An intelligent coding companion designed to enhance developer productivity. Includes code analysis, snippets management, and collaborative features.",
        tags: ["Next.js", "TypeScript", "AI", "DevTools"],
        links: {
            demo: "https://codepilot-live.vercel.app/",
            repo: "https://github.com/prateek-mangalgi-dev18/codepilot",
        },
    },
    {
        title: "MusicHub",
        description: "A modern music streaming application with a vast library, custom playlists, and a high-fidelity audio player similar to Spotify.",
        tags: ["Full Stack", "Audio API", "Streaming", "UI/UX"],
        links: {
            demo: "https://musichub-live.vercel.app/",
            repo: "https://github.com/prateek-mangalgi-dev18/MusicHub",
        },
    },
    {
        title: "WebRTC App",
        description: "A real-time communication application offering high-quality video and voice calls. Built with React Native for cross-platform mobile performance.",
        tags: ["React Native", "WebRTC", "Mobile", "Video Call"],
        links: {
            demo: "https://webrtc.vercel.app",
            repo: "https://github.com/prateek-mangalgi-dev18/WebRTC-react-native-app",
        },
    },
];

const Projects = () => {
    return (
        <section id="projects" className="relative w-full px-6 py-24 md:px-12">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
                        Selected <span className="text-purple-500">Works</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-400">
                        A showcase of my recent projects, spanning AI, healthcare, media, and real-time communications.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
