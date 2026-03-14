"use client";

import { Service } from "@/types";
import { SERVICES } from "@/config/site";

interface StepServiceProps {
  selected: Service | null;
  onSelect: (service: Service) => void;
  onNext: () => void;
}

export default function StepService({ selected, onSelect, onNext }: StepServiceProps) {
  return (
    <div>
      <h3 className="font-display text-[22px] font-medium text-brand-text mb-1">
        Leistung auswählen
      </h3>
      <p className="font-body text-sm text-brand-muted mb-6">
        Wählen Sie die gewünschte Behandlung aus.
      </p>

      <div className="flex flex-col gap-3">
        {SERVICES.map((service) => {
          const isSelected = selected?.id === service.id;
          return (
            <div
              key={service.id}
              onClick={() => onSelect(service)}
              className={`p-5 rounded-2xl cursor-pointer flex justify-between items-center transition-all duration-300 ${
                isSelected
                  ? "bg-teal/[0.08] border-2 border-teal"
                  : "bg-cream border-2 border-transparent hover:border-teal/25"
              }`}
            >
              <div className="flex-1">
                <div className="font-body text-[16px] font-bold text-brand-text mb-1">
                  {service.name}
                </div>
                <div className="font-body text-[13px] text-brand-muted">
                  {service.description}
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-4">
                <div className="font-body text-[13px] text-teal font-semibold">
                  {service.durationLabel}
                </div>
                {service.price && (
                  <div className="font-body text-sm text-brand-text font-bold mt-0.5">
                    {service.price}
                  </div>
                )}
              </div>
              <div
                className={`w-[22px] h-[22px] rounded-full ml-3 flex-shrink-0 transition-all duration-200 ${
                  isSelected
                    ? "border-[6px] border-teal"
                    : "border-2 border-brand-light"
                }`}
              />
            </div>
          );
        })}
      </div>

      <button
        disabled={!selected}
        onClick={onNext}
        className={`btn-primary w-full mt-6 ${!selected ? "opacity-40 cursor-not-allowed" : ""}`}
      >
        Weiter zur Terminwahl →
      </button>
    </div>
  );
}
