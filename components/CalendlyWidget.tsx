"use client";

import Script from "next/script";

export default function CalendlyWidget() {
  return (
    <section id="book-a-call" className="py-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Book a Call</h2>
        <p className="text-slate-200 mt-3 max-w-xl mx-auto">
          Want to chat about a project, role, or collaboration? Pick a time that works for you.
        </p>
      </div>

      <div
        className="calendly-inline-widget mx-auto rounded-2xl overflow-hidden"
        data-url="https://calendly.com/aishwaryasambhajitupe/15?text_color=ffffff"
        style={{ minWidth: "320px", height: "700px" }}
      />

      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
