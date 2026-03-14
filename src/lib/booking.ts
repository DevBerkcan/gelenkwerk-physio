import { BOOKING_CONFIG } from "@/config/site";

/**
 * Generates available time slots for a given date.
 * Returns an empty array for Sundays (closed).
 * Simulates some "taken" slots for a realistic calendar feel.
 */
export function generateTimeSlots(date: Date): string[] {
  const day = date.getDay();

  // Sunday → closed
  if (day === 0) return [];

  const isSaturday = day === 6;
  const start = isSaturday
    ? BOOKING_CONFIG.saturdayStart
    : BOOKING_CONFIG.weekdayStart;
  const end = isSaturday
    ? BOOKING_CONFIG.saturdayEnd
    : BOOKING_CONFIG.weekdayEnd;

  const slots: string[] = [];

  for (let hour = start; hour < end; hour++) {
    slots.push(`${String(hour).padStart(2, "0")}:00`);
    slots.push(`${String(hour).padStart(2, "0")}:30`);
  }

  // Simulate some taken slots based on the date (deterministic)
  const dateStr = date.toISOString().slice(0, 10);
  const seed = dateStr
    .split("-")
    .reduce((acc, part) => acc + parseInt(part, 10), 0);

  return slots.filter(
    (_, index) => (index * seed) % 7 !== 3 && (index * seed) % 5 !== 2
  );
}

/**
 * Checks whether a given date is in the past or on a Sunday.
 */
export function isDateDisabled(date: Date): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return date < today || date.getDay() === 0;
}
