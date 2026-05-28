"use client";

const aboutItems = [
  {
    title: "Curiosity-First",
    description:
      "Started with curiosity, not a roadmap — explored different paths in tech and discovered backend development is where I genuinely belong.",
    icon: "💡",
  },
  {
    title: "Built From Scratch",
    description:
      "Built projects from scratch with focus on fundamentals instead of shortcuts; each project improved my ability to think, debug, and deliver.",
    icon: "🛠️",
  },
  {
    title: "Tech For Impact",
    description:
      "I believe technology can improve every field — automation, robotics, businesses and everyday workflows. Writing code builds solutions that matter.",
    icon: "🌐",
  },
  {
    title: "Growing & Open",
    description:
      "Currently growing my portfolio, sharpening backend skills, and open to internships, collaborations, freelance work, and meaningful technical opportunities.",
    icon: "🚀",
  },
];

export default function About({ className }: { className?: string }) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-zinc-100">About</h3>

      <div className="mt-4 flex flex-row flex-wrap gap-6">
        <div className="min-w-55 max-w-136 text-sm leading-7 text-zinc-300">
          Started with curiosity, not a roadmap — explored different paths in
          tech and discovered backend development is where I genuinely belong.
        </div>

        <div className="min-w-55 max-w-136 text-sm leading-7 text-zinc-300">
          Built projects from scratch with focus on fundamentals instead of
          shortcuts; each project improved my ability to think, debug, and
          deliver.
        </div>

        <div className="min-w-55 max-w-136 text-sm leading-7 text-zinc-300">
          I believe technology can improve every field — automation, robotics,
          businesses and everyday workflows. Writing code builds solutions that
          matter.
        </div>

        <div className="min-w-55 max-w-136 text-sm leading-7 text-zinc-300">
          Currently growing my portfolio, sharpening backend skills, and open
          to internships, collaborations, freelance work, and meaningful
          technical opportunities.
        </div>
      </div>
    </div>
  );
}
