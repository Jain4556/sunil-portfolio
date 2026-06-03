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

export default function ProjectCard({ project }: any) {
  const href = getProjectHref(project);
  const isExternal = typeof href === "string" && /^https?:\/\//.test(href);

  const renderThumbnail = () => {
    if (project.image) {
      return (
        <img
          src={project.image}
          alt={project.title}
          className="h-10 w-10 rounded-md object-cover sm:h-12 sm:w-14"
        />
      );
    }

    if (typeof href === "string" && /github.com/.test(href)) {
      return (
        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 sm:h-12 sm:w-14">
          <AiFillGithub className="text-lg text-white/80 sm:text-xl" />
        </div>
      );
    }

    return <ProjectThumbnail project={project} compact />;
  };

  return (
    <>
      {isExternal ? (
        <motion.a
          href={href}
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -3, scale: 1.005 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="group block h-full rounded-lg border border-gray-800 bg-black/10 p-2.5 transition-colors duration-200 hover:border-white/60 focus-visible:outline-none sm:p-3"
        >
          <div className="grid grid-cols-[auto,minmax(0,1fr),auto] items-start gap-2.5 sm:gap-3">
            <div className="shrink-0">{renderThumbnail()}</div>

            <div className="min-w-0">
              <h2 className="truncate text-xs font-semibold leading-tight text-white sm:text-sm">
                {project.title}
              </h2>

              <div className="mt-1.5 flex flex-wrap gap-1.5 sm:mt-2">
                {project.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="rounded-md border border-gray-700 px-1.5 py-0.5 text-[10px] text-gray-300 sm:px-2 sm:text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition duration-200 group-hover:-rotate-45 group-hover:border-white group-hover:text-white sm:h-8 sm:w-8">
              <FiArrowUpRight className="text-xs sm:text-sm" />
            </span>
          </div>
        </motion.a>
      ) : (
        <MotionLink
          href={href}
          whileHover={{ y: -3, scale: 1.005 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="group block h-full rounded-lg border border-gray-800 bg-black/10 p-2.5 transition-colors duration-200 hover:border-white/60 focus-visible:outline-none sm:p-3"
        >
          <div className="grid grid-cols-[auto,minmax(0,1fr),auto] items-start gap-2.5 sm:gap-3">
            <div className="shrink-0">{renderThumbnail()}</div>

            <div className="min-w-0">
              <h2 className="truncate text-xs font-semibold leading-tight text-white sm:text-sm">
                {project.title}
              </h2>

              <div className="mt-1.5 flex flex-wrap gap-1.5 sm:mt-2">
                {project.tech.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="rounded-md border border-gray-700 px-1.5 py-0.5 text-[10px] text-gray-300 sm:px-2 sm:text-[11px]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition duration-200 group-hover:-rotate-45 group-hover:border-white group-hover:text-white sm:h-8 sm:w-8">
              <FiArrowUpRight className="text-xs sm:text-sm" />
            </span>
          </div>
        </MotionLink>
      )}
    </>
  );
}