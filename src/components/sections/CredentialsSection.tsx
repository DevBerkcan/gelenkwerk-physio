"use client";

import { Award, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export default function CredentialsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="zeugnisse"
      className="bg-gradient-to-b from-white to-warm-alt/40 px-6 py-24"
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="section-label text-teal">{t.credentials.label}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">{t.credentials.title}</h2>
          <div className="section-divider bg-teal-light" />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mb-12 max-w-[760px] text-center">
            <p className="font-display text-xl italic leading-relaxed text-brand-muted">
              {t.credentials.description}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.credentials.documents.map((document, index) => {
            const translated = t.credentials.documents[index];
            return (
              <Reveal key={document.title} delay={0.2 + index * 0.08}>
                <article className="flex h-full flex-col rounded-[24px] border border-teal-pale bg-white p-8 shadow-[0_10px_30px_rgba(26,138,125,0.06)]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-pale">
                    {index === 0 ? (
                      <ShieldCheck size={28} className="text-teal" />
                    ) : (
                      <Award size={28} className="text-teal" />
                    )}
                  </div>

                  <h3 className="mb-3 font-display text-[24px] leading-tight text-brand-text">
                    {translated.title}
                  </h3>
                  <p className="flex-1 font-body text-sm leading-relaxed text-brand-muted">
                    {translated.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
