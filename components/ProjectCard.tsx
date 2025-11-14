type Props = {
  title: string;
  tags: string[];
  description: string;
  link?: string;
  repo?: string;
};

export default function ProjectCard({ title, tags, description, link, repo }: Props) {
  return (
    <article className="card p-6 hover:shadow-2xl transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-slate-300 mt-2">{description}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-5 flex gap-4">
        {link && <a className="btn" href={link} target="_blank" rel="noopener noreferrer">Live</a>}
        {repo && <a className="inline-flex items-center rounded-2xl px-4 py-2 border border-white/15 hover:border-white/30 transition" href={repo} target="_blank" rel="noopener noreferrer">Code</a>}
      </div>
    </article>
  );
}
