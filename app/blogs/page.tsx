import Link from "next/link";
import { client } from "@/lib/sanity.client";

// Disable Next.js caching for this page
export const dynamic = 'force-dynamic';
export const revalidate = 0;

type FeaturedBlog = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  categorySlug: string;
};

async function getBlogStats() {
  return await client.fetch(`{
    "designUX": count(*[_type == "blogPost" && category == "design-and-ux"]),
    "ethicsEquity": count(*[_type == "blogPost" && category == "ethics-and-equity"]),
    "clinicalIntegration": count(*[_type == "blogPost" && category == "clinical-integration"]),
    "patientOutcomes": count(*[_type == "blogPost" && category == "patient-outcomes"]),
    "featured": *[_type == "blogPost"] | order(date desc) [0...3] {
      title,
      "slug": slug.current,
      date,
      excerpt,
      readTime,
      category
    }
  }`);
}

const categoryNames: Record<string, string> = {
  "design-and-ux": "Design & UX",
  "ethics-and-equity": "Ethics & Equity",
  "clinical-integration": "Clinical Integration",
  "patient-outcomes": "Patient Outcomes",
};

export default async function BlogsPage() {
  const stats = await getBlogStats();

  const blogCategories = [
    {
      title: "Design & User Experience in Healthcare AI",
      description: "Empathetic, usable, and trustworthy AI tools for patients and clinicians",
      icon: "🎨",
      slug: "design-and-ux",
      postCount: stats.designUX,
    },
    {
      title: "Ethics, Fairness, and Equity in Healthcare AI",
      description: "Responsible AI, algorithmic bias, health equity, and protecting vulnerable populations",
      icon: "⚖️",
      slug: "ethics-and-equity",
      postCount: stats.ethicsEquity,
    },
    {
      title: "Clinical Integration and Workflow Adoption",
      description: "Moving AI from research to real-world use in hospitals and clinics",
      icon: "🏥",
      slug: "clinical-integration",
      postCount: stats.clinicalIntegration,
    },
    {
      title: "AI for Patient Safety, Outcomes, and Health Challenges",
      description: "Direct applications that improve health results and save lives",
      icon: "🩺",
      slug: "patient-outcomes",
      postCount: stats.patientOutcomes,
    },
  ];

  // Featured/Latest blogs from Sanity
  const featuredBlogs: FeaturedBlog[] = stats.featured.map((blog: any) => ({
    slug: blog.slug,
    category: categoryNames[blog.category],
    date: blog.date,
    title: blog.title,
    excerpt: blog.excerpt,
    readTime: blog.readTime,
    categorySlug: blog.category,
  }));

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="mx-auto max-w-4xl px-4 pt-24 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="gradient-text">Blogs</span>
        </h1>
        <p className="text-lg text-slate-200 max-w-3xl mb-8">
          Polished essays and thought leadership on human-centered AI in healthcare. 
          Unlike my daily learning logs, these are curated, longer-form 
          pieces meant for sharing and discussion.
        </p>
      </section>

      {/* Featured/Latest Posts */}
      <section className="mx-auto max-w-4xl px-4 pb-12">
        <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
        <div className="space-y-6">
          {featuredBlogs.map((blog: FeaturedBlog, idx: number) => (
            <Link
              key={idx}
              href={`/blogs/${blog.categorySlug}/${blog.slug}`}
              className="block border border-white/10 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10 group"
            >
              {/* Category & Date */}
              <div className="flex items-center gap-3 text-sm text-slate-400 mb-3">
                <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded text-xs font-medium">
                  {blog.category}
                </span>
                <span>•</span>
                <time>{blog.date}</time>
                <span>•</span>
                <span>{blog.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all">
                {blog.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-200 mb-4">
                {blog.excerpt}
              </p>

              {/* Read More */}
              <span className="flex items-center text-cyan-400 text-sm font-medium">
                Read full post
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {blogCategories.map((category, idx) => (
            <Link
              key={idx}
              href={`/blogs/${category.slug}`}
              className="group border border-white/10 rounded-lg p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl">{category.icon}</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all">
                    {category.title}
                  </h3>
                  <p className="text-slate-200 text-sm mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs text-slate-400">
                    {category.postCount} {category.postCount === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                <svg className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </section>

      
    </main>
  );
}
