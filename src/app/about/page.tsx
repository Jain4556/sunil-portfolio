import About from "../../components/About";

export default function AboutPage() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-white/10 bg-white/5 px-5 py-6 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:px-8 sm:py-8 lg:px-10 lg:py-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-400/80 sm:text-sm">
              About Me
            </p>
            <h1 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Clean design, clear storytelling, and a focus on building useful software.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base">
              I&apos;m a third-year student passionate about building scalable and modern web applications using React, Next.js, and TypeScript.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {['React', 'Next.js', 'TypeScript', 'Tailwind'].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <About className="mt-10" />
        </div>
      </div>
    </section>
  );
}