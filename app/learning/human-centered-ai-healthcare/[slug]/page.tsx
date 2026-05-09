import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { notFound } from "next/navigation";

interface Takeaway {
  title: string;
  explanation: string;
}

interface PublicHealthEntry {
  title: string;
  slug: string;
  date: string;
  description: string;
  source: string;
  takeaways: Takeaway[];
  reflection?: string;
  questions?: string[];
}

async function getPublicHealthEntry(slug: string): Promise<PublicHealthEntry | null> {
  return await client.fetch(`
    *[_type == "publicHealthLearning" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      date,
      description,
      source,
      takeaways,
      reflection,
      questions
    }
  `, { slug });
}

export default async function PublicHealthPostPage({ params }: { params: { slug: string } }) {
  // Find the entry by slug
  const entry = await getPublicHealthEntry(params.slug);

  // If not found, show 404
  if (!entry) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <Link 
          href="/learning/human-centered-ai-healthcare"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to System Design & Architecture
        </Link>
      </section>

      {/* Article Header */}
      <article className="mx-auto max-w-3xl px-4 pb-20">
        {/* Date & Emoji */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">📘</span>
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

        {/* Source */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <p className="text-slate-400">
            <span className="font-semibold">Source:</span> {entry.source}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          
          {/* Key Takeaways Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">Key Takeaways</h2>
            <ul className="space-y-4 text-slate-200">
              {entry.takeaways.map((takeaway, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-400 mt-1.5 font-bold">•</span>
                  <div>
                    <strong>{takeaway.title}</strong>
                    <p className="mt-2 text-slate-400">
                      {takeaway.explanation}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Reflection Section */}
          {entry.reflection && (
            <section className="border-l-4 border-blue-400 pl-8 py-6 bg-blue-500/5 rounded-r mb-12">
              <h2 className="text-xl font-bold mb-4 text-blue-400">💭 Reflection</h2>
              <p className="text-slate-200 leading-relaxed">
                {entry.reflection}
              </p>
            </section>
          )}

          {/* Questions for Further Exploration */}
          {entry.questions && entry.questions.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Questions for Further Exploration</h2>
              <ul className="space-y-2 text-slate-200">
                {entry.questions.map((question, i) => (
                  <li key={i}>→ {question}</li>
                ))}
              </ul>
            </section>
          )}

        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <Link 
            href="/learning/human-centered-ai-healthcare"
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            ← All System Design & Architecture Posts
          </Link>
        </div>
      </article>
    </main>
  );
}
