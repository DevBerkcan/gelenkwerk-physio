"use client";

import Image from "next/image";
import { GelenkwerkLogo } from "@/components/ui";
import { NAV_ITEMS, CONTACT } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onBooking: () => void;
}

export default function Footer({ onNavigate, onBooking }: FooterProps) {
  const { t } = useLanguage();

  const navLabels = [
    t.nav.home,
    t.nav.physio,
    t.nav.massage,
    t.nav.about,
    t.nav.credentials,
    t.nav.contact,
  ];

  return (
    <footer className="bg-brand-dark py-14 px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 pb-10 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <GelenkwerkLogo size={28} />
              <span className="font-display text-lg font-semibold text-white">
                Gelenkwerk
              </span>
            </div>
            <p className="font-body text-[13px] text-white/50 leading-relaxed mb-4">
              {t.footer.tagline}
            </p>
            <button
              onClick={onBooking}
              className="px-6 py-2.5 rounded-full bg-teal text-white border-none cursor-pointer font-body text-[13px] font-semibold"
            >
              {t.footer.book}
            </button>
          </div>

          {/* Navigation */}
          <div>
            <div className="font-body text-[11px] text-white/30 tracking-widest uppercase mb-4">
              {t.footer.navigation}
            </div>
            {NAV_ITEMS.map((item, i) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className="block bg-transparent border-none cursor-pointer font-body text-sm text-white/60 py-1 hover:text-teal-light transition-colors duration-300"
              >
                {navLabels[i]}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="font-body text-[11px] text-white/30 tracking-widest uppercase mb-4">
              {t.footer.contact}
            </div>
            <div className="font-body text-sm text-white/60 leading-8">
              {CONTACT.address.street}
              <br />
              {CONTACT.address.zip} {CONTACT.address.city}
              <br />
              {CONTACT.phone.map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="block text-white/60 no-underline hover:text-teal-light transition-colors"
                >
                  {phone}
                </a>
              ))}
              {CONTACT.businessId && (
                <div className="mt-3 text-xs leading-6 text-white/45">
                  {t.footer.businessId}: {CONTACT.businessId}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-end gap-3">
              <Image
                src="/swiss_logo_transparent.png"
                alt="Physioswiss Logo"
                width={96}
                height={31}
                className="h-7 w-auto object-contain"
              />
              <span className="pb-1 font-body text-[11px] tracking-[0.12em] uppercase text-white/45">
                {t.footer.member}
              </span>
            </div>
            <span className="font-body text-xs text-white/30">
              © {new Date().getFullYear()} Gelenkwerk · {t.footer.copyright}
            </span>
          </div>
          <div className="flex gap-5">
            <a href="#" className="font-body text-xs text-white/30 no-underline hover:text-white/60 transition-colors">
              {t.footer.imprint}
            </a>
            <a href="#" className="font-body text-xs text-white/30 no-underline hover:text-white/60 transition-colors">
              {t.footer.privacy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
