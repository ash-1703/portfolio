import Link from "next/link";

export default function RAGHealthcarePost() {
  return (
    <main className="min-h-screen">
      {/* Back Link */}
      <section className="mx-auto max-w-3xl px-4 pt-8">
        <Link 
          href="/learning/technology"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Technology Learning
        </Link>
      </section>

      {/* Article Header */}
      <article className="mx-auto max-w-3xl px-4 pb-20">
        {/* Date & Emoji */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">💻</span>
          <time className="text-slate-400">Jan 17, 2026</time>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Retrieval-Augmented Generation in <span className="gradient-text">Healthcare</span>
        </h1>

        {/* Divider */}
        <div className="mb-8 pb-8 border-b border-white/10"></div>

        {/* Content */}
        <div className="prose prose-invert prose-cyan max-w-none">
          
          {/* What I Learned Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400">What I Learned</h2>
            <ul className="space-y-4 text-slate-200">
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1.5 font-bold">•</span>
                <div>
                  <strong>RAG reduces hallucinations in clinical QA systems.</strong>
                  <p className="mt-2 text-slate-400">
                    By grounding language models in retrieved documents (clinical guidelines, 
                    research papers, medical databases), RAG significantly reduces the risk of 
                    generating false or dangerous medical information. The model can cite its 
                    sources, making outputs more verifiable.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1.5 font-bold">•</span>
                <div>
                  <strong>Dataset provenance matters more than model size.</strong>
                  <p className="mt-2 text-slate-400">
                    In healthcare applications, knowing <em>where</em> your data comes from 
                    (clinical trials, peer-reviewed journals, FDA guidelines) is more critical 
                    than having a larger model. A smaller model with high-quality, curated 
                    sources outperforms a large model trained on noisy web data.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="text-cyan-500 mt-1.5 font-bold">•</span>
                <div>
                  <strong>Evaluation metrics must include medical safety checks.</strong>
                  <p className="mt-2 text-slate-400">
                    Standard NLP metrics (BLEU, ROUGE) aren't enough. Healthcare RAG systems 
                    need domain-specific evaluation: factual consistency with source documents, 
                    detection of contraindications, and alignment with clinical best practices.
                  </p>
                </div>
              </li>
            </ul>
          </section>

          {/* Connection to Health Section */}
          <section className="border-l-4 border-cyan-500 pl-8 py-6 bg-cyan-500/5 rounded-r mb-12">
            <h2 className="text-xl font-bold mb-4 text-cyan-400">🏥 Connection to Health</h2>
            <p className="text-slate-200 leading-relaxed mb-4">
              RAG can be used for <strong>guideline-based triage systems in low-resource clinics</strong>. 
              Imagine a community health worker in a rural area using a mobile app that:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-200 ml-4">
              <li>Takes patient symptoms as input</li>
              <li>Retrieves relevant sections from WHO treatment guidelines</li>
              <li>Generates context-appropriate triage recommendations</li>
              <li>Cites the specific guideline sections used</li>
            </ol>
            <p className="text-slate-200 leading-relaxed mt-4">
              This approach provides expert-level guidance without requiring constant internet 
              connectivity (documents can be cached locally) and builds trust through 
              transparency—health workers can verify the system's reasoning.
            </p>
          </section>

          {/* Technical Deep Dive */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Technical Architecture (Conceptual)</h2>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-sm font-mono text-slate-200">
              <div className="mb-2"><span className="text-cyan-400">1. Query:</span> "Patient with fever + cough + difficulty breathing"</div>
              <div className="mb-2"><span className="text-cyan-400">2. Retrieval:</span> Semantic search → WHO COVID-19 Guidelines (Sec 4.2)</div>
              <div className="mb-2"><span className="text-cyan-400">3. Augmentation:</span> Inject guidelines into prompt context</div>
              <div className="mb-2"><span className="text-cyan-400">4. Generation:</span> LLM produces triage decision with citations</div>
              <div><span className="text-cyan-400">5. Validation:</span> Safety filter checks for contradictions</div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Next Steps to Explore</h2>
            <ul className="space-y-2 text-slate-200">
              <li>→ Research RAG evaluation frameworks specific to healthcare (e.g., MedRAG, BioASQ)</li>
              <li>→ Investigate how to handle outdated guidelines (versioning + temporal retrieval)</li>
              <li>→ Explore multilingual RAG for global health applications</li>
              <li>→ Look into privacy-preserving RAG (on-device retrieval for patient data)</li>
            </ul>
          </section>

        </div>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10 flex justify-between items-center">
          <Link 
            href="/learning/technology"
            className="text-cyan-400 hover:text-cyan-300 text-sm"
          >
            ← All Technology Posts
          </Link>
          {/* Add next post link when you have more posts */}
        </div>
      </article>
    </main>
  );
}
