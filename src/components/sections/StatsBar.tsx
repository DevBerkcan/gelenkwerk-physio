"use client";

import { Reveal, CountUp } from "@/components/ui";

const STATS = [
  { value: 10, suffix: "+", label: "Jahre Erfahrung" },
  { value: 5, suffix: "", label: "Behandlungsarten" },
  { value: 100, suffix: "%", label: "Krankenkassen-anerkannt" },
];

export default function StatsBar() {
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
