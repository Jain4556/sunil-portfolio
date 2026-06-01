"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import About from "./About";
import TechStack from "./TechStack";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

function Typewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pause = 1000,
}: {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const current = phrases[index];
    let timeout = null as unknown as number;

    // Type forward until we reach the full length
    if (!isDeleting && subIndex < current.length) {
      timeout = window.setTimeout(() => setSubIndex((s) => s + 1), typingSpeed);
    }

    // When finished typing the current phrase, pause then start deleting
    if (!isDeleting && subIndex === current.length) {
      timeout = window.setTimeout(() => setIsDeleting(true), pause);
    }

    // Delete characters until none remain
    if (isDeleting && subIndex > 0) {
      timeout = window.setTimeout(() => setSubIndex((s) => s - 1), deletingSpeed);
    }

    // When finished deleting, move to the next phrase
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
    }

    return () => window.clearTimeout(timeout);
  }, [subIndex, isDeleting, index, phrases, typingSpeed, deletingSpeed, pause]);

  useEffect(() => {
    const id = window.setInterval(() => setBlink((b) => !b), 500);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="inline-block text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-100">
      {phrases[index].slice(0, subIndex)}
      <span
        aria-hidden
        className="inline-block align-middle h-5 w-0.5 bg-zinc-900 dark:bg-white ml-1"
        style={{ opacity: blink ? 1 : 0 }}
      />
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, x: 0 }} className="w-full">
            <div className="flex items-start gap-6">
              <div className="group relative h-40 w-40 sm:h-48 sm:w-48 lg:h-60 lg:w-60 shrink-0">
                <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_180deg,rgba(255,255,255,0.35),rgba(59,130,246,0.95),rgba(255,255,255,0.35),rgba(16,185,129,0.95),rgba(255,255,255,0.35))] opacity-0 blur-[2px] transition-opacity duration-300 group-hover:opacity-100 group-hover:animate-[spin_6s_linear_infinite] dark:bg-[conic-gradient(from_180deg,rgba(255,255,255,0.18),rgba(96,165,250,0.95),rgba(255,255,255,0.18),rgba(45,212,191,0.95),rgba(255,255,255,0.18))]" />
                <div className="absolute inset-1 overflow-hidden rounded-full border-4 border-white/80 bg-zinc-200 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.55)] ring-1 ring-black/5 dark:border-white/10 dark:bg-zinc-800">
                  <Image src="/profile.png" alt="Sunil Jain" fill className="object-cover" priority />
                </div>
              </div>

              <div className="flex-1">
                <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                  Hi, I&apos;m <span className="bg-linear-to-r from-amber-500 to-cyan-600 bg-clip-text text-transparent">Sunil Jain</span>
                </motion.h1>

                <p className="mt-3 text-base sm:text-lg text-zinc-300">I'm a third-year student passionate about building scalable and modern web applications using React, Next.js, and TypeScript.</p>

                <div className="mt-4">
                  <span className="inline-flex items-center rounded-full bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-600">
                    Open to Work
                  </span>
                </div>
              </div>
            </div>

           <div className="mt-10">
              <div className="w-full">
                <div className="mb-4">
                  <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">Find me on</p>
                  <div className="mt-2 flex gap-3">
                    <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white hover:scale-105 hover:bg-white hover:text-[#0A66C2]">
                      <FaLinkedin size={16} />
                    </a>
                    <a href="https://github.com/your-username" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white hover:scale-105 hover:bg-white hover:text-[#181717]">
                      <FaGithub size={16} />
                    </a>
                    <a href="https://discord.com/users/your-id" target="_blank" rel="noreferrer" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white hover:scale-105 hover:bg-white hover:text-[#5865F2]">
                      <SiDiscord size={16} />
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <About className="pt-4" />
                </div>

                <div className="pt-14">
                  <TechStack />
                </div>
              </div>

              <div />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}