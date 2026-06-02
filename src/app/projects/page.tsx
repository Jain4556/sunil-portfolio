import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-3 max-w-2xl text-gray-400">
        A selected set of projects with compact cards, hover motion, and a clear click target.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}