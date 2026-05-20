"use client";

import { useEffect } from "react";
import { GelenkwerkLogo } from "@/components/ui";
import { useBodyScrollLock } from "@/hooks";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  useBodyScrollLock(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const handler = (event: MessageEvent) => {
      if (!event.data) return;
      try {
        const data = JSON.parse(event.data);
        const iframe = document.getElementById("t-booking") as HTMLIFrameElement | null;
        if (data && iframe) {
          iframe.style.height = data.height + "px";
        }
      } catch {
        // ignore non-JSON messages
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] bg-brand-dark/60 backdrop-blur-lg flex items-center justify-center p-4 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white rounded-[28px] w-full max-w-[680px] max-h-[90vh] overflow-auto relative shadow-[0_32px_80px_rgba(0,0,0,0.2)] animate-slide-up">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white rounded-t-[28px] px-8 py-7 pb-5 border-b border-teal-pale flex justify-between items-center">
          <div className="flex items-center gap-3">
            <GelenkwerkLogo size={28} />
            <div>
              <div className="font-display text-xl font-semibold text-brand-text">
                Termin buchen
              </div>
              <div className="font-body text-xs text-brand-light">
                Gelenkwerk Physiotherapie
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-transparent border-none cursor-pointer p-2 rounded-full hover:bg-teal-pale transition-colors"
            aria-label="Schliessen"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#5a6b6b"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* TBooking Iframe */}
        <div className="w-full">
          <iframe
            id="t-booking"
            src="https://www.tbooking.ch/de/book/4743-6727?embedded=true&primary-color=9d5151&secondary-color=0274be"
            style={{ width: "100%", minHeight: "600px", border: "none" }}
            allow="camera *"
          />
        </div>
      </div>
    </div>
  );
}
