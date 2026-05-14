import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import CalendlyWidget from "../components/CalendlyWidget";
import ChatWidget from "../components/ChatWidget";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  title: "Aishwarya Tupe | Portfolio",
  description: "Full Stack Developer | AI & Agents",
  icons: {
    icon: '/portfolio/favicon.ico',
  },
  openGraph: {
    title: "Aishwarya Tupe | Portfolio",
    description: "Full Stack Developer | AI & Agents",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <header className="sticky top-0 z-50 bg-[var(--bg)]/70 backdrop-blur border-b border-white/10">
          <Navbar />
        </header>
        <main className="mx-auto max-w-6xl px-4">{children}</main>
  <CalendlyWidget />
  <ChatWidget />
        <footer className="mx-auto max-w-6xl px-4 py-12 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} Aishwarya Tupe • Built with Next.js, Tailwind & Coffee
        </footer>
      </body>
    </html>
  );
}
