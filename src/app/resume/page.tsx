import Link from "next/link";

export default function Resume() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
            Resume
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-5xl">
            View and download my resume
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            My resume is displayed below. Use the download button on the right to
            save a copy, or open the PDF directly in the browser.
          </p>
        </div>

        <a
          href="/suniljain.pdf"
          download
          className="inline-flex w-fit items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
        >
          Download Resume
        </a>
      </div>

      <section className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-4xl border border-black/10 bg-white/70 shadow-[0_24px_80px_-48px_rgba(0,0,0,0.55)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
        <div className="border-b border-black/10 px-5 py-4 dark:border-white/10 sm:px-6">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Resume preview
          </p>
        </div>

        <div className="h-[80vh] bg-zinc-100 dark:bg-zinc-900">
          <iframe
            src="/suniljain.pdf"
            title="Resume PDF"
            className="h-full w-full"
          />
        </div>
      </section>

     

      <div className="mt-8 flex justify-center">
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:border-zinc-950 hover:bg-zinc-950 hover:text-white dark:border-white/15 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-950"
        >
          Contact me
        </Link>
      </div>
    </main>
  );
}