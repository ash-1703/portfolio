import Link from "next/link";
import { client } from "@/lib/sanity.client";

// Disable Next.js caching for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getCertifications() {
  return await client.fetch(`
    *[_type == "certification"] | order(status desc, publishedAt desc) {
      title,
      category,
      provider,
      status,
      year,
      certificateUrl,
      takeaway,
      progress,
      expectedCompletion,
      focus
    }
  `);
}

export default async function CertificationsPage() {
  const allCertifications = await getCertifications();
  
  // Separate into categories (focused on AI & tech)
  const aiTechCerts = allCertifications.filter(
    (cert: any) => cert.category === 'ai-tech' && cert.status === 'completed'
  );
  
  const inProgressCourses = allCertifications.filter(
    (cert: any) => cert.status === 'in-progress'
  );

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Certifications
        </h1>
        <p className="text-lg text-slate-200 max-w-3xl">
          Targeted technical certifications and completed courses showcasing expertise in machine learning, 
          AI systems engineering, cloud infrastructure, and production-grade software development.
        </p>
      </section>

      {/* Human-Centered AI in Healthcare */}
      {/* AI & Technology */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">🤖</span>
          <h2 className="text-3xl font-bold">AI & Technology Certifications</h2>
        </div>
        <p className="text-slate-400 mb-6 max-w-2xl">
          Focused technical certifications and courses in machine learning, AI systems, software engineering, and cloud tooling.
        </p>
        <div className="space-y-4">
          {aiTechCerts.map((cert: any, idx: number) => (
            <div
              key={idx}
              className="border border-white/10 rounded-lg p-6 hover:border-blue-400/30 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                    <span>{cert.provider}</span>
                    <span>•</span>
                    <span>{cert.year}</span>
                  </div>
                  <div className="mb-1 text-xs text-slate-500 font-medium">Key Takeaway</div>
                  <blockquote className="border-l-2 border-blue-400/30 pl-4 text-slate-200 text-sm italic">
                    {cert.takeaway}
                  </blockquote>
                </div>
                {cert.certificateUrl && (
                  <div className="flex items-center gap-2">
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-500/20 transition-all"
                    >
                      View Certificate →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* In Progress */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📚</span>
          <h2 className="text-3xl font-bold">In Progress</h2>
        </div>
        <div className="space-y-4">
          {inProgressCourses.map((course: any, idx: number) => (
            <div
              key={idx}
              className="border border-white/10 rounded-lg p-6 hover:border-cyan-500/30 transition-all"
            >
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                    <span>{course.provider}</span>
                    <span>•</span>
                    <span>Expected: {course.expectedCompletion}</span>
                  </div>
                  <p className="text-slate-200 text-sm mb-4">
                    <span className="text-cyan-400 font-medium">Focus:</span> {course.focus}
                  </p>
                  {/* Progress Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-white/5 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full transition-all"
                        style={{ width: course.progress }}
                      />
                    </div>
                    <span className="text-sm text-slate-400 font-medium min-w-[3rem] text-right">
                      {course.progress}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
