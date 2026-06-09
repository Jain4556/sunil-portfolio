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

export default function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const href = getProjectHref(project);
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
  const hoverMotion = { y: -3 };
  const hoverTransition = { type: "spring" as const, stiffness: 320, damping: 28 };

  const accentLabel = project.slug
    .split("-")
    .slice(0, 2)
    .map((part: string) => part[0]?.toUpperCase())
    .join("");

  const cardClassName = [
    "group block h-full rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-200 hover:border-white/20 hover:bg-white/10 focus-visible:outline-none sm:p-5",
  ].join(" ");

  const cardBody = (
    <div className="flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-xs font-semibold tracking-[0.2em] text-white/70 transition-transform duration-200 group-hover:scale-105 sm:h-11 sm:w-11">
            {accentLabel || "PR"}
          </div>

          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold leading-tight text-white sm:text-base">
              {project.title}
            </h2>
            <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/45 sm:text-[12px]">
              Project
            </p>
          </div>
        </div>

        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          <FiArrowUpRight className="text-xs" />
        </span>
      </div>

      <p className="line-clamp-2 text-sm leading-6 text-white/70">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((tech: string, i: number) => (
          <span
            key={i}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/75"
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