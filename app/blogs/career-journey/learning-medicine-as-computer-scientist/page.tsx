import Link from "next/link";

export default function LearningMedicinePost() {
  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <Link 
          href="/blogs/career-journey"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Career Journey
        </Link>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 pb-20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
            <span className="px-2 py-1 bg-blue-500/10 text-blue-400 rounded text-xs font-medium">
              Career & Learning Journey
            </span>
            <span>•</span>
            <time>Jan 10, 2026</time>
            <span>•</span>
            <span>5 min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Learning Medicine as a <span className="gradient-text">Computer Scientist</span>: Week 1
          </h1>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none space-y-6 text-slate-200 leading-relaxed">
          
          <p className="text-lg text-slate-200">
            What happens when you dive into medical literature without a biology degree? 
            Here's what I learned in my first week.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Decision</h2>

          <p>
            I'm a computer scientist by training. My background is in software engineering, 
            machine learning, and data systems. But over the past year, I've become increasingly 
            convinced that the most impactful work I can do is at the intersection of technology 
            and healthcare.
          </p>

          <p>
            So I decided to learn medicine—not to become a doctor, but to <strong>understand the 
            domain deeply enough to build tools that actually matter</strong>.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Week 1: What I Studied</h2>

          <ul className="space-y-2">
            <li>• <strong>WHO Introduction to Public Health</strong> (online course)</li>
            <li>• <strong>"Essentials of Public Health"</strong> by Turnock (Chapters 1-3)</li>
            <li>• <strong>NIH's "Understanding Clinical Trials"</strong> module</li>
            <li>• <strong>Medical terminology basics</strong> (anatomical planes, common abbreviations)</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Key Realizations</h2>

          <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">1. Medicine Is Surprisingly Systematic</h3>

          <p>
            I expected medicine to be entirely intuition-based. But there's a lot of structure: 
            clinical guidelines, diagnostic criteria, evidence-based protocols. As someone who loves 
            systems, this was reassuring.
          </p>

          <p>
            <em>That said</em>, the guidelines are often written in dense jargon. Learning to parse 
            them takes practice.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">2. Context Is Everything</h3>

          <p>
            In software, you can often isolate a problem: "Fix the login bug." In medicine, everything 
            is interconnected. A patient's diabetes affects their kidney function, which affects their 
            medication options, which affects their quality of life.
          </p>

          <p>
            <strong>This is why AI in healthcare is hard.</strong> You can't just optimize one variable—
            you have to understand the whole patient.
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">3. The Gap Between Research and Practice</h3>

          <p>
            I read a brilliant paper on using machine learning for sepsis prediction. Then I read 
            about how few hospitals have adopted it. The reasons?
          </p>

          <ul className="space-y-2">
            <li>• Lack of EHR integration</li>
            <li>• Clinician skepticism of "black box" models</li>
            <li>• Legal liability concerns</li>
            <li>• No clear ROI</li>
          </ul>

          <p>
            <strong>Building the model is 20% of the problem. Deployment is the other 80%.</strong>
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Unexpected Challenges</h2>

          <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">Acronym Overload</h3>

          <p>
            Medicine loves acronyms. CHF, COPD, MI, CVA, DM, HTN... I've started keeping a running 
            glossary. (Pro tip: <a href="https://www.medicinenet.com" className="text-blue-400 hover:underline" target="_blank">MedicineNet</a> is 
            your friend.)
          </p>

          <h3 className="text-xl font-semibold text-blue-400 mt-6 mb-3">Impostor Syndrome</h3>

          <p>
            Reading medical papers without a biology background is humbling. I constantly have to 
            stop and Google basic concepts. "Wait, what's the difference between arteries and veins 
            again?"
          </p>

          <p>
            But I'm reminding myself: <strong>this is the point</strong>. If I already knew everything, 
            I wouldn't be learning.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What's Helping</h2>

          <ul className="space-y-3 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <div>
                <strong>Learning in public:</strong> Writing daily learning logs forces me to 
                consolidate what I've learned
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <div>
                <strong>Connecting to my tech background:</strong> Asking "How would I build a system 
                for this?" makes concepts stick
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-400 font-bold">→</span>
              <div>
                <strong>Setting small goals:</strong> One chapter per day. One concept per day. 
                Consistency over intensity.
              </div>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">What's Next</h2>

          <p>
            This week, I'm diving into:
          </p>

          <ul className="space-y-2">
            <li>• Epidemiology basics (incidence vs. prevalence, sensitivity vs. specificity)</li>
            <li>• Social determinants of health (SDOH)</li>
            <li>• How clinical trials are designed and evaluated</li>
          </ul>

          <p>
            I'll also start attending virtual office hours for a public health course to ask "dumb" 
            questions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Advice for Other Tech People Interested in Healthcare</h2>

          <p>
            <strong>1. Don't wait for permission.</strong> You don't need to enroll in med school 
            to learn medicine. Start with open courses, textbooks, and papers.
          </p>

          <p>
            <strong>2. Find your "why."</strong> What healthcare problem do you care about solving? 
            Let that guide your learning.
          </p>

          <p>
            <strong>3. Be humble.</strong> You'll get things wrong. That's fine. Ask questions, 
            admit gaps, and keep learning.
          </p>

          <p>
            <strong>4. Connect with clinicians.</strong> Find doctors, nurses, or public health 
            professionals willing to share their perspectives. Their lived experience is invaluable.
          </p>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">Closing Thoughts</h2>

          <p>
            One week in, I'm equal parts excited and overwhelmed. But I'm also convinced this is 
            the right path. Healthcare needs people who understand both technology <em>and</em> health. 
            The more I learn, the more I see opportunities to bridge the two.
          </p>

          <p>
            If you're considering a similar journey—<strong>start now</strong>. Don't wait until 
            you feel "ready." You'll learn by doing.
          </p>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-sm italic">
            *This post is part of my ongoing journey to bridge technology and public health.*
          </p>
          <div className="mt-6 flex justify-between items-center">
            <Link 
              href="/blogs/career-journey"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              ← All Career Journey Posts
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
