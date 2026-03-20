"use client";

import { Reveal, CountUp } from "@/components/ui";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsBar() {
  const { t } = useLanguage();

  const STATS = [
    { value: 20, suffix: "+", label: t.stats.years },
    { value: 5, suffix: "", label: t.stats.treatments },
    { value: 100, suffix: "%", label: t.stats.insurance },
  ];

  return (
    <section className="bg-teal py-12 px-6">
      <div className="max-w-[900px] mx-auto flex justify-around flex-wrap gap-8">
        {STATS.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 0.15}>
            <div className="text-center min-w-[140px]">
              <div className="font-display text-[44px] font-normal text-white leading-none">
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <div className="font-body text-[13px] text-white/70 mt-2 tracking-wide">
                {stat.label}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
