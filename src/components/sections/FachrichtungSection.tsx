"use client";

import { motion } from "framer-motion";
import { BookOpen, Zap, Hand } from "lucide-react";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = [BookOpen, Zap, Hand];

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

interface FachrichtungSectionProps {
  onBooking: () => void;
}

export default function FachrichtungSection({ onBooking }: FachrichtungSectionProps) {
  const { t } = useLanguage();
  const f = t.fachrichtung;

  return (
    <section className="bg-white px-6 py-24">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <Reveal>
          <div className="section-label text-teal">{f.label}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">{f.title}</h2>
          <div className="section-divider bg-teal-light" />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="font-body text-[15px] text-brand-muted text-center max-w-[680px] mx-auto mb-14 leading-relaxed">
            {f.intro}
          </p>
        </Reveal>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariants}
        >
          {f.cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <motion.article
                key={i}
                variants={cardItem}
                className="flex flex-col rounded-[24px] border border-teal-pale bg-white p-8 shadow-[0_10px_30px_rgba(26,138,125,0.06)]"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 350, damping: 20 }}
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-pale"
                >
                  <Icon size={26} className="text-teal" />
                </motion.div>
                <h3 className="mb-3 font-display text-[22px] leading-tight text-brand-text">
                  {card.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-brand-muted flex-1">
                  {card.text}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Approach callout */}
        <Reveal delay={0.3}>
          <div className="rounded-[24px] bg-teal-pale px-8 py-10 md:px-12 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="font-display text-[22px] text-brand-text mb-3">
                {f.approach.title}
              </h3>
              <p className="font-body text-[15px] text-brand-muted leading-relaxed">
                {f.approach.text}
              </p>
            </div>
            <motion.button
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              onClick={onBooking}
              className="shrink-0 px-8 py-3.5 rounded-full bg-teal text-white font-body text-[14px] font-semibold border-none cursor-pointer shadow-[0_8px_24px_rgba(26,138,125,0.25)]"
            >
              {f.approach.cta}
            </motion.button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
