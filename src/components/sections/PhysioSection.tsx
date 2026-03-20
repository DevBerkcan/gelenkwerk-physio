"use client";

import { Reveal } from "@/components/ui";
import { SERVICES, PHOTOS } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

interface PhysioSectionProps {
  onBooking: () => void;
}

export default function PhysioSection({ onBooking }: PhysioSectionProps) {
  const { t } = useLanguage();
  const physioServices = SERVICES.filter((s) => s.category === "physio");

  return (
    <section id="physiotherapie" className="bg-cream relative overflow-hidden">
      {/* Split layout: image + text */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[550px]">
        <Reveal direction="right" className="relative overflow-hidden min-h-[400px]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-[6s] hover:scale-105"
            style={{ backgroundImage: `url(${PHOTOS.physio1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cream md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cream md:hidden" />
        </Reveal>

        <div className="py-20 px-8 md:px-12 flex flex-col justify-center">
          <Reveal delay={0.1}>
            <div className="section-label text-teal-light text-left">
              {t.physio.label}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal text-brand-text mb-3 leading-tight">
              {t.physio.title}
            </h2>
            <div className="w-12 h-[3px] bg-teal-light rounded-sm mb-7" />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-display text-xl leading-relaxed text-brand-muted italic mb-5">
              {t.physio.intro}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="font-body text-[15px] leading-relaxed text-brand-muted mb-6">
              {t.physio.body}
            </p>
          </Reveal>

          <Reveal delay={0.5}>
            <button onClick={onBooking} className="btn-primary self-start">
              {t.physio.cta}
            </button>
          </Reveal>
        </div>
      </div>

      {/* Service cards */}
      <div className="max-w-[1100px] mx-auto px-6 py-16 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {physioServices.map((service, index) => {
            const translated = t.physio.services[service.id as keyof typeof t.physio.services];
            return (
              <Reveal key={service.id} delay={0.1 + index * 0.12}>
                <div
                  onClick={onBooking}
                  className="p-8 rounded-[20px] bg-white border border-teal-pale relative overflow-hidden cursor-pointer card-hover"
                >
                  <div className="absolute top-0 left-0 w-10 h-[3px] bg-gradient-to-r from-teal to-teal-light rounded-br transition-all duration-500 hover:w-full" />
                  <h3 className="font-display text-xl font-semibold text-brand-text mb-2">
                    {translated?.name ?? service.name}
                  </h3>
                  <span className="inline-block px-3.5 py-1 rounded-full bg-teal-pale font-body text-xs text-teal font-semibold mb-3">
                    {translated?.durationLabel ?? service.durationLabel}
                  </span>
                  <p className="font-body text-sm leading-relaxed text-brand-muted">
                    {translated?.description ?? service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
