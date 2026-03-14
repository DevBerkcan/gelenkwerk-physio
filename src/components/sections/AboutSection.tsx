"use client";

import { Reveal } from "@/components/ui";
import { PHOTOS } from "@/config/site";

const SPECIALTIES = ["Physiotherapie", "Massage", "Lymphdrainage", "Domizilbehandlung"];

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="bg-white overflow-hidden">
      {/* Parallax image banner */}
      <div className="relative h-[350px] overflow-hidden">
        <div
          className="absolute inset-x-0 -inset-y-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${PHOTOS.about})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/10 to-brand-dark/35" />
      </div>

      <div className="max-w-[900px] mx-auto px-6 py-20 pb-24">
        <Reveal>
          <div className="section-label text-teal">Ihre Therapeutin</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">Über uns</h2>
          <div className="section-divider bg-clay" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with offset shadow */}
          <Reveal delay={0.2} direction="right">
            <div className="rounded-3xl overflow-hidden relative shadow-[20px_20px_0_#e8f5f2]">
              <img
                src={PHOTOS.contact}
                alt="Praxis Gelenkwerk"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-8 bg-gradient-to-t from-brand-dark/80 to-transparent">
                <div className="font-display text-[22px] text-white font-medium">
                  Kiriaki Chatzidimitriadou
                </div>
                <div className="font-body text-[13px] text-white/70">
                  Dipl. Physiotherapeutin
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text content */}
          <div>
            <Reveal delay={0.3}>
              <h3 className="font-display text-[28px] font-medium text-brand-text mb-5">
                Kompetenz trifft Einfühlsamkeit
              </h3>
            </Reveal>

            <Reveal delay={0.4}>
              <p className="font-body text-[15px] leading-relaxed text-brand-muted mb-5">
                Mit langjähriger Erfahrung betreut Kiriaki Chatzidimitriadou
                Patientinnen und Patienten mit vielfältigen Beschwerden — von
                akuten Schmerzen bis hin zu chronischen
                Bewegungseinschränkungen.
              </p>
            </Reveal>

            <Reveal delay={0.5}>
              <p className="font-body text-[15px] leading-relaxed text-brand-muted mb-7">
                In der Praxis an der Elisabethenstrasse vereinen sich fachliche
                Kompetenz und eine persönliche, einfühlsame Betreuung.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-wrap gap-2.5">
                {SPECIALTIES.map((specialty) => (
                  <span
                    key={specialty}
                    className="px-4 py-2 rounded-3xl bg-teal-pale font-body text-[13px] text-teal-dark font-semibold"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
