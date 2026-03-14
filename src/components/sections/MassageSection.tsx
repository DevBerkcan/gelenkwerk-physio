"use client";

import { Reveal } from "@/components/ui";
import { PHOTOS, MASSAGE_PRICING } from "@/config/site";

interface MassageSectionProps {
  onBooking: () => void;
}

export default function MassageSection({ onBooking }: MassageSectionProps) {
  return (
    <section id="massage" className="bg-warm relative overflow-hidden">
      <div className="absolute -top-[150px] -right-[150px] w-[400px] h-[400px] rounded-full bg-gradient-radial from-teal-pale to-transparent" />

      <div className="max-w-[1100px] mx-auto px-6 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div className="section-label text-clay">Entspannung & Regeneration</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">Massage</h2>
            <div className="section-divider bg-teal" />
          </Reveal>
        </div>

        {/* Description with image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <Reveal delay={0.15}>
            <div className="rounded-3xl overflow-hidden">
              <img
                src={PHOTOS.massage1}
                alt="Massage Behandlung"
                className="w-full h-[380px] object-cover transition-transform duration-[6s] hover:scale-105"
              />
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.2}>
              <p className="font-display text-xl leading-relaxed text-brand-text italic mb-5">
                Massagen im Gelenkwerk dienen der gezielten Entspannung der
                Muskulatur, der Förderung der Durchblutung sowie der
                Unterstützung physiotherapeutischer Behandlungen.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-[15px] leading-relaxed text-brand-muted">
                Jede Anwendung wird individuell auf Ihre Beschwerden,
                Bedürfnisse und Ziele abgestimmt — ob bei muskulären
                Verspannungen, zur Regeneration nach Belastung oder einfach
                zur bewussten Entspannung.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Pricing header */}
        <Reveal delay={0.2}>
          <div className="section-label text-teal mb-8">Preise & Pakete</div>
        </Reveal>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[700px] mx-auto">
          {MASSAGE_PRICING.map((pricing, index) => (
            <Reveal key={pricing.minutes} delay={0.25 + index * 0.1}>
              <div
                onClick={onBooking}
                className={`p-10 rounded-3xl text-center cursor-pointer card-hover ${
                  pricing.popular
                    ? "bg-gradient-to-br from-teal-pale/40 to-white border-2 border-teal/25"
                    : "bg-white border border-teal-pale"
                } relative`}
              >
                {pricing.popular && (
                  <span className="absolute top-4 right-4 px-3.5 py-1 rounded-full bg-teal font-body text-[11px] text-white font-bold">
                    Beliebt
                  </span>
                )}

                <div
                  className="w-20 h-20 rounded-full mx-auto mb-5 bg-cover bg-center border-[3px]"
                  style={{
                    backgroundImage: `url(${index === 0 ? PHOTOS.massage2 : PHOTOS.wellness})`,
                    borderColor: pricing.popular ? "rgba(26,138,125,0.25)" : "#e8f5f2",
                  }}
                />

                <div className="font-body text-[11px] text-teal tracking-widest uppercase mb-2">
                  Massage
                </div>
                <div className="font-display text-[56px] font-normal text-brand-text leading-none">
                  {pricing.minutes}
                </div>
                <div className="font-body text-sm text-brand-muted mb-5">Minuten</div>

                <div className="font-display text-4xl font-medium text-teal mb-1.5">
                  {pricing.price}
                </div>
                <div className="font-body text-[13px] text-brand-light mb-6">
                  Effektive Behandlungszeit ca. {pricing.effectiveMinutes} Min.
                </div>

                {/* 10er Card */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-pale to-warm">
                  <div className="font-body text-[11px] text-teal font-bold tracking-wide uppercase mb-1.5">
                    10er-Karte
                  </div>
                  <div className="font-display text-[22px] text-brand-text">
                    {pricing.tenCardPrice}
                  </div>
                  <div className="font-body text-xs text-clay font-semibold mt-1">
                    Sie sparen {pricing.tenCardSaving}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
