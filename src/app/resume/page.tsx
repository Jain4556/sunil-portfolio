import Link from "next/link";

export default function Resume() {
  return (
    <main className="container py-20">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
        Resume
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white">
        Professional summary and experience
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
        This section is ready for your resume details. Add your work history,
        skills, and a downloadable PDF here when you are ready.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Contact me
        </Link>
      </div>
    </main>
  );
}