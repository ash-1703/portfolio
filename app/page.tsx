import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Link from "next/link";

const experience = [
  {role:"Software Development Engineer",company:"Imperial Platforms Inc.",period:"Sep 2025 – May 2026",description:"Built EdTech product features using React Native, Next.js, Node.js, and MongoDB."},
  {role:"Software Developer",company:"Telgoo5 Inc.",period:"Mar – Aug 2025",description:"Developed telecom order-management workflows, role-based access, search, and dashboards with PHP and MySQL."},
  {role:"Software Engineer Intern",company:"Interview Buddies",period:"Nov 2024 – Mar 2025",description:"Built a Python-based AI resume generation pipeline using Gemini, Jinja2, and LaTeX."},
  {role:"AI Researcher",company:"University of Texas at Arlington",period:"2024 – 2025",description:"Researched clinical language-model evaluation, summarization, and responsible AI."},
];
const projects = [
{number:"01",title:"Zealthy Mini EMR",category:"HEALTHCARE / FULL-STACK",kind:"emr" as const,description:"A patient and administrator portal for appointments, prescriptions and medical records.",outcome:"Patient and admin views for everyday care workflows.",tags:["Next.js","TypeScript","Prisma","PostgreSQL"],repo:"https://github.com/ash-1703/mini-emr",demo:"https://zealthy-mini-emr.netlify.app/"},
{number:"02",title:"InsightAgent",category:"APPLIED AI / RAG",kind:"rag" as const,description:"A retrieval-augmented assistant grounding responses in supporting source documents.",outcome:"Document retrieval, grounding and evaluation.",tags:["Python","LangChain","RAG","LLM Evaluation"]},
{number:"03",title:"AutoAnnotate",category:"AI / DATA",kind:"annotate" as const,description:"An AI-assisted dataset annotation workflow with human review.",outcome:"AI pre-labeling paired with quality control.",tags:["React","FastAPI","MongoDB","AI"]}
];

export default function Page() {
  return <div>
    <Hero />
    <section id="experience" className="section-line scroll-mt-24 border-t py-16 sm:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div><p className="section-eyebrow mb-3">02 / WHERE I'VE BUILT</p><h2 className="section-heading">Experience</h2><p className="muted-text mt-3 text-sm">Real products, real challenges, and plenty learned along the way.</p></div>
        <Link href="/experience" className="accent-text text-sm font-semibold hover:underline">More details ↗</Link>
      </div>
      <div className="timeline relative border-l pl-6 sm:pl-9">
        {experience.map(job=><article key={job.company} className="relative mb-9 last:mb-0">
          <span className="timeline-marker absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 sm:-left-[43px]"/>
          <div className="flex flex-wrap justify-between gap-2">
            <div><h3 className="text-lg font-semibold">{job.role}</h3><p className="accent-text mt-1 text-sm font-medium">{job.company}</p></div>
            <span className="muted-text text-xs">{job.period}</span>
          </div>
          <p className="muted-text mt-2 max-w-2xl text-sm leading-7">{job.description}</p>
        </article>)}
      </div>
    </section>
    <section id="projects" className="section-line scroll-mt-24 border-t py-16 sm:py-20">
      <p className="section-eyebrow mb-3">03 / SELECTED WORK</p>
      <h2 className="section-heading">Projects worth exploring.</h2>
      <p className="muted-text mt-3 text-sm">A few examples of how I turn problems into software.</p>
      <div className="mt-9 grid gap-6 lg:grid-cols-2">
        {projects.map((project,i)=><ProjectShowcase key={project.number} project={project} featured={i===0}/>)}
      </div>
    </section>
    <section id="education" className="section-line scroll-mt-24 border-t py-16 sm:py-20">
      <p className="section-eyebrow mb-3">04 / MY FOUNDATION</p><h2 className="section-heading">Education.</h2>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        <article className="card education-card p-7"><p className="muted-text font-mono text-xs">2022 — 2024 · ARLINGTON, TX</p><h3 className="mt-4 text-xl font-semibold">Master&apos;s in Computer Science</h3><p className="accent-text mt-2 text-sm font-medium">University of Texas at Arlington</p><p className="muted-text mt-4 text-sm">GPA 3.83 / 4.0</p></article>
        <article className="card education-card p-7"><p className="muted-text font-mono text-xs">2018 — 2022 · MUMBAI, INDIA</p><h3 className="mt-4 text-xl font-semibold">Bachelor&apos;s in Computer Engineering</h3><p className="accent-text mt-2 text-sm font-medium">University of Mumbai</p><p className="muted-text mt-4 text-sm">GPA 8.39 / 10</p></article>
      </div>
    </section>
    <section id="highlights" className="section-line scroll-mt-24 border-t py-16 sm:py-20">
      <p className="section-eyebrow mb-3">05 / BEYOND THE CODE</p><h2 className="section-heading">Professional Highlights.</h2>
      <p className="muted-text mt-3 max-w-2xl text-sm leading-7">Programs, teaching and community experiences that have shaped my work.</p>
      <div className="highlights-grid mt-9 grid gap-5 md:grid-cols-2">
        <article className="highlight-card"><span className="highlight-icon">✦</span><p className="highlight-date">OCT 2026 — PRESENT</p><h3>Google DigiPivot 2026</h3><p className="highlight-org">Selected Participant</p><p className="muted-text text-sm leading-7">Google-sponsored professional development, with IIM Calcutta as academic partner and Accenture LearnVantage as implementation partner.</p><a href="https://talentsprint.com/digipivot-google/" target="_blank" rel="noopener noreferrer" className="accent-text mt-4 inline-block text-sm font-semibold">About the program ↗</a></article>
        <article className="highlight-card"><span className="highlight-icon">⌘</span><p className="highlight-date">AUG 2023 — MAY 2024</p><h3>Graduate Teaching Assistant</h3><p className="highlight-org">Software Design Patterns · UT Arlington</p><p className="muted-text text-sm leading-7">Supported graduate teaching, mentored students, and explained object-oriented design patterns and SOLID principles.</p></article>
        <article className="highlight-card"><span className="highlight-icon">✿</span><p className="highlight-date">TECH COMMUNITY</p><h3>Grace Hopper Celebration</h3><p className="highlight-org">Orlando &amp; Philadelphia</p><p className="muted-text text-sm leading-7">Attended two celebrations and connected with the broader women-in-computing community.</p></article>
        <article className="highlight-card"><span className="highlight-icon">{"</>"}</span><p className="highlight-date">AUG 2021 — AUG 2022</p><h3>Google Developer Student Clubs</h3><p className="highlight-org">Technical Team Member</p><p className="muted-text text-sm leading-7">Supported workshops, study jams, technical events, and hands-on developer learning.</p></article>
      </div>
    </section>
    <section id="contact" className="section-line scroll-mt-24 border-t py-16 sm:py-20">
      <div className="card p-8 text-center sm:p-12">
        <p className="section-eyebrow">06 / LET'S CONNECT</p>
        <h2 className="section-heading mt-4">Let's build something meaningful.</h2>
        <p className="muted-text mx-auto mt-4 max-w-xl text-sm leading-7">Open to software engineering roles and collaborations. Especially curious about technology that makes a positive impact.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3"><a className="btn" href="mailto:aishwaryasambhajitupe@gmail.com">Say hello ↗</a><a className="btn-outline" href="https://www.linkedin.com/in/aishwarya-tupe/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="btn-outline" href="https://github.com/ash-1703" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
      </div>
    </section>
  </div>;
}
