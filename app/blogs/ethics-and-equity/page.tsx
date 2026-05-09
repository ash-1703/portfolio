import Link from "next/link";
import { client } from "@/lib/sanity.client";

// Disable Next.js caching for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type BlogListItem = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
};

async function getEthicsEquityBlogs(): Promise<BlogListItem[]> {
  return await client.fetch(`
    *[_type == "blogPost" && category == "ethics-and-equity"] | order(date desc) {
      "slug": slug.current,
      date,
      title,
      excerpt,
      readTime
    }
  `);
}

export default async function EthicsEquityBlogsPage() {
  const blogs = await getEthicsEquityBlogs();

  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-4xl px-4 pt-8">
        <Link 
          href="/blogs"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to All Blogs
        </Link>
      </section>

      {/* Header */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-5xl">🧩</span>
          <h1 className="text-4xl md:text-5xl font-bold">
            Algorithms & <span className="gradient-text">Problem Solving</span>
          </h1>
        </div>
        <p className="text-lg text-slate-400 max-w-2xl">
          DSA patterns, LeetCode breakdowns, and how algorithmic thinking applies to real engineering.
        </p>
      </section>

      {/* Blog List */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <div className="space-y-6">
          {blogs.map((blog: BlogListItem, idx: number) => (
            <Link
              key={idx}
              href={`/blogs/ethics-and-equity/${blog.slug}`}
              className="block border border-white/10 rounded-lg p-6 hover:border-blue-400/40 transition-all hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              {/* Date & Read Time */}
              <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                <time>{blog.date}</time>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="text-slate-200 mb-4">
                {blog.excerpt}
              </p>

              {/* Read More */}
              <span className="flex items-center text-blue-400 text-sm font-medium">
                Read full post
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
