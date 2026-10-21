import Hero from "@/components/Hero";
import Link from "next/link";

const experience = [
  {role:"Software Development Engineer",company:"Imperial Platforms Inc.",period:"Sep 2025 – May 2026",description:"Built EdTech product features using React Native, Next.js, Node.js, and MongoDB."},
  {role:"Software Developer",company:"Telgoo5 Inc.",period:"Mar – Aug 2025",description:"Developed telecom order-management workflows, role-based access, search, and dashboards with PHP and MySQL."},
  {role:"Software Engineer Intern",company:"Interview Buddies",period:"Nov 2024 – Mar 2025",description:"Built a Python-based AI resume generation pipeline using Gemini, Jinja2, and LaTeX."},
  {role:"AI Researcher",company:"University of Texas at Arlington",period:"2024 – 2025",description:"Researched clinical language-model evaluation, summarization, and responsible AI."},
];
const projects = [
  {num:"01",icon:"✳",title:"Zealthy Mini EMR",type:"HEALTHCARE / FULL-STACK",description:"A patient and administrator portal for appointments and prescription management.",tags:["Next.js","TypeScript","Prisma","PostgreSQL"],repo:"https://github.com/ash-1703/mini-emr",demo:"https://zealthy-mini-emr.netlify.app/"},
  {num:"02",icon:"◇",title:"InsightAgent",type:"APPLIED AI / RAG",description:"Retrieval-augmented question answering designed to ground model responses in source material.",tags:["Python","LangChain","RAG","LLM Evaluation"],repo:null,demo:null},
  {num:"03",icon:"⌘",title:"AutoAnnotate",type:"AI / DATA WORKFLOWS",description:"An AI-assisted annotation workflow with pre-labeling and human review.",tags:["React","FastAPI","MongoDB","AI"],repo:null,demo:null},
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
      <div className="mt-9 grid gap-5 md:grid-cols-3">
        {projects.map(project=><article className="project-tile flex flex-col" key={project.num}>
          <div className="mb-7 flex items-center justify-between"><span className="project-icon" aria-hidden="true">{project.icon}</span><span className="muted-text font-mono text-xs">/{project.num}</span></div>
          <p className="project-label">{project.type}</p>
          <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
          <p className="muted-text mt-3 flex-1 text-sm leading-7">{project.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">{project.tags.map(tag=><span key={tag} className="project-tag">{tag}</span>)}</div>
          {(project.repo||project.demo)&&<div className="mt-6 flex gap-4 text-sm font-medium">
            {project.demo&&<a className="accent-text" href={project.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
            {project.repo&&<a href={project.repo} target="_blank" rel="noopener noreferrer">Code ↗</a>}
          </div>}
        </article>)}
      </div>
    </section>
    <section id="education" className="section-line scroll-mt-24 border-t py-16 sm:py-20">
      <p className="section-eyebrow mb-3">04 / LEARNING, ALWAYS</p><h2 className="section-heading">Education & growth.</h2>
      <div className="mt-9 grid gap-5 md:grid-cols-2">
        <article className="card p-7"><p className="muted-text font-mono text-xs">2022 — 2024</p><h3 className="mt-4 text-xl font-semibold">MS, Computer & Information Sciences</h3><p className="accent-text mt-2 text-sm font-medium">University of Texas at Arlington</p><p className="muted-text mt-4 text-sm">GPA 3.83 / 4.0</p></article>
        <article className="card p-7"><div className="flex flex-wrap justify-between gap-2"><p className="muted-text font-mono text-xs">2026 — 2027</p><span className="project-tag">In progress</span></div><h3 className="mt-4 text-xl font-semibold">Google DigiPivot 2026</h3><p className="accent-text mt-2 text-sm font-medium">Selected Participant</p><p className="muted-text mt-4 text-sm leading-7">Google-sponsored professional development with IIM Calcutta as academic partner and Accenture LearnVantage as implementation partner.</p><a className="accent-text mt-5 inline-block text-sm font-semibold" href="https://talentsprint.com/digipivot-google/" target="_blank" rel="noopener noreferrer">Program information ↗</a></article>
      </div>
    </section>
    <section id="contact" className="section-line scroll-mt-24 border-t py-16 sm:py-20">
      <div className="card p-8 text-center sm:p-12">
        <p className="section-eyebrow">05 / LET'S CONNECT</p>
        <h2 className="section-heading mt-4">Let's build something meaningful.</h2>
        <p className="muted-text mx-auto mt-4 max-w-xl text-sm leading-7">Open to software engineering roles and collaborations. Especially curious about technology that makes a positive impact.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3"><a className="btn" href="mailto:aishwaryasambhajitupe@gmail.com">Say hello ↗</a><a className="btn-outline" href="https://www.linkedin.com/in/aishwarya-tupe/" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a className="btn-outline" href="https://github.com/ash-1703" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div>
      </div>
    </section>
  </div>;
}
