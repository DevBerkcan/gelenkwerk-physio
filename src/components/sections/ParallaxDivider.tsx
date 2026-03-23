"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PHOTOS } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

export default function ParallaxDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-18%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);

  const quote = lang === "de"
    ? { text: "Bewegung ist Leben.", sub: "Wir helfen Ihnen, es zurückzugewinnen." }
    : { text: "Movement is life.", sub: "We help you get it back." };

  return (
    <div ref={ref} className="relative h-[320px] overflow-hidden">
      <motion.div
        className="absolute inset-x-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${PHOTOS.physio2})`,
          y,
          top: "-15%",
          bottom: "-15%",
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 to-brand-dark/55"
        style={{ opacity }}
      />

      {/* Quote overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(22px,4vw,36px)] text-white font-normal italic leading-tight mb-3"
        >
          &ldquo;{quote.text}&rdquo;
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="font-body text-[14px] text-white/75 tracking-wider uppercase"
        >
          {quote.sub}
        </motion.p>
      </div>
    </div>
  );
}
