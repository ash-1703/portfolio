import "./../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import CalendlyWidget from "../components/CalendlyWidget";
import ChatWidget from "../components/ChatWidget";

const inter = Inter({ subsets: ["latin"], display: "swap", preload: true });

export const metadata: Metadata = {
  title: "Aishwarya Tupe | Software Engineer",
  description: "Full-stack software engineer working on thoughtful products, backend systems, and applied AI.",
  icons: { icon: "/portfolio/favicon.ico" },
  openGraph: {
    title: "Aishwarya Tupe | Software Engineer",
    description: "Full-stack engineering, AI systems, and thoughtful software.",
    type: "website",
  },
};

const themeScript = `(function(){try{var saved=localStorage.getItem('portfolio-theme');var mode=saved==='light'||saved==='dark'?saved:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=mode;}catch(e){document.documentElement.dataset.theme='light';}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={inter.className} suppressHydrationWarning>
        <header className="site-header sticky top-0 z-50 border-b backdrop-blur-xl">
          <Navbar />
        </header>
        <main className="mx-auto max-w-6xl px-5">{children}</main>
        <CalendlyWidget />
        <ChatWidget />
        <footer className="site-footer mx-auto max-w-6xl border-t px-5 py-10 text-center text-xs">
          © {new Date().getFullYear()} Aishwarya Tupe · Crafted with intention ✿
        </footer>
      </body>
    </html>
  );
}
