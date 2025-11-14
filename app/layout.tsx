import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import ChatWidget from "../components/ChatWidget";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: "Aishwarya Tupe — Portfolio",
  description: "Full‑stack developer | AI & Agents",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Aishwarya Tupe — Portfolio",
    description: "Full‑stack developer | AI & Agents",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <header className="sticky top-0 z-50 bg-[var(--bg)]/70 backdrop-blur border-b border-white/10">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-tight text-lg">
              <span className="text-blue-400">Aishwarya</span> Tupe
            </Link>
            <div className="flex items-center gap-6 text-sm text-slate-300">
              <Link href="/#projects" className="hover:text-white">Projects</Link>
              <Link href="/experience" className="hover:text-white">Experience</Link>
              <Link href="/mission" className="hover:text-white">Mission</Link>
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/#contact" className="hover:text-white">Contact</Link>
              <a href="/resume.pdf" className="btn text-sm">Resume</a>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4">{children}</main>
         <ChatWidget />
        <footer className="mx-auto max-w-6xl px-4 py-12 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Aishwarya Tupe • Built with Next.js, Tailwind & Coffee
        </footer>
      </body>
    </html>
  );
}
