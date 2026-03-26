"use client";

import { Reveal } from "@/components/ui";
import { PHOTOS } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

const MASSAGE_CONTENT = {
  de: {
    label: "Private Leistung",
    title: "Klassische Massage",
    intro:
      "Die klassische Massage wird als private Leistung angeboten und richtet sich individuell nach Ihren Beschwerden und Bedürfnissen.",
    body:
      "Mit ärztlicher Verordnung übernimmt die Grundversicherung (KVG / UVG / IV / MV) die physiotherapeutischen Leistungen gemäss Tarif. Ohne Verordnung gelten unsere privaten Massagetarife.",
    coverageTitle: "Kostenübernahme",
    coverage:
      "Mit ärztlicher Verordnung übernimmt die Grundversicherung (KVG / UVG / IV / MV) gemäss Tarif. Ohne Verordnung gelten unsere Massagetarife.",
    pricingTitle: "Tarife & Kostenübernahme",
    pricingItems: [
      { title: "30 Minuten", description: "Einzelsitzungspauschale", price: "CHF 77.00" },
      { title: "45 Minuten", description: "Einzelsitzungspauschale", price: "CHF 114.50" },
      { title: "60 Minuten", description: "Einzelsitzungspauschale", price: "CHF 152.00" },
    ],
    extrasTitle: "Weitere private Leistungen",
    extras: [
      { title: "Klassische Massage", description: "Tarif", price: "CHF 12.50 / 5 Min" },
      {
        title: "Verpasste Konsultation",
        description: "30 Min / 45 Min / 60 Min",
        price: "CHF 50.00 / 75.00 / 100.00",
      },
      {
        title: "Tape",
        description: "Tape L 5 m / B 5 cm (EKP pro 2.5 m)",
        price: "CHF 8.90",
      },
      {
        title: "Telefonische Auskunft / Aktenstudium / Arbeit in Abwesenheit",
        description: "Administrative und therapeutische Arbeit",
        price: "CHF 20.00",
      },
      {
        title: "Anamnese / Untersuchung / Befunderhebung / Diagnostik",
        description: "Tarif",
        price: "CHF 14.50 / 5 Min",
      },
    ],
  },
  en: {
    label: "Private Service",
    title: "Classical Massage",
    intro:
      "Classical massage is offered as a private service and is individually tailored to your complaints and needs.",
    body:
      "With a medical prescription, basic insurance (KVG / UVG / IV / MV) covers physiotherapy services according to the tariff. Without a prescription, our private massage rates apply.",
    coverageTitle: "Insurance coverage",
    coverage:
      "With a medical prescription, basic insurance (KVG / UVG / IV / MV) covers treatment according to the tariff. Without a prescription, our private massage rates apply.",
    pricingTitle: "Rates & Coverage",
    pricingItems: [
      { title: "30 minutes", description: "Single session flat rate", price: "CHF 77.00" },
      { title: "45 minutes", description: "Single session flat rate", price: "CHF 114.50" },
      { title: "60 minutes", description: "Single session flat rate", price: "CHF 152.00" },
    ],
    extrasTitle: "Additional private services",
    extras: [
      { title: "Classical massage", description: "Rate", price: "CHF 12.50 / 5 min" },
      {
        title: "Missed consultation",
        description: "30 min / 45 min / 60 min",
        price: "CHF 50.00 / 75.00 / 100.00",
      },
      {
        title: "Tape",
        description: "Tape L 5 m / W 5 cm (cost price per 2.5 m)",
        price: "CHF 8.90",
      },
      {
        title: "Phone consultation / record review / work in absence",
        description: "Administrative and therapeutic work",
        price: "CHF 20.00",
      },
      {
        title: "Medical history / examination / findings / diagnostics",
        description: "Rate",
        price: "CHF 14.50 / 5 min",
      },
    ],
  },
} as const;

interface MassageSectionProps {
  onBooking: () => void;
}

export default function MassageSection({ onBooking }: MassageSectionProps) {
  const { lang, t } = useLanguage();
  const content = MASSAGE_CONTENT[lang];

  return (
    <section id="massage" className="bg-warm relative overflow-hidden">
      <div className="absolute -top-[150px] -right-[150px] w-[400px] h-[400px] rounded-full bg-gradient-radial from-teal-pale to-transparent" />

      <div className="max-w-[1100px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <Reveal>
            <div className="section-label text-clay">{content.label}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="section-title">{content.title}</h2>
            <div className="section-divider bg-teal" />
          </Reveal>
        </div>

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
                {content.intro}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-body text-[15px] leading-relaxed text-brand-muted">
                {content.body}
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.2}>
          <div className="section-label text-teal mb-8">{content.pricingTitle}</div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="rounded-[28px] border border-teal-pale bg-white/70 p-8 md:p-10 mb-10">
            <div className="font-body text-[11px] tracking-[0.18em] uppercase text-teal mb-3">
              {content.coverageTitle}
            </div>
            <p className="font-display text-[22px] leading-relaxed text-brand-text italic">
              {content.coverage}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {content.pricingItems.map((item, index) => (
            <Reveal key={item.title} delay={0.1 + index * 0.05}>
              <div className="rounded-[24px] border border-teal-pale bg-white p-8 shadow-[0_10px_30px_rgba(26,138,125,0.06)]">
                <div className="font-display text-[34px] leading-none text-brand-text mb-2">
                  {item.title}
                </div>
                <div className="font-body text-sm text-brand-muted mb-5">
                  {item.description}
                </div>
                <div className="font-display text-[32px] text-teal">{item.price}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <h3 className="font-display text-[28px] text-brand-text mb-6">
            {content.extrasTitle}
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {content.extras.map((item, index) => (
            <Reveal key={item.title} delay={0.2 + index * 0.04}>
              <div className="rounded-[22px] border border-teal-pale/80 bg-white/80 p-6">
                <div className="font-body text-[11px] tracking-[0.16em] uppercase text-teal mb-2">
                  {item.title}
                </div>
                <div className="font-body text-sm text-brand-muted mb-3">
                  {item.description}
                </div>
                <div className="font-display text-[24px] text-brand-text">
                  {item.price}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <button onClick={onBooking} className="btn-primary mt-12">
            {t.nav.book}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
