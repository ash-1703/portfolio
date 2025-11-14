import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-16 grid md:grid-cols-[1fr,1.3fr] gap-10 items-start">
      {/* <div className="card p-2"> */}
        <Image
          src="/portfolio/images/aishwarya.jpg"
          alt="Aishwarya Tupe portrait"
          width={600}
          height={600}
          className="rounded-2xl object-cover"
        />
      {/* </div> */}
      <div className="space-y-5">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-slate-300">
          I’m Aishwarya Tupe, a full‑stack developer with a Master’s in Computer Science (UT Arlington),
          focused on building reliable, fast, and human‑centered products. My toolkit includes Next.js,
          React, TypeScript, Python/FastAPI, Prisma/Postgres, and AWS/Docker.
        </p>
        <p className="text-slate-300">
          Recently I’ve built agentic workflows with n8n and LLMs to automate email triage and document Q&A,
          a mini‑EMR and patient portal, and an active‑learning annotation app used to improve dataset quality.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Next.js", "React", "TypeScript", "Tailwind", "Python", "FastAPI", "Prisma", "Postgres", "AWS", "n8n", "Agents"].map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
