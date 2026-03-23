"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollSpy, useSmoothScroll } from "@/hooks";
import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  StatsBar,
  PhysioSection,
  ParallaxDivider,
  MassageSection,
  AboutSection,
  CredentialsSection,
  KontaktSection,
} from "@/components/sections";
import { BookingModal } from "@/components/booking";

export default function HomePage() {
  const { activeSection } = useScrollSpy();
  const scrollTo = useSmoothScroll();
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <>
      <Navbar
        activeSection={activeSection}
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
        <CredentialsSection />
        <KontaktSection onBooking={openBooking} />
      </main>

      <Footer onNavigate={scrollTo} onBooking={openBooking} />

      {/* Booking Modal mit AnimatePresence für smooth Enter/Exit */}
      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            key="booking-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[2000]"
          >
            <BookingModal isOpen={bookingOpen} onClose={closeBooking} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
