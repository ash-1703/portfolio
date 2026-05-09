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
    // In case the script already loaded before this component mounted
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({
        url: "https://calendly.com/aishwaryasambhajitupe/15",
        text: "Schedule time with me",
        color: "#3b82f6",
        textColor: "#ffffff",
        branding: true,
      });
    }
  }, []);

  return (
    <>
      {/* Calendly badge CSS */}
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      {/* Move the badge to bottom-left so it doesn't overlap the AI chat widget */}
      <style>{`
        .calendly-badge-widget {
          right: auto !important;
          left: 20px !important;
        }
      `}</style>

      {/* Calendly badge JS — initialise once loaded */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.Calendly?.initBadgeWidget({
            url: "https://calendly.com/aishwaryasambhajitupe/15",
            text: "Schedule time with me",
            color: "#3b82f6",
            textColor: "#ffffff",
            branding: true,
          });
        }}
      />
    </>
  );
}

