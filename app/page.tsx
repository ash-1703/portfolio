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
            <p className="text-slate-200 text-sm">6+ roles across AI, healthcare, and full-stack development</p>
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

      <section id="projects" className="py-16 space-y-8">
        <h2 className="text-3xl font-bold">Highlighted Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <ProjectCard
            title="Zealthy Mini EMR – Full-Stack Healthcare Management System"
            tags={["React", "Node.js", "PostgreSQL", "Healthcare"]}
            description="Production-ready Electronic Medical Records system with role-based access control for patients and administrators. Features include patient registration, appointment scheduling, prescription management, and medical history tracking. Implemented secure authentication, HIPAA-compliant data handling, and responsive UI for both patient portal and admin dashboard."
            link="https://github.com/ash-1703/mini-emr"
          />
          <ProjectCard
            title="Insight Agent – Domain-Specific RAG System"
            tags={["LangChain", "OpenAI", "Pinecone", "RAG"]}
            description="Developed a retrieval-augmented LLM system with LangChain and OpenAI embeddings to answer domain-specific questions grounded in retrieved documents. Created ingestion pipelines for PDF and HTML documents, embedding 1,000+ chunks into Pinecone for semantic search. Evaluated factual precision and hallucination rates on 200+ Q&A pairs using custom prompts and LLM-based grading, reducing incorrect or unsupported answers per test batch."
            link="https://insight-agent.netlify.app/"
          />
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="card p-8 text-center">
          <h2 className="text-2xl font-semibold">Let's build something</h2>
          <p className="text-slate-200 mt-2">
            I'm open to full‑time roles and collaborations. Reach out for AI agents, full‑stack apps, or data‑centric tools.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a className="btn" href="mailto:aishtupe1703@gmail.com">Email</a>
            <a className="inline-flex items-center rounded-2xl px-4 py-2 border border-white/15 hover:border-white/30 transition" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/aishwarya-tupe/">LinkedIn</a>
          </div>
        </div>
      </section>
    </div>
  );
}
