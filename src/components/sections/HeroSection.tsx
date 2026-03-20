"use client";

import { Reveal } from "@/components/ui";
import { PHOTOS } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onNavigate: (id: string) => void;
  onBooking: () => void;
}

export default function HeroSection({ onNavigate, onBooking }: HeroSectionProps) {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-hero-zoom"
        style={{ backgroundImage: `url(${PHOTOS.hero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal/75 via-teal-dark/60 to-brand-dark/70" />

      {/* Floating decorative circles */}
      <div className="absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full border border-white/10 animate-float" />
      <div className="absolute bottom-[15%] left-[10%] w-[200px] h-[200px] rounded-full border border-white/[0.08] animate-float-slow" />

      {/* Content */}
      <div className="max-w-[1000px] mx-auto px-6 pt-36 pb-24 relative z-10 text-center">
        <Reveal delay={0.1}>
          <div className="inline-block px-6 py-2 rounded-full bg-white/[0.12] border border-white/20 backdrop-blur-lg font-body text-xs text-white/90 tracking-[3px] uppercase mb-7">
            {t.hero.location}
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <h1 className="font-display text-[clamp(42px,8vw,88px)] font-normal text-white leading-[1.05] mb-3">
            Gelenkwerk
          </h1>
        </Reveal>

        <Reveal delay={0.35}>
          <p className="font-body text-[clamp(14px,2.2vw,20px)] text-white/80 tracking-[6px] uppercase mb-10 font-light">
            {t.hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="font-display text-[clamp(17px,2.5vw,23px)] text-white/85 leading-relaxed max-w-[620px] mx-auto mb-12 italic">
            {t.hero.description}
          </p>
        </Reveal>

        <Reveal delay={0.65}>
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={onBooking}
              className="px-10 py-4 rounded-full bg-white text-teal font-body text-[15px] font-bold border-none cursor-pointer shadow-[0_8px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 hover:scale-[1.02] transition-all duration-400"
            >
              {t.hero.book}
            </button>
            <button
              onClick={() => onNavigate("kontakt")}
              className="px-10 py-4 rounded-full bg-white/10 border-[1.5px] border-white/40 text-white font-body text-[15px] font-medium backdrop-blur-lg cursor-pointer hover:bg-white/20 transition-all duration-400"
            >
              {t.hero.contact}
            </button>
          </div>
        </Reveal>

        {/* Scroll indicator */}
        <Reveal delay={0.9}>
          <div className="mt-[72px] flex flex-col items-center">
            <div className="w-7 h-11 rounded-[14px] border-2 border-white/30 flex justify-center pt-2">
              <div className="w-1 h-2.5 rounded-sm bg-white/60 animate-scroll-dot" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
