"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

interface ProjectProps {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo: string;
        repo: string;
    };
    image?: string; // Optional for now, will use placeholder or gradient
}

const ProjectCard = ({ project, index }: { project: ProjectProps; index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-white/10"
        >
            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-900/50 to-blue-900/50 group-hover:from-purple-800/50 group-hover:to-blue-800/50">
                {/* Placeholder for project image since we don't have screenshots yet */}
                <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/10 group-hover:text-white/20 transition-colors font-display">
                    {project.title}
                </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-display text-2xl font-bold text-white">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.description}</p>

                <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex items-center gap-4">
                    <a
                        href={project.links.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
                    >
                        <Github className="h-4 w-4" />
                        Code
                    </a>
                    <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-300 transition-colors hover:text-cyan-400"
                    >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
