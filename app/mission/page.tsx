import Link from "next/link";

export default function MissionPage() {
  return (
    <div className="py-12 space-y-16 max-w-4xl mx-auto">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Mission & Values</h1>
        <p className="text-lg text-slate-200">
          What drives me and how I approach building products
        </p>
      </section>

      {/* Mission-Driven Work */}
      <section className="card p-8 space-y-6">
        <h2 className="text-3xl font-bold text-blue-400">Mission-Driven Work</h2>
        <p className="text-lg text-slate-200 leading-relaxed">
          I'm passionate about building technology that creates{" "}
          <span className="text-white font-semibold">equitable access to healthcare</span>. 
          My long-term goal is to contribute to platforms that genuinely help people — 
          organ donation networks, insurance accessibility tools, crowdfunding for medical needs, 
          and systems that connect underserved communities with quality care at reasonable costs.
        </p>
        <p className="text-lg text-slate-200 leading-relaxed">
          I want to work where{" "}
          <span className="text-blue-400 font-semibold">engineering excellence meets social impact</span>.
        </p>
      </section>

      {/* Core Principles */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-blue-400">Core Principles</h2>
        
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Start with the user</h3>
            <p className="text-slate-200">
              Define the job-to-be-done and success metrics before code.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Default to simple</h3>
            <p className="text-slate-200">
              If a diagram needs three boxes, don't draw five.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Ship in slices</h3>
            <p className="text-slate-200">
              Thin verticals over wide layers; learn fast.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Measure impact</h3>
            <p className="text-slate-200">
              Perf, accuracy, cycle time — or it didn't happen.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Kind candor</h3>
            <p className="text-slate-200">
              Direct, respectful communication; write it down.
            </p>
          </div>

          <div className="card p-6 space-y-3">
            <h3 className="text-xl font-semibold text-white">Own the outcome</h3>
            <p className="text-slate-200">
              Done = shipped, observed, and useful.
            </p>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="card p-8 space-y-6 border-blue-400/30">
        <h2 className="text-3xl font-bold text-blue-400">Research Interests</h2>
        <p className="text-lg text-slate-200 leading-relaxed">
          I'm pursuing research at the intersection of AI and healthcare, focusing on how to design 
          systems that are human-centered. My interests span:
        </p>
        
        <div className="space-y-4">
          <div className="border-l-2 border-blue-400/50 pl-4">
            <h3 className="text-lg font-semibold text-white mb-2">🎨 Design & User Experience</h3>
            <p className="text-slate-200">
              How do we create AI tools that clinicians trust and patients understand? 
              Exploring explainability, transparency, and usability in clinical workflows.
            </p>
          </div>

          <div className="border-l-2 border-blue-400/50 pl-4">
            <h3 className="text-lg font-semibold text-white mb-2">⚖️ Ethics, Fairness & Equity</h3>
            <p className="text-slate-200">
              Investigating algorithmic bias, health equity for marginalized populations, 
              and responsible AI development that doesn't perpetuate existing healthcare disparities.
            </p>
          </div>

          <div className="border-l-2 border-blue-400/50 pl-4">
            <h3 className="text-lg font-semibold text-white mb-2">🏥 Clinical Integration & Adoption</h3>
            <p className="text-slate-200">
              Bridging the gap between research and practice. How do we build AI systems 
              that fit into real clinical workflows and are actually adopted by healthcare providers?
            </p>
          </div>

          <div className="border-l-2 border-blue-400/50 pl-4">
            <h3 className="text-lg font-semibold text-white mb-2">🩺 Patient Safety & Outcomes</h3>
            <p className="text-slate-200">
              Measuring what matters. Studying how AI interventions impact patient safety, 
              health outcomes, and quality of care in real-world settings.
            </p>
          </div>
        </div>

        <p className="text-lg text-slate-200 leading-relaxed pt-4">
          Through my <Link href="/learning/human-centered-ai-healthcare" className="text-blue-400 hover:underline">daily learning logs</Link> and{" "}
          <Link href="/blogs" className="text-blue-400 hover:underline">blog posts</Link>, 
          I'm systematically exploring these questions and developing a research foundation 
          for PhD work in human-centered AI.
        </p>
      </section>

      {/* Call to Action */}
      <section className="card p-8 text-center space-y-6 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-400/20">
        <h2 className="text-2xl font-bold">Let's build something meaningful</h2>
        <p className="text-slate-200 max-w-2xl mx-auto">
          If you're working on healthcare technology, AI for social good, or mission-driven products, 
          I'd love to hear from you.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/#contact" className="btn">
            Get in Touch
          </Link>
          <Link href="/experience" className="inline-flex items-center rounded-2xl px-4 py-2 border border-white/15 hover:border-white/30 transition">
            View Experience
          </Link>
        </div>
      </section>

      {/* Back to Home */}
      <div className="text-center pt-8">
        <Link href="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
