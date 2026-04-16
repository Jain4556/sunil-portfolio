"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      
      <nav className="flex items-center gap-6 px-6 py-3 rounded-full 
      border border-white/10 
      bg-white/5 backdrop-blur-lg 
      shadow-lg">

        {/* Profile + Name */}
        {/* <div className="flex items-center gap-2">
          <Image
            src="/profile.jpg"
            alt="profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="font-semibold">Sunil Jain</span>
        </div> */}

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-300">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/projects" className="hover:text-white transition">Projects</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>

      </nav>

    </div>
  );
}