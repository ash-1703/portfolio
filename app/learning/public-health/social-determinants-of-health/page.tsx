import Link from "next/link";

export default function SocialDeterminantsPost() {
  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <Link 
          href="/learning/public-health"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Public Health Learning
        </Link>
      </section>

      {/* Article Header */}
      <article className="mx-auto max-w-3xl px-4 pb-20">
        {/* Date & Emoji */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📘</span>
          <time className="text-slate-400">Jan 17, 2026</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Social Determinants of <span className="gradient-text">Health</span>
        </h1>

        {/* Source */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <p className="text-slate-400">
            <span className="font-semibold">Source:</span> WHO Intro to Public Health
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          
          {/* Key Takeaways Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">Key Takeaways</h2>
            <ul className="space-y-4 text-slate-200">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1.5 font-bold">•</span>
                <div>
                  <strong>Health outcomes are shaped more by environment than healthcare alone.</strong>
                  <p className="mt-2 text-slate-400">
                    Where you live, work, and grow up has a more significant impact on your health 
                    than the quality of hospitals in your area. This challenges the traditional 
                    healthcare-centric view of public health.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1.5 font-bold">•</span>
                <div>
                  <strong>Income, education, and housing have measurable clinical impacts.</strong>
                  <p className="mt-2 text-slate-400">
                    These aren't just "social factors"—they directly influence disease rates, 
                    treatment adherence, and mortality. For example, a ZIP code can be a better 
                    predictor of health outcomes than genetic code in many cases.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1.5 font-bold">•</span>
                <div>
                  <strong>Technology can help track—but not replace—policy interventions.</strong>
                  <p className="mt-2 text-slate-400">
                    While AI and data analytics can identify at-risk populations and social 
                    determinants patterns, real change requires policy action: affordable housing, 
                    living wages, and accessible education.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Reflection Section */}
          <section className="border-l-4 border-cyan-500 pl-8 py-6 bg-cyan-500/5 rounded-r mb-12">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">💭 Reflection</h2>
            <p className="text-slate-200 leading-relaxed">
              How AI-driven risk stratification could amplify public health inequities if not 
              designed carefully. If we build models that predict poor health outcomes based on 
              social determinants without addressing the root causes, we risk creating a 
              self-fulfilling prophecy. Technology should identify problems <em>and</em> guide 
              interventions—not just label vulnerable populations without action.
            </p>
          </section>

          {/* Questions for Further Exploration */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Questions for Further Exploration</h2>
            <ul className="space-y-2 text-slate-200">
              <li>→ How can AI tools be designed to recommend policy interventions, not just predictions?</li>
              <li>→ What ethical frameworks exist for using social determinants data in clinical settings?</li>
              <li>→ Are there case studies of technology successfully addressing (not just documenting) SDOH?</li>
            </ul>
          </section>

        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <Link 
            href="/learning/public-health"
            className="text-cyan-400 hover:text-cyan-300 text-sm"
          >
            ← All Public Health Posts
          </Link>
          {/* Add next post link when you have more posts */}
          {/* <Link 
            href="/learning/public-health/next-post-slug"
            className="text-cyan-400 hover:text-cyan-300 text-sm"
          >
            Next Post →
          </Link> */}
        </div>
      </article>
    </main>
  );
}
