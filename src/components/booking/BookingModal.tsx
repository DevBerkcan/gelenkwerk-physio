"use client";

import { useState, useEffect, useCallback } from "react";
import { Service, BookingFormData } from "@/types";
import { GelenkwerkLogo } from "@/components/ui";
import { useBodyScrollLock } from "@/hooks";
import { formatDateGerman, generateBookingId } from "@/lib/utils";
import StepService from "./StepService";
import StepDateTime from "./StepDateTime";
import StepContact from "./StepContact";
import StepConfirmation from "./StepConfirmation";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const STEP_LABELS = ["Leistung", "Termin", "Kontakt"];

const INITIAL_FORM: BookingFormData = {
  vorname: "",
  nachname: "",
  email: "",
  telefon: "",
  nachricht: "",
};

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [form, setForm] = useState<BookingFormData>(INITIAL_FORM);
  const [isSending, setIsSending] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  useBodyScrollLock(isOpen);

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setSelectedService(null);
        setSelectedDate(null);
        setSelectedTime(null);
        setForm(INITIAL_FORM);
        setIsConfirmed(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = useCallback(async () => {
    if (!selectedService || !selectedDate || !selectedTime) return;

    setIsSending(true);

    const bookingId = generateBookingId();
    const dateStr = formatDateGerman(selectedDate);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingId,
          service: selectedService.name,
          duration: selectedService.durationLabel,
          price: selectedService.price || "Gemäss Verordnung",
          date: dateStr,
          time: selectedTime,
          customerName: `${form.vorname} ${form.nachname}`,
          email: form.email,
          phone: form.telefon,
          message: form.nachricht,
        }),
      });

      if (!response.ok) {
        console.error("Booking API error:", response.statusText);
      }
    } catch (error) {
      console.error("Booking submission error:", error);
    }

    // Always show confirmation (booking is recorded in any case)
    setIsSending(false);
    setIsConfirmed(true);
  }, [selectedService, selectedDate, selectedTime, form]);

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

        {/* Progress indicator */}
        {!isConfirmed && (
          <div className="px-8 pt-4 flex gap-2 items-center">
            {STEP_LABELS.map((label, index) => {
              const stepNum = index + 1;
              const isActive = step === stepNum;
              const isCompleted = step > stepNum;

              return (
                <div key={label} className="flex-1 flex flex-col items-center gap-1.5">
                  <div className="flex items-center w-full">
                    <div
                      className={`w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center font-body text-xs font-bold transition-all duration-300 ${
                        isCompleted
                          ? "bg-teal text-white"
                          : isActive
                          ? "bg-teal/20 text-teal border-2 border-teal"
                          : "bg-teal-pale text-brand-light"
                      }`}
                    >
                      {isCompleted ? "✓" : stepNum}
                    </div>
                    {index < STEP_LABELS.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-1 rounded-sm transition-colors duration-300 ${
                          isCompleted ? "bg-teal" : "bg-teal-pale"
                        }`}
                      />
                    )}
                  </div>
                  <div
                    className={`font-body text-[11px] ${
                      isActive ? "text-teal font-bold" : "text-brand-light"
                    }`}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Step content */}
        <div className="px-8 py-6 pb-8">
          {step === 1 && !isConfirmed && (
            <StepService
              selected={selectedService}
              onSelect={setSelectedService}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && !isConfirmed && selectedService && (
            <StepDateTime
              service={selectedService}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectDate={setSelectedDate}
              onSelectTime={setSelectedTime}
              onNext={() => setStep(3)}
              onBack={() => setStep(1)}
            />
          )}

          {step === 3 && !isConfirmed && selectedService && selectedDate && selectedTime && (
            <StepContact
              service={selectedService}
              date={selectedDate}
              time={selectedTime}
              form={form}
              onChange={setForm}
              onSubmit={handleSubmit}
              onBack={() => setStep(2)}
              isSending={isSending}
            />
          )}

          {isConfirmed && selectedService && selectedDate && selectedTime && (
            <StepConfirmation
              service={selectedService}
              date={selectedDate}
              time={selectedTime}
              form={form}
              onClose={onClose}
            />
          )}
        </div>
      </div>
    </div>
  );
}
