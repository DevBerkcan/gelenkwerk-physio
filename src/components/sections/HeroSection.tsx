"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { PHOTOS } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

const HeroCanvas = dynamic(() => import("@/components/ui/HeroCanvas"), {
  ssr: false,
});

interface HeroSectionProps {
  onNavigate: (id: string) => void;
  onBooking: () => void;
}

const ease = [0.16, 1, 0.3, 1];

export default function HeroSection({ onNavigate, onBooking }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Hintergrundbild */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: `url(${PHOTOS.hero})`, zIndex: 0 }}
      />

      {/* Three.js Partikel (Desktop only) */}
      <div className="hidden md:block absolute inset-0" style={{ zIndex: 2 }}>
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      {/* Dekorative Kreise */}
      <div className="absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full border border-white/10 animate-float" style={{ zIndex: 1 }} />
      <div className="absolute bottom-[15%] left-[10%] w-[200px] h-[200px] rounded-full border border-white/[0.08] animate-float-slow" style={{ zIndex: 1 }} />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal/75 via-teal-dark/60 to-brand-dark/70" style={{ zIndex: 3 }} />

      {/* Content */}
      <div className="max-w-[1000px] mx-auto px-6 pt-36 pb-24 text-center" style={{ position: "relative", zIndex: 10 }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="inline-block px-6 py-2 rounded-full bg-white/[0.12] border border-white/20 backdrop-blur-lg font-body text-xs text-white/90 tracking-[3px] uppercase mb-7"
        >
          {t.hero.location}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease, delay: 0.25 }}
          className="font-display text-[clamp(42px,8vw,88px)] font-normal text-white leading-[1.05] mb-3"
        >
          Gelenkwerk
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.4 }}
          className="font-body text-[clamp(14px,2.2vw,20px)] text-white/80 tracking-[6px] uppercase mb-10 font-light"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.55 }}
          className="font-display text-[clamp(17px,2.5vw,23px)] text-white/85 leading-relaxed max-w-[620px] mx-auto mb-12 italic"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.7 }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            onClick={onBooking}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="px-10 py-4 rounded-full bg-white text-teal font-body text-[15px] font-bold border-none cursor-pointer shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
          >
            {t.hero.book}
          </motion.button>
          <motion.button
            onClick={() => onNavigate("kontakt")}
            whileHover={{ y: -3, backgroundColor: "rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="px-10 py-4 rounded-full bg-white/10 border-[1.5px] border-white/40 text-white font-body text-[15px] font-medium backdrop-blur-lg cursor-pointer"
          >
            {t.hero.contact}
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease, delay: 1.0 }}
          className="mt-[72px] flex flex-col items-center"
        >
          <div className="w-7 h-11 rounded-[14px] border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2.5 rounded-sm bg-white/60 animate-scroll-dot" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
