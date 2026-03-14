"use client";

import { useState, useMemo } from "react";
import { Service } from "@/types";
import { generateTimeSlots, isDateDisabled } from "@/lib/booking";
import {
  getDaysInMonth,
  getFirstWeekdayOfMonth,
  getMonthName,
  formatDateGerman,
} from "@/lib/utils";

interface StepDateTimeProps {
  service: Service;
  selectedDate: Date | null;
  selectedTime: string | null;
  onSelectDate: (date: Date) => void;
  onSelectTime: (time: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const WEEKDAY_LABELS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

export default function StepDateTime({
  service,
  selectedDate,
  selectedTime,
  onSelectDate,
  onSelectTime,
  onNext,
  onBack,
}: StepDateTimeProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstWeekday = getFirstWeekdayOfMonth(year, month);

  const timeSlots = useMemo(
    () => (selectedDate ? generateTimeSlots(selectedDate) : []),
    [selectedDate]
  );

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === month &&
      selectedDate.getFullYear() === year
    );
  };

  const isToday = (day: number) => {
    const now = new Date();
    return now.getDate() === day && now.getMonth() === month && now.getFullYear() === year;
  };

  const handleSelectDate = (day: number) => {
    onSelectDate(new Date(year, month, day));
    onSelectTime(""); // Reset time on date change
  };

  return (
    <div>
      <button onClick={onBack} className="btn-secondary py-1.5 px-4 text-[13px] mb-4">
        ← Zurück
      </button>

      {/* Selected service badge */}
      <div className="p-3 rounded-xl bg-teal-pale mb-6 flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-teal flex-shrink-0" />
        <span className="font-body text-sm text-teal-dark font-semibold">
          {service.name} · {service.durationLabel}
          {service.price ? ` · ${service.price}` : ""}
        </span>
      </div>

      <h3 className="font-display text-[22px] font-medium text-brand-text mb-1">
        Termin wählen
      </h3>
      <p className="font-body text-sm text-brand-muted mb-5">
        Wählen Sie Datum und Uhrzeit.
      </p>

      {/* Calendar */}
      <div className="bg-cream rounded-[20px] p-5 mb-5">
        {/* Month navigation */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setCurrentMonth(new Date(year, month - 1))}
            className="bg-transparent border-none cursor-pointer p-2 rounded-full text-lg text-teal hover:bg-teal-pale transition-colors"
          >
            ‹
          </button>
          <div className="font-display text-lg font-semibold text-brand-text">
            {getMonthName(month)} {year}
          </div>
          <button
            onClick={() => setCurrentMonth(new Date(year, month + 1))}
            className="bg-transparent border-none cursor-pointer p-2 rounded-full text-lg text-teal hover:bg-teal-pale transition-colors"
          >
            ›
          </button>
        </div>

        {/* Weekday headers */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {WEEKDAY_LABELS.map((label) => (
            <div
              key={label}
              className="text-center font-body text-xs font-bold text-brand-light p-1.5"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Day cells */}
        <div className="grid grid-cols-7 gap-1">
          {/* Empty cells for offset */}
          {Array.from({ length: firstWeekday }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const date = new Date(year, month, day);
            const disabled = isDateDisabled(date);
            const selected = isSelected(day);
            const today = isToday(day);

            return (
              <button
                key={day}
                disabled={disabled}
                onClick={() => handleSelectDate(day)}
                className={`p-2.5 rounded-xl border-none font-body text-sm transition-all duration-200 ${
                  selected
                    ? "bg-teal text-white font-bold"
                    : disabled
                    ? "text-brand-light/40 cursor-not-allowed"
                    : "cursor-pointer hover:bg-teal-pale text-brand-text"
                } ${today && !selected ? "ring-2 ring-teal-light ring-inset" : ""}
                ${!disabled && !selected ? "font-normal" : ""}`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {selectedDate && (
        <div className="animate-fade-in">
          <div className="font-body text-sm font-bold text-brand-text mb-3">
            Verfügbare Zeiten – {formatDateGerman(selectedDate)}
          </div>

          {timeSlots.length > 0 ? (
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-2">
              {timeSlots.map((time) => {
                const isTimeSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    onClick={() => onSelectTime(time)}
                    className={`py-2.5 px-2 rounded-[10px] font-body text-sm transition-all duration-200 ${
                      isTimeSelected
                        ? "border-2 border-teal bg-teal/[0.08] text-teal font-bold"
                        : "border border-teal-pale bg-white text-brand-text cursor-pointer hover:border-teal-light"
                    }`}
                  >
                    {time}
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="p-5 text-center font-body text-sm text-brand-muted">
              An diesem Tag sind leider keine Termine verfügbar.
            </div>
          )}
        </div>
      )}

      <button
        disabled={!selectedDate || !selectedTime}
        onClick={onNext}
        className={`btn-primary w-full mt-6 ${
          !selectedDate || !selectedTime ? "opacity-40 cursor-not-allowed" : ""
        }`}
      >
        Weiter zu Kontaktdaten →
      </button>
    </div>
  );
}
