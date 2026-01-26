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
          I'm Aishwarya Tupe, a full-stack engineer pursuing research in human-centered AI for healthcare. 
          I build practical systems, from EMR applications to clinical workflow agents, while exploring how to 
          design AI that clinicians trust, patients understand, and healthcare systems can actually adopt.
        </p>
        <p className="text-slate-200">
          My work spans the technical and the human: implementing RAG systems and evaluation pipelines, 
          while investigating questions around explainability, fairness, and real-world clinical integration. 
          I'm preparing for PhD work by systematically building knowledge across design, ethics, and 
          healthcare AI implementation.
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
