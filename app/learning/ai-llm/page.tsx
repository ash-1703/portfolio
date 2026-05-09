import Link from "next/link";
import { client } from "@/lib/sanity.client";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

type LearningListItem = {
  title: string;
  slug: string;
  date: string;
  description: string;
};

async function getEntries(): Promise<LearningListItem[]> {
  return await client.fetch(`
    *[_type == "technologyLearning"] | order(date desc) {
      title,
      "slug": slug.current,
      date,
      description
    }
  `);
}

export default async function AILLMPage() {
  const learningEntries = await getEntries();

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-12">
        <Link href="/learning" className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mb-8">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Learning
        </Link>
        <div className="flex items-center gap-3 mb-6 mt-4">
          <span className="text-5xl">🤖</span>
          <h1 className="text-4xl md:text-5xl font-bold">
            AI & <span className="gradient-text">LLM Engineering</span>
          </h1>
        </div>
        <p className="text-lg text-slate-400 max-w-2xl">
          Prompt engineering, RAG pipelines, model evaluation, and applying AI in production systems.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="space-y-6">
          {learningEntries.length === 0 && (
            <p className="text-slate-500 text-sm">No entries yet. Check back soon.</p>
          )}
          {learningEntries.map((entry: LearningListItem, idx: number) => (
            <Link
              key={idx}
              href={`/learning/ai-llm/${entry.slug}`}
              className="block border border-white/10 rounded-lg p-6 hover:border-blue-400/40 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                <span>🗓️</span>
                <time>{entry.date}</time>
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                {entry.title}
              </h2>
              <p className="text-slate-200 mb-3">{entry.description}</p>
              <div className="flex items-center justify-end">
                <span className="flex items-center text-blue-400 text-sm font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
