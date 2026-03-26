"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui";
import { PHOTOS } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const PHYSIO_CONTENT = {
  de: {
    label: "Unsere Leistungen",
    title: "Physiotherapie",
    intro:
      "Zu meinen Leistungen gehören neurologische Physiotherapie, Atemtherapie, Schwindeltherapie sowie gezielte Behandlungen nach Operationen und Verletzungen.",
    body:
      "Die Behandlung richtet sich nach Ihren Beschwerden, Zielen und ärztlichen Vorgaben. Auch Domizilbehandlungen sind möglich.",
    listTitle: "Zu meinen Leistungen gehören:",
    list: [
      "Neurologische Physiotherapie",
      "Physiotherapie nach Operationen und Verletzungen",
      "Atemtherapie",
      "Geh- und Gleichgewichtstraining",
      "Triggerpunkt-Therapie & Dry Needling",
      "Schwindeltherapie",
      "Lymphdrainage",
      "Faszientechniken",
      "Kinesiotaping & Taping",
      "Domizilbehandlungen (Behandlungen bei Ihnen zu Hause)",
    ],
    pricingTitle: "Tarife Physiotherapie",
    pricingItems: [
      { title: "30 Minuten", description: "Einzelsitzungspauschale", price: "CHF 77.00" },
      { title: "45 Minuten", description: "Einzelsitzungspauschale", price: "CHF 114.50" },
      { title: "60 Minuten", description: "Einzelsitzungspauschale", price: "CHF 152.00" },
    ],
    extrasTitle: "Weitere private Leistungen",
    extras: [
      {
        title: "Verpasste Konsultation",
        description: "30 Min / 45 Min / 60 Min",
        price: "CHF 50.00 / 75.00 / 100.00",
      },
      {
        title: "Tape",
        description: "Tape L 5 m / B 5 cm (EKP pro 2.5 m)",
        price: "Nach Aufwand",
      },
      {
        title: "Hausbesuch",
        description: "Zuschlag Anfahrt",
        price: "CHF 40.00",
      },
    ],
  },
  en: {
    label: "Our Services",
    title: "Physiotherapy",
    intro:
      "My services include neurological physiotherapy, respiratory therapy, vertigo therapy, and targeted treatment after operations and injuries.",
    body:
      "Treatment is tailored to your complaints, goals, and medical requirements. Home visits are also available.",
    listTitle: "My services include:",
    list: [
      "Neurological physiotherapy",
      "Physiotherapy after operations and injuries",
      "Respiratory therapy",
      "Gait and balance training",
      "Trigger point therapy & dry needling",
      "Vertigo therapy",
      "Lymphatic drainage",
      "Fascia techniques",
      "Kinesio taping & taping",
      "Home visits (treatment at your home)",
    ],
    pricingTitle: "Physiotherapy Rates",
    pricingItems: [
      { title: "30 minutes", description: "Single session flat rate", price: "CHF 77.00" },
      { title: "45 minutes", description: "Single session flat rate", price: "CHF 114.50" },
      { title: "60 minutes", description: "Single session flat rate", price: "CHF 152.00" },
    ],
    extrasTitle: "Additional private services",
    extras: [
      {
        title: "Missed consultation",
        description: "30 min / 45 min / 60 min",
        price: "CHF 50.00 / 75.00 / 100.00",
      },
      {
        title: "Tape",
        description: "Tape L 5 m / W 5 cm (cost price per 2.5 m)",
        price: "According to effort",
      },
      {
        title: "Home visit",
        description: "Travel surcharge",
        price: "CHF 40.00",
      },
    ],
  },
} as const;

interface PhysioSectionProps {
  onBooking: () => void;
}

export default function PhysioSection({ onBooking }: PhysioSectionProps) {
  const { lang, t } = useLanguage();
  const content = PHYSIO_CONTENT[lang];

  return (
    <section id="physiotherapie" className="bg-cream relative overflow-hidden">
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
            <div className="section-label text-teal-light text-left">{content.label}</div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="font-display text-[clamp(32px,4vw,48px)] font-normal text-brand-text mb-3 leading-tight">
              {content.title}
            </h2>
            <div className="w-12 h-[3px] bg-teal-light rounded-sm mb-7" />
          </Reveal>

          <Reveal delay={0.3}>
            <p className="font-display text-xl leading-relaxed text-brand-muted italic mb-5">
              {content.intro}
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="font-body text-[15px] leading-relaxed text-brand-muted mb-6">
              {content.body}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-6 py-16 pb-20">
        <Reveal>
          <h3 className="font-display text-[30px] text-brand-text mb-6">
            {content.listTitle}
          </h3>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {content.list.map((item) => (
            <motion.div
              key={item}
              variants={cardItem}
              whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(26,138,125,0.13)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="p-8 rounded-[20px] bg-white border border-teal-pale relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-10 h-[3px] bg-gradient-to-r from-teal to-teal-light rounded-br transition-all duration-500 hover:w-full" />
              <h3 className="font-display text-xl font-semibold text-brand-text mb-3">
                {item}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-[30px] text-brand-text mb-8">
              {content.pricingTitle}
            </h3>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {content.pricingItems.map((item, index) => (
              <Reveal key={item.title} delay={0.05 * index}>
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

          <Reveal delay={0.15}>
            <h4 className="font-display text-[24px] text-brand-text mb-5">
              {content.extrasTitle}
            </h4>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {content.extras.map((item, index) => (
              <Reveal key={item.title} delay={0.1 + index * 0.05}>
                <div className="rounded-[22px] border border-teal-pale/80 bg-warm-alt/60 p-6">
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
        </div>

        <Reveal delay={0.2}>
          <button onClick={onBooking} className="btn-primary mt-12">
            {t.physio.cta}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
