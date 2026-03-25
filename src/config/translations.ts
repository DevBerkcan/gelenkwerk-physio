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
    fachrichtung: {
      label: "Die Fachrichtung",
      title: "Was ist Physiotherapie?",
      intro:
        "Physiotherapie ist ein Überbegriff für verschiedene Therapie-Methoden zur Behandlung von Gesundheitsstörungen, insbesondere von Beschwerden des Bewegungsapparates.",
      cards: [
        {
          title: "Die Fachrichtung",
          text: "Zusammen mit Medizin und Pflege bildet die Physiotherapie die drei Säulen der Schulmedizin. Sie richtet sich an verunfallte Patienten sowie Menschen mit akuten oder chronischen Erkrankungen — und ist oft eine wirkungsvolle Alternative oder Ergänzung zur operativen oder medikamentösen Behandlung.",
        },
        {
          title: "Aktive Therapie",
          text: "Bei der Bewegungstherapie trainiert der Patient unter Anleitung des Physiotherapeuten mit gezielter Belastung. Zahlreiche Studien belegen, dass aktive Physiotherapie häufig die besten und nachhaltigsten Resultate erzielt.",
        },
        {
          title: "Passive Therapie",
          text: "Physikalische Reize wie Wärme und Kälte, Strom und Ultraschallwellen sowie gezielte manuelle Griffe des Physiotherapeuten lösen Schmerzen und korrigieren Fehlhaltungen, ohne dass der Patient selbst aktiv sein muss.",
        },
      ],
      approach: {
        title: "Unser Ansatz",
        text: "Wir legen besonderen Wert auf die Kombination von aktiven und passiven Therapieformen: klassische therapeutische Handgriffe und technische Hilfsmittel, ergänzt durch Training mit individuell dosierter Belastung — für nachhaltige Ergebnisse.",
        cta: "Termin buchen",
      },
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
    bewertungen: {
      label: "Was Patienten sagen",
      title: "Erfahrungen & Bewertungen",
      reviews: [
        {
          name: "Sandra M.",
          treatment: "Physiotherapie",
          quote: "Nach meinem Bandscheibenvorfall war ich wirklich verzweifelt. Die Behandlung bei Kiriaki hat mir unglaublich geholfen — nach wenigen Wochen war ich wieder schmerzfrei. Sehr einfühlsam und kompetent.",
        },
        {
          name: "Thomas R.",
          treatment: "Manuelle Lymphdrainage",
          quote: "Ich war nach einer Operation auf Lymphdrainage angewiesen. Die Behandlungen hier waren professionell und wirkungsvoll. Ich habe mich von Anfang an in guten Händen gefühlt.",
        },
        {
          name: "Maria K.",
          treatment: "Massage & Physiotherapie",
          quote: "Ich komme seit über zwei Jahren regelmässig zu Kiriaki. Die Kombination aus Massage und Physiotherapie hilft mir enorm bei meinen chronischen Nackenproblemen. Absolut empfehlenswert!",
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
    fachrichtung: {
      label: "The Discipline",
      title: "What is Physiotherapy?",
      intro:
        "Physiotherapy is an umbrella term for various therapy methods used to treat health disorders, particularly complaints of the musculoskeletal system.",
      cards: [
        {
          title: "The Discipline",
          text: "Together with medicine and nursing, physiotherapy forms the three pillars of conventional medicine. It serves accident victims as well as people with acute or chronic conditions — and is often an effective alternative or complement to surgical or pharmaceutical treatment.",
        },
        {
          title: "Active Therapy",
          text: "In movement therapy, the patient trains under the guidance of the physiotherapist with targeted exertion. Numerous studies show that active physiotherapy frequently achieves the best and most lasting results.",
        },
        {
          title: "Passive Therapy",
          text: "Physical stimuli such as heat and cold, electrical currents and ultrasound waves, as well as targeted manual techniques by the physiotherapist, relieve pain and correct poor posture without requiring active effort from the patient.",
        },
      ],
      approach: {
        title: "Our Approach",
        text: "We place particular emphasis on combining active and passive therapy forms: classic therapeutic manual techniques and technical aids, complemented by training with individually dosed load — for lasting results.",
        cta: "Book appointment",
      },
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
    bewertungen: {
      label: "What patients say",
      title: "Experiences & Reviews",
      reviews: [
        {
          name: "Sandra M.",
          treatment: "Physiotherapy",
          quote: "After my herniated disc I was truly desperate. The treatment with Kiriaki helped me enormously — after a few weeks I was pain-free. Very empathetic and competent.",
        },
        {
          name: "Thomas R.",
          treatment: "Manual Lymphatic Drainage",
          quote: "After surgery I needed lymphatic drainage. The treatments here were professional and effective. I felt in good hands from the very first session.",
        },
        {
          name: "Maria K.",
          treatment: "Massage & Physiotherapy",
          quote: "I have been coming to Kiriaki regularly for over two years. The combination of massage and physiotherapy helps me enormously with my chronic neck problems. Highly recommended!",
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
