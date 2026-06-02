"use client";

const themeBySlug: Record<string, string> = {
  "jewellery-website": "from-amber-500/90 via-orange-500/70 to-rose-500/80",
  "portfolio-website": "from-cyan-500/90 via-sky-500/70 to-blue-500/80",
  "task-manager-dashboard": "from-emerald-500/90 via-teal-500/70 to-lime-500/80",
  "food-ordering-app": "from-fuchsia-500/90 via-violet-500/70 to-indigo-500/80",
  "developer-dashboard": "from-rose-500/90 via-pink-500/70 to-orange-400/80",
};

type ProjectThumbnailProps = {
  project: any;
  compact?: boolean;
};

export default function ProjectThumbnail({ project, compact = false }: ProjectThumbnailProps) {
  const theme = themeBySlug[project.slug] ?? "from-zinc-500/90 via-zinc-400/70 to-zinc-700/80";

  return (
    <div
      style={{ aspectRatio: compact ? "16 / 11" : "16 / 9" }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
    >
      <div className={`absolute inset-0 bg-linear-to-br ${theme} opacity-25`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.08),transparent_30%)]" />

      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="mb-4 flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <div className="ml-3 h-2 w-24 rounded-full bg-white/10" />
        </div>

        <div className="grid h-full gap-3 sm:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-between rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-sm">
            <div>
              <p className="text-[10px] uppercase tracking-[0.32em] text-white/55">Homepage preview</p>
              <h3 className={`mt-2 font-semibold text-white ${compact ? "text-base sm:text-lg" : "text-lg sm:text-2xl"}`}>
                {project.title}
              </h3>
              <p className="mt-2 max-h-14 overflow-hidden text-xs leading-5 text-white/70 sm:text-sm">
                {project.description}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.slice(0, 3).map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-medium text-white/75"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/20">
              <div className={`h-24 rounded-xl bg-linear-to-br ${theme} opacity-90`} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="h-3 w-14 rounded-full bg-white/20" />
                <div className="mt-3 h-16 rounded-xl bg-white/8" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
                <div className="h-3 w-10 rounded-full bg-white/20" />
                <div className="mt-3 h-16 rounded-xl bg-white/8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}