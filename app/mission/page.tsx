import Link from "next/link";

export default function MissionPage() {
  return (
    <div className="py-16 space-y-20 max-w-3xl mx-auto">

      {/* Header */}
      <section className="space-y-3">
        <h1 className="text-4xl sm:text-5xl font-bold">Mission & Values</h1>
        <p className="text-slate-400 text-lg">
          What drives me, how I work, and where I&apos;m going.
        </p>
      </section>

      {/* Mission */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-blue-400">Mission</h2>
        <p className="text-slate-200 leading-relaxed">
          I&apos;m passionate about building technology that creates{" "}
          <span className="text-white font-semibold">equitable access to healthcare</span>: organ donation networks, insurance accessibility tools, and systems that connect underserved communities with quality care at reasonable costs.
        </p>
        <p className="text-slate-200">
          I want to work where{" "}
          <span className="text-blue-400 font-semibold">engineering excellence meets social impact</span>.
        </p>
      </section>

      {/* Core Principles */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-blue-400">Core Principles</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Start with the user", "Define the job-to-be-done and success metrics before code."],
            ["Default to simple", "If a diagram needs three boxes, don't draw five."],
            ["Ship in slices", "Thin verticals over wide layers; learn fast."],
            ["Measure impact", "Perf, accuracy, cycle time. If it's not measured, it didn't happen."],
            ["Kind candor", "Direct, respectful communication; write it down."],
            ["Own the outcome", "Done = shipped, observed, and useful."],
          ].map(([title, desc]) => (
            <div key={title} className="card p-4 space-y-1">
              <p className="font-semibold text-white text-sm">{title}</p>
              <p className="text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* How I Think & Work */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-bold text-blue-400">How I Think & Work</h2>
          <p className="text-slate-400 text-sm mt-1">
            I build like an architect and ship like an engineer.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            ["Architecture first", "I design data flows, API contracts, and failure modes before writing a single line. Systems thinking is the default, not a phase."],
            ["Trade-offs over defaults", "I don't reach for the 'standard' answer. Every decision gets named: what it costs, what it gains, and why this context makes it right."],
            ["Continuously upskilling", "Actively studying system design, distributed systems, and production architecture patterns and applying them directly to what I ship."],
            ["AI as a force multiplier", "I use AI with intent: structured prompts, context boundaries, token optimization to compress learning cycles and increase output quality."],
          ].map(([title, desc]) => (
            <div key={title} className="card p-4 space-y-1">
              <p className="font-semibold text-white text-sm">{title}</p>
              <p className="text-slate-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How I use AI */}
      <section className="card p-6 border-blue-400/20 space-y-4">
        <h2 className="text-xl font-bold text-blue-400">AI-Augmented Engineering</h2>
        <p className="text-slate-200 text-sm leading-relaxed">
          I treat AI as a senior pair programmer, one that accelerates decision-making, surfaces options faster, and sharpens output quality. That distinction shapes how I work.
        </p>
        <div className="space-y-3">
          {[
            ["Structured prompting", "I design prompts with explicit role, context, constraints, and output format, the same way I'd write a good API contract."],
            ["Token optimization", "I scope context windows intentionally: include what the model needs, exclude what adds noise. Tighter context produces more accurate output and scales better."],
            ["Judgment-led review", "Every AI output is validated against first principles. AI accelerates exploration; engineering judgment determines what ships."],
            ["Learning acceleration", "I use AI to compress the feedback loop on unfamiliar concepts including design patterns, new frameworks, and architecture decisions, then validate through implementation."],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-3 items-start">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              <div>
                <span className="font-semibold text-white text-sm">{title}: </span>
                <span className="text-slate-400 text-sm">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flex flex-wrap gap-3">
        <Link href="/#contact" className="btn">Get in Touch</Link>
        <Link href="/experience" className="inline-flex items-center rounded-2xl px-4 py-2 border border-white/15 hover:border-white/30 transition text-sm">
          View Experience
        </Link>
        <a
          href="/api/resume"
          download
          className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/20 transition text-blue-200 text-sm"
        >
          Download Resume
        </a>
      </section>

    </div>
  );
}