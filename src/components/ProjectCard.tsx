"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import ProjectThumbnail from "./ProjectThumbnail";

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
  const cardMinHeight = compact ? "min-h-[96px] sm:min-h-[108px]" : "min-h-[112px] sm:min-h-[124px]";
  const cardPadding = compact ? "p-2 sm:p-2.5" : "p-2.5 sm:p-3";
  const cardGap = compact ? "gap-2 sm:gap-2.5" : "gap-2.5 sm:gap-3";
  const titleSize = compact ? "text-[11px] sm:text-xs" : "text-xs sm:text-sm";
  const tagSize = compact ? "px-1.5 py-0.5 text-[9px] sm:text-[10px]" : "px-1.5 py-0.5 text-[10px] sm:px-2 sm:text-[11px]";
  const iconSize = compact ? "h-6 w-6 sm:h-7 sm:w-7" : "h-7 w-7 sm:h-8 sm:w-8";
  const thumbnailClassName = compact
    ? "h-9 w-9 rounded-md object-cover sm:h-10 sm:w-12"
    : "h-10 w-10 rounded-md object-cover sm:h-12 sm:w-14";
  const hoverMotion = { y: -4, scale: 1.01 };
  const hoverTransition = { type: "spring" as const, stiffness: 260, damping: 24 };

  const renderThumbnail = () => {
    if (project.image) {
      return (
        <img
          src={project.image}
          alt={project.title}
          className={thumbnailClassName}
        />
      );
    }

    if (typeof href === "string" && /github.com/.test(href)) {
      return (
        <div className={`flex ${thumbnailClassName} items-center justify-center bg-white/5`}>
          <AiFillGithub className="text-base text-white/80 sm:text-lg" />
        </div>
      );
    }

    return <ProjectThumbnail project={project} compact={compact} />;
  };

  const cardClassName = [
    "group block h-full rounded-lg border border-gray-800 bg-black/10 transition duration-200 hover:border-white/60 hover:bg-black/20 focus-visible:outline-none",
    cardMinHeight,
    cardPadding,
  ].join(" ");

  const contentClassName = ["grid grid-cols-[auto,minmax(0,1fr),auto] items-start", cardGap].join(" ");

  const cardBody = (
    <div className={contentClassName}>
      <div className="shrink-0 transition-transform duration-200 group-hover:scale-[1.03]">{renderThumbnail()}</div>

      <div className="min-w-0">
        <h2 className={`truncate font-semibold leading-tight text-white ${titleSize}`}>
          {project.title}
        </h2>

        <div className={`mt-1 flex flex-wrap ${compact ? "gap-1" : "gap-1.5 sm:mt-2"}`}>
          {project.tech.map((t: string, i: number) => (
            <span
              key={i}
              className={`rounded-md border border-gray-700 text-gray-300 ${tagSize}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <span
        className={`flex items-center justify-center rounded-full border border-gray-700 text-gray-300 transition duration-200 group-hover:-rotate-45 group-hover:border-white group-hover:text-white ${iconSize}`}
      >
        <FiArrowUpRight className={compact ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"} />
      </span>
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