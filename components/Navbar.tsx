"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
      <Link href="/" className="font-semibold tracking-tight text-lg">
        <span className="text-blue-400">Aishwarya</span> Tupe
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-6 text-sm text-slate-200">
        <Link href="/" className="hover:text-white">Home</Link>
        <Link href="/#projects" className="hover:text-white">Projects</Link>
        <Link href="/learning" className="hover:text-white">Learning</Link>
        <Link href="/blogs" className="hover:text-white">Blogs</Link>
        <Link href="/certifications" className="hover:text-white">Certifications</Link>
        <Link href="/about" className="hover:text-white">About</Link>
        <Link href="/#contact" className="hover:text-white">Contact</Link>
        <a
          href="https://drive.google.com/file/d/173XjBp4puh6NLXjMs3UwS3VgA_Al8Y-z/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="btn text-sm"
        >
          Resume
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-slate-200 hover:text-white"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[var(--bg)] border-b border-white/10 md:hidden">
          <div className="flex flex-col px-4 py-3 space-y-3 text-sm text-slate-200">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-white py-2">Home</Link>
            <Link href="/#projects" onClick={() => setIsOpen(false)} className="hover:text-white py-2">Projects</Link>
            <Link href="/learning" onClick={() => setIsOpen(false)} className="hover:text-white py-2">Learning</Link>
            <Link href="/blogs" onClick={() => setIsOpen(false)} className="hover:text-white py-2">Blogs</Link>
            <Link href="/certifications" onClick={() => setIsOpen(false)} className="hover:text-white py-2">Certifications</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-white py-2">About</Link>
            <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-white py-2">Contact</Link>
            <a
              href="https://drive.google.com/file/d/1fTFcixdS7mQ1SzLYqgmDOZFVa6FsbCnA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white py-2 border-t border-white/10 pt-4 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
