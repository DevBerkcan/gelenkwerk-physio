"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Reveal } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

const cardVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
};

const AVATAR_COLORS = [
  "bg-teal-pale text-teal",
  "bg-[#fdf0e8] text-[#c4622d]",
  "bg-[#eef4fb] text-[#2d6a9f]",
];

export default function BewertungenSection() {
  const { t } = useLanguage();
  const b = t.bewertungen;

  return (
    <section className="bg-warm px-6 py-24">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <Reveal>
          <div className="section-label text-teal">{b.label}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">{b.title}</h2>
          <div className="section-divider bg-teal-light" />
        </Reveal>

        {/* Stars row */}
        <Reveal delay={0.15}>
          <div className="flex justify-center items-center gap-1.5 mb-12">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-teal text-teal" />
            ))}
            <span className="ml-2 font-body text-sm text-brand-muted">5.0 / 5.0</span>
          </div>
        </Reveal>

        {/* Review cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={cardVariants}
        >
          {b.reviews.map((review, i) => (
            <motion.article
              key={i}
              variants={cardItem}
              className="flex flex-col rounded-[24px] bg-white border border-teal-pale p-7 shadow-[0_8px_28px_rgba(26,138,125,0.07)] relative"
            >
              {/* Quote icon */}
              <Quote
                size={28}
                className="text-teal/20 absolute top-6 right-6"
                strokeWidth={1.5}
              />

              {/* Stars per card */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} className="fill-teal text-teal" />
                ))}
              </div>

              {/* Quote text */}
              <p className="font-body text-[14.5px] text-brand-muted leading-relaxed flex-1 mb-6 italic">
                „{review.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-sm flex-shrink-0 ${AVATAR_COLORS[i]}`}
                >
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="font-body text-sm font-semibold text-brand-text">
                    {review.name}
                  </div>
                  <div className="font-body text-xs text-brand-muted">
                    {review.treatment}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
