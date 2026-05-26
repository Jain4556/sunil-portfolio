"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/resume", label: "Resume" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-2 pt-2.5 sm:px-4 sm:pt-3">
      <nav className="mx-auto flex w-full max-w-5xl items-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-3 py-2 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
        <Link
          href="/"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-950 text-[0.7rem] font-semibold tracking-[0.18em] text-white ring-1 ring-black/10 transition hover:scale-105 dark:bg-white dark:text-zinc-950"
          aria-label="Go to home"
        >
          SJ
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[0.85rem] font-medium text-zinc-600 dark:text-zinc-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-zinc-950 dark:hover:text-white ${
                isActive(link.href) ? "text-zinc-950 dark:text-white" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-[0.82rem] font-semibold transition ${
              isActive("/contact")
                ? "border-zinc-950 bg-zinc-950 text-white dark:border-white dark:bg-white dark:text-zinc-950"
                : "border-zinc-200 bg-zinc-950 text-white hover:bg-zinc-800 dark:border-white/10 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200"
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-black/10 text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-100 hover:text-zinc-950 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          disabled={!mounted}
        >
          {mounted && resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  );
}