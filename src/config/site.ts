import { Service, NavItem, ContactInfo, DocumentInfo } from "@/types";

// ─── Site Metadata ───

export const SITE_CONFIG = {
  name: "Gelenkwerk",
  fullName: "Praxis Elisabethen – Gelenkwerk Physiotherapie",
  tagline: "Physiotherapie & Massage",
  description:
    "Individuelle physiotherapeutische Behandlungen und therapeutische Massagen in Basel.",
  url: "https://www.gelenkwerk.ch",
  bookingUrl:
    "https://www.tbooking.ch/de/book/4743-6727?embedded=true&primary-color=cb4f53&secondary-color=0274be",
} as const;

// ─── Contact Information ───

export const CONTACT: ContactInfo = {
  address: {
    street: "Elisabethenstrasse 41",
    zip: "4051",
    city: "Basel",
  },
  phone: ["+41 61 220 50 00", "+41 76 624 58 50"],
  businessId: "CHE-261.683.274",
  instagram: "https://www.instagram.com/gelenkwerk/",
};

// ─── Navigation ───

export const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "physiotherapie", label: "Physiotherapie", href: "#physiotherapie" },
  { id: "massage", label: "Massage", href: "#massage" },
  { id: "ueber-uns", label: "Über uns", href: "#ueber-uns" },
  { id: "zeugnisse", label: "Zeugnisse", href: "#zeugnisse" },
  { id: "kontakt", label: "Kontakt", href: "#kontakt" },
];

// ─── Services ───

export const SERVICES: Service[] = [
  {
    id: "physio",
    name: "Physiotherapie",
    duration: 25,
    durationLabel: "~ 25 Min.",
    price: null,
    category: "physio",
    description:
      "Individuelle Behandlung bei akuten und chronischen Beschwerden",
  },
  {
    id: "physio-ext",
    name: "Physiotherapie aufwändig",
    duration: 40,
    durationLabel: "~ 40 Min.",
    price: null,
    category: "physio",
    description: "Umfassende Therapie bei komplexen Krankheitsbildern",
  },
  {
    id: "massage-30",
    name: "Massage 30 Min.",
    duration: 30,
    durationLabel: "~ 30 Min.",
    price: "CHF 60.–",
    category: "massage",
    description: "Teil- oder Ganzkörpermassage, individuell angepasst",
  },
  {
    id: "massage-60",
    name: "Massage 60 Min.",
    duration: 60,
    durationLabel: "~ 60 Min.",
    price: "CHF 120.–",
    category: "massage",
    description: "Ausführliche Ganzkörpermassage zur tiefen Entspannung",
  },
  {
    id: "lymph",
    name: "Manuelle Lymphdrainage",
    duration: 30,
    durationLabel: "~ 30 Min.",
    price: null,
    category: "physio",
    description:
      "Sanfte Entstauungstherapie zur Förderung des Lymphflusses",
  },
];

// ─── Massage Pricing ───

export const MASSAGE_PRICING = [
  {
    minutes: 30,
    price: "CHF 60.–",
    effectiveMinutes: 25,
    tenCardPrice: "CHF 540.–",
    tenCardSaving: "CHF 60.–",
    popular: false,
  },
  {
    minutes: 60,
    price: "CHF 120.–",
    effectiveMinutes: 55,
    tenCardPrice: "CHF 1'080.–",
    tenCardSaving: "CHF 120.–",
    popular: true,
  },
];

// ─── Certificates & Documents ───

export const DOCUMENTS: DocumentInfo[] = [
  {
    title: "Berufsausübungsbewilligung Basel-Stadt",
    description: "Amtliche Bewilligung für die berufliche Tätigkeit in Basel-Stadt.",
    href: "/Bewilligung%20BS%20Kopie.pdf",
  },
  {
    title: "Bobath Weiterbildung",
    description: "Nachweis der Weiterbildung im Bobath-Konzept.",
    href: "/Bobath.pdf",
  },
  {
    title: "Manuelle Lymphdrainage Urkunde",
    description: "Urkunde und Qualifikationsnachweis für manuelle Lymphdrainage.",
    href: "/MLD%20Urkunde.pdf",
  },
] as const;

// ─── Stock Photos ───

export const PHOTOS = {
  hero: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1400&q=80",
  physio1:
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
  physio2:
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  massage1:
    "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
  massage2:
    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80",
  about:
    "https://images.unsplash.com/photo-1666214280557-091f51695098?w=800&q=80",
  contact:
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  wellness:
    "https://images.unsplash.com/photo-1540555700478-4be289fbec6e?w=800&q=80",
} as const;

// ─── Booking Time Slots ───

export const BOOKING_CONFIG = {
  weekdayStart: 8,
  weekdayEnd: 18,
  saturdayStart: 9,
  saturdayEnd: 14,
  slotIntervalMinutes: 30,
  sundayClosed: true,
} as const;
