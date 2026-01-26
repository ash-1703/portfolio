import Link from "next/link";
import { client } from "@/lib/sanity.client";

// Disable Next.js caching for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type LearningListItem = {
  title: string;
  slug: string;
  date: string;
  description: string;
  source: string;
};

async function getPublicHealthEntries(): Promise<LearningListItem[]> {
  const entries = await client.fetch(`
    *[_type == "publicHealthLearning"] | order(date desc) {
      title,
      "slug": slug.current,
      date,
      description,
      source
    }
  `);
  console.log('📘 Fetched Public Health Entries:', entries);
  console.log('📊 Total entries:', entries?.length || 0);
  return entries;
}

export default async function PublicHealthLearningPage() {
  const learningEntries = await getPublicHealthEntries();
  console.log('🔍 Rendering with entries:', learningEntries);

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-5xl">🏥</span>
          <h1 className="text-4xl md:text-5xl font-bold">
            Human-Centered AI in <span className="gradient-text">Healthcare</span>
          </h1>
        </div>
        <p className="text-lg text-slate-200 max-w-3xl">
          Daily learning log exploring empathetic AI design, ethical development, clinical integration, 
          and real-world applications that put patients and clinicians at the center.
        </p>
      </section>

      {/* Learning Entries List */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="space-y-6">
          {learningEntries.map((entry: LearningListItem, idx: number) => (
            <Link
              key={idx}
              href={`/learning/human-centered-ai-healthcare/${entry.slug}`}
              className="block border border-white/10 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                <span>🗓️</span>
                <time>{entry.date}</time>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-2 group-hover:gradient-text transition-all">
                {entry.title}
              </h2>

              {/* Description */}
              <p className="text-slate-200 mb-3">
                {entry.description}
              </p>

              {/* Source & Read More */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">
                  Source: {entry.source}
                </span>
                <span className="flex items-center text-cyan-400 text-sm font-medium">
                  Read more
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Add Entry Prompt */}
        {/* <div className="mt-12 text-center text-slate-400 text-sm">
          <p>💡 Add new entries by creating a new page in <code className="bg-white/5 px-2 py-1 rounded">app/learning/public-health/[slug]</code></p>
        </div> */}
      </section>
    </main>
  );
}
