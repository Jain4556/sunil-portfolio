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
      <nav className="mx-auto flex w-full max-w-5xl items-center gap-2 rounded-3xl border border-white/20 bg-white/20 px-3 py-2 shadow-[0_18px_55px_-28px_rgba(0,0,0,0.45)] backdrop-blur-2xl backdrop-saturate-150 ring-1 ring-white/10 transition-colors duration-300 hover:border-white/30 hover:bg-white/30 dark:border-white/10 dark:bg-zinc-950/35 dark:ring-white/5 dark:hover:bg-zinc-950/45">
        <Link
          href="/"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-zinc-950/90 text-[0.7rem] font-semibold tracking-[0.18em] text-white ring-1 ring-white/10 transition-colors duration-300 hover:bg-zinc-900 hover:shadow-[0_10px_25px_-12px_rgba(0,0,0,0.65)] dark:bg-white dark:text-zinc-950 dark:hover:bg-white/95"
          aria-label="Go to home"
        >
          SJ
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[0.85rem] font-medium text-zinc-700 dark:text-zinc-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 transition-colors duration-300 hover:bg-white/35 hover:text-zinc-950 dark:hover:bg-white/10 dark:hover:text-white ${
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
                ? "border-zinc-950 bg-zinc-950 text-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)] dark:border-white dark:bg-white dark:text-zinc-950"
                : "border-white/20 bg-zinc-950/90 text-white shadow-[0_12px_30px_-18px_rgba(0,0,0,0.7)] transition-colors hover:bg-zinc-900 hover:shadow-[0_16px_34px_-18px_rgba(0,0,0,0.85)] dark:border-white/10 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100"
            }`}
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/20 text-zinc-700 shadow-[0_10px_28px_-20px_rgba(0,0,0,0.65)] transition-colors duration-300 hover:bg-white/40 hover:text-zinc-950 hover:shadow-[0_16px_34px_-18px_rgba(0,0,0,0.8)] dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10 dark:hover:text-white"
          aria-label={mounted && resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          disabled={!mounted}
        >
          {mounted && resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </nav>
    </header>
  );
}