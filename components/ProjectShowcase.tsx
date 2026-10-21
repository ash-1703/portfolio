import Image from "next/image";

type Kind = "emr" | "rag" | "annotate";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  outcome: string;
  tags: string[];
  kind: Kind;
  demo?: string;
  repo?: string;
  screenshot?: string;
};

function IllustratedPreview({ kind }: { kind: Kind }) {
  if (kind === "emr") {
    return (
      <div className="mock-app mock-emr" aria-label="Illustrative electronic medical records dashboard preview">
        <div className="mock-browser"><i /><i /><i /><span>Patient management / Overview</span></div>
        <div className="mock-emr-layout">
          <div className="mock-sidebar"><div className="mock-sidebar-logo">+</div><span /><span /><span /><span /></div>
          <div className="mock-main">
            <div className="mock-row"><div><b>Patient Overview</b><small>Care at a glance</small></div><div className="mock-pill">+ New Patient</div></div>
            <div className="mock-stats">
              <div><small>Total patients</small><b>128</b><em>↗ 12%</em></div>
              <div><small>Appointments</small><b>24</b><em>This week</em></div>
              <div><small>Refills due</small><b>08</b><em>Next 7 days</em></div>
            </div>
            <div className="mock-table"><div className="mock-table-head">Patients <span>Search records</span></div>{[1,2,3].map(i=><div key={i} className="mock-table-row"><span className="mock-avatar"/><span className="mock-bars"><i/><i/></span><span className="mock-tag">Upcoming</span></div>)}</div>
          </div>
        </div>
      </div>
    );
  }
  if (kind === "rag") {
    return (
      <div className="mock-app mock-rag" aria-label="Illustrative retrieval augmented generation workflow preview">
        <div className="mock-browser"><i/><i/><i/><span>InsightAgent / Workspace</span></div>
        <div className="mock-rag-inner">
          <div className="mock-rag-heading">Ask your knowledge base <span>✳</span></div>
          <div className="mock-rag-query">What are the key findings from the uploaded documents?</div>
          <div className="mock-rag-answer"><span className="mock-rag-icon">✳</span><div><b>Answer grounded in context</b><p>Relevant evidence retrieved across connected documents.</p><small>↗ 3 supporting sources</small></div></div>
          <div className="mock-rag-flow"><span>Documents</span><b>→</b><span>Retrieval</span><b>→</b><span>Response</span></div>
        </div>
      </div>
    );
  }
  return (
    <div className="mock-app mock-annotate" aria-label="Illustrative annotation workspace preview">
      <div className="mock-browser"><i/><i/><i/><span>AutoAnnotate / Dataset 01</span></div>
      <div className="mock-annotate-inner">
        <div className="mock-tools"><span>◫</span><span>⌖</span><span>✎</span><span>⟲</span></div>
        <div className="mock-picture">
          <div className="mock-shape shape-one"/>
          <div className="mock-shape shape-two"/>
          <div className="mock-bbox bbox-one"><span>Object A · 96%</span></div>
          <div className="mock-bbox bbox-two"><span>Object B · 93%</span></div>
        </div>
        <div className="mock-labels"><b>Labels</b><span><i/> Object A</span><span><i/> Object B</span><small>AI pre-labeling active</small></div>
      </div>
    </div>
  );
}

export default function ProjectShowcase({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`showcase-card ${featured ? "showcase-featured" : ""}`}>
      <div className="project-visual">
        {project.screenshot ? (
          <Image src={project.screenshot} alt={`Screenshot of ${project.title}`} width={1200} height={750} className="project-screenshot" sizes="(max-width: 768px) 100vw, 700px" />
        ) : (
          <>
            <IllustratedPreview kind={project.kind}/>
            <span className="illustration-label">Illustrative preview</span>
          </>
        )}
      </div>
      <div className="showcase-content">
        <div className="showcase-topline"><span>{project.category}</span><span>/{project.number}</span></div>
        <h3 className="showcase-title">{project.title}</h3>
        <p className="muted-text text-sm leading-7">{project.description}</p>
        <p className="showcase-outcome">{project.outcome}</p>
        <div className="showcase-tags">{project.tags.map(tag=><span key={tag} className="project-tag">{tag}</span>)}</div>
        <div className="showcase-links">
          {project.demo&&<a href={project.demo} target="_blank" rel="noopener noreferrer">Live demo ↗</a>}
          {project.repo&&<a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
        </div>
      </div>
    </article>
  );
}
