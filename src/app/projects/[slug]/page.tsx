import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectThumbnail from "@/components/ProjectThumbnail";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container py-20">
      <Link href="/projects" className="text-sm text-gray-400 transition text-zinc-900 dark:text-white">
        Back to projects
      </Link>

      <div className="mt-6 rounded-3xl border border-gray-800 bg-black/20 p-8 md:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Projects</p>
        <h1 className="mt-3 text-4xl font-bold md:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-gray-300">{project.description}</p>

        <div className="mt-8">
          <ProjectThumbnail project={project} />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.tech.map((tech: string) => (
            <span key={tech} className="rounded-md border border-gray-700 px-3 py-1 text-sm text-gray-300">
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-gray-400">
          This is the detail view you can extend with screenshots, metrics, links, and a live demo button for each
          project.
        </p>
      </div>
    </div>
  );
}