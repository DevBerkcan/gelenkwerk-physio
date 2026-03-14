"use client";

import { useState } from "react";
import { Service, BookingFormData } from "@/types";
import { formatDateGerman, isValidEmail } from "@/lib/utils";

interface StepContactProps {
  service: Service;
  date: Date;
  time: string;
  form: BookingFormData;
  onChange: (form: BookingFormData) => void;
  onSubmit: () => void;
  onBack: () => void;
  isSending: boolean;
}

export default function StepContact({
  service,
  date,
  time,
  form,
  onChange,
  onSubmit,
  onBack,
  isSending,
}: StepContactProps) {
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!form.vorname || !form.nachname || !form.email || !form.telefon) {
      setError("Bitte füllen Sie alle Pflichtfelder aus.");
      return;
    }
    if (!isValidEmail(form.email)) {
      setError("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }
    setError("");
    onSubmit();
  };

  const updateField = (field: keyof BookingFormData, value: string) => {
    onChange({ ...form, [field]: value });
  };

  const inputClass =
    "w-full py-3.5 px-4 rounded-[14px] border-[1.5px] border-teal-pale bg-cream font-body text-[15px] text-brand-text outline-none transition-colors duration-300 focus:border-teal placeholder:text-brand-light";

  return (
    <div>
      <button onClick={onBack} className="btn-secondary py-1.5 px-4 text-[13px] mb-4">
        ← Zurück
      </button>

      {/* Booking summary */}
      <div className="p-5 rounded-2xl bg-teal-pale mb-6">
        <div className="font-body text-xs text-teal tracking-wide uppercase mb-2 font-bold">
          Ihre Auswahl
        </div>
        <div className="font-body text-[15px] text-brand-text font-semibold">
          {service.name}
        </div>
        <div className="font-body text-sm text-teal-dark mt-1">
          {formatDateGerman(date)} um {time} Uhr
        </div>
        {service.price && (
          <div className="font-body text-sm text-brand-text font-bold mt-1">
            {service.price}
          </div>
        )}
      </div>

      <h3 className="font-display text-[22px] font-medium text-brand-text mb-1">
        Kontaktdaten
      </h3>
      <p className="font-body text-sm text-brand-muted mb-5">
        Bitte geben Sie Ihre Daten ein, damit wir Sie kontaktieren können.
      </p>

      {/* Form fields */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label className="block font-body text-[13px] text-brand-muted font-semibold mb-1.5">
            Vorname *
          </label>
          <input
            value={form.vorname}
            onChange={(e) => updateField("vorname", e.target.value)}
            className={inputClass}
            placeholder="Max"
          />
        </div>
        <div>
          <label className="block font-body text-[13px] text-brand-muted font-semibold mb-1.5">
            Nachname *
          </label>
          <input
            value={form.nachname}
            onChange={(e) => updateField("nachname", e.target.value)}
            className={inputClass}
            placeholder="Mustermann"
          />
        </div>
      </div>

      <div className="mb-3">
        <label className="block font-body text-[13px] text-brand-muted font-semibold mb-1.5">
          E-Mail *
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => updateField("email", e.target.value)}
          className={inputClass}
          placeholder="max@beispiel.ch"
        />
      </div>

      <div className="mb-3">
        <label className="block font-body text-[13px] text-brand-muted font-semibold mb-1.5">
          Telefon *
        </label>
        <input
          type="tel"
          value={form.telefon}
          onChange={(e) => updateField("telefon", e.target.value)}
          className={inputClass}
          placeholder="+41 79 123 45 67"
        />
      </div>

      <div className="mb-5">
        <label className="block font-body text-[13px] text-brand-muted font-semibold mb-1.5">
          Nachricht (optional)
        </label>
        <textarea
          value={form.nachricht}
          onChange={(e) => updateField("nachricht", e.target.value)}
          className={`${inputClass} min-h-[80px] resize-y`}
          placeholder="Besondere Hinweise, Beschwerden, etc."
        />
      </div>

      {/* Error message */}
      {error && (
        <div className="p-3 rounded-xl bg-red-50 border border-red-200 mb-4 font-body text-sm text-red-600">
          {error}
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={isSending}
        className={`btn-primary w-full ${isSending ? "opacity-60" : ""}`}
      >
        {isSending ? (
          <span className="flex items-center justify-center gap-2">
            <span className="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full inline-block animate-spin" />
            Buchung wird verarbeitet...
          </span>
        ) : (
          "Termin verbindlich buchen ✓"
        )}
      </button>

      <div className="font-body text-xs text-brand-light text-center mt-3">
        Sie erhalten eine Bestätigung per E-Mail.
      </div>
    </div>
  );
}
