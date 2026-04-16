import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}