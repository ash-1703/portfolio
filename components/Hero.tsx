import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative grid items-center gap-10 py-16 sm:py-24 md:grid-cols-[1.25fr_0.75fr]">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-hero-gradient opacity-10 blur-3xl" />
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-200">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open to software engineering opportunities
        </span>
        <div className="space-y-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
            Software Engineer · Full-Stack & Applied AI
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m <span className="text-blue-400">Aishwarya.</span>
          </h1>
          <p className="max-w-xl text-xl leading-relaxed text-slate-200 sm:text-2xl">
            I build practical software, from full-stack applications to AI-powered systems.
          </p>
        </div>
        <p className="max-w-xl text-base leading-relaxed text-slate-400">
          MS in Computer Science from UT Arlington. Experience building products across EdTech,
          telecom, and AI. Especially interested in technology that improves healthcare.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/#experience" className="btn text-sm">View Experience</Link>
          <Link
            href="/#projects"
            className="inline-flex items-center rounded-2xl border border-white/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/40"
          >
            Explore Projects
          </Link>
          <a
            href="/api/resume"
            className="inline-flex items-center rounded-2xl px-4 py-2 text-sm font-medium text-blue-300 transition hover:text-white"
          >
            Download Resume ↗
          </a>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
          <a className="hover:text-white" href="https://github.com/ash-1703" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          <a className="hover:text-white" href="https://www.linkedin.com/in/aishwarya-tupe/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          <a className="hover:text-white" href="mailto:aishwaryasambhajitupe@gmail.com">Email ↗</a>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[340px] md:ml-auto">
        <div className="relative">
          <div className="absolute -inset-2 rounded-3xl bg-blue-500/15 blur-2xl" />
          <Image
            src="/images/aishwarya_prof.webp"
            alt="Portrait of Aishwarya Tupe"
            width={420}
            height={420}
            className="relative aspect-square w-full rounded-3xl object-cover ring-1 ring-white/15"
            priority
            sizes="(max-width: 768px) 340px, 360px"
          />
        </div>
      </div>
    </section>
  );
}
