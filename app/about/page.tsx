import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="py-16 grid md:grid-cols-[1fr,1.3fr] gap-10 items-start">
      <div className="flex justify-center md:justify-start">
        <Image
          src="/images/aishwarya_prof.webp"
          alt="Aishwarya Tupe portrait"
          width={400}
          height={400}
          className="rounded-3xl object-cover shadow-2xl ring-1 ring-white/10"
        />
      </div>
      <div className="space-y-5">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-slate-200">
          I'm Aishwarya Tupe, a full‑stack engineer focused on human‑centered AI for healthcare.
          I build end‑to‑end products (frontend, backend, data, and cloud) and I integrate AI where it actually helps: RAG search, lightweight agents, and evaluation that keeps outputs grounded.
        </p>
        <p className="text-slate-200">
          What I’m most proud of is bridging the gap between technical and non‑technical teams.
          I enjoy running workshops, building prompt libraries/playbooks, and translating AI capabilities into clear, safe workflows people can use every day, especially for high‑stakes domains like healthcare.
        </p>

        {/* Skills */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Full-Stack Development</h3>
              <p className="text-slate-200 text-sm">React, Next.js, Node.js, TypeScript, PostgreSQL, RESTful APIs, Healthcare Systems</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">AI & Machine Learning</h3>
              <p className="text-slate-200 text-sm">RAG Systems, LangChain, OpenAI, Prompt Engineering, LLM Evaluation, AI Agents</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Healthcare AI</h3>
              <p className="text-slate-200 text-sm">EMR Integration, Clinical Workflows, HIPAA Compliance, Patient Data Management</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Human-Centered Design</h3>
              <p className="text-slate-200 text-sm">Explainability, User Research, Accessibility, Trust & Transparency in AI</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Languages & Tools</h3>
              <p className="text-slate-200 text-sm">Python, JavaScript, TypeScript, Java, SQL, Git, Docker, Cloud Deployment</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Research Skills</h3>
              <p className="text-slate-200 text-sm">Literature Review, Experimental Design, Ethics & Fairness, Technical Writing</p>
            </div>
            <div className="card p-4 space-y-2 md:col-span-2">
              <h3 className="font-semibold">Spoken Languages</h3>
              <p className="text-slate-200 text-sm">English (Fluent), Hindi (Native / New Delhi standard), Marathi (Native / Mumbai; Devanagari & Romanized)</p>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="space-y-3 pt-6">
          <h2 className="text-2xl font-bold text-blue-400">Education</h2>
          <div className="card p-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <p className="font-semibold">University of Texas at Arlington</p>
                <p className="text-slate-200 text-sm">Master of Science in Computer Science (GPA: 3.83/4)</p>
              </div>
              <p className="text-slate-400 text-sm">Aug 2022 – May 2024</p>
            </div>
          </div>
          <div className="card p-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div>
                <p className="font-semibold">University of Mumbai</p>
                <p className="text-slate-200 text-sm">Bachelor of Engineering in Computer Engineering (GPA: 3.36/4)</p>
              </div>
              <p className="text-slate-400 text-sm">Aug 2018 – May 2022</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
