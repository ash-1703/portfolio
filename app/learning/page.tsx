import Link from "next/link";

export default function LearningPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Daily <span className="gradient-text">Learning</span>
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mb-8">
          Tracking my ongoing growth as an engineer. Daily logs on system design, algorithms, architecture, and the craft of building better software.
        </p>
      </section>

      {/* Learning Tracks */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🏗️",
              title: "System Design & Architecture",
              desc: "Distributed systems, scalability patterns, database design, and production architecture decisions.",
              href: "/learning/human-centered-ai-healthcare",
            },
            {
              icon: "🧩",
              title: "DSA & LeetCode",
              desc: "Algorithm patterns, data structures, problem-solving strategies, and interview prep.",
              href: "/learning/technology",
            },
            {
              icon: "⚙️",
              title: "Engineering Craft",
              desc: "Code quality, refactoring, testing, CI/CD, and becoming a sharper, faster developer.",
              href: "/learning/engineering-craft",
            },
            {
              icon: "🤖",
              title: "AI & LLM Engineering",
              desc: "Prompt engineering, RAG pipelines, model evaluation, and applying AI in production systems.",
              href: "/learning/ai-llm",
            },
          ].map(({ icon, title, desc, href }) => (
            <Link
              key={title}
              href={href}
              className="group border border-white/10 rounded-xl p-6 hover:border-blue-400/40 transition-all hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="text-3xl mb-3">{icon}</div>
              <h2 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                {title}
              </h2>
              <p className="text-slate-400 text-sm mb-4">{desc}</p>
              <div className="flex items-center text-blue-400 text-sm font-medium">
                View log
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

