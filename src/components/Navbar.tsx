"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);



  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/resume", label: "Resume" },
  ];

  const isActive = (href: string) => pathname === href;

  const closeMobileMenu = () => setMobileMenuOpen(false);
  

return (
  <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
    <nav className="relative mx-auto flex w-full max-w-3xl items-center justify-between rounded-3xl border border-zinc-200/80 bg-white/80 px-4 py-2 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/40">

      {/* Logo */}
      <Link
        href="/"
        aria-label="Go to home"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-300 bg-white text-sm font-bold text-zinc-900 transition-all duration-300 hover:scale-105 dark:border-zinc-700 dark:bg-zinc-950 text-zinc-900 dark:text-white"
      >
        <span className="font-serif">SJ</span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden items-center gap-6 md:flex">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors duration-300 ${
              isActive(link.href)
                ? "hover:text-zinc-900 dark:hover:text-white"
                : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() =>
            setTheme(resolvedTheme === "dark" ? "light" : "dark")
          }
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 transition-all duration-300 hover:bg-white/20 dark:bg-white/5 dark:hover:bg-white/10"
          aria-label={
            mounted && resolvedTheme === "dark"
              ? "Switch to light mode"
              : "Switch to dark mode"
          }
          disabled={!mounted}
        >
          {mounted && resolvedTheme === "dark" ? (
            <Sun size={16} />
          ) : (
            <Moon size={16} />
          )}
        </button>

        {/* Mobile Menu */}
        <div className="relative md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition-all duration-300 hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>

          {mobileMenuOpen && (
            <div className="absolute right-0 top-full mt-2 w-44 rounded-2xl border border-zinc-200 bg-white p-2 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/95">
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobileMenu}
                    className={`rounded-xl px-3 py-2 text-sm transition-colors ${
                      isActive(link.href)
                        ? "bg-zinc-100 text-zinc-950 dark:bg-white/10 text-zinc-900 dark:text-white"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  </header>
);
}