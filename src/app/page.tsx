"use client";

import { useState, useCallback } from "react";
import { useScrollSpy, useSmoothScroll } from "@/hooks";
import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  StatsBar,
  PhysioSection,
  ParallaxDivider,
  MassageSection,
  AboutSection,
  KontaktSection,
} from "@/components/sections";
import { BookingModal } from "@/components/booking";

export default function HomePage() {
  const { activeSection, isScrolled } = useScrollSpy();
  const scrollTo = useSmoothScroll();
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
        isScrolled={isScrolled}
        onNavigate={scrollTo}
        onBooking={openBooking}
      />

      <main>
        <HeroSection onNavigate={scrollTo} onBooking={openBooking} />
        <StatsBar />
        <PhysioSection onBooking={openBooking} />
        <ParallaxDivider />
        <MassageSection onBooking={openBooking} />
        <AboutSection />
        <KontaktSection onBooking={openBooking} />
      </main>

      <Footer onNavigate={scrollTo} onBooking={openBooking} />

      <BookingModal isOpen={bookingOpen} onClose={closeBooking} />
    </>
  );
}
