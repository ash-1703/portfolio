"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (options: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
    };
  }
}

export default function CalendlyWidget() {
  useEffect(() => {
    // Intentionally don't auto-initialize a global badge.
    // We only load Calendly's assets so other components can call
    // Calendly.initPopupWidget(...) when the user explicitly requests scheduling.
  }, []);

  return (
    <>
      {/* Calendly badge CSS */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      {/* We intentionally don't inject badge CSS. Calendly will be used via popup calls from ChatWidget. */}
      {/* Hide any auto-inserted Calendly badge so it doesn't cover site UI; we rely on popups instead. */}
      <style>{`
        .calendly-badge-widget, .calendly-badge, .calendly-appointment-widget { display: none !important; }
      `}</style>

      {/* Calendly badge JS — initialise once loaded */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        // Intentionally do not call initBadgeWidget — we'll open Calendly via popup when the user requests scheduling.
      />
    </>
  );
}

