"use client";

import { FileText, Download, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui";
import { DOCUMENTS } from "@/config/site";

export default function CredentialsSection() {
  return (
    <section
      id="zeugnisse"
      className="bg-gradient-to-b from-white to-warm-alt/40 px-6 py-24"
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="section-label text-teal">Qualifikation & Nachweise</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Zeugnisse & Erfahrungen</h2>
          <div className="section-divider bg-teal-light" />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <p className="font-display text-xl italic leading-relaxed text-brand-muted">
              Transparenz schafft Vertrauen. Hier finden Sie wichtige Nachweise,
              Bewilligungen und Weiterbildungen als PDF zum Ansehen oder Download.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {DOCUMENTS.map((document, index) => (
            <Reveal key={document.href} delay={0.2 + index * 0.08}>
              <article className="flex h-full flex-col rounded-[24px] border border-teal-pale bg-white p-8 shadow-[0_10px_30px_rgba(26,138,125,0.06)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-pale">
                  {index === 0 ? (
                    <ShieldCheck size={28} className="text-teal" />
                  ) : (
                    <FileText size={28} className="text-teal" />
                  )}
                </div>

                <h3 className="mb-3 font-display text-[24px] leading-tight text-brand-text">
                  {document.title}
                </h3>
                <p className="mb-6 flex-1 font-body text-sm leading-relaxed text-brand-muted">
                  {document.description}
                </p>

                <a
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 self-start rounded-full border border-teal/15 bg-teal-pale px-5 py-3 font-body text-sm font-semibold text-teal transition-colors duration-300 hover:bg-teal hover:text-white"
                >
                  <Download size={16} />
                  PDF öffnen
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
