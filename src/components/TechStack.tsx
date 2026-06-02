"use client";

import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss,
  SiPython,
  SiLinux,
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";

const tech = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Linux", icon: <SiLinux /> },
  { name: "VS Code", icon: <DiVisualstudio /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Vercel", icon: <SiVercel /> },
];

export default function TechStack() {
  return (
    <section className="container px-4 py-16 text-center sm:py-20">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold sm:text-3xl"
      >
        Tech Stack
      </motion.h2>

      {/* 🔥 SINGLE LINE (AUTO WRAP) */}
      <div className="mt-10 flex flex-wrap justify-center gap-x-5 gap-y-6 sm:mt-12 sm:gap-x-8 sm:gap-y-8">

        {tech.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="group flex w-14 flex-col items-center sm:w-16"
          >
            {/* ICON */}
            <div className="text-3xl text-gray-400 transition duration-300 group-hover:text-white sm:text-4xl">
              {item.icon}
            </div>

            {/* LABEL */}
            <span className="mt-2 text-[10px] leading-none text-gray-500 sm:text-xs">
              {item.name}
            </span>
          </motion.div>
        ))}

      </div>
    </section>
  );
}