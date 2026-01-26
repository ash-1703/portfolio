import Link from "next/link";

export default function WhyPublicHealthNeedsEngineersPost() {
  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <Link 
          href="/blogs/public-health"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Public Health
        </Link>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 pb-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
            <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-medium">
              Public Health
            </span>
            <span>•</span>
            <time>Jan 15, 2026</time>
            <span>•</span>
            <span>8 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Why Public Health Needs <span className="gradient-text">Engineers</span>, Not Just Doctors
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none space-y-6 text-slate-200 leading-relaxed">
          
          <p className="text-lg text-slate-200">
            Healthcare isn't just a clinical problem—it's a systems problem. And systems problems 
            require systems thinking.
          </p>

          <p>
            When we think about improving healthcare, we often default to clinical interventions: 
            better drugs, more accurate diagnoses, advanced surgical techniques. These matter. But 
            they represent only one layer of a deeply complex system that determines health outcomes 
            at scale.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Healthcare Delivery Problem</h2>

          <p>
            Consider this: a hospital emergency department sees 200+ patients per day. Each patient 
            generates dozens of data points—vital signs, lab results, imaging, medications. Multiply 
            this across thousands of hospitals, and you have a massive coordination problem that no 
            individual clinician can solve alone.
          </p>

          <p>
            <strong>Engineers solve coordination problems.</strong> They design systems that route 
            patients efficiently, flag critical cases, reduce wait times, and prevent errors. These 
            aren't "nice-to-haves"—they directly impact mortality and morbidity.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Three Areas Where Engineering Mindsets Are Critical</h2>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">1. Data Infrastructure for Public Health</h3>
          
          <p>
            Public health depends on surveillance—tracking disease outbreaks, monitoring chronic 
            conditions, identifying at-risk populations. But in most countries, health data is 
            fragmented across incompatible systems. Electronic health records (EHRs) don't talk 
            to each other. Lab results sit in silos.
          </p>

          <p>
            <strong>This is an engineering problem.</strong> Building interoperable data pipelines, 
            standardizing formats (like FHIR), and creating real-time dashboards requires software 
            engineers, data engineers, and systems architects.
          </p>

          <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 bg-cyan-500/5 italic">
            "The COVID-19 pandemic exposed how ill-equipped we were to track cases, allocate 
            resources, and model spread. Better epidemiological models exist—but they need clean, 
            timely data to be useful."
          </blockquote>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">2. Logistics & Supply Chain Management</h3>

          <p>
            Vaccines expire. Blood banks run low. Medications stock out in rural clinics while urban 
            hospitals have surplus. These aren't clinical failures—they're logistics failures.
          </p>

          <p>
            Engineers optimize supply chains for billion-dollar companies. Why not apply the same 
            rigor to healthcare? Demand forecasting, inventory management, and cold-chain logistics 
            are all solvable with engineering tools.
          </p>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">3. Scalable Interventions</h3>

          <p>
            A doctor can treat 30 patients per day. A well-designed telemedicine platform can triage 
            thousands. A chatbot answering common health questions can reach millions.
          </p>

          <p>
            <strong>Scale matters in public health.</strong> Engineers understand how to build systems 
            that work for 10 users and 10 million users. They think about reliability, uptime, and 
            graceful degradation—concepts foreign to clinical training but essential for population 
            health.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What Engineers Bring That Clinicians Don't</h2>

          <ul className="space-y-3 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <div>
                <strong>Systems-level thinking:</strong> Seeing healthcare as interconnected components, 
                not isolated encounters
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <div>
                <strong>Obsession with efficiency:</strong> Reducing latency, eliminating bottlenecks, 
                automating repetitive tasks
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <div>
                <strong>Comfort with uncertainty:</strong> Engineers build systems that handle edge cases 
                and fail gracefully
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">→</span>
              <div>
                <strong>Iteration mindset:</strong> Rapid prototyping, A/B testing, continuous improvement
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Best Solutions Are Interdisciplinary</h2>

          <p>
            This isn't an argument <em>against</em> doctors—it's an argument <em>for collaboration</em>. 
            The most impactful healthcare innovations come from teams that include clinicians, engineers, 
            epidemiologists, and policymakers.
          </p>

          <p>
            Examples:
          </p>

          <ul className="space-y-2">
            <li>• <strong>Electronic health alerts</strong> (clinical knowledge + software engineering)</li>
            <li>• <strong>Predictive sepsis models</strong> (machine learning + ICU expertise)</li>
            <li>• <strong>Mobile health apps for maternal health</strong> (UX design + midwifery protocols)</li>
          </ul>

          <p>
            Engineers can't replace doctors. But doctors alone can't solve public health at scale.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">A Call to Action</h2>

          <p>
            If you're an engineer curious about healthcare: <strong>your skills are desperately needed</strong>. 
            You don't need an MD to contribute. You need curiosity, humility, and a willingness to learn 
            clinical context.
          </p>

          <p>
            If you're in public health: <strong>invite engineers into the conversation</strong>. They'll ask 
            "dumb" questions that reveal broken assumptions. They'll propose solutions that seem impossible 
            until they're built.
          </p>

          <p>
            Healthcare is too important—and too broken—to leave innovation to one discipline.
          </p>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-sm italic">
            *This post is part of my ongoing journey to bridge technology and public health.*
          </p>
          <div className="mt-6 flex justify-between items-center">
            <Link 
              href="/blogs/public-health"
              className="text-cyan-400 hover:text-cyan-300 text-sm"
            >
              ← All Public Health Posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
