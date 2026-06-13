"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const MotionLink = motion(Link);

function getProjectHref(project: any) {
  return project.link || `/projects/${project.slug}`;
}

type ProjectCardProps = {
  project: any;
  compact?: boolean;
};

export default function ProjectCard({
  project,
  compact = false,
}: ProjectCardProps) {
  const href = getProjectHref(project);

  const isExternal =
    typeof href === "string" && /^https?:\/\//.test(href);

  const hoverMotion = { y: -3 };

  const hoverTransition = {
    type: "spring" as const,
    stiffness: 320,
    damping: 28,
  };

  const accentLabel = project.slug
    .split("-")
    .slice(0, 2)
    .map((part: string) => part[0]?.toUpperCase())
    .join("");

  const cardClassName = [
    "group block h-full min-h-[240px]",
    "rounded-2xl",
    "border border-zinc-200",
    "bg-white",
    "p-6",
    "shadow-[0_20px_50px_rgba(0,0,0,0.12)]",
    "transition-all duration-300",
    "hover:-translate-y-1",
    "hover:border-zinc-300",
    "hover:bg-zinc-50",
    "focus-visible:outline-none",
    "dark:border-white/10",
    "dark:bg-zinc-900",
    "dark:shadow-[0_20px_50px_rgba(0,0,0,0.35)]",
    "dark:hover:border-white/20",
    "dark:hover:bg-zinc-900",
  ].join(" ");

  const cardBody = (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Project Initials */}
          <div
            className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-xl
              border border-zinc-300
              bg-zinc-100
              text-xs font-semibold
              tracking-[0.2em]
              text-zinc-800
              transition-transform duration-200
              group-hover:scale-105
              dark:border-white/10
              dark:bg-white/5
              dark:text-zinc-300
              sm:h-11 sm:w-11
            "
          >
            {accentLabel || "PR"}
          </div>

          <div className="min-w-0">
            {/* Project Title */}
            <h2 className="truncate text-sm font-bold leading-tight text-zinc-900 dark:text-white sm:text-base">
              {project.title}
            </h2>

            {/* Project Label */}
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-zinc-700 dark:text-zinc-400 sm:text-[12px]">
              Project
            </p>
          </div>
        </div>

        {/* Arrow */}
        <span
          className="
            mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center
            rounded-full
            border border-zinc-300
            bg-zinc-100
            text-zinc-700
            transition-transform duration-200
            group-hover:translate-x-0.5
            group-hover:-translate-y-0.5
            dark:border-white/10
            dark:bg-white/5
            dark:text-zinc-300
          "
        >
          <FiArrowUpRight className="text-xs" />
        </span>
      </div>

      {/* Description */}
      <p className="line-clamp-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((tech: string, i: number) => (
          <span
            key={i}
            className="
              rounded-full
              border border-zinc-300
              bg-zinc-100
              px-2.5 py-1
              text-[10px]
              font-medium
              text-zinc-800
              dark:border-white/10
              dark:bg-white/5
              dark:text-zinc-300
            "
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {isExternal ? (
        <motion.a
          href={href}
          target="_blank"
          rel="noreferrer"
          whileHover={hoverMotion}
          transition={hoverTransition}
          className={cardClassName}
        >
          {cardBody}
        </motion.a>
      ) : (
        <MotionLink
          href={href}
          whileHover={hoverMotion}
          transition={hoverTransition}
          className={cardClassName}
        >
          {cardBody}
        </MotionLink>
      )}
    </>
  );
}