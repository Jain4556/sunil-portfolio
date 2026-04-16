"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen">

      <div className="container flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT SIDE - TEXT */}
        <div className="text-center md:text-left max-w-xl">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
              Sunil Jain
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-gray-400 text-lg"
          >
            I build modern web applications using Next.js, React & TypeScript.
          </motion.p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-gray-600 rounded-full hover:border-white hover:scale-105 transition"
            >
              Contact Me
            </a>
          </div>

        </div>

        {/* RIGHT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">

            <Image
              src="/profile.png"
              alt="Sunil Jain"
              fill
              className="object-cover"
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}