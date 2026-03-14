"use client";

import { useState } from "react";
import { GelenkwerkLogo } from "@/components/ui";
import { NAV_ITEMS } from "@/config/site";

interface NavbarProps {
  activeSection: string;
  isScrolled: boolean;
  onNavigate: (sectionId: string) => void;
  onBooking: () => void;
}

export default function Navbar({ activeSection, isScrolled, onNavigate, onBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navTextColor = (isActive: boolean) => {
    if (isScrolled) return isActive ? "text-teal" : "text-brand-muted";
    return isActive ? "text-white" : "text-white/70";
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        isScrolled
          ? "bg-cream/95 backdrop-blur-xl border-b border-teal-pale py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="flex items-center gap-3 cursor-pointer bg-transparent border-none"
        >
          <GelenkwerkLogo size={36} />
          <div>
            <div
              className={`font-display text-xl font-bold tracking-wider leading-tight transition-colors duration-500 ${
                isScrolled ? "text-teal" : "text-white"
              }`}
            >
              GELENKWERK
            </div>
            <div
              className={`font-body text-[9px] tracking-[3px] uppercase transition-colors duration-500 ${
                isScrolled ? "text-brand-light" : "text-white/70"
              }`}
            >
              Physiotherapie & Massage
            </div>
          </div>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative bg-transparent border-none cursor-pointer font-body text-[13.5px] tracking-wide py-1.5 transition-all duration-300 ${
                navTextColor(activeSection === item.id)
              } ${activeSection === item.id ? "font-bold" : "font-normal"}`}
            >
              {item.label}
              <span
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-sm transition-all duration-300 ${
                  isScrolled ? "bg-teal-light" : "bg-white"
                } ${activeSection === item.id ? "w-full" : "w-0"}`}
              />
            </button>
          ))}

          <button
            onClick={onBooking}
            className={`px-6 py-2.5 rounded-full font-body text-[13px] font-semibold text-white cursor-pointer transition-all duration-300 ${
              isScrolled
                ? "bg-teal border-none hover:bg-teal-dark"
                : "bg-white/15 border border-white/30 backdrop-blur-lg hover:bg-white/25"
            }`}
          >
            Termin buchen
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2 z-[1001]"
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
            {item.label}
          </button>
        ))}
        <button
          onClick={() => { onBooking(); setMobileMenuOpen(false); }}
          className="mt-4 px-10 py-3.5 rounded-full bg-teal text-white font-body text-[15px] font-semibold border-none cursor-pointer"
        >
          Termin buchen
        </button>
      </div>
    </nav>
  );
}
