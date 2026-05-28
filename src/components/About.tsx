"use client";

const aboutItems = [
  "Started with curiosity, not a roadmap — explored different paths in tech and discovered backend development is where I genuinely belong.",

  "Built projects from scratch with focus on fundamentals instead of shortcuts; each project improved my ability to think, debug, and deliver.",

  "Fascinated by backend systems — APIs, databases, real-time architecture, scalability, and the invisible layer that powers modern applications.",

  "I believe technology can improve every field — automation, robotics, businesses, and everyday workflows. Writing code builds solutions that matter.",

  "Currently growing my portfolio, sharpening backend skills, and open to internships, collaborations, freelance work, and meaningful technical opportunities.",
];

export default function About() {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold text-zinc-100">
        About
      </h2>

      <div
        className="
          mt-8

          flex flex-col gap-6

          lg:grid
          lg:grid-cols-2
          lg:gap-x-12
          lg:gap-y-8
        "
      >
        {aboutItems.map((item, index) => (
          <div key={index} className="flex gap-3">
            <div className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-500" />

            <p className="text-[15px] leading-8 text-zinc-300">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}