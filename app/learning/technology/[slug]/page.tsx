import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { notFound } from "next/navigation";

interface LearningItem {
  title: string;
  explanation: string;
}

interface TechnologyEntry {
  title: string;
  slug: string;
  date: string;
  description: string;
  whatILearned: LearningItem[];
  connectionToHealth?: string;
  technicalDetails?: string;
  nextSteps?: string[];
}

async function getTechnologyEntry(slug: string): Promise<TechnologyEntry | null> {
  return await client.fetch(`
    *[_type == "technologyLearning" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      date,
      description,
      whatILearned,
      connectionToHealth,
      technicalDetails,
      nextSteps
    }
  `, { slug });
}

export default async function TechnologyPostPage({ params }: { params: { slug: string } }) {
  // Find the entry by slug
  const entry = await getTechnologyEntry(params.slug);

  // If not found, show 404
  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <Link 
          href="/learning/technology"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Technology Learning
        </Link>
      </section>

      {/* Article Header */}
      <article className="mx-auto max-w-3xl px-4 pb-20">
        {/* Date & Emoji */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💻</span>
          <time className="text-slate-400">{entry.date}</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {entry.title.split(' ').map((word, i, arr) => 
            i === arr.length - 1 ? (
              <span key={i} className="gradient-text">{word}</span>
            ) : (
              <span key={i}>{word} </span>
            )
          )}
        </h1>

        {/* Divider */}
        <div className="mb-8 pb-8 border-b border-white/10"></div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          
          {/* What I Learned Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">What I Learned</h2>
            <ul className="space-y-4 text-slate-200">
              {entry.whatILearned.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-cyan-500 mt-1.5 font-bold">•</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p className="mt-2 text-slate-400">
                      {item.explanation}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Connection to Health Section */}
          {entry.connectionToHealth && (
            <section className="border-l-4 border-cyan-500 pl-8 py-6 bg-cyan-500/5 rounded-r mb-12">
              <h2 className="text-xl font-bold mb-4 text-cyan-400">🏥 Connection to Health</h2>
              <div 
                className="text-slate-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: entry.connectionToHealth.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') }}
              />
            </section>
          )}

          {/* Technical Deep Dive */}
          {entry.technicalDetails && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Technical Architecture (Conceptual)</h2>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-sm font-mono text-slate-200 whitespace-pre-wrap">
                {entry.technicalDetails}
              </div>
            </section>
          )}

          {/* Next Steps */}
          {entry.nextSteps && entry.nextSteps.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Next Steps to Explore</h2>
              <ul className="space-y-2 text-slate-200">
                {entry.nextSteps.map((step, i) => (
                  <li key={i}>→ {step}</li>
                ))}
              </ul>
            </section>
          )}

        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <Link 
            href="/learning/technology"
            className="text-cyan-400 hover:text-cyan-300 text-sm"
          >
            ← All Technology Posts
          </Link>
        </div>
      </article>
    </main>
  );
}
