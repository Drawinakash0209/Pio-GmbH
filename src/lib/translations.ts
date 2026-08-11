// Central copy dictionary for the two supported languages. Components read
// their strings from here via useLanguage()/t so the whole site can be
// switched between English and German with a single toggle.
//
// A handful of strings are also stored as CMS-editable fields (see
// content-schema.ts / EditableText). Those keep one id across languages —
// the translated string here is only the *fallback* shown until an admin
// overrides it, so an admin edit applies to both languages at once.

export type Lang = "en" | "de";

export interface AccentHeading {
  main: string;
  accent: string;
}

export interface Translation {
  // Fallback copy for CMS-editable fields (EditableText/EditableImage ids).
  // Shown only until an admin overrides the field — see the file-level note.
  cms: {
    heroBadge: string;
    servicesFacilityTitle: string;
    servicesFacilityBody: string;
    servicesStaffingTitle: string;
    servicesStaffingBody: string;
    servicesOptimizationTitle: string;
    servicesOptimizationBody: string;
    servicesTradeEyebrow: string;
    servicesTradeTitle: string;
    servicesTradeBody: string;
    whyUsReliabilityTitle: string;
    whyUsReliabilityBody: string;
    whyUsAvailabilityTitle: string;
    whyUsAvailabilityBody: string;
    whyUsExpertiseTitle: string;
    whyUsExpertiseBody: string;
    parallaxEyebrow: string;
    parallaxBody: string;
  };
  nav: {
    tagline: string;
    links: { name: string; href: string }[];
    cta: string;
  };
  hero: {
    headline: string[];
    subtitleBefore: string;
    subtitleStandard: string;
    subtitleMid: string;
    subtitleExcellence: string;
    subtitleAfter: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
    cornerTag: string;
    scroll: string;
  };
  statsBar: { label: string }[];
  marquee: string[];
  about: {
    sectionLabel: string;
    heading: AccentHeading;
    paragraph1: string;
    paragraph2: string;
    pillars: string[];
    statPanel: { n: string; l: string }[];
    learnMore: string;
    modal: {
      eyebrow: string;
      heading: AccentHeading;
      executionTitle: string;
      executionBody: string;
      strategicTitle: string;
      strategicBody: string;
      peopleTitle: string;
      peopleBody: string;
      standoutTitle: string;
      standoutPoints: string[];
      close: string;
    };
  };
  visionMission: {
    sectionLabel: string;
    heading: AccentHeading;
    statements: { label: string; title: string; body: string }[];
    values: { title: string; body: string }[];
  };
  services: {
    sectionLabel: string;
    heading: AccentHeading;
    subtext: string;
    facility: { tags: string[]; requestAudit: string; learnMore: string };
    staffing: { items: string[]; learnMore: string };
    optimization: { learnMore: string };
    trade: { tags: string[]; efficiencyLabel: string; learnMore: string };
    modal: {
      keyFeatures: string;
      close: string;
      details: Record<
        string,
        { title: string; tagline: string; description: string; features: string[] }
      >;
    };
  };
  parallax: {
    heading: AccentHeading;
    cta: string;
  };
  whyUs: {
    sectionLabel: string;
    heading: AccentHeading;
    workWithUs: string;
  };
  contact: {
    sectionLabel: string;
    heading: AccentHeading;
    subtext: string;
    headquarters: string;
    directLine: string;
    footerTag: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      successAlert: string;
    };
  };
  footer: {
    tagline: string;
    servicesHeading: string;
    serviceLinks: string[];
    legalHeading: string;
    legalLinks: string[];
    locationHeading: string;
    bottomTag: string;
  };
}

