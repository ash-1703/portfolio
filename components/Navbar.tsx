"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
      <Link href="/" className="shrink-0 text-lg font-semibold tracking-tight">
        <span className="text-blue-400">Aishwarya</span> Tupe
      </Link>
      <div className="hidden items-center gap-5 text-sm text-slate-300 md:flex">
        {links.map(({label,href}) => (
          <Link key={href} href={href} className="transition hover:text-white">{label}</Link>
        ))}
        <a href="/api/resume" className="btn text-sm">Resume ↗</a>
      </div>
      <button type="button" className="rounded-lg p-2 text-slate-200 md:hidden" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✕" : "☰"}
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-[#0b1220] px-6 py-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {links.map(({label,href}) => (
              <Link key={href} href={href} onClick={() => setIsOpen(false)} className="text-slate-200 hover:text-white">{label}</Link>
            ))}
            <a href="/api/resume" className="text-blue-300" onClick={() => setIsOpen(false)}>Resume ↗</a>
          </div>
        </div>
      )}
    </nav>
  );
}
