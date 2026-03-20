export type Lang = "de" | "en";

export const translations = {
  de: {
    nav: {
      home: "Home",
      physio: "Physiotherapie",
      massage: "Massage",
      about: "Über uns",
      credentials: "Zeugnisse",
      contact: "Kontakt",
      book: "Termin buchen",
    },
    hero: {
      location: "Praxis Elisabethen · Basel",
      subtitle: "Physiotherapie & Massage",
      description:
        "Individuelle physiotherapeutische Behandlungen und therapeutische Massagen — für Ihre Gesundheit und Ihr Wohlbefinden.",
      book: "Termin buchen",
      contact: "Kontakt",
    },
    stats: {
      years: "Jahre Erfahrung",
      treatments: "Behandlungsarten",
      insurance: "Krankenkassen-anerkannt",
    },
    physio: {
      label: "Unsere Leistungen",
      title: "Physiotherapie",
      intro:
        "Unser physiotherapeutisches Angebot umfasst ein breites Spektrum an Behandlungen — zur Schmerzlinderung, Verbesserung der Beweglichkeit und Förderung der körperlichen Funktion.",
      body:
        "Die Therapie richtet sich nach Ihren Beschwerden, Zielen sowie ärztlichen Vorgaben. Auch Domizilbehandlungen in Basel sind möglich.",
      cta: "Jetzt Termin buchen →",
      services: {
        physio: {
          name: "Physiotherapie",
          description: "Individuelle Behandlung bei akuten und chronischen Beschwerden",
          durationLabel: "~ 25 Min.",
        },
        "physio-ext": {
          name: "Physiotherapie aufwändig",
          description: "Umfassende Therapie bei komplexen Krankheitsbildern",
          durationLabel: "~ 40 Min.",
        },
        lymph: {
          name: "Manuelle Lymphdrainage",
          description: "Sanfte Entstauungstherapie zur Förderung des Lymphflusses",
          durationLabel: "~ 30 Min.",
        },
      },
    },
    massage: {
      label: "Entspannung & Regeneration",
      title: "Massage",
      intro:
        "Massagen im Gelenkwerk dienen der gezielten Entspannung der Muskulatur, der Förderung der Durchblutung sowie der Unterstützung physiotherapeutischer Behandlungen.",
      body:
        "Jede Anwendung wird individuell auf Ihre Beschwerden, Bedürfnisse und Ziele abgestimmt — ob bei muskulären Verspannungen, zur Regeneration nach Belastung oder einfach zur bewussten Entspannung.",
      pricing: "Preise & Pakete",
      minutes: "Minuten",
      popular: "Beliebt",
      tenCard: "10er-Karte",
      saving: "Sie sparen",
      effectiveTime: "Effektive Behandlungszeit ca.",
      massage: "Massage",
    },
    about: {
      label: "Ihre Therapeutin",
      title: "Über uns",
      subtitle: "Kompetenz trifft Einfühlsamkeit",
      p1:
        "Mit langjähriger Erfahrung betreut Kiriaki Chatzidimitriadou Patientinnen und Patienten mit vielfältigen Beschwerden — von akuten Schmerzen bis hin zu chronischen Bewegungseinschränkungen.",
      p2:
        "In der Praxis an der Elisabethenstrasse vereinen sich fachliche Kompetenz und eine persönliche, einfühlsame Betreuung.",
      role: "Dipl. Physiotherapeutin",
      specialties: ["Physiotherapie", "Massage", "Lymphdrainage", "Domizilbehandlung"],
    },
    credentials: {
      label: "Qualifikation & Nachweise",
      title: "Zeugnisse & Erfahrungen",
      description:
        "Transparenz schafft Vertrauen. Hier finden Sie wichtige Nachweise, Bewilligungen und Weiterbildungen als PDF zum Ansehen oder Download.",
      openPdf: "PDF öffnen",
      documents: [
        {
          title: "Berufsausübungsbewilligung Basel-Stadt",
          description: "Amtliche Bewilligung für die berufliche Tätigkeit in Basel-Stadt.",
        },
        {
          title: "Bobath Weiterbildung",
          description: "Nachweis der Weiterbildung im Bobath-Konzept.",
        },
        {
          title: "Manuelle Lymphdrainage Urkunde",
          description: "Urkunde und Qualifikationsnachweis für manuelle Lymphdrainage.",
        },
      ],
    },
    contact: {
      label: "Wir freuen uns auf Sie",
      title: "Kontakt",
      address: "Adresse",
      phone: "Telefon",
      appointment: "Termin",
      byAppointment: "Termine nach Vereinbarung",
      instagram: "Instagram ansehen",
      book: "Online Termin buchen",
    },
    footer: {
      tagline: "Ihre Praxis für Physiotherapie und Massage in Basel.",
      navigation: "Navigation",
      contact: "Kontakt",
      member: "Mitglied bei Physioswiss",
      copyright: "Alle Rechte vorbehalten",
      imprint: "Impressum",
      privacy: "Datenschutz",
      book: "Termin buchen",
      businessId: "Unternehmens-Nummer",
    },
  },
  en: {
    nav: {
      home: "Home",
      physio: "Physiotherapy",
      massage: "Massage",
      about: "About us",
      credentials: "Credentials",
      contact: "Contact",
      book: "Book appointment",
    },
    hero: {
      location: "Praxis Elisabethen · Basel",
      subtitle: "Physiotherapy & Massage",
      description:
        "Individual physiotherapeutic treatments and therapeutic massages — for your health and well-being.",
      book: "Book appointment",
      contact: "Contact",
    },
    stats: {
      years: "Years of experience",
      treatments: "Treatment types",
      insurance: "Health insurance approved",
    },
    physio: {
      label: "Our Services",
      title: "Physiotherapy",
      intro:
        "Our physiotherapy offering covers a wide range of treatments — for pain relief, improved mobility, and promotion of physical function.",
      body:
        "Treatment is tailored to your complaints, goals, and medical requirements. Home visits in Basel are also available.",
      cta: "Book appointment now →",
      services: {
        physio: {
          name: "Physiotherapy",
          description: "Individual treatment for acute and chronic complaints",
          durationLabel: "~ 25 min.",
        },
        "physio-ext": {
          name: "Extended physiotherapy",
          description: "Comprehensive therapy for complex conditions",
          durationLabel: "~ 40 min.",
        },
        lymph: {
          name: "Manual lymphatic drainage",
          description: "Gentle decongestive therapy to promote lymphatic flow",
          durationLabel: "~ 30 min.",
        },
      },
    },
    massage: {
      label: "Relaxation & Recovery",
      title: "Massage",
      intro:
        "Massages at Gelenkwerk are designed to relax the muscles, promote circulation, and support physiotherapeutic treatments.",
      body:
        "Each application is individually tailored to your complaints, needs, and goals — whether for muscular tension, recovery after exertion, or simply conscious relaxation.",
      pricing: "Prices & Packages",
      minutes: "Minutes",
      popular: "Popular",
      tenCard: "10-session card",
      saving: "You save",
      effectiveTime: "Effective treatment time approx.",
      massage: "Massage",
    },
    about: {
      label: "Your therapist",
      title: "About us",
      subtitle: "Expertise meets empathy",
      p1:
        "With many years of experience, Kiriaki Chatzidimitriadou treats patients with a wide variety of complaints — from acute pain to chronic movement restrictions.",
      p2:
        "At the practice on Elisabethenstrasse, professional expertise and personal, empathetic care come together.",
      role: "Dipl. Physiotherapist",
      specialties: ["Physiotherapy", "Massage", "Lymphatic drainage", "Home visits"],
    },
    credentials: {
      label: "Qualifications & Certificates",
      title: "Credentials & Experience",
      description:
        "Transparency builds trust. Here you will find important certificates, licences, and further training as PDFs to view or download.",
      openPdf: "Open PDF",
      documents: [
        {
          title: "Professional licence Basel-Stadt",
          description: "Official licence for professional practice in Basel-Stadt.",
        },
        {
          title: "Bobath further training",
          description: "Certificate of further training in the Bobath concept.",
        },
        {
          title: "Manual lymphatic drainage certificate",
          description: "Certificate and proof of qualification for manual lymphatic drainage.",
        },
      ],
    },
    contact: {
      label: "We look forward to seeing you",
      title: "Contact",
      address: "Address",
      phone: "Phone",
      appointment: "Appointment",
      byAppointment: "Appointments by arrangement",
      instagram: "View on Instagram",
      book: "Book online appointment",
    },
    footer: {
      tagline: "Your practice for physiotherapy and massage in Basel.",
      navigation: "Navigation",
      contact: "Contact",
      member: "Member of Physioswiss",
      copyright: "All rights reserved",
      imprint: "Imprint",
      privacy: "Privacy",
      book: "Book appointment",
      businessId: "Business ID",
    },
  },
} as const;

export type Translations = typeof translations;
