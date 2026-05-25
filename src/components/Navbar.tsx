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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-3 shadow-[0_20px_80px_-35px_rgba(0,0,0,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/80">
        <Link
          href="/"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold tracking-[0.2em] text-white ring-1 ring-black/10 transition hover:scale-105 dark:bg-white dark:text-zinc-950"
          aria-label="Go to home"
        >
          SJ
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-300">
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
            className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
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
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-100 hover:text-zinc-950 dark:border-white/10 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          disabled={!mounted}
        >
          {mounted && resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}