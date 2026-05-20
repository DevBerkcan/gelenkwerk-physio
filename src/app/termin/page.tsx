"use client";

import { useEffect } from "react";

export default function TerminPage() {
  useEffect(() => {
    const handler = (event: MessageEvent) => {
      if (!event.data) return;
      try {
        const data = JSON.parse(event.data);
        const iframe = document.getElementById("t-booking") as HTMLIFrameElement | null;
        if (data && iframe) {
          iframe.style.height = data.height + "px";
          window.scrollTo(0, 0);
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  return (
    <main className="min-h-screen pt-24 pb-16 bg-cream">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-display text-3xl font-semibold text-brand-text mb-8 text-center">
          Termin buchen
        </h1>
        <iframe
          id="t-booking"
          src="https://www.tbooking.ch/de/book/4743-6727?embedded=true&primary-color=9d5151&secondary-color=0274be"
          style={{ width: "100%", minHeight: "700px", border: "none" }}
          allow="camera *"
        />
      </div>
    </main>
  );
}
