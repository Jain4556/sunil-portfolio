import Link from "next/link";

export default function Resume() {
  return (
    <main className="min-h-screen px-4 pt-28 pb-20">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          Sunil's Resume
        </h1>

        <a
          href="/suniljain.pdf"
          download
          className="mt-6 inline-block text-xl font-medium text-zinc-700 underline underline-offset-8 transition hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
        >
          Download the PDF
        </a>

        {/* Resume Preview */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-4xl rounded-xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-md">
            <div className="mx-auto aspect-[1/1.414] w-full max-w-3xl overflow-hidden rounded-md bg-white shadow-[0_20px_80px_rgba(0,0,0,0.25)]">
              <iframe
                src="/suniljain.pdf"
                title="Resume PDF"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </main>
  );
}