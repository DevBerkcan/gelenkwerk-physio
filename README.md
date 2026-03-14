# Gelenkwerk Physiotherapie – Website

Moderne Website für die Physiotherapie-Praxis **Gelenkwerk** an der Elisabethenstrasse 41, 4051 Basel.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS Animations + Intersection Observer
- **Icons:** Lucide React
- **Email:** Nodemailer (SMTP)

## Projektstruktur (Clean Architecture)

```
src/
├── app/                    # Next.js App Router
│   ├── api/booking/        # API-Route für Buchungen + E-Mail-Versand
│   ├── layout.tsx          # Root Layout mit Fonts & Metadata
│   └── page.tsx            # Hauptseite (Composition Root)
│
├── components/
│   ├── booking/            # Buchungssystem (4-Step Modal)
│   │   ├── BookingModal.tsx    # Orchestriert alle Steps
│   │   ├── StepService.tsx     # Step 1: Leistungsauswahl
│   │   ├── StepDateTime.tsx    # Step 2: Datum- & Zeitwahl
│   │   ├── StepContact.tsx     # Step 3: Kontaktformular
│   │   └── StepConfirmation.tsx # Step 4: Bestätigung
│   │
│   ├── layout/             # Globale Layout-Komponenten
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   │
│   ├── sections/           # Seitensektionen
│   │   ├── HeroSection.tsx
│   │   ├── StatsBar.tsx
│   │   ├── PhysioSection.tsx
│   │   ├── MassageSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── KontaktSection.tsx
│   │   └── ParallaxDivider.tsx
│   │
│   └── ui/                 # Wiederverwendbare UI-Komponenten
│       ├── Reveal.tsx          # Scroll-basierte Animation
│       ├── GelenkwerkLogo.tsx  # SVG Logo
│       └── CountUp.tsx         # Animierte Zahlen
│
├── config/
│   └── site.ts             # Zentrale Konfiguration (Services, Preise, Kontakt)
│
├── hooks/
│   └── index.ts            # Custom Hooks (useInView, useScrollSpy, etc.)
│
├── lib/
│   ├── utils.ts            # Hilfsfunktionen (Datumsformatierung, Validierung)
│   ├── booking.ts          # Buchungslogik (Zeitslot-Generierung)
│   └── email-templates.ts  # HTML E-Mail-Templates
│
├── styles/
│   └── globals.css         # Tailwind + Custom Styles
│
└── types/
    └── index.ts            # TypeScript-Definitionen
```

## Setup

```bash
# 1. Dependencies installieren
npm install

# 2. Environment-Variablen konfigurieren
cp .env.example .env.local
# → SMTP-Zugangsdaten eintragen

# 3. Development-Server starten
npm run dev

# 4. Produktions-Build
npm run build
npm start
```

## E-Mail-Konfiguration

Kopiere `.env.example` nach `.env.local` und trage die SMTP-Daten ein.
Ohne SMTP-Konfiguration werden Buchungen in der Konsole protokolliert.

**Unterstützte Provider:**
- Gmail (smtp.gmail.com, Port 587)
- Microsoft 365 (smtp.office365.com, Port 587)
- Infomaniak (mail.infomaniak.com, Port 587)
- Beliebiger SMTP-Server

## Buchungssystem

Das 4-Schritt-Buchungssystem umfasst:

1. **Leistung auswählen** – Physiotherapie, Massage, Lymphdrainage
2. **Termin wählen** – Kalender + Zeitslots (Mo–Fr 08–18h, Sa 09–14h)
3. **Kontaktdaten** – Formular mit Validierung
4. **Bestätigung** – Übersicht + E-Mail-Versand

Bei jeder Buchung werden zwei E-Mails versendet:
- **Bestätigung** an den Patienten
- **Benachrichtigung** an die Praxis

## Deployment

Empfohlen: **Vercel** (Zero-Config für Next.js)

```bash
npx vercel
```

Alternativ: Docker, Node.js Server, oder jeder Host mit Node.js-Support.