export const translations: Record<Lang, Translation> = {
  en: {
    cms: {
      heroBadge: "Mülheim an der Ruhr · Germany",
      servicesFacilityTitle: "Facility Management",
      servicesFacilityBody:
        "Comprehensive cleaning, maintenance, and technical oversight. We maintain your infrastructure to the highest hygienic and operational standards.",
      servicesStaffingTitle: "Staffing Solutions",
      servicesStaffingBody:
        "Skilled workforce integration. We provide vetted, highly trained personnel to meet your operational demands with precision.",
      servicesOptimizationTitle: "Operational Optimization",
      servicesOptimizationBody:
        "Project management and efficiency consulting. Streamlining your processes through rigorous analysis and structured execution.",
      servicesTradeEyebrow: "Global Reach",
      servicesTradeTitle: "Import & Export",
      servicesTradeBody:
        "European sourcing and logistics. Reliable cross-border trade management ensuring timely delivery and compliance.",
      whyUsReliabilityTitle: "German Reliability",
      whyUsReliabilityBody:
        "Built on a foundation of exact standards, rigorous quality control, and steadfast commitment to contractual obligations.",
      whyUsAvailabilityTitle: "24/7 Availability",
      whyUsAvailabilityBody:
        "Continuous operational readiness. Our management structures ensure round-the-clock response capabilities for critical infrastructure.",
      whyUsExpertiseTitle: "International Expertise",
      whyUsExpertiseBody:
        "Local operational excellence coupled with global sourcing and management strategies, adapting to diverse market requirements.",
      parallaxEyebrow: "Future-Ready",
      parallaxBody:
        "We combine structured German engineering with modern management to deliver services that go beyond expectations.",
    },
    nav: {
      tagline: "Mülheim · Germany",
      links: [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services" },
        { name: "Reliability", href: "#reliability" },
        { name: "Contact", href: "#contact" },
      ],
      cta: "Get a Quote",
    },
    hero: {
      headline: ["International", "Expertise.", "German", "Reliability."],
      subtitleBefore: "A premier management and service company combining ",
      subtitleStandard: "European standards",
      subtitleMid: " with ",
      subtitleExcellence: "local excellence",
      subtitleAfter: ".",
      ctaPrimary: "Our Services",
      ctaSecondary: "Contact Us",
      stats: [
        { value: "100%", label: "Quality" },
        { value: "24/7", label: "Operations" },
        { value: "EU", label: "Reach" },
      ],
      cornerTag: "Est. Germany",
      scroll: "Scroll",
    },
    statsBar: [{ label: "Quality Focus" }, { label: "Operations" }, { label: "Core Team" }],
    marquee: [
      "German Reliability",
      "International Expertise",
      "Facility Management",
      "24/7 Operations",
      "Quality First",
      "Mülheim an der Ruhr",
      "Staffing Solutions",
      "Import & Export",
    ],
    about: {
      sectionLabel: "01 / About",
      heading: { main: "Bridging Global Expertise ", accent: "with Local Excellence." },
      paragraph1:
        "At Pio GmbH, we operate on the fundamental principles of German engineering: precision, reliability, and structured execution. Our management methodologies are designed to streamline complex operational challenges into highly efficient, scalable solutions.",
      paragraph2:
        "Located in the industrial heartland of Mülheim an der Ruhr, we leverage regional industrial heritage combined with modern, international management practices to deliver uncompromising quality across all our service divisions.",
      pillars: ["Founded in Mülheim", "International Reach", "German Standards"],
      statPanel: [
        { n: "100%", l: "Quality" },
        { n: "24/7", l: "Operations" },
        { n: "DE", l: "Location" },
        { n: "EU", l: "Reach" },
      ],
      learnMore: "Learn More About Us",
      modal: {
        eyebrow: "Our Story & Values",
        heading: {
          main: "Defining Facility Management Excellence, ",
          accent: "from Mülheim to the World",
        },
        executionTitle: "Excellence in Execution",
        executionBody:
          "At Pio GmbH, we believe mediocrity has no place in facility management. Every engagement, from a single maintenance visit to a multi-site staffing rollout, is run against the same German engineering standard: precise, documented, and accountable. Our teams are trained and audited against that standard continuously, not just at onboarding.",
        strategicTitle: "Strategic Foundation",
        strategicBody:
          "Rooted in the industrial heritage of Mülheim an der Ruhr, aligning every service line with long-term operational goals.",
        peopleTitle: "People First",
        peopleBody:
          "Investing in recruitment, training, and welfare so our workforce arrives motivated, skilled, and accountable.",
        standoutTitle: "Why We Stand Out",
        standoutPoints: [
          "German-engineered process discipline, applied to every contract",
          "Direct project ownership — no layers of subcontracted management",
          "Transparent, scheduled reporting on every engagement",
          "Sustainability-first sourcing and operational practices",
        ],
        close: "Close",
      },
    },
    visionMission: {
      sectionLabel: "02 / Vision & Mission",
      heading: { main: "What Drives Us ", accent: "Forward" },
      statements: [
        {
          label: "Our Vision",
          title: "The Premier Provider",
          body: "To be the premier provider for management, service, and staffing solutions.",
        },
        {
          label: "Our Mission",
          title: "Empowering Businesses",
          body: "Empowering businesses through efficient, professional, international standard services.",
        },
      ],
      values: [
        {
          title: "Client Engagement",
          body: "Building trusted, long-term strategic partnerships that prioritize your success.",
        },
        {
          title: "Operational Excellence",
          body: "Precision and flexibility 24/7, ensuring seamless execution in every project.",
        },
      ],
    },
    services: {
      sectionLabel: "03 / Services",
      heading: { main: "Strategic Service ", accent: "Pillars" },
      subtext: "Four core capabilities built on German engineering principles",
      facility: {
        tags: ["Cleaning", "Maintenance", "Hygiene", "Care"],
        requestAudit: "Request Audit",
        learnMore: "Learn More",
      },
      staffing: {
        items: ["Rapid Deployment", "Quality Assured", "Vetted Personnel"],
        learnMore: "Learn More",
      },
      optimization: { learnMore: "Learn More" },
      trade: {
        tags: ["European Sourcing", "Global Logistics", "Quality Assurance", "Efficient Supply"],
        efficiencyLabel: "Logistics Efficiency",
        learnMore: "Learn More",
      },
      modal: {
        keyFeatures: "Key Features",
        close: "Close",
        details: {
          facility: {
            title: "Facility Management",
            tagline: "Comprehensive Care, Zero Compromise",
            description:
              "Our facility management teams handle the full lifecycle of your building's upkeep — from daily cleaning cycles to scheduled technical maintenance — so hotels, offices, and industrial sites run without interruption. Every visit is logged and measured against German hygiene and safety benchmarks.",
            features: [
              "Daily & Deep Cleaning Cycles",
              "Preventive Maintenance Scheduling",
              "Hygiene & Sanitation Compliance",
              "Interior-Exterior Building Care",
            ],
          },
          staffing: {
            title: "Staffing Solutions",
            tagline: "Powering Your Operations with People",
            description:
              "We recruit, vet, and train personnel who integrate directly into your operations — whether you need short-term coverage or a long-term workforce. Every placement is backed by structured onboarding and ongoing compliance administration.",
            features: [
              "Specialized Recruitment",
              "On-Site Personnel Management",
              "Continuous Training Programs",
              "Compliance & Payroll Administration",
            ],
          },
          optimization: {
            title: "Operational Optimization",
            tagline: "Precision Process Engineering",
            description:
              "Our project management specialists analyze your existing workflows and rebuild them around measurable quality control and efficiency targets, drawing on structured German engineering methods to remove waste without disrupting operations.",
            features: [
              "Quality Control Systems",
              "Workflow Efficiency Audits",
              "Structured Project Governance",
              "Data-Driven Reporting",
            ],
          },
          trade: {
            title: "Import & Export",
            tagline: "European Sourcing, Global Delivery",
            description:
              "We source premium European goods — food, textiles, and household products — and manage the full cross-border logistics chain, ensuring every shipment clears compliance and arrives on schedule.",
            features: [
              "European Sourcing Network",
              "Global Logistics Coordination",
              "Quality Assurance Checks",
              "Efficient Cross-Border Supply",
            ],
          },
        },
      },
    },
    parallax: {
      heading: { main: "Shaping the Future of ", accent: "Facility Management" },
      cta: "Start a Conversation",
    },
    whyUs: {
      sectionLabel: "04 / Why Us",
      heading: { main: "The Pio GmbH ", accent: "Standard" },
      workWithUs: "Work With Us",
    },
    contact: {
      sectionLabel: "05 / Contact",
      heading: { main: "Initiate ", accent: "Dialogue." },
      subtext:
        "Connect with our management team to discuss structured solutions for your operational requirements.",
      headquarters: "Headquarters",
      directLine: "Direct Line",
      footerTag: "Pio GmbH · Mülheim · Germany",
      form: {
        nameLabel: "Full Name",
        namePlaceholder: "Klaus Schmidt",
        emailLabel: "Corporate Email",
        emailPlaceholder: "k.schmidt@company.de",
        messageLabel: "Requirement Details",
        messagePlaceholder: "Describe your operational needs...",
        submit: "Submit Inquiry",
        successAlert: "Inquiry submitted. We will be in touch shortly.",
      },
    },
    footer: {
      tagline: "Engineered for Excellence.",
      servicesHeading: "Services",
      serviceLinks: [
        "Facility Management",
        "Staffing Solutions",
        "Operational Optimization",
        "Import & Export",
      ],
      legalHeading: "Legal",
      legalLinks: ["Imprint", "Privacy Policy", "Terms & Conditions"],
      locationHeading: "Location",
      bottomTag: "Premium Management Services",
    },
  },
  de: {
    cms: {
      heroBadge: "Mülheim an der Ruhr · Deutschland",
      servicesFacilityTitle: "Facility Management",
      servicesFacilityBody:
        "Umfassende Reinigung, Wartung und technische Betreuung. Wir pflegen Ihre Infrastruktur nach höchsten Hygiene- und Betriebsstandards.",
      servicesStaffingTitle: "Personaldienstleistungen",
      servicesStaffingBody:
        "Integration qualifizierter Arbeitskräfte. Wir stellen geprüftes, hochqualifiziertes Personal, das Ihren betrieblichen Anforderungen präzise entspricht.",
      servicesOptimizationTitle: "Prozessoptimierung",
      servicesOptimizationBody:
        "Projektmanagement und Effizienzberatung. Wir straffen Ihre Prozesse durch sorgfältige Analyse und strukturierte Umsetzung.",
      servicesTradeEyebrow: "Globale Reichweite",
      servicesTradeTitle: "Import & Export",
      servicesTradeBody:
        "Europäische Beschaffung und Logistik. Zuverlässiges grenzüberschreitendes Handelsmanagement für pünktliche Lieferung und Compliance.",
      whyUsReliabilityTitle: "Deutsche Zuverlässigkeit",
      whyUsReliabilityBody:
        "Basierend auf exakten Standards, strenger Qualitätskontrolle und konsequenter Einhaltung vertraglicher Verpflichtungen.",
      whyUsAvailabilityTitle: "24/7 Verfügbarkeit",
      whyUsAvailabilityBody:
        "Kontinuierliche Einsatzbereitschaft. Unsere Managementstrukturen gewährleisten rund um die Uhr Reaktionsfähigkeit für kritische Infrastruktur.",
      whyUsExpertiseTitle: "Internationale Expertise",
      whyUsExpertiseBody:
        "Lokale operative Exzellenz gepaart mit globalen Beschaffungs- und Managementstrategien, angepasst an unterschiedliche Marktanforderungen.",
      parallaxEyebrow: "Zukunftssicher",
      parallaxBody:
        "Wir verbinden strukturierte deutsche Ingenieurskunst mit modernem Management, um Leistungen zu erbringen, die über Erwartungen hinausgehen.",
    },
    nav: {
      tagline: "Mülheim · Deutschland",
      links: [
        { name: "Startseite", href: "#" },
        { name: "Über uns", href: "#about" },
        { name: "Leistungen", href: "#services" },
        { name: "Zuverlässigkeit", href: "#reliability" },
        { name: "Kontakt", href: "#contact" },
      ],
      cta: "Angebot anfordern",
    },
    hero: {
      headline: ["Internationale", "Expertise.", "Deutsche", "Zuverlässigkeit."],
      subtitleBefore: "Ein führendes Management- und Dienstleistungsunternehmen, das ",
      subtitleStandard: "europäische Standards",
      subtitleMid: " mit ",
      subtitleExcellence: "lokaler Exzellenz",
      subtitleAfter: " verbindet.",
      ctaPrimary: "Unsere Leistungen",
      ctaSecondary: "Kontakt aufnehmen",
      stats: [
        { value: "100%", label: "Qualität" },
        { value: "24/7", label: "Betrieb" },
        { value: "EU", label: "Reichweite" },
      ],
      cornerTag: "Gegründet in Deutschland",
      scroll: "Scrollen",
    },
    statsBar: [{ label: "Qualitätsfokus" }, { label: "Betrieb" }, { label: "Kernteam" }],
    marquee: [
      "Deutsche Zuverlässigkeit",
      "Internationale Expertise",
      "Facility Management",
      "24/7 Betrieb",
      "Qualität Zuerst",
      "Mülheim an der Ruhr",
      "Personaldienstleistungen",
      "Import & Export",
    ],
    about: {
      sectionLabel: "01 / Über uns",
      heading: { main: "Globale Expertise trifft ", accent: "lokale Exzellenz." },
      paragraph1:
        "Bei der Pio GmbH arbeiten wir nach den Grundprinzipien deutscher Ingenieurskunst: Präzision, Zuverlässigkeit und strukturierte Umsetzung. Unsere Managementmethoden verwandeln komplexe operative Herausforderungen in hocheffiziente, skalierbare Lösungen.",
      paragraph2:
        "Mit Sitz im industriellen Herzen von Mülheim an der Ruhr verbinden wir regionales industrielles Erbe mit modernen, internationalen Managementpraktiken, um in allen unseren Geschäftsbereichen kompromisslose Qualität zu liefern.",
      pillars: ["Gegründet in Mülheim", "Internationale Reichweite", "Deutsche Standards"],
      statPanel: [
        { n: "100%", l: "Qualität" },
        { n: "24/7", l: "Betrieb" },
        { n: "DE", l: "Standort" },
        { n: "EU", l: "Reichweite" },
      ],
      learnMore: "Mehr über uns erfahren",
      modal: {
        eyebrow: "Unsere Geschichte & Werte",
        heading: {
          main: "Exzellenz im Facility Management – ",
          accent: "von Mülheim in die Welt",
        },
        executionTitle: "Exzellenz in der Umsetzung",
        executionBody:
          "Bei der Pio GmbH glauben wir, dass Mittelmäßigkeit im Facility Management keinen Platz hat. Jeder Auftrag – vom einzelnen Wartungsbesuch bis zum standortübergreifenden Personaleinsatz – folgt demselben deutschen Ingenieursstandard: präzise, dokumentiert und nachvollziehbar. Unsere Teams werden fortlaufend nach diesem Standard geschult und geprüft, nicht nur beim Onboarding.",
        strategicTitle: "Strategisches Fundament",
        strategicBody:
          "Verwurzelt im industriellen Erbe von Mülheim an der Ruhr, richten wir jede Dienstleistungslinie an langfristigen operativen Zielen aus.",
        peopleTitle: "Menschen zuerst",
        peopleBody:
          "Wir investieren in Rekrutierung, Schulung und Wohlergehen, damit unser Team motiviert, qualifiziert und verantwortungsbewusst arbeitet.",
        standoutTitle: "Was uns auszeichnet",
        standoutPoints: [
          "Deutsche Prozessdisziplin, angewendet auf jeden Vertrag",
          "Direkte Projektverantwortung — ohne Ebenen von Subunternehmern",
          "Transparente, planmäßige Berichterstattung bei jedem Auftrag",
          "Nachhaltigkeit zuerst bei Beschaffung und Betrieb",
        ],
        close: "Schließen",
      },
    },
    visionMission: {
      sectionLabel: "02 / Vision & Auftrag",
      heading: { main: "Was uns ", accent: "antreibt" },
      statements: [
        {
          label: "Unsere Vision",
          title: "Der führende Anbieter",
          body: "Der führende Anbieter für Management-, Service- und Personallösungen zu sein.",
        },
        {
          label: "Unser Auftrag",
          title: "Unternehmen stärken",
          body: "Unternehmen durch effiziente, professionelle Dienstleistungen nach internationalem Standard zu stärken.",
        },
      ],
      values: [
        {
          title: "Kundenbeziehungen",
          body: "Aufbau vertrauensvoller, langfristiger strategischer Partnerschaften, die Ihren Erfolg in den Mittelpunkt stellen.",
        },
        {
          title: "Betriebliche Exzellenz",
          body: "Präzision und Flexibilität rund um die Uhr für eine reibungslose Umsetzung jedes Projekts.",
        },
      ],
    },
    services: {
      sectionLabel: "03 / Leistungen",
      heading: { main: "Strategische ", accent: "Leistungssäulen" },
      subtext: "Vier Kernkompetenzen nach deutschen Ingenieursprinzipien",
      facility: {
        tags: ["Reinigung", "Wartung", "Hygiene", "Pflege"],
        requestAudit: "Audit anfordern",
        learnMore: "Mehr erfahren",
      },
      staffing: {
        items: ["Schnelle Einsatzbereitschaft", "Qualität gesichert", "Geprüftes Personal"],
        learnMore: "Mehr erfahren",
      },
      optimization: { learnMore: "Mehr erfahren" },
      trade: {
        tags: ["Europäische Beschaffung", "Globale Logistik", "Qualitätssicherung", "Effiziente Lieferkette"],
        efficiencyLabel: "Logistik-Effizienz",
        learnMore: "Mehr erfahren",
      },
      modal: {
        keyFeatures: "Hauptmerkmale",
        close: "Schließen",
        details: {
          facility: {
            title: "Facility Management",
            tagline: "Umfassende Betreuung, keine Kompromisse",
            description:
              "Unsere Facility-Management-Teams übernehmen den gesamten Lebenszyklus der Gebäudepflege — von täglichen Reinigungszyklen bis zur geplanten technischen Wartung —, damit Hotels, Büros und Industrieanlagen ohne Unterbrechung laufen. Jeder Einsatz wird protokolliert und nach deutschen Hygiene- und Sicherheitsstandards gemessen.",
            features: [
              "Tägliche & Grundreinigungszyklen",
              "Vorbeugende Wartungsplanung",
              "Hygiene- & Sanitärkonformität",
              "Innen- und Außenpflege von Gebäuden",
            ],
          },
          staffing: {
            title: "Personaldienstleistungen",
            tagline: "Ihre Abläufe mit den richtigen Menschen antreiben",
            description:
              "Wir rekrutieren, prüfen und schulen Personal, das direkt in Ihre Abläufe integriert wird — ob für kurzfristige Abdeckung oder langfristige Belegschaft. Jeder Einsatz wird durch strukturiertes Onboarding und laufende Compliance-Verwaltung abgesichert.",
            features: [
              "Spezialisierte Rekrutierung",
              "Personalmanagement vor Ort",
              "Fortlaufende Schulungsprogramme",
              "Compliance- & Gehaltsverwaltung",
            ],
          },
          optimization: {
            title: "Prozessoptimierung",
            tagline: "Präzise Prozesstechnik",
            description:
              "Unsere Projektmanagement-Spezialisten analysieren Ihre bestehenden Arbeitsabläufe und gestalten sie anhand messbarer Qualitätskontroll- und Effizienzziele neu — mit strukturierten deutschen Ingenieurmethoden, um Verschwendung ohne Betriebsunterbrechung zu beseitigen.",
            features: [
              "Qualitätskontrollsysteme",
              "Effizienzprüfungen der Arbeitsabläufe",
              "Strukturierte Projektsteuerung",
              "Datengestützte Berichterstattung",
            ],
          },
          trade: {
            title: "Import & Export",
            tagline: "Europäische Beschaffung, weltweite Lieferung",
            description:
              "Wir beschaffen hochwertige europäische Waren — Lebensmittel, Textilien und Haushaltsprodukte — und steuern die gesamte grenzüberschreitende Logistikkette, damit jede Sendung die Vorschriften erfüllt und pünktlich ankommt.",
            features: [
              "Europäisches Beschaffungsnetzwerk",
              "Globale Logistikkoordination",
              "Qualitätssicherungsprüfungen",
              "Effiziente grenzüberschreitende Lieferkette",
            ],
          },
        },
      },
    },
    parallax: {
      heading: { main: "Die Zukunft des ", accent: "Facility Managements gestalten" },
      cta: "Gespräch beginnen",
    },
    whyUs: {
      sectionLabel: "04 / Warum wir",
      heading: { main: "Der Pio GmbH ", accent: "Standard" },
      workWithUs: "Mit uns arbeiten",
    },
    contact: {
      sectionLabel: "05 / Kontakt",
      heading: { main: "Dialog ", accent: "beginnen." },
      subtext:
        "Nehmen Sie Kontakt mit unserem Managementteam auf, um strukturierte Lösungen für Ihre betrieblichen Anforderungen zu besprechen.",
      headquarters: "Hauptsitz",
      directLine: "Direktwahl",
      footerTag: "Pio GmbH · Mülheim · Deutschland",
      form: {
        nameLabel: "Vollständiger Name",
        namePlaceholder: "Klaus Schmidt",
        emailLabel: "Geschäftliche E-Mail",
        emailPlaceholder: "k.schmidt@unternehmen.de",
        messageLabel: "Ihre Anforderungen",
        messagePlaceholder: "Beschreiben Sie Ihren Bedarf...",
        submit: "Anfrage senden",
        successAlert: "Anfrage gesendet. Wir melden uns in Kürze bei Ihnen.",
      },
    },
    footer: {
      tagline: "Konstruiert für Exzellenz.",
      servicesHeading: "Leistungen",
      serviceLinks: [
        "Facility Management",
        "Personaldienstleistungen",
        "Prozessoptimierung",
        "Import & Export",
      ],
      legalHeading: "Rechtliches",
      legalLinks: ["Impressum", "Datenschutz", "AGB"],
      locationHeading: "Standort",
      bottomTag: "Premium-Managementdienstleistungen",
    },
  },
};
