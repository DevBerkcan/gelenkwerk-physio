"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { GelenkwerkLogo } from "@/components/ui";
import { NAV_ITEMS } from "@/config/site";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onBooking: () => void;
}

const NAV_KEYS = ["home", "physio", "massage", "about", "credentials", "contact"] as const;

export default function Navbar({ activeSection, onNavigate, onBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const { scrollY } = useScroll();
  const navBg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(0,0,0,0)", "rgba(248,245,240,0.97)"]
  );
  const navBorderOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const navPy = useTransform(scrollY, [0, 80], [16, 8]);

  useMotionValueEvent(scrollY, "change", (v) => setIsScrolled(v > 80));

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
    t.nav.home, t.nav.physio, t.nav.massage,
    t.nav.about, t.nav.credentials, t.nav.contact,
  ];

  return (
    <motion.nav
      style={{ backgroundColor: navBg, paddingTop: navPy, paddingBottom: navPy }}
      className="fixed top-0 left-0 right-0 z-[1000]"
    >
      {/* Border bottom animated */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-teal-pale"
        style={{ opacity: navBorderOpacity }}
      />

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
              <motion.span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-sm ${
                  isScrolled ? "bg-teal-light" : "bg-white"
                }`}
                animate={{ width: activeSection === item.id ? "100%" : "0%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </button>
          ))}
        </div>

        {/* Rechts: DE/EN + Termin buchen */}
        <div className="ml-auto hidden md:flex items-center gap-4">
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

          <motion.button
            onClick={onBooking}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className={`px-6 py-2.5 rounded-full font-body text-[13px] font-semibold text-white cursor-pointer transition-colors duration-300 ${
              isScrolled
                ? "bg-teal border-none hover:bg-teal-dark"
                : "bg-white/15 border border-white/30 backdrop-blur-lg hover:bg-white/25"
            }`}
          >
            {t.nav.book}
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001] ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Navigation öffnen"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={`block w-[22px] h-0.5 rounded-sm ${isScrolled ? "bg-brand-text" : "bg-white"}`}
              animate={{
                rotate: mobileMenuOpen ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                y:      mobileMenuOpen ? (i === 0 ? 7 : i === 2 ? -7 : 0) : 0,
                scaleX: mobileMenuOpen && i === 1 ? 0 : 1,
                opacity: mobileMenuOpen && i === 1 ? 0 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Overlay Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, pointerEvents: mobileMenuOpen ? "auto" : "none" }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 bg-cream/[0.98] backdrop-blur-3xl flex flex-col items-center justify-center gap-2 z-[999]"
      >
        {NAV_ITEMS.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => { onNavigate(item.id); setMobileMenuOpen(false); }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              y: mobileMenuOpen ? 0 : 20,
            }}
            transition={{ duration: 0.4, delay: mobileMenuOpen ? 0.08 + i * 0.06 : 0 }}
            className={`bg-transparent border-none cursor-pointer font-display text-[28px] font-medium py-3 ${
              activeSection === item.id ? "text-teal" : "text-brand-text"
            }`}
          >
            {navLabels[i]}
          </motion.button>
        ))}

        {/* Sprachumschalter im Mobile-Menü */}
        <motion.div
          className="flex items-center gap-3 mt-4 font-body text-[14px] font-semibold"
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
          transition={{ duration: 0.4, delay: mobileMenuOpen ? 0.5 : 0 }}
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
        </motion.div>

        <motion.button
          onClick={() => { onBooking(); setMobileMenuOpen(false); }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, y: mobileMenuOpen ? 0 : 20 }}
          transition={{ duration: 0.4, delay: mobileMenuOpen ? 0.58 : 0 }}
          className="mt-4 px-10 py-3.5 rounded-full bg-teal text-white font-body text-[15px] font-semibold border-none cursor-pointer"
        >
          {t.nav.book}
        </motion.button>
      </motion.div>
    </motion.nav>
  );
}
