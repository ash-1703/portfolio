import Link from "next/link";
import { client } from "@/lib/sanity.client";
import { notFound } from "next/navigation";

interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  readTime: string;
  category: string;
  content: any[];
}

async function getBlogPost(category: string, slug: string): Promise<BlogPost | null> {
  return await client.fetch(`
    *[_type == "blogPost" && category == $category && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      date,
      excerpt,
      readTime,
      category,
      content
    }
  `, { category, slug });
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: { category: string; slug: string } 
}) {
  const post = await getBlogPost(params.category, params.slug);

  if (!post) {
    notFound();
  }

  // Category display names
  const categoryNames: Record<string, string> = {
    'design-and-ux': 'Design & UX',
    'ethics-and-equity': 'Ethics & Equity',
    'clinical-integration': 'Clinical Integration',
    'patient-outcomes': 'Patient Outcomes',
  };

  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <Link 
          href={`/blogs/${params.category}`}
          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to {categoryNames[params.category]} Blogs
        </Link>
      </section>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-4 pb-20">
        {/* Meta Info */}
        <div className="flex items-center gap-3 text-sm text-slate-400 mb-6">
          <span className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full">
            {categoryNames[params.category]}
          </span>
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {post.title}
        </h1>

        {/* Excerpt */}
        <p className="text-xl text-slate-200 mb-8 pb-8 border-b border-white/10">
          {post.excerpt}
        </p>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          {post.content.map((block: any, idx: number) => {
            if (block._type === 'block') {
              const text = block.children?.map((child: any) => child.text).join('') || '';
              
              if (block.style === 'h2') {
                return <h2 key={idx} className="text-3xl font-bold mt-12 mb-4 text-blue-400">{text}</h2>;
              }
              if (block.style === 'h3') {
                return <h3 key={idx} className="text-2xl font-bold mt-8 mb-3">{text}</h3>;
              }
              if (block.style === 'blockquote') {
                return (
                  <blockquote key={idx} className="border-l-4 border-blue-400 pl-6 py-4 my-8 bg-blue-500/5 italic">
                    {text}
                  </blockquote>
                );
              }
              return <p key={idx} className="text-slate-200 leading-relaxed mb-6">{text}</p>;
            }
            return null;
          })}
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-slate-400 text-sm italic">
            Building at the intersection of health, technology, and equity. 🏥✨
          </p>
        </div>
      </article>
    </main>
  );
}
