import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

const experience = [
  { role: "Software Development Engineer", company: "Imperial Platforms Inc.", period: "Sep 2025 – May 2026", description: "Built EdTech product features using React Native, Next.js, Node.js, and MongoDB." },
  { role: "Software Developer", company: "Telgoo5 Inc.", period: "Mar – Aug 2025", description: "Developed telecom order-management workflows, RBAC, search, and data dashboards using PHP and MySQL." },
  { role: "Software Engineer Intern", company: "Interview Buddies", period: "Nov 2024 – Mar 2025", description: "Built a Python-based AI resume generation pipeline using Gemini, Jinja2, and LaTeX." },
  { role: "AI Researcher", company: "University of Texas at Arlington", period: "2024 – 2025", description: "Researched clinical-language-model evaluation, summarization, and responsible AI." },
];

export default function Page() {
  return (
    <div>
      <Hero />

      <section id="experience" className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Career</p>
            <h2 className="text-3xl font-bold">Experience</h2>
            <p className="mt-2 text-sm text-slate-400">The work behind the titles — visible at a glance.</p>
          </div>
          <Link href="/experience" className="text-sm font-medium text-blue-300 hover:text-blue-200">Full experience ↗</Link>
        </div>
        <div className="relative border-l border-blue-400/30 pl-6 sm:pl-8">
          {experience.map((job) => (
            <article key={job.company} className="relative mb-8 last:mb-0">
              <span className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-blue-400 bg-[#0b1220] sm:-left-[39px]" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <p className="text-sm font-medium text-blue-300">{job.company}</p>
                </div>
                <span className="text-xs text-slate-500">{job.period}</span>
              </div>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-300">{job.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Selected work</p>
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-400">A few systems that show how I design, build, and ship software.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <ProjectCard
            title="Zealthy Mini EMR"
            tags={["Next.js", "TypeScript", "Prisma", "PostgreSQL"]}
            description="A mini electronic medical records platform with separate patient and admin experiences, appointment scheduling, and prescription management."
            link="https://zealthy-mini-emr.netlify.app/"
            repo="https://github.com/ash-1703/mini-emr"
          />
          <ProjectCard
            title="InsightAgent — Retrieval-Augmented AI"
            tags={["Python", "LangChain", "RAG", "LLM Evaluation"]}
            description="An AI question-answering system designed to ground responses in retrieved documents rather than unsupported model output."
          />
          <ProjectCard
            title="AutoAnnotate"
            tags={["React", "FastAPI", "MongoDB", "AI"]}
            description="A data-annotation workflow that uses AI-assisted pre-labeling and human review to speed up dataset preparation."
          />
        </div>
      </section>

      <section id="education" className="scroll-mt-24 border-t border-white/10 py-14 sm:py-20">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Education & growth</p>
        <h2 className="text-3xl font-bold">Education & Professional Development</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article className="card p-6">
            <p className="text-xs text-slate-400">2022 – 2024</p>
            <h3 className="mt-2 text-lg font-semibold">MS, Computer & Information Sciences</h3>
            <p className="mt-1 text-sm text-blue-300">University of Texas at Arlington</p>
            <p className="mt-3 text-sm text-slate-400">GPA 3.83/4.0</p>
          </article>
          <article className="card p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400">2026 – 2027</span>
              <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-2.5 py-1 text-xs text-blue-200">In progress</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold">Google DigiPivot 2026</h3>
            <p className="mt-1 text-sm text-blue-300">Selected Participant</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">A Google-sponsored learning initiative with IIM Calcutta as academic partner and Accenture LearnVantage as implementation partner, covering AI and digital skills.</p>
            <a href="https://talentsprint.com/digipivot-google/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-sm text-blue-300 hover:text-blue-200">Program information ↗</a>
          </article>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/10 py-16">
        <div className="card space-y-4 p-8 text-center sm:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">Let's connect</p>
          <h2 className="text-3xl font-bold">Interested in building something together?</h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-400">I'm open to software engineering opportunities, especially in product teams working on useful, meaningful technology.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a className="btn" href="mailto:aishwaryasambhajitupe@gmail.com">Email Me ↗</a>
            <a className="inline-flex items-center rounded-2xl border border-white/20 px-4 py-2 text-sm hover:border-white/40" href="https://www.linkedin.com/in/aishwarya-tupe/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="inline-flex items-center rounded-2xl border border-white/20 px-4 py-2 text-sm hover:border-white/40" href="https://github.com/ash-1703" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>
        </div>
      </section>
    </div>
  );
}
