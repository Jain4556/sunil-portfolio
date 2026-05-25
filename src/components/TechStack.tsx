"use client";

import { motion } from "framer-motion";
import {
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

const tech = [
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
    <section className="container py-28 text-center">

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold"
      >
        Tech Stack
      </motion.h2>

      {/* 🔥 SINGLE LINE (AUTO WRAP) */}
      <div className="flex flex-wrap justify-center gap-10 mt-14">

        {tech.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.25 }}
            className="flex flex-col items-center"
          >
            {/* ICON */}
            <div className="text-5xl text-gray-400 hover:text-white transition duration-300">
              {item.icon}
            </div>

            {/* LABEL */}
            <span className="text-xs text-gray-500 mt-2">
              {item.name}
            </span>
          </motion.div>
        ))}

      </div>
    </section>
  );
}