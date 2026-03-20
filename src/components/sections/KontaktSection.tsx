"use client";

import { Reveal, GelenkwerkLogo } from "@/components/ui";
import { CONTACT } from "@/config/site";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface KontaktSectionProps {
  onBooking: () => void;
}

export default function KontaktSection({ onBooking }: KontaktSectionProps) {
  const { t } = useLanguage();

  const CONTACT_ITEMS = [
    {
      icon: MapPin,
      title: t.contact.address,
      content: `${CONTACT.address.street}\n${CONTACT.address.zip} ${CONTACT.address.city}`,
    },
    {
      icon: Phone,
      title: t.contact.phone,
      isPhone: true,
    },
    {
      icon: Clock,
      title: t.contact.appointment,
      content: t.contact.byAppointment,
    },
  ];

  return (
    <section
      id="kontakt"
      className="bg-gradient-to-br from-warm-alt to-cream py-24 px-6"
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
          <div className="section-label text-teal">{t.contact.label}</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="section-title">{t.contact.title}</h2>
          <div className="section-divider bg-teal-light" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact card */}
          <Reveal delay={0.2}>
            <div className="p-11 rounded-3xl bg-white border border-teal-pale shadow-[0_4px_24px_rgba(26,138,125,0.06)]">
              <div className="flex items-center gap-3 mb-8">
                <GelenkwerkLogo size={32} />
                <div>
                  <div className="font-display text-[22px] font-semibold text-brand-text">
                    Praxis Elisabethen
                  </div>
                  <div className="font-body text-[13px] text-teal font-semibold">
                    Gelenkwerk Physiotherapie
                  </div>
                </div>
              </div>

              {CONTACT_ITEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.title} delay={0.25 + index * 0.1}>
                    <div className="flex gap-4 items-start mb-6 p-4 rounded-2xl transition-colors duration-300 hover:bg-teal-pale/40">
                      <div className="w-12 h-12 rounded-[14px] flex-shrink-0 bg-teal-pale flex items-center justify-center">
                        <Icon size={20} className="text-teal" />
                      </div>
                      <div>
                        <div className="font-body text-sm text-brand-text font-bold mb-1">
                          {item.title}
                        </div>
                        {item.isPhone ? (
                          <div>
                            {CONTACT.phone.map((phone) => (
                              <a
                                key={phone}
                                href={`tel:${phone.replace(/\s/g, "")}`}
                                className="block font-body text-sm text-brand-muted no-underline hover:text-teal transition-colors"
                              >
                                {phone}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <div className="font-body text-sm text-brand-muted leading-relaxed whitespace-pre-line">
                            {item.content}
                          </div>
                        )}
                      </div>
                    </div>
                  </Reveal>
                );
              })}

              <Reveal delay={0.55}>
                {CONTACT.instagram && (
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="mb-3 flex items-center justify-center gap-2 rounded-full border border-teal/15 bg-teal-pale px-5 py-3 font-body text-sm font-semibold text-teal no-underline transition-colors duration-300 hover:bg-teal hover:text-white"
                  >
                    <Instagram size={16} />
                    {t.contact.instagram}
                  </a>
                )}
              </Reveal>

              <Reveal delay={0.6}>
                <button
                  onClick={onBooking}
                  className="btn-primary w-full"
                >
                  {t.contact.book}
                </button>
              </Reveal>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.3} direction="left">
            <div className="rounded-3xl overflow-hidden h-full min-h-[480px] border border-teal-pale shadow-[0_4px_24px_rgba(26,138,125,0.06)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.5!2d7.5885!3d47.5495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4791b9a8d7c2e5a7%3A0x0!2sElisabethenstrasse+41%2C+4051+Basel!5e0!3m2!1sde!2sch!4v1700000000000"
                width="100%"
                height="100%"
                className="border-0 min-h-[480px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gelenkwerk Standort"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
