"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectThumbnail from "./ProjectThumbnail";

const MotionLink = motion(Link);

export default function ProjectCard({ project }: any) {
  return (
    <MotionLink
      href={`/projects/${project.slug}`}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group block h-full rounded-2xl border border-gray-800 bg-black/20 p-4 transition-colors duration-300 hover:border-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:p-5"
    >
      <ProjectThumbnail project={project} compact />

      <div className="mt-5 flex items-start justify-between gap-4">
        <h2 className="text-xl font-semibold">{project.title}</h2>

        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition duration-300 group-hover:-rotate-45 group-hover:border-white group-hover:text-white">
          <FiArrowUpRight className="text-lg" />
        </span>
      </div>

      <p className="mt-3 text-sm leading-6 text-gray-400 transition duration-300 group-hover:text-gray-200">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t: string, i: number) => (
          <span
            key={i}
            className="rounded-md border border-gray-700 px-2.5 py-1 text-[11px] text-gray-300 transition duration-300 group-hover:border-gray-500"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2 text-sm text-gray-300 transition duration-300 group-hover:text-white">
        <span>Open project</span>
        <FiArrowUpRight className="transition duration-300 group-hover:-rotate-45" />
      </div>
    </MotionLink>
  );
}