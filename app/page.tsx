import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <Hero />
      
      {/* Quick Links Section */}
      <section className="py-12">
        <h2 className="sr-only">Quick Navigation</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <Link href="/experience" className="card p-6 hover:shadow-2xl transition-all group">
            <h3 className="text-lg font-semibold group-hover:text-blue-400 transition mb-2">📋 Experience</h3>
            <p className="text-slate-200 text-sm">6+ roles across full-stack development and AI/LLM engineering</p>
          </Link>

          <Link href="/mission" className="card p-6 hover:shadow-2xl transition-all group">
            <h3 className="text-lg font-semibold group-hover:text-blue-400 transition mb-2">🎯 Mission & Values</h3>
            <p className="text-slate-200 text-sm">Building healthcare tech for equitable access</p>
          </Link>

          <Link href="/about" className="card p-6 hover:shadow-2xl transition-all group">
            <h3 className="text-lg font-semibold group-hover:text-blue-400 transition mb-2">👤 About Me</h3>
            <p className="text-slate-200 text-sm">My background, skills, and interests</p>
          </Link>
        </div>
      </section>

      {/* What I Build */}
      <section className="py-12 space-y-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="text-2xl font-bold">What I Build</h2>
          <div className="flex gap-3">
            <Link href="/mission" className="btn text-sm">My approach</Link>
            <Link href="#contact" className="inline-flex items-center rounded-2xl px-4 py-2 border border-white/15 hover:border-white/30 transition text-sm">Contact</Link>
          </div>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            { icon: "⚡", title: "Full-Stack Apps", desc: "End-to-end, production-ready, deployed.", stack: "React · Next.js · Node.js · PostgreSQL" },
            { icon: "🤖", title: "AI / LLM Pipelines", desc: "RAG systems built for accuracy at scale.", stack: "OpenAI · LangChain · RAG · FastAPI" },
            { icon: "🔧", title: "API & Backend Systems", desc: "High-traffic APIs with auth, migrations, and observability.", stack: "REST · OAuth2 · CI/CD · MongoDB" },
          ].map(({ icon, title, desc, stack }) => (
            <div key={title} className="border border-white/10 rounded-xl p-4 hover:border-white/20 transition space-y-2">
              <p className="text-xl">{icon}</p>
              <p className="font-semibold text-sm text-white">{title}</p>
              <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              <p className="text-slate-600 text-xs">{stack}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="py-16 space-y-8">
        <div>
          <h2 className="text-3xl font-bold">Highlighted Projects</h2>
          <p className="text-slate-200 mt-2 text-sm">Production-grade systems built with clear trade-offs, measurable outcomes, and full deployment pipelines.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <ProjectCard
            title="Zealthy Mini EMR – Full-Stack Healthcare Management System"
            tags={["React", "Node.js", "PostgreSQL", "OAuth2", "RBAC", "REST API"]}
            description="Production-ready Electronic Medical Records system with role-based access control for patients and administrators. Features patient registration, appointment scheduling, prescription management, and medical history tracking with secure authentication and responsive UI."
            deepDive={{
              problem: "Healthcare data for patients and admins needed strict access separation, but a single-role API exposed all records to any authenticated user.",
              solution: "Implemented RBAC at the middleware layer with JWT claims, separating patient and admin scopes. Designed normalized PostgreSQL schemas to isolate sensitive medical records and enforce data integrity via foreign key constraints.",
              result: "Zero unauthorized cross-role data access in all test scenarios. Admin workflows reduced from multi-step manual processes to single-action dashboard operations."
            }}
            deployment="Vercel (frontend) + Railway (Node.js API + PostgreSQL). CI via GitHub Actions with build and lint checks on every PR."
            repo="https://github.com/ash-1703/mini-emr"
          />
          <ProjectCard
            title="Insight Agent – Domain-Specific RAG System"
            tags={["LangChain", "OpenAI", "Pinecone", "FastAPI", "RAG", "LLM Evaluation"]}
            description="Retrieval-augmented LLM system with LangChain and OpenAI embeddings to answer domain-specific questions grounded in retrieved documents. Includes ingestion pipelines for PDF and HTML, semantic search over 1,000+ embedded chunks, and a custom evaluation harness."
            deepDive={{
              problem: "Base LLM responses hallucinated frequently on domain-specific documents, with no way to trace which source supported an answer.",
              solution: "Built a hybrid retrieval pipeline: vector similarity search (Pinecone) re-ranked with a metadata filter to surface only verified chunks. Designed a schema-driven prompt template that forced the model to cite retrieved context before answering.",
              result: "Reduced unsupported answers by ~40% on a 200-question evaluation set. LLM-graded factual precision improved from 61% to 87% across test batches."
            }}
            deployment="Netlify (React frontend) + FastAPI on Render. Evaluation pipeline runs as a standalone Python script with JSON report output."
            link="https://insight-agent.netlify.app/"
            repo="https://github.com/ash-1703/insight-agent"
          />
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-semibold">Let's build something</h2>
          <p className="text-slate-200 mt-2">
            Open to full-time roles and collaborations. Reach out for AI pipelines, full-stack apps, or backend systems.
          </p>
          <div className="mt-6 flex justify-center flex-wrap gap-4">
            <a className="btn" href="mailto:aishwaryasambhajitupe@gmail.com">Email Me</a>
            <a
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/15 hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/aishwarya-tupe/"
            >
              LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 border border-white/15 hover:border-white/30 transition"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ash-1703"
            >
              GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20 transition text-blue-200"
              target="_blank"
              rel="noreferrer"
              href="https://drive.google.com/uc?export=download&id=173XjBp4puh6NLXjMs3UwS3VgA_Al8Y-z"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
