import Image from "next/image";

export default function Resume() {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-10 pb-20">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          Sunil's Resume
        </h1>

        <a
          href="/suniljain.pdf"
          download
          className="mt-5 inline-block text-xl font-medium text-zinc-300 underline underline-offset-8 hover:text-white"
        >
          Download PDF
        </a>
      </div>

      <div className="mt-12 flex justify-center">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md shadow-[0_20px_80px_rgba(0,0,0,0.4)]">
          <Image
            src="/suniljain.png"
            alt="Resume"
            width={900}
            height={1273}
            priority
            className="rounded-lg bg-white shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
} 