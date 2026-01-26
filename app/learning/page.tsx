import Link from "next/link";

export default function LearningPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Daily <span className="gradient-text">Learning</span>
        </h1>
        <p className="text-lg text-slate-200 max-w-3xl mb-8">
          Tracking my ongoing exploration at the intersection of human-centered AI and healthcare. 
          These daily logs capture insights, connections, and reflections as I build interdisciplinary expertise.
        </p>
      </section>

      {/* Two Learning Tracks */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Human-Centered AI in Healthcare Track */}
          <Link 
            href="/learning/human-centered-ai-healthcare"
            className="group border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="text-4xl mb-4">🏥</div>
            <h2 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
              Human-Centered AI in Healthcare
            </h2>
            <p className="text-slate-200 mb-4">
              Empathetic AI design, ethical development, clinical integration, and patient-centered applications
            </p>
            <div className="flex items-center text-cyan-400 text-sm font-medium">
              View learning log
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          {/* Technology Track */}
          <Link 
            href="/learning/technology"
            className="group border border-white/10 rounded-lg p-8 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
          >
            <div className="text-4xl mb-4">💻</div>
            <h2 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
              Technology & AI
            </h2>
            <p className="text-slate-200 mb-4">
              Machine learning, AI systems, healthcare technology, and responsible AI development
            </p>
            <div className="flex items-center text-cyan-400 text-sm font-medium">
              View learning log
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>

      </section>
    </main>
  );
}
