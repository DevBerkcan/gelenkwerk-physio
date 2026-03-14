"use client";

import { Service, BookingFormData } from "@/types";
import { formatDateGerman } from "@/lib/utils";
import { CONTACT } from "@/config/site";

interface StepConfirmationProps {
  service: Service;
  date: Date;
  time: string;
  form: BookingFormData;
  onClose: () => void;
}

export default function StepConfirmation({
  service,
  date,
  time,
  form,
  onClose,
}: StepConfirmationProps) {
  const summaryRows = [
    { label: "Leistung", value: service.name },
    { label: "Datum", value: formatDateGerman(date) },
    { label: "Uhrzeit", value: `${time} Uhr` },
    { label: "Dauer", value: service.durationLabel },
    ...(service.price ? [{ label: "Preis", value: service.price }] : []),
    { label: "Patient", value: `${form.vorname} ${form.nachname}` },
    { label: "E-Mail", value: form.email },
    { label: "Telefon", value: form.telefon },
  ];

  return (
    <div className="text-center py-5">
      {/* Success icon */}
      <div className="w-20 h-20 rounded-full mx-auto mb-6 bg-gradient-to-br from-teal-pale to-teal/20 flex items-center justify-center animate-scale-in">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a8a7d"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h3 className="font-display text-[28px] font-medium text-brand-text mb-2">
        Buchung bestätigt!
      </h3>
      <p className="font-body text-[15px] text-brand-muted mb-8 leading-relaxed">
        Vielen Dank, {form.vorname}! Ihre Buchung wurde erfolgreich übermittelt.
        <br />
        Sie erhalten in Kürze eine Bestätigung per E-Mail.
      </p>

      {/* Summary card */}
      <div className="p-6 rounded-[20px] bg-cream text-left border border-teal-pale mb-6">
        <div className="font-body text-[11px] text-teal tracking-widest uppercase mb-4 font-bold">
          Buchungsübersicht
        </div>
        {summaryRows.map((row, index) => (
          <div
            key={row.label}
            className={`flex justify-between py-2 ${
              index < summaryRows.length - 1 ? "border-b border-teal-pale" : ""
            }`}
          >
            <span className="font-body text-sm text-brand-muted">{row.label}</span>
            <span className="font-body text-sm text-brand-text font-semibold text-right">
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Address info */}
      <div className="p-4 rounded-[14px] bg-teal-pale font-body text-[13px] text-teal-dark leading-relaxed mb-6">
        📍 <strong>Praxis Elisabethen</strong> · {CONTACT.address.street},{" "}
        {CONTACT.address.zip} {CONTACT.address.city}
        <br />
        📞 Bei Fragen: {CONTACT.phone[0]}
      </div>

      <button onClick={onClose} className="btn-primary w-full">
        Fertig — Zurück zur Website
      </button>
    </div>
  );
}
