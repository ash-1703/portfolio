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
          I&apos;m Aishwarya Tupe, a Software Engineer with 2+ years of experience specializing in Full-Stack Development and Generative AI/LLM Engineering. I architect end-to-end products, from React/Next.js frontends and Node.js/FastAPI backends to cloud deployments, and build AI pipelines (RAG systems, LLM evaluation, prompt engineering frameworks) that deliver measurable results in production.
        </p>
        <p className="text-slate-200">
          I&apos;ve migrated legacy PHP architectures to modern React/Node.js stacks, optimized high-traffic databases for 5,000+ concurrent records, and built AI pipelines that generate 300+ documents with 95%+ accuracy. I bring both the engineering depth to build it and the communication skills to ship it collaboratively.
        </p>

        {/* Skills */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-blue-400">Skills</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Frontend</h3>
              <p className="text-slate-200 text-sm">React, Next.js, React Native, TypeScript, AngularJS, HTML, CSS, Tailwind</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Backend &amp; Databases</h3>
              <p className="text-slate-200 text-sm">Node.js, Express.js, FastAPI, Flask, REST APIs, PostgreSQL, MySQL, MongoDB</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">AI / LLM Engineering</h3>
              <p className="text-slate-200 text-sm">RAG Systems, OpenAI, Gemini, LangChain, Prompt Engineering, LLM Evaluation, AI Agents, Jinja2</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Languages</h3>
              <p className="text-slate-200 text-sm">JavaScript, TypeScript, Python, SQL, PHP</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Tools &amp; Infrastructure</h3>
              <p className="text-slate-200 text-sm">AWS, Docker, Git, CI/CD, Jenkins, OAuth2, Zod</p>
            </div>
            <div className="card p-4 space-y-2">
              <h3 className="font-semibold">Spoken Languages</h3>
              <p className="text-slate-200 text-sm">English (Fluent), Hindi (Native), Marathi (Native)</p>
            </div>
          </div>
        </div>

        {/* How I Ship */}
        <div className="space-y-4 pt-2">
          <h2 className="text-2xl font-bold text-blue-400">How I Ship</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="card p-4 space-y-1">
              <p className="font-semibold text-sm">Testing</p>
              <p className="text-slate-200 text-xs leading-relaxed">Unit and integration tests with Jest and Pytest. Custom LLM evaluation harnesses with JSON score reports for AI pipelines.</p>
            </div>
            <div className="card p-4 space-y-1">
              <p className="font-semibold text-sm">CI/CD & Deployment</p>
              <p className="text-slate-200 text-xs leading-relaxed">GitHub Actions for build, lint, and test checks on every PR. Deployments to Vercel, Railway, Render, and AWS.</p>
            </div>
            <div className="card p-4 space-y-1">
              <p className="font-semibold text-sm">Security & Scalability</p>
              <p className="text-slate-200 text-xs leading-relaxed">OAuth2, JWT, Zod validation, RBAC middleware, and schema-level data integrity constraints for production-safe APIs.</p>
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
