type Props = {
  title: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
};

export default function ExperienceCard({ title, company, location, period, achievements }: Props) {
  return (
    <article className="card p-6 hover:shadow-2xl transition-shadow">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-blue-400 font-medium">{company}</p>
          <p className="text-slate-400 text-sm">{location}</p>
        </div>
        <span className="text-sm text-slate-400 whitespace-nowrap">{period}</span>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, idx) => (
          <li key={idx} className="text-slate-200 text-sm flex gap-2">
            <span className="text-blue-400 mt-1.5 flex-shrink-0">•</span>
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
