// ─── Service Types ───

export interface Service {
  id: string;
  name: string;
  duration: number;
  durationLabel: string;
  price: string | null;
  category: "physio" | "massage";
  description: string;
}

// ─── Booking Types ───

export interface BookingFormData {
  vorname: string;
  nachname: string;
  email: string;
  telefon: string;
  nachricht: string;
}

export interface BookingDetails {
  service: Service;
  date: Date;
  time: string;
  customer: BookingFormData;
}

export interface BookingConfirmation {
  success: boolean;
  bookingId: string;
  message: string;
}

// ─── Navigation Types ───

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// ─── Contact Types ───

export interface ContactInfo {
  address: {
    street: string;
    zip: string;
    city: string;
  };
  phone: string[];
  email?: string;
}

// ─── Email Types ───

export interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

export interface BookingEmailData {
  customerName: string;
  serviceName: string;
  date: string;
  time: string;
  duration: string;
  price: string;
  phone: string;
  email: string;
  message?: string;
}
