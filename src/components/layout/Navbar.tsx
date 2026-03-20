"use client";

import { useState } from "react";
import { GelenkwerkLogo } from "@/components/ui";
import { NAV_ITEMS } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
  onNavigate: (sectionId: string) => void;
  onBooking: () => void;
}

const NAV_KEYS = ["home", "physio", "massage", "about", "credentials", "contact"] as const;

export default function Navbar({ activeSection, isScrolled, onNavigate, onBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navTextColor = (isActive: boolean) => {
    if (isScrolled) return isActive ? "text-teal" : "text-brand-muted";
    return isActive ? "text-white" : "text-white/70";
  };

  const langButtonClass = (l: "de" | "en") => {
    const isActive = lang === l;
    if (isScrolled) return isActive ? "text-teal font-bold" : "text-brand-muted font-normal";
    return isActive ? "text-white font-bold" : "text-white/60 font-normal";
  };

  const navLabels = [
    t.nav.home,
    t.nav.physio,
    t.nav.massage,
    t.nav.about,
    t.nav.credentials,
    t.nav.contact,
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-xl border-b border-teal-pale py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 relative flex items-center">
        {/* Logo — links */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center cursor-pointer bg-transparent border-none flex-shrink-0"
        >
          <GelenkwerkLogo size={52} />
        </button>

        {/* Desktop Nav-Items — absolut zentriert */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative bg-transparent border-none cursor-pointer font-body text-[13.5px] tracking-wide py-1.5 transition-all duration-300 ${
                navTextColor(activeSection === item.id)
              } ${activeSection === item.id ? "font-bold" : "font-normal"}`}
            >
              {navLabels[i]}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-sm transition-all duration-300 ${
                  isScrolled ? "bg-teal-light" : "bg-white"
                } ${activeSection === item.id ? "w-full" : "w-0"}`}
              />
            </button>
          ))}
        </div>

        {/* Rechts: DE/EN + Termin buchen */}
        <div className="ml-auto hidden md:flex items-center gap-4">
          {/* Sprachumschalter */}
          <div className="flex items-center gap-1 font-body text-[12px] tracking-wider">
            <button
              onClick={() => setLang("de")}
              className={`bg-transparent border-none cursor-pointer transition-all duration-200 ${langButtonClass("de")}`}
            >
              DE
            </button>
            <span className={`${isScrolled ? "text-brand-muted/40" : "text-white/30"}`}>|</span>
            <button
              onClick={() => setLang("en")}
              className={`bg-transparent border-none cursor-pointer transition-all duration-200 ${langButtonClass("en")}`}
            >
              EN
            </button>
          </div>

          {/* Termin buchen */}
          <button
            onClick={onBooking}
            className={`px-6 py-2.5 rounded-full font-body text-[13px] font-semibold text-white cursor-pointer transition-all duration-300 ${
              isScrolled
                ? "bg-teal border-none hover:bg-teal-dark"
                : "bg-white/15 border border-white/30 backdrop-blur-lg hover:bg-white/25"
            }`}
          >
            {t.nav.book}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001] ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Navigation öffnen"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-[22px] h-0.5 rounded-sm transition-all duration-400 ${
                isScrolled ? "bg-brand-text" : "bg-white"
              }`}
              style={{
                transform: mobileMenuOpen
                  ? i === 0
                    ? "rotate(45deg) translate(5px,5px)"
                    : i === 2
                    ? "rotate(-45deg) translate(5px,-5px)"
                    : "scaleX(0)"
                  : "none",
                opacity: mobileMenuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 bg-cream/[0.98] backdrop-blur-3xl flex flex-col items-center justify-center gap-2 z-[999] transition-opacity duration-400 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item.id}
            onClick={() => { onNavigate(item.id); setMobileMenuOpen(false); }}
            className={`bg-transparent border-none cursor-pointer font-display text-[28px] font-medium py-3 transition-all duration-500 ${
              activeSection === item.id ? "text-teal" : "text-brand-text"
            }`}
            style={{
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${0.1 + i * 0.06}s`,
            }}
          >
            {navLabels[i]}
          </button>
        ))}

        {/* Sprachumschalter im Mobile-Menü */}
        <div
          className="flex items-center gap-3 mt-4 font-body text-[14px] font-semibold"
          style={{
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s, transform 0.5s",
            transitionDelay: "0.5s",
          }}
        >
          <button
            onClick={() => setLang("de")}
            className={`bg-transparent border-none cursor-pointer px-4 py-2 rounded-full transition-all duration-200 ${
              lang === "de" ? "bg-teal-pale text-teal" : "text-brand-muted"
            }`}
          >
            Deutsch
          </button>
          <span className="text-brand-muted/30">|</span>
          <button
            onClick={() => setLang("en")}
            className={`bg-transparent border-none cursor-pointer px-4 py-2 rounded-full transition-all duration-200 ${
              lang === "en" ? "bg-teal-pale text-teal" : "text-brand-muted"
            }`}
          >
            English
          </button>
        </div>

        <button
          onClick={() => { onBooking(); setMobileMenuOpen(false); }}
          className="mt-4 px-10 py-3.5 rounded-full bg-teal text-white font-body text-[15px] font-semibold border-none cursor-pointer"
          style={{
            opacity: mobileMenuOpen ? 1 : 0,
            transform: mobileMenuOpen ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s, transform 0.5s",
            transitionDelay: "0.58s",
          }}
        >
          {t.nav.book}
        </button>
      </div>
    </nav>
  );
}
