import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-hero-gradient opacity-20 blur-2xl" />
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <div className="space-y-7">

          {/* Badge */}
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-500/10 border border-blue-400/20 px-3 py-1 text-blue-300 text-xs tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Available for full-time roles
          </span>

          {/* Headline */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              Building Scalable<br />
              Full-Stack Products{" "}
              <span className="text-blue-400">with AI</span>
            </h1>
            <p className="text-slate-400 text-base pt-1">
              Aishwarya Tupe · Software Engineer · 2+ yrs production experience
            </p>
          </div>

          {/* Bio */}
          <p className="text-slate-300 leading-relaxed max-w-md">
            I build end-to-end systems: React/Node.js applications, RAG-based LLM pipelines, and scalable APIs. Focused on clean architecture, measurable outcomes, and shipping to real users.
          </p>

    

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <Link href="#projects" className="btn">
              View Projects
            </Link>
            <a
              href="/api/resume"
              download
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20 transition text-sm text-blue-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Resume
            </a>
            <Link href="/mission" className="inline-flex items-center rounded-2xl px-4 py-2 border border-white/15 hover:border-white/30 transition text-sm">
              How I Work
            </Link>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/aishwarya-tupe/", icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              )},
              { label: "GitHub", href: "https://github.com/ash-1703", icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              )},
              { label: "Email", href: "mailto:aishwaryasambhajitupe@gmail.com", icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              )},
            ].map(({ label, href, icon }, i, arr) => (
              <span key={label} className="flex items-center gap-4">
                <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-200 transition text-sm">
                  {icon}{label}
                </a>
                {i < arr.length - 1 && <span className="text-white/15">·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Photo */}
        <div className="justify-self-center md:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-3xl bg-blue-500/10 blur-xl" />
            <Image
              src="/images/aishwarya_prof.webp"
              alt="Aishwarya Tupe"
              width={420}
              height={420}
              className="relative rounded-3xl object-cover shadow-2xl ring-1 ring-white/10 hover:ring-blue-400/30 transition-all duration-300"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/AD/2Q=="
            />
          </div>
        </div>

      </div>
    </section>
  );
}

