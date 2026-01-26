import Link from "next/link";

export default function WhatAICannotFixPost() {
  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <Link 
          href="/blogs/ai-in-healthcare"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to AI in Healthcare
        </Link>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 pb-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
            <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-medium">
              AI in Healthcare
            </span>
            <span>•</span>
            <time>Jan 12, 2026</time>
            <span>•</span>
            <span>6 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What AI <span className="gradient-text">Cannot Fix</span> in Healthcare
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none space-y-6 text-slate-200 leading-relaxed">
          
          <p className="text-lg text-slate-200">
            Before we deploy another algorithm, we need to address the structural inequities 
            that no model can solve.
          </p>

          <p>
            AI in healthcare is seductive. It promises precision medicine, early diagnosis, 
            optimized treatment plans—all at scale. But there's a dangerous assumption lurking 
            beneath the hype: that healthcare's biggest problems are <em>technical</em>.
          </p>

          <p>They're not.</p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Things AI Can Do Well</h2>

          <p>Let's be clear: AI has genuine value in healthcare.</p>

          <ul className="space-y-2">
            <li>• <strong>Pattern recognition:</strong> Detecting diabetic retinopathy in retinal scans</li>
            <li>• <strong>Risk stratification:</strong> Predicting which patients will develop sepsis</li>
            <li>• <strong>Workflow optimization:</strong> Triaging radiology queues by urgency</li>
            <li>• <strong>Drug discovery:</strong> Screening millions of compounds for therapeutic potential</li>
          </ul>

          <p>
            These are real contributions. But they operate <em>within</em> the existing healthcare 
            system. They don't fix the system itself.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What AI Cannot Fix</h2>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">1. Lack of Access</h3>

          <p>
            An AI model that accurately diagnoses pneumonia from chest X-rays is useless if patients 
            can't afford the X-ray. Or the clinic visit. Or the antibiotics.
          </p>

          <blockquote className="border-l-4 border-cyan-500 pl-6 py-2 bg-cyan-500/5 italic">
            "In the U.S., 45% of adults report delaying or skipping medical care due to cost 
            (KFF, 2023). No algorithm can fix affordability."
          </blockquote>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">2. Social Determinants of Health</h3>

          <p>
            AI can predict that someone living in a food desert with unstable housing is at high 
            risk for diabetes. But it can't provide them with:
          </p>

          <ul className="space-y-2">
            <li>• Affordable housing</li>
            <li>• Access to fresh food</li>
            <li>• Living wages</li>
            <li>• Safe neighborhoods</li>
          </ul>

          <p>
            <strong>Prediction without intervention is surveillance, not care.</strong>
          </p>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">3. Systemic Bias</h3>

          <p>
            AI models inherit the biases in their training data. If historical data shows that 
            Black patients receive less aggressive pain management, the model will learn to 
            recommend less pain medication for Black patients—perpetuating inequity.
          </p>

          <p>
            You can't <em>engineer out</em> centuries of structural racism. You need policy change, 
            anti-bias training, and accountability mechanisms—none of which are machine learning problems.
          </p>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">4. Trust and Human Connection</h3>

          <p>
            A patient-doctor relationship is built on trust, empathy, and shared decision-making. 
            AI can assist diagnosis, but it can't replace the human judgment required to weigh 
            trade-offs, communicate uncertainty, or provide emotional support.
          </p>

          <p>
            <strong>Medicine is not just information processing—it's caregiving.</strong>
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Risk of Techno-Solutionism</h2>

          <p>
            Techno-solutionism is the belief that technology can solve complex social problems. 
            In healthcare, it manifests as:
          </p>

          <ul className="space-y-3 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <div>
                Building an app to "fix" medication adherence when the real issue is cost
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <div>
                Deploying AI diagnostics in under-resourced clinics with no internet or electricity
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✗</span>
              <div>
                Claiming AI will "democratize healthcare" while ignoring the digital divide
              </div>
            </li>
          </ul>

          <p>
            These aren't hypothetical—they're patterns I see repeatedly in health-tech pitches.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">So What Should We Do?</h2>

          <p>
            I'm not arguing <em>against</em> AI in healthcare. I'm arguing <em>for honest assessment</em> 
            of what it can and cannot achieve.
          </p>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Design AI as a Tool, Not a Solution</h3>

          <p>
            AI should augment clinicians, not replace them. It should surface insights that humans 
            can act on—but the action itself requires policy, funding, and systemic change.
          </p>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Pair Technology with Policy</h3>

          <p>
            If you build a model that predicts housing insecurity as a health risk, <strong>also advocate 
            for housing policy</strong>. Technology + advocacy {`>`} technology alone.
          </p>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Center Equity, Not Just Accuracy</h3>

          <p>
            A model that's 95% accurate overall but 70% accurate for marginalized groups is a failure. 
            Evaluate fairness metrics alongside performance metrics.
          </p>

          <h3 className="text-xl font-semibold text-cyan-400 mt-6 mb-3">Ask "Who Benefits?"</h3>

          <p>
            Does this AI tool primarily benefit patients, or does it optimize hospital revenue? 
            Does it reduce clinician burnout, or add more clicks to their workflow?
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Conclusion</h2>

          <p>
            AI is a powerful tool. But tools don't fix systems—people do. And fixing healthcare 
            requires more than better algorithms. It requires universal access, equitable policy, 
            and a recognition that health is shaped by forces far beyond the clinic.
          </p>

          <p>
            <strong>Let's build AI that serves this broader mission—not one that distracts from it.</strong>
          </p>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-sm italic">
            *This post is part of my ongoing journey to bridge technology and public health.*
          </p>
          <div className="mt-6 flex justify-between items-center">
            <Link 
              href="/blogs/ai-in-healthcare"
              className="text-cyan-400 hover:text-cyan-300 text-sm"
            >
              ← All AI in Healthcare Posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
