"use client";

export default function ProjectCard({ project }: any) {
  return (
    <div className="group border border-gray-800 rounded-2xl p-6 hover:border-white transition duration-300 hover:-translate-y-2">

      <h2 className="text-xl font-semibold">{project.title}</h2>

      <p className="text-gray-400 mt-2">
        {project.description}
      </p>

      <div className="flex gap-2 mt-4 flex-wrap">
        {project.tech.map((t: string, i: number) => (
          <span
            key={i}
            className="text-xs border px-2 py-1 rounded-md"
          >
            {t}
          </span>
        ))}
      </div>

    </div>
  );
}