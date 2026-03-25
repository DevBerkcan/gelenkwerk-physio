import { PHOTOS } from "@/config/site";

export type BlogCategory = "physio" | "massage" | "lymph";

export interface BlogPost {
  slug: string;
  date: string;
  readTime: number;
  category: BlogCategory;
  image: string;
  de: {
    title: string;
    excerpt: string;
    content: string;
    categoryLabel: string;
  };
  en: {
    title: string;
    excerpt: string;
    content: string;
    categoryLabel: string;
  };
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "rueckenschmerzen-physiotherapie-basel",
    date: "2026-01-20",
    readTime: 5,
    category: "physio",
    image: PHOTOS.physio1,
    de: {
      title: "Rückenschmerzen: Was wirklich hilft — Physiotherapie in Basel",
      excerpt:
        "Rückenschmerzen gehören zu den häufigsten Beschwerden überhaupt. Erfahren Sie, wie gezielte Physiotherapie in Basel bei akuten und chronischen Rückenschmerzen nachhaltig helfen kann.",
      categoryLabel: "Physiotherapie",
      content: `
<h2>Rückenschmerzen sind weit verbreitet — aber behandelbar</h2>
<p>Fast jede Person leidet irgendwann in ihrem Leben an Rückenschmerzen. Ob akute Kreuzschmerzen nach dem Heben, chronische Verspannungen durch langes Sitzen oder postoperative Beschwerden — die Ursachen sind vielfältig. Was jedoch klar ist: Physiotherapie gehört zu den wirksamsten Behandlungsmethoden.</p>

<h2>Ursachen von Rückenschmerzen verstehen</h2>
<p>Bevor eine Behandlung beginnt, steht die genaue Befundaufnahme. In der Praxis Gelenkwerk an der Elisabethenstrasse in Basel untersuchen wir:</p>
<ul>
  <li>Haltung und Bewegungsmuster</li>
  <li>Muskelkraft und -flexibilität</li>
  <li>Neurologische Zeichen bei Bandscheibenbeschwerden</li>
  <li>Alltags- und Arbeitsbelastungen</li>
</ul>
<p>Häufige Ursachen sind Muskeldysbalancen, Bandscheibenvorfälle, Spondylose oder einfach zu wenig Bewegung im Alltag.</p>

<h2>Physiotherapie bei Rückenschmerzen: Was passiert in der Behandlung?</h2>
<p>Eine Physiotherapie-Sitzung bei Rückenschmerzen umfasst typischerweise:</p>
<ul>
  <li><strong>Manuelle Therapie:</strong> Gezielte Mobilisation von Wirbelsäulengelenken und umliegendem Gewebe</li>
  <li><strong>Therapeutische Übungen:</strong> Individuelle Kräftigungs- und Dehnprogramme</li>
  <li><strong>Wärme- oder Kältetherapie:</strong> Je nach Phase der Beschwerden</li>
  <li><strong>Haltungsschulung:</strong> Ergonomische Beratung für Büro und Alltag</li>
</ul>

<h2>Wie schnell wirkt Physiotherapie bei Rückenschmerzen?</h2>
<p>Bei akuten Beschwerden sind oft bereits nach 3–5 Behandlungen deutliche Verbesserungen spürbar. Chronische Rückenschmerzen erfordern eine längere Therapieplanung — regelmässige Behandlungen über mehrere Wochen zeigen jedoch meist nachhaltige Erfolge.</p>

<h2>Krankenkasse und Physiotherapie in der Schweiz</h2>
<p>In der Schweiz werden physiotherapeutische Behandlungen von der Grundversicherung (KVG) übernommen, sofern eine ärztliche Verordnung vorliegt. Unsere Praxis ist bei allen Schweizer Krankenkassen anerkannt und Mitglied bei Physioswiss.</p>

<h2>Domizilbehandlungen in Basel</h2>
<p>Für Patientinnen und Patienten, die die Praxis nicht aufsuchen können, bieten wir auch Hausbesuche im Raum Basel an. Sprechen Sie uns direkt an — wir finden eine Lösung.</p>

<h2>Termin vereinbaren</h2>
<p>Leiden Sie unter Rückenschmerzen und suchen eine erfahrene Physiotherapeutin in Basel? Vereinbaren Sie noch heute einen Termin in der Praxis Gelenkwerk an der Elisabethenstrasse 41, 4051 Basel.</p>
      `.trim(),
    },
    en: {
      title: "Back Pain: What Really Helps — Physiotherapy in Basel",
      excerpt:
        "Back pain is one of the most common complaints worldwide. Learn how targeted physiotherapy in Basel can provide lasting relief from acute and chronic back pain.",
      categoryLabel: "Physiotherapy",
      content: `
<h2>Back Pain Is Common — But Treatable</h2>
<p>Almost everyone experiences back pain at some point in their life. Whether it's acute lower back pain from lifting, chronic tension from prolonged sitting, or post-operative discomfort — the causes are varied. What is clear, however, is that physiotherapy is one of the most effective treatment methods available.</p>

<h2>Understanding the Causes of Back Pain</h2>
<p>Before treatment begins, a thorough assessment is essential. At Gelenkwerk practice on Elisabethenstrasse in Basel, we examine:</p>
<ul>
  <li>Posture and movement patterns</li>
  <li>Muscle strength and flexibility</li>
  <li>Neurological signs in disc-related complaints</li>
  <li>Daily and occupational stressors</li>
</ul>
<p>Common causes include muscle imbalances, disc herniations, spondylosis, or simply too little movement in daily life.</p>

<h2>Physiotherapy for Back Pain: What Happens During Treatment?</h2>
<p>A physiotherapy session for back pain typically includes:</p>
<ul>
  <li><strong>Manual therapy:</strong> Targeted mobilisation of spinal joints and surrounding tissue</li>
  <li><strong>Therapeutic exercises:</strong> Individual strengthening and stretching programmes</li>
  <li><strong>Heat or cold therapy:</strong> Depending on the phase of complaints</li>
  <li><strong>Posture training:</strong> Ergonomic advice for office and daily life</li>
</ul>

<h2>How Quickly Does Physiotherapy Work for Back Pain?</h2>
<p>For acute complaints, significant improvements are often felt after just 3–5 treatments. Chronic back pain requires a longer therapy plan — but regular treatments over several weeks usually show lasting results.</p>

<h2>Health Insurance and Physiotherapy in Switzerland</h2>
<p>In Switzerland, physiotherapy treatments are covered by basic health insurance (KVG) provided a medical prescription is in place. Our practice is recognised by all Swiss health insurers and is a member of Physioswiss.</p>

<h2>Book an Appointment</h2>
<p>Suffering from back pain and looking for an experienced physiotherapist in Basel? Book an appointment today at Gelenkwerk practice, Elisabethenstrasse 41, 4051 Basel.</p>
      `.trim(),
    },
  },
  {
    slug: "manuelle-lymphdrainage-wirkung-anwendung",
    date: "2026-02-10",
    readTime: 6,
    category: "lymph",
    image: PHOTOS.physio2,
    de: {
      title: "Manuelle Lymphdrainage: Wirkung, Anwendung und Ablauf",
      excerpt:
        "Manuelle Lymphdrainage fördert den Lymphfluss und hilft bei Schwellungen, Ödemen und postoperativen Beschwerden. Alles Wichtige zur Behandlung in Basel.",
      categoryLabel: "Lymphdrainage",
      content: `
<h2>Was ist manuelle Lymphdrainage?</h2>
<p>Die manuelle Lymphdrainage ist eine sanfte Massagetechnik, die das Lymphsystem anregt und überschüssige Gewebsflüssigkeit aus dem Körper ableitet. Die Behandlung gehört zur sogenannten Komplexen Physikalischen Entstauungstherapie (KPE) und wird von qualifizierten Physiotherapeutinnen durchgeführt.</p>
<p>In der Praxis Gelenkwerk in Basel führt Kiriaki Chatzidimitriadou die Lymphdrainage mit einer speziellen Ausbildung und Urkunde durch.</p>

<h2>Wie wirkt die Lymphdrainage?</h2>
<p>Durch kreisförmige, sehr sanfte Grifftechniken wird die Haut leicht verschoben. Damit wird die Pumpleistung der Lymphgefässe angeregt — ähnlich wie ein natürlicher Rückfluss. Die Wirkung ist:</p>
<ul>
  <li>Entstauung von Geweben (Reduktion von Schwellungen/Ödemen)</li>
  <li>Immunsystem-Stärkung (das Lymphsystem ist Teil der Immunabwehr)</li>
  <li>Schmerzlinderung durch Druckentlastung</li>
  <li>Entspannungseffekt auf das vegetative Nervensystem</li>
</ul>

<h2>Anwendungsgebiete der manuellen Lymphdrainage</h2>
<p>Lymphdrainage wird eingesetzt bei:</p>
<ul>
  <li><strong>Primäres Lymphödem:</strong> Angeborene Fehlfunktion der Lymphgefässe</li>
  <li><strong>Sekundäres Lymphödem:</strong> Nach Krebsoperationen, Bestrahlungen oder Verletzungen</li>
  <li><strong>Post-operativen Schwellungen:</strong> Z.B. nach Gelenk-OPs, Bänderrissen</li>
  <li><strong>Sportverletzungen:</strong> Hämatome, Prellungen, Zerrungen</li>
  <li><strong>Lipödem</strong></li>
  <li><strong>Chronisch-venöse Insuffizienz (CVI)</strong></li>
</ul>

<h2>Wie läuft eine Sitzung ab?</h2>
<p>Eine Lymphdrainage-Sitzung dauert in der Regel 30 bis 45 Minuten. Die Behandlung erfolgt im Liegen, die Griffe sind sehr sanft — kaum spürbar, aber hochwirksam. Viele Patienten erleben einen tiefen Entspannungszustand oder schlafen sogar ein.</p>

<h2>Wie oft ist Lymphdrainage nötig?</h2>
<p>Je nach Beschwerdebild variiert die Häufigkeit. Bei akuten postoperativen Schwellungen oft täglich oder mehrfach wöchentlich. Bei chronischen Lymphödemen regelmässig über längere Zeit. Ihre Therapeutin erstellt einen individuellen Behandlungsplan.</p>

<h2>Krankenkasse und Verordnung</h2>
<p>Manuelle Lymphdrainage wird bei ärztlicher Verordnung von der Grundversicherung in der Schweiz übernommen. Informieren Sie sich vorab bei Ihrer Krankenkasse über die Konditionen.</p>

<h2>Termin vereinbaren in Basel</h2>
<p>Brauchen Sie manuelle Lymphdrainage in Basel? Unsere zertifizierte Therapeutin Kiriaki Chatzidimitriadou steht Ihnen gerne zur Verfügung. Vereinbaren Sie jetzt Ihren Termin in der Praxis Gelenkwerk, Elisabethenstrasse 41, Basel.</p>
      `.trim(),
    },
    en: {
      title: "Manual Lymphatic Drainage: Effects, Applications and Procedure",
      excerpt:
        "Manual lymphatic drainage promotes lymph flow and helps with swelling, oedema and post-operative discomfort. Everything you need to know about treatment in Basel.",
      categoryLabel: "Lymph Drainage",
      content: `
<h2>What Is Manual Lymphatic Drainage?</h2>
<p>Manual lymphatic drainage is a gentle massage technique that stimulates the lymphatic system and drains excess tissue fluid from the body. The treatment is part of Complex Physical Decongestive Therapy (CDT) and is performed by qualified physiotherapists.</p>
<p>At Gelenkwerk practice in Basel, Kiriaki Chatzidimitriadou performs lymphatic drainage with a specialist certification.</p>

<h2>How Does Lymphatic Drainage Work?</h2>
<p>Through circular, very gentle hand movements, the skin is lightly shifted. This stimulates the pumping capacity of the lymphatic vessels — similar to a natural backflow. The effects are:</p>
<ul>
  <li>Decongestion of tissues (reduction of swelling/oedema)</li>
  <li>Immune system support (the lymphatic system is part of immune defence)</li>
  <li>Pain relief through pressure reduction</li>
  <li>Relaxation effect on the autonomic nervous system</li>
</ul>

<h2>Applications of Manual Lymphatic Drainage</h2>
<p>Lymphatic drainage is used for:</p>
<ul>
  <li><strong>Primary lymphoedema:</strong> Congenital dysfunction of lymphatic vessels</li>
  <li><strong>Secondary lymphoedema:</strong> After cancer surgery, radiation or injury</li>
  <li><strong>Post-operative swelling:</strong> E.g. after joint surgery, ligament tears</li>
  <li><strong>Sports injuries:</strong> Haematomas, bruises, strains</li>
  <li><strong>Lipoedema</strong></li>
  <li><strong>Chronic venous insufficiency (CVI)</strong></li>
</ul>

<h2>What Happens During a Session?</h2>
<p>A lymphatic drainage session typically lasts 30 to 45 minutes. Treatment takes place lying down; the movements are very gentle — barely perceptible but highly effective. Many patients experience deep relaxation or even fall asleep.</p>

<h2>Book an Appointment in Basel</h2>
<p>Need manual lymphatic drainage in Basel? Our certified therapist Kiriaki Chatzidimitriadou is happy to help. Book your appointment now at Gelenkwerk practice, Elisabethenstrasse 41, Basel.</p>
      `.trim(),
    },
  },
  {
    slug: "massage-mehr-als-entspannung-basel",
    date: "2026-03-05",
    readTime: 4,
    category: "massage",
    image: PHOTOS.massage1,
    de: {
      title: "Warum therapeutische Massage mehr als Entspannung ist",
      excerpt:
        "Massage wirkt tiefer als pure Entspannung: Sie fördert Durchblutung, löst Verspannungen und unterstützt physiotherapeutische Behandlungen. Was Patienten in Basel wissen sollten.",
      categoryLabel: "Massage",
      content: `
<h2>Massage: mehr als ein Wellnesserlebnis</h2>
<p>Viele Menschen denken bei Massage zuerst an Wellness und Entspannung. Tatsächlich ist therapeutische Massage eine anerkannte Behandlungsmethode mit nachweisbaren Wirkungen auf Muskeln, Kreislauf und Nervensystem — weit über das reine Wohlbefinden hinaus.</p>

<h2>Was passiert im Körper während einer Massage?</h2>
<p>Während einer therapeutischen Massage werden verschiedene physiologische Prozesse ausgelöst:</p>
<ul>
  <li><strong>Durchblutungsförderung:</strong> Wärme und Druck steigern die Mikrozirkulation im Gewebe</li>
  <li><strong>Muskelentspannung:</strong> Verspannte Muskeln werden mechanisch und reflektorisch gelockert</li>
  <li><strong>Faszienlockerung:</strong> Das Bindegewebe wird beweglicher und weniger schmerzhaft</li>
  <li><strong>Hormonelle Wirkung:</strong> Cortisol sinkt, Serotonin und Dopamin steigen</li>
  <li><strong>Schmerzlinderung:</strong> Gate-Control-Mechanismus hemmt Schmerzimpulse</li>
</ul>

<h2>Wann ist eine therapeutische Massage sinnvoll?</h2>
<p>Massage eignet sich besonders bei:</p>
<ul>
  <li>Muskulären Verspannungen (Nacken, Schultern, Rücken)</li>
  <li>Muskelfaserschmerzen nach intensivem Sport</li>
  <li>Kopfschmerzen durch Muskelverspannungen</li>
  <li>Ergänzung zur physiotherapeutischen Behandlung</li>
  <li>Burnout-Prävention und Stressabbau</li>
  <li>Post-COVID Fatigue-Symptomen</li>
</ul>

<h2>Massagen im Gelenkwerk Basel: individuell angepasst</h2>
<p>In unserer Praxis an der Elisabethenstrasse 41 in Basel passen wir jede Massage individuell an Ihre Bedürfnisse an. Wir unterscheiden:</p>
<ul>
  <li><strong>30-Minuten-Massage:</strong> Ideal für gezielte Problemzonen (CHF 60.–)</li>
  <li><strong>60-Minuten-Massage:</strong> Ganzkörper-Behandlung zur tiefen Entspannung und Regeneration (CHF 120.–)</li>
</ul>
<p>Beide Optionen gibt es auch als 10er-Karte mit attraktivem Rabatt.</p>

<h2>Massage als Ergänzung zur Physiotherapie</h2>
<p>Besonders wirkungsvoll ist Massage in Kombination mit Physiotherapie. Die Massage bereitet die Muskulatur auf therapeutische Übungen vor oder fördert nach intensiven Behandlungen die Regeneration. Diese Kombination bieten wir in der Praxis Gelenkwerk gezielt an.</p>

<h2>Krankenkasse: Was wird übernommen?</h2>
<p>Medizinische Massagen können bei ärztlicher Verschreibung über die Zusatzversicherung oder Krankenkasse abgerechnet werden. Informieren Sie sich vorab bei Ihrer Versicherung. Wellness-Massagen werden in der Regel privat bezahlt.</p>

<h2>Jetzt Massagetermin buchen in Basel</h2>
<p>Gönnen Sie sich eine wohltuende und wirksame Massage in Basel. Unsere Therapeutin Kiriaki Chatzidimitriadou empfängt Sie in der Praxis Gelenkwerk, Elisabethenstrasse 41, 4051 Basel.</p>
      `.trim(),
    },
    en: {
      title: "Why Therapeutic Massage Is More Than Just Relaxation",
      excerpt:
        "Massage works deeper than pure relaxation — it promotes circulation, releases tension and supports physiotherapy treatment. What patients in Basel should know.",
      categoryLabel: "Massage",
      content: `
<h2>Massage: More Than a Wellness Experience</h2>
<p>Many people first think of wellness and relaxation when they hear the word massage. In reality, therapeutic massage is a recognised treatment method with proven effects on muscles, circulation and the nervous system — far beyond mere well-being.</p>

<h2>What Happens in the Body During a Massage?</h2>
<p>During a therapeutic massage, various physiological processes are triggered:</p>
<ul>
  <li><strong>Improved circulation:</strong> Heat and pressure increase microcirculation in the tissue</li>
  <li><strong>Muscle relaxation:</strong> Tense muscles are loosened mechanically and reflexively</li>
  <li><strong>Fascia release:</strong> Connective tissue becomes more mobile and less painful</li>
  <li><strong>Hormonal effect:</strong> Cortisol decreases, serotonin and dopamine increase</li>
  <li><strong>Pain relief:</strong> Gate-control mechanism inhibits pain impulses</li>
</ul>

<h2>When Is Therapeutic Massage Beneficial?</h2>
<p>Massage is particularly suitable for:</p>
<ul>
  <li>Muscular tension (neck, shoulders, back)</li>
  <li>Muscle soreness after intensive sport</li>
  <li>Headaches caused by muscle tension</li>
  <li>Complementing physiotherapy treatment</li>
  <li>Burnout prevention and stress relief</li>
</ul>

<h2>Massages at Gelenkwerk Basel: Individually Tailored</h2>
<p>At our practice on Elisabethenstrasse 41 in Basel, every massage is individually adapted to your needs:</p>
<ul>
  <li><strong>30-minute massage:</strong> Ideal for targeted problem areas (CHF 60.–)</li>
  <li><strong>60-minute massage:</strong> Full-body treatment for deep relaxation (CHF 120.–)</li>
</ul>

<h2>Book a Massage Appointment in Basel</h2>
<p>Treat yourself to a soothing and effective massage in Basel. Our therapist Kiriaki Chatzidimitriadou welcomes you at Gelenkwerk practice, Elisabethenstrasse 41, 4051 Basel.</p>
      `.trim(),
    },
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
