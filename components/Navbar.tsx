"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Highlights", href: "/#highlights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
      <Link href="/" className="brand-logo" aria-label="Aishwarya Tupe home">
        <span className="brand-symbol" aria-hidden="true"><span className="brand-terminal">&gt;_</span><span className="brand-petal">✿</span></span>
        <span>Aishwarya <strong>Tupe</strong></span>
      </Link>
      <div className="hidden items-center gap-6 text-sm md:flex">
        {links.map(({label,href}) => (
          <Link key={href} href={href} className="nav-link">{label}</Link>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <a href="/api/resume" className="nav-resume hidden sm:inline-flex">Resume ↗</a>
        <button type="button" className="menu-toggle md:hidden" aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-nav absolute left-0 right-0 top-full border-b px-6 py-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4 text-sm">
            {links.map(({label,href}) => (
              <Link key={href} href={href} onClick={() => setIsOpen(false)} className="nav-link">{label}</Link>
            ))}
            <a href="/api/resume" onClick={() => setIsOpen(false)} className="nav-link sm:hidden">Resume ↗</a>
          </div>
        </div>
      )}
    </nav>
  );
}
