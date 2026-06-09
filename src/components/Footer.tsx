"use client";

import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/Jain4556",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/sunil-jain-1308a12a9/",
  },
  {
    name: "Email",
    icon: MdEmail,
    href: "suniljain09005@gmail.com",
  },
  {
    name: "Resume",
    icon: FaFileAlt,
    href: "/resume.pdf",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#0A0A0A]">
      {/* Subtle Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-white/[0.02] blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative mx-auto max-w-4xl px-6 py-16"
      >
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">
            Let's Build Something Great Together
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-500 md:text-base">
            I'm open to internships, collaborations, and opportunities
            to build impactful products.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex items-center justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="
                  text-zinc-500
                  transition-colors
                  duration-200
                  hover:text-white
                "
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="mx-auto mt-10 max-w-md border-t border-white/10" />

        {/* Bottom */}
        <div className="mt-6 text-center">
          <p className="text-xs tracking-wide text-zinc-500">
            © 2026 Sunil Jain. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  );
}