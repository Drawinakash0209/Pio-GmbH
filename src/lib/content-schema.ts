// Registry of every editable field on the site, grouped into the sections
// shown in the admin dashboard sidebar. Keep this in sync with the
// EditableText/EditableImage ids used out in src/components/*.tsx — it has
// no server-only imports so it's safe to import from both server and client.
//
// `defaultValue` here is the canonical (English) seed shown in the admin's
// edit box before any override exists. Out on the live site, each
// EditableText also carries its own `defaultValue={t.x.y}`, which is
// language-reactive — so an unedited field still shows localized copy to
// visitors. Once an admin saves a field, that single value replaces the
// fallback for every visitor regardless of language (see translations.ts).

export type FieldType = "text" | "textarea" | "media";

export interface ContentField {
  id: string;
  label: string;
  type: FieldType;
  defaultValue: string;
}

export interface ContentSection {
  id: string;
  label: string;
  description: string;
  fields: ContentField[];
}

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDld9YW58dCIekh7C7oqkVcPUFY8tB4MqEyKU-TXDooGLeQk70vqNepWB1je21a4riq7G5LneZMQrSIfSuzEKSKcpPvvEsmxmW5_geNG4D_xy_7FCDXWwKmjYIcGjBYv_Kbe3DiZALCyFFeKqA8wfFKV7mqD0tEGqFz6_uJvs-MG72bIWXo8aWLQeTIaf4Vy5siBUEc-3pVQ-QKHrp-uiwgCuwGW8QmlYTcYcQI3pGNLvLECGqV3oJ389G3rbG_qKxV-Z7JJ6rtU7U";

export const CONTENT_SECTIONS: ContentSection[] = [
  {
    id: "seo",
    label: "SEO",
    description: "Search engine and social-share metadata. Not shown on the page itself.",
    fields: [
      {
        id: "seo.title",
        label: "Page title (browser tab, search results)",
        type: "text",
        defaultValue: "Pio GmbH — International Expertise. German Reliability.",
      },
      {
        id: "seo.description",
        label: "Meta description (search results, link previews)",
        type: "textarea",
        defaultValue:
          "Pio GmbH is a premier management and service company in Mülheim an der Ruhr, Germany, combining European standards with local excellence in facility management, staffing, and operations.",
      },
    ],
  },
  {
    id: "nav",
    label: "Navigation",
    description: "The top navigation bar and mobile menu.",
    fields: [
      { id: "nav.tagline", label: "Brand tagline (under logo)", type: "text", defaultValue: "Mülheim · Germany" },
      { id: "nav.links.0.name", label: "Nav link 1 — label", type: "text", defaultValue: "Home" },
      { id: "nav.links.1.name", label: "Nav link 2 — label", type: "text", defaultValue: "About" },
      { id: "nav.links.2.name", label: "Nav link 3 — label", type: "text", defaultValue: "Services" },
      { id: "nav.links.3.name", label: "Nav link 4 — label", type: "text", defaultValue: "Reliability" },
      { id: "nav.links.4.name", label: "Nav link 5 — label", type: "text", defaultValue: "Contact" },
      { id: "nav.cta", label: "Header call-to-action button", type: "text", defaultValue: "Get a Quote" },
    ],
  },
  {
    id: "hero",
    label: "Hero",
    description: "The full-screen intro banner at the top of the site.",
    fields: [
      { id: "hero.bg", label: "Background (image or video)", type: "media", defaultValue: HERO_BG },
      {
        id: "hero.badge",
        label: "Location badge",
        type: "text",
        defaultValue: "Mülheim an der Ruhr · Germany",
      },
      { id: "hero.headline.0", label: "Headline — word 1", type: "text", defaultValue: "International" },
      { id: "hero.headline.1", label: "Headline — word 2", type: "text", defaultValue: "Expertise." },
      { id: "hero.headline.2", label: "Headline — word 3", type: "text", defaultValue: "German" },
      { id: "hero.headline.3", label: "Headline — word 4", type: "text", defaultValue: "Reliability." },
      {
        id: "hero.subtitleBefore",
        label: "Subtitle — opening text",
        type: "text",
        defaultValue: "A premier management and service company combining ",
      },
      {
        id: "hero.subtitleStandard",
        label: "Subtitle — highlighted phrase 1",
        type: "text",
        defaultValue: "European standards",
      },
      { id: "hero.subtitleMid", label: "Subtitle — middle text", type: "text", defaultValue: " with " },
      {
        id: "hero.subtitleExcellence",
        label: "Subtitle — highlighted phrase 2",
        type: "text",
        defaultValue: "local excellence",
      },
      { id: "hero.subtitleAfter", label: "Subtitle — closing text", type: "text", defaultValue: "." },
      { id: "hero.ctaPrimary", label: "Primary button", type: "text", defaultValue: "Our Services" },
      { id: "hero.ctaSecondary", label: "Secondary button", type: "text", defaultValue: "Contact Us" },
      { id: "hero.stats.0.value", label: "Stat 1 — value", type: "text", defaultValue: "100%" },
      { id: "hero.stats.0.label", label: "Stat 1 — label", type: "text", defaultValue: "Quality" },
      { id: "hero.stats.1.value", label: "Stat 2 — value", type: "text", defaultValue: "24/7" },
      { id: "hero.stats.1.label", label: "Stat 2 — label", type: "text", defaultValue: "Operations" },
      { id: "hero.stats.2.value", label: "Stat 3 — value", type: "text", defaultValue: "EU" },
      { id: "hero.stats.2.label", label: "Stat 3 — label", type: "text", defaultValue: "Reach" },
      { id: "hero.cornerTag", label: "Image corner tag", type: "text", defaultValue: "Est. Germany" },
      { id: "hero.scroll", label: "Scroll indicator label", type: "text", defaultValue: "Scroll" },
    ],
  },
  {
    id: "statsBar",
    label: "Stats Bar",
    description: "The three-stat strip below the hero.",
    fields: [
      { id: "statsBar.0.label", label: "Stat 1 — label", type: "text", defaultValue: "Quality Focus" },
      { id: "statsBar.1.label", label: "Stat 2 — label", type: "text", defaultValue: "Operations" },
      { id: "statsBar.2.label", label: "Stat 3 — label", type: "text", defaultValue: "Core Team" },
    ],
  },
  {
    id: "marquee",
    label: "Marquee",
    description: "The scrolling ticker banner.",
    fields: [
      { id: "marquee.0", label: "Item 1", type: "text", defaultValue: "German Reliability" },
      { id: "marquee.1", label: "Item 2", type: "text", defaultValue: "International Expertise" },
      { id: "marquee.2", label: "Item 3", type: "text", defaultValue: "Facility Management" },
      { id: "marquee.3", label: "Item 4", type: "text", defaultValue: "24/7 Operations" },
      { id: "marquee.4", label: "Item 5", type: "text", defaultValue: "Quality First" },
      { id: "marquee.5", label: "Item 6", type: "text", defaultValue: "Mülheim an der Ruhr" },
      { id: "marquee.6", label: "Item 7", type: "text", defaultValue: "Staffing Solutions" },
      { id: "marquee.7", label: "Item 8", type: "text", defaultValue: "Import & Export" },
    ],
  },
  {
    id: "about",
    label: "About",
    description: "The About section and its “learn more” modal.",
    fields: [
      { id: "about.sectionLabel", label: "Section label", type: "text", defaultValue: "01 / About" },
      { id: "about.heading.main", label: "Heading — main", type: "text", defaultValue: "Bridging Global Expertise " },
      {
        id: "about.heading.accent",
        label: "Heading — accent",
        type: "text",
        defaultValue: "with Local Excellence.",
      },
      {
        id: "about.paragraph1",
        label: "Paragraph 1",
        type: "textarea",
        defaultValue:
          "At Pio GmbH, we operate on the fundamental principles of German engineering: precision, reliability, and structured execution. Our management methodologies are designed to streamline complex operational challenges into highly efficient, scalable solutions.",
      },
      {
        id: "about.paragraph2",
        label: "Paragraph 2",
        type: "textarea",
        defaultValue:
          "Located in the industrial heartland of Mülheim an der Ruhr, we leverage regional industrial heritage combined with modern, international management practices to deliver uncompromising quality across all our service divisions.",
      },
      { id: "about.pillars.0", label: "Pillar chip 1", type: "text", defaultValue: "Founded in Mülheim" },
      { id: "about.pillars.1", label: "Pillar chip 2", type: "text", defaultValue: "International Reach" },
      { id: "about.pillars.2", label: "Pillar chip 3", type: "text", defaultValue: "German Standards" },
      { id: "about.statPanel.0.n", label: "Stat block 1 — number", type: "text", defaultValue: "100%" },
      { id: "about.statPanel.0.l", label: "Stat block 1 — label", type: "text", defaultValue: "Quality" },
      { id: "about.statPanel.1.n", label: "Stat block 2 — number", type: "text", defaultValue: "24/7" },
      { id: "about.statPanel.1.l", label: "Stat block 2 — label", type: "text", defaultValue: "Operations" },
      { id: "about.statPanel.2.n", label: "Stat block 3 — number", type: "text", defaultValue: "DE" },
      { id: "about.statPanel.2.l", label: "Stat block 3 — label", type: "text", defaultValue: "Location" },
      { id: "about.statPanel.3.n", label: "Stat block 4 — number", type: "text", defaultValue: "EU" },
      { id: "about.statPanel.3.l", label: "Stat block 4 — label", type: "text", defaultValue: "Reach" },
      { id: "about.learnMore", label: "“Learn more” button", type: "text", defaultValue: "Learn More About Us" },
      { id: "about.modal.eyebrow", label: "Modal — eyebrow", type: "text", defaultValue: "Our Story & Values" },
      {
        id: "about.modal.heading.main",
        label: "Modal — heading main",
        type: "text",
        defaultValue: "Defining Facility Management Excellence, ",
      },
      {
        id: "about.modal.heading.accent",
        label: "Modal — heading accent",
        type: "text",
        defaultValue: "from Mülheim to the World",
      },
      {
        id: "about.modal.executionTitle",
        label: "Modal — execution title",
        type: "text",
        defaultValue: "Excellence in Execution",
      },
      {
        id: "about.modal.executionBody",
        label: "Modal — execution body",
        type: "textarea",
        defaultValue:
          "At Pio GmbH, we believe mediocrity has no place in facility management. Every engagement, from a single maintenance visit to a multi-site staffing rollout, is run against the same German engineering standard: precise, documented, and accountable. Our teams are trained and audited against that standard continuously, not just at onboarding.",
      },
      {
        id: "about.modal.strategicTitle",
        label: "Modal — strategic title",
        type: "text",
        defaultValue: "Strategic Foundation",
      },
      {
        id: "about.modal.strategicBody",
        label: "Modal — strategic body",
        type: "textarea",
        defaultValue:
          "Rooted in the industrial heritage of Mülheim an der Ruhr, aligning every service line with long-term operational goals.",
      },
      { id: "about.modal.peopleTitle", label: "Modal — people title", type: "text", defaultValue: "People First" },
      {
        id: "about.modal.peopleBody",
        label: "Modal — people body",
        type: "textarea",
        defaultValue:
          "Investing in recruitment, training, and welfare so our workforce arrives motivated, skilled, and accountable.",
      },
      {
        id: "about.modal.standoutTitle",
        label: "Modal — standout title",
        type: "text",
        defaultValue: "Why We Stand Out",
      },
      {
        id: "about.modal.standoutPoints.0",
        label: "Modal — standout point 1",
        type: "text",
        defaultValue: "German-engineered process discipline, applied to every contract",
      },
      {
        id: "about.modal.standoutPoints.1",
        label: "Modal — standout point 2",
        type: "text",
        defaultValue: "Direct project ownership — no layers of subcontracted management",
      },
      {
        id: "about.modal.standoutPoints.2",
        label: "Modal — standout point 3",
        type: "text",
        defaultValue: "Transparent, scheduled reporting on every engagement",
      },
      {
        id: "about.modal.standoutPoints.3",
        label: "Modal — standout point 4",
        type: "text",
        defaultValue: "Sustainability-first sourcing and operational practices",
      },
      { id: "about.modal.close", label: "Modal — close button", type: "text", defaultValue: "Close" },
    ],
  },
  {
    id: "visionMission",
    label: "Vision & Mission",
    description: "The vision/mission statements and value cards.",
    fields: [
      {
        id: "visionMission.sectionLabel",
        label: "Section label",
        type: "text",
        defaultValue: "02 / Vision & Mission",
      },
      { id: "visionMission.heading.main", label: "Heading — main", type: "text", defaultValue: "What Drives Us " },
      { id: "visionMission.heading.accent", label: "Heading — accent", type: "text", defaultValue: "Forward" },
      { id: "visionMission.statements.0.label", label: "Statement 1 — label", type: "text", defaultValue: "Our Vision" },
      {
        id: "visionMission.statements.0.title",
        label: "Statement 1 — title",
        type: "text",
        defaultValue: "The Premier Provider",
      },
      {
        id: "visionMission.statements.0.body",
        label: "Statement 1 — body",
        type: "textarea",
        defaultValue: "To be the premier provider for management, service, and staffing solutions.",
      },
      { id: "visionMission.statements.1.label", label: "Statement 2 — label", type: "text", defaultValue: "Our Mission" },
      {
        id: "visionMission.statements.1.title",
        label: "Statement 2 — title",
        type: "text",
        defaultValue: "Empowering Businesses",
      },
      {
        id: "visionMission.statements.1.body",
        label: "Statement 2 — body",
        type: "textarea",
        defaultValue: "Empowering businesses through efficient, professional, international standard services.",
      },
      {
        id: "visionMission.values.0.title",
        label: "Value card 1 — title",
        type: "text",
        defaultValue: "Client Engagement",
      },
      {
        id: "visionMission.values.0.body",
        label: "Value card 1 — body",
        type: "textarea",
        defaultValue: "Building trusted, long-term strategic partnerships that prioritize your success.",
      },
      {
        id: "visionMission.values.1.title",
        label: "Value card 2 — title",
        type: "text",
        defaultValue: "Operational Excellence",
      },
      {
        id: "visionMission.values.1.body",
        label: "Value card 2 — body",
        type: "textarea",
        defaultValue: "Precision and flexibility 24/7, ensuring seamless execution in every project.",
      },
    ],
  },
  {
    id: "services",
    label: "Services (Features)",
    description: "The four core-capability cards on the Services section, and their detail modals.",
    fields: [
      { id: "services.sectionLabel", label: "Section label", type: "text", defaultValue: "03 / Services" },
      { id: "services.heading.main", label: "Heading — main", type: "text", defaultValue: "Strategic Service " },
      { id: "services.heading.accent", label: "Heading — accent", type: "text", defaultValue: "Pillars" },
      {
        id: "services.subtext",
        label: "Header subtext",
        type: "text",
        defaultValue: "Four core capabilities built on German engineering principles",
      },
      { id: "services.facility.image", label: "Facility Management — image or video", type: "media", defaultValue:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAN4pSLaLjtzJWkQ7F-ef4LTr1zXga3uEc5BaTgwC5HcY7i3vRVRg8nRCzoXPSU8n-bW-wGBR5aF5RVsS3_fkXy-WwFkisqry_-Ynz1uhrqh-AGIQ18bNgUv_8vSt1KW3Cjnsgpe1KLJQLp4m9BxiFM1ItSg-IBfXCZ7yGqPwnFnVKQ1jEmYgFkj05XUq-s2EkOLcirgEfLzxGitYxIpT7PyFYBy3zkiV1qH_HWiIHUYAp_3pu3dl7g0qk9zP7TBf8ZCc_mbRrAH2Y" },
      { id: "services.facility.title", label: "Facility Management — title", type: "text", defaultValue: "Facility Management" },
      {
        id: "services.facility.body",
        label: "Facility Management — description",
        type: "textarea",
        defaultValue:
          "Comprehensive cleaning, maintenance, and technical oversight. We maintain your infrastructure to the highest hygienic and operational standards.",
      },
      { id: "services.facility.tags.0", label: "Facility Management — tag 1", type: "text", defaultValue: "Cleaning" },
      { id: "services.facility.tags.1", label: "Facility Management — tag 2", type: "text", defaultValue: "Maintenance" },
      { id: "services.facility.tags.2", label: "Facility Management — tag 3", type: "text", defaultValue: "Hygiene" },
      { id: "services.facility.tags.3", label: "Facility Management — tag 4", type: "text", defaultValue: "Care" },
      {
        id: "services.facility.requestAudit",
        label: "Facility Management — “Request Audit” link",
        type: "text",
        defaultValue: "Request Audit",
      },
      {
        id: "services.facility.learnMore",
        label: "Facility Management — “Learn More” link",
        type: "text",
        defaultValue: "Learn More",
      },
      { id: "services.staffing.title", label: "Staffing Solutions — title", type: "text", defaultValue: "Staffing Solutions" },
      {
        id: "services.staffing.body",
        label: "Staffing Solutions — description",
        type: "textarea",
        defaultValue:
          "Skilled workforce integration. We provide vetted, highly trained personnel to meet your operational demands with precision.",
      },
      { id: "services.staffing.items.0", label: "Staffing Solutions — item 1", type: "text", defaultValue: "Rapid Deployment" },
      { id: "services.staffing.items.1", label: "Staffing Solutions — item 2", type: "text", defaultValue: "Quality Assured" },
      { id: "services.staffing.items.2", label: "Staffing Solutions — item 3", type: "text", defaultValue: "Vetted Personnel" },
      {
        id: "services.staffing.learnMore",
        label: "Staffing Solutions — “Learn More” link",
        type: "text",
        defaultValue: "Learn More",
      },
      { id: "services.optimization.image", label: "Operational Optimization — image or video", type: "media", defaultValue:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAwKU18lsm9jZL_eXH0zmMrXGMfdfe56EMg6X38jmw-nW2khKIbS_qzEIyNQqSpfBiCv_eDn9Ktat5UWr6AdVR2BMeVWegoJdJ_H3KPgfwemiSBtp3SfbQAa_qKmNkDOkrxp8GNzDPjwZsSyGbYqzjK7Pe1I33WIIdAn1aETYTonYBrbZ50TS0uDet3AoQcsRqimne2bjsxEFdjRegg01ZdIKL29A4wTtDhrIuPh3QHUr3XMVlXjUkjQBbFsDx-2-yVC4dBIWitUR0" },
      {
        id: "services.optimization.title",
        label: "Operational Optimization — title",
        type: "text",
        defaultValue: "Operational Optimization",
      },
      {
        id: "services.optimization.body",
        label: "Operational Optimization — description",
        type: "textarea",
        defaultValue:
          "Project management and efficiency consulting. Streamlining your processes through rigorous analysis and structured execution.",
      },
      {
        id: "services.optimization.learnMore",
        label: "Operational Optimization — “Learn More” link",
        type: "text",
        defaultValue: "Learn More",
      },
      { id: "services.trade.image", label: "Import & Export — image or video", type: "media", defaultValue:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAzNLU5XTPySUs2I-74gd1DKJLOC3khcf1UoYHxC3pZXMeYSC7f2PgciMKwHU3ZD4fpQKtNFmvZTj_mHeapWhAMnvy_bR8Jafexeiis0Yg6N5StZp70AVG362AALo8vVHKMWdMrSUhFTWcw6c0O5vO-88Cf_YSs5rV2-NRuYULEnbmJtFoYOL6qQHwtEqGOtwuPuuIqwOsiM9o22CzkJNPAAFH2s4SdHwIgi7lq9zgGL3ao5CLFGFLuAfR9W-ftZD12lQbWG7I84rs" },
      { id: "services.trade.eyebrow", label: "Import & Export — eyebrow", type: "text", defaultValue: "Global Reach" },
      { id: "services.trade.title", label: "Import & Export — title", type: "text", defaultValue: "Import & Export" },
      {
        id: "services.trade.body",
        label: "Import & Export — description",
        type: "textarea",
        defaultValue:
          "European sourcing and logistics. Reliable cross-border trade management ensuring timely delivery and compliance.",
      },
      { id: "services.trade.tags.0", label: "Import & Export — tag 1", type: "text", defaultValue: "European Sourcing" },
      { id: "services.trade.tags.1", label: "Import & Export — tag 2", type: "text", defaultValue: "Global Logistics" },
      { id: "services.trade.tags.2", label: "Import & Export — tag 3", type: "text", defaultValue: "Quality Assurance" },
      { id: "services.trade.tags.3", label: "Import & Export — tag 4", type: "text", defaultValue: "Efficient Supply" },
      {
        id: "services.trade.efficiencyLabel",
        label: "Import & Export — efficiency bar label",
        type: "text",
        defaultValue: "Logistics Efficiency",
      },
      {
        id: "services.trade.learnMore",
        label: "Import & Export — “Learn More” link",
        type: "text",
        defaultValue: "Learn More",
      },
      { id: "services.modal.keyFeatures", label: "Detail modal — “Key Features” label", type: "text", defaultValue: "Key Features" },
      { id: "services.modal.close", label: "Detail modal — close button", type: "text", defaultValue: "Close" },
      {
        id: "services.modal.details.facility.title",
        label: "Facility Management modal — title",
        type: "text",
        defaultValue: "Facility Management",
      },
      {
        id: "services.modal.details.facility.tagline",
        label: "Facility Management modal — tagline",
        type: "text",
        defaultValue: "Comprehensive Care, Zero Compromise",
      },
      {
        id: "services.modal.details.facility.description",
        label: "Facility Management modal — description",
        type: "textarea",
        defaultValue:
          "Our facility management teams handle the full lifecycle of your building's upkeep — from daily cleaning cycles to scheduled technical maintenance — so hotels, offices, and industrial sites run without interruption. Every visit is logged and measured against German hygiene and safety benchmarks.",
      },
      { id: "services.modal.details.facility.features.0", label: "Facility Management modal — feature 1", type: "text", defaultValue: "Daily & Deep Cleaning Cycles" },
      { id: "services.modal.details.facility.features.1", label: "Facility Management modal — feature 2", type: "text", defaultValue: "Preventive Maintenance Scheduling" },
      { id: "services.modal.details.facility.features.2", label: "Facility Management modal — feature 3", type: "text", defaultValue: "Hygiene & Sanitation Compliance" },
      { id: "services.modal.details.facility.features.3", label: "Facility Management modal — feature 4", type: "text", defaultValue: "Interior-Exterior Building Care" },
      {
        id: "services.modal.details.staffing.title",
        label: "Staffing Solutions modal — title",
        type: "text",
        defaultValue: "Staffing Solutions",
      },
      {
        id: "services.modal.details.staffing.tagline",
        label: "Staffing Solutions modal — tagline",
        type: "text",
        defaultValue: "Powering Your Operations with People",
      },
      {
        id: "services.modal.details.staffing.description",
        label: "Staffing Solutions modal — description",
        type: "textarea",
        defaultValue:
          "We recruit, vet, and train personnel who integrate directly into your operations — whether you need short-term coverage or a long-term workforce. Every placement is backed by structured onboarding and ongoing compliance administration.",
      },
      { id: "services.modal.details.staffing.features.0", label: "Staffing Solutions modal — feature 1", type: "text", defaultValue: "Specialized Recruitment" },
      { id: "services.modal.details.staffing.features.1", label: "Staffing Solutions modal — feature 2", type: "text", defaultValue: "On-Site Personnel Management" },
      { id: "services.modal.details.staffing.features.2", label: "Staffing Solutions modal — feature 3", type: "text", defaultValue: "Continuous Training Programs" },
      { id: "services.modal.details.staffing.features.3", label: "Staffing Solutions modal — feature 4", type: "text", defaultValue: "Compliance & Payroll Administration" },
      {
        id: "services.modal.details.optimization.title",
        label: "Operational Optimization modal — title",
        type: "text",
        defaultValue: "Operational Optimization",
      },
      {
        id: "services.modal.details.optimization.tagline",
        label: "Operational Optimization modal — tagline",
        type: "text",
        defaultValue: "Precision Process Engineering",
      },
      {
        id: "services.modal.details.optimization.description",
        label: "Operational Optimization modal — description",
        type: "textarea",
        defaultValue:
          "Our project management specialists analyze your existing workflows and rebuild them around measurable quality control and efficiency targets, drawing on structured German engineering methods to remove waste without disrupting operations.",
      },
      { id: "services.modal.details.optimization.features.0", label: "Operational Optimization modal — feature 1", type: "text", defaultValue: "Quality Control Systems" },
      { id: "services.modal.details.optimization.features.1", label: "Operational Optimization modal — feature 2", type: "text", defaultValue: "Workflow Efficiency Audits" },
      { id: "services.modal.details.optimization.features.2", label: "Operational Optimization modal — feature 3", type: "text", defaultValue: "Structured Project Governance" },
      { id: "services.modal.details.optimization.features.3", label: "Operational Optimization modal — feature 4", type: "text", defaultValue: "Data-Driven Reporting" },
      {
        id: "services.modal.details.trade.title",
        label: "Import & Export modal — title",
        type: "text",
        defaultValue: "Import & Export",
      },
      {
        id: "services.modal.details.trade.tagline",
        label: "Import & Export modal — tagline",
        type: "text",
        defaultValue: "European Sourcing, Global Delivery",
      },
      {
        id: "services.modal.details.trade.description",
        label: "Import & Export modal — description",
        type: "textarea",
        defaultValue:
          "We source premium European goods — food, textiles, and household products — and manage the full cross-border logistics chain, ensuring every shipment clears compliance and arrives on schedule.",
      },
      { id: "services.modal.details.trade.features.0", label: "Import & Export modal — feature 1", type: "text", defaultValue: "European Sourcing Network" },
      { id: "services.modal.details.trade.features.1", label: "Import & Export modal — feature 2", type: "text", defaultValue: "Global Logistics Coordination" },
      { id: "services.modal.details.trade.features.2", label: "Import & Export modal — feature 3", type: "text", defaultValue: "Quality Assurance Checks" },
      { id: "services.modal.details.trade.features.3", label: "Import & Export modal — feature 4", type: "text", defaultValue: "Efficient Cross-Border Supply" },
    ],
  },
  {
    id: "whyus",
    label: "Why Us",
    description: "The three reliability pillars in the “Why Us” section.",
    fields: [
      { id: "whyus.sectionLabel", label: "Section label", type: "text", defaultValue: "04 / Why Us" },
      { id: "whyus.heading.main", label: "Heading — main", type: "text", defaultValue: "The Pio GmbH " },
      { id: "whyus.heading.accent", label: "Heading — accent", type: "text", defaultValue: "Standard" },
      { id: "whyus.workWithUs", label: "“Work With Us” link", type: "text", defaultValue: "Work With Us" },
      {
        id: "whyus.reliability.title",
        label: "Pillar 1 — title",
        type: "text",
        defaultValue: "German Reliability",
      },
      {
        id: "whyus.reliability.body",
        label: "Pillar 1 — description",
        type: "textarea",
        defaultValue:
          "Built on a foundation of exact standards, rigorous quality control, and steadfast commitment to contractual obligations.",
      },
      {
        id: "whyus.availability.title",
        label: "Pillar 2 — title",
        type: "text",
        defaultValue: "24/7 Availability",
      },
      {
        id: "whyus.availability.body",
        label: "Pillar 2 — description",
        type: "textarea",
        defaultValue:
          "Continuous operational readiness. Our management structures ensure round-the-clock response capabilities for critical infrastructure.",
      },
      {
        id: "whyus.expertise.title",
        label: "Pillar 3 — title",
        type: "text",
        defaultValue: "International Expertise",
      },
      {
        id: "whyus.expertise.body",
        label: "Pillar 3 — description",
        type: "textarea",
        defaultValue:
          "Local operational excellence coupled with global sourcing and management strategies, adapting to diverse market requirements.",
      },
    ],
  },
  {
    id: "parallax",
    label: "Future Banner",
    description: "The full-width parallax call-to-action banner.",
    fields: [
      { id: "parallax.bg", label: "Background (image or video)", type: "media", defaultValue: HERO_BG },
      {
        id: "parallax.eyebrow",
        label: "Eyebrow label",
        type: "text",
        defaultValue: "Future-Ready",
      },
      { id: "parallax.heading.main", label: "Heading — main", type: "text", defaultValue: "Shaping the Future of " },
      {
        id: "parallax.heading.accent",
        label: "Heading — accent",
        type: "text",
        defaultValue: "Facility Management",
      },
      {
        id: "parallax.body",
        label: "Body copy",
        type: "textarea",
        defaultValue:
          "We combine structured German engineering with modern management to deliver services that go beyond expectations.",
      },
      { id: "parallax.cta", label: "Call-to-action button", type: "text", defaultValue: "Start a Conversation" },
    ],
  },
  {
    id: "contact",
    label: "Contact",
    description: "The contact section, including address, phone, and the inquiry form.",
    fields: [
      { id: "contact.sectionLabel", label: "Section label", type: "text", defaultValue: "05 / Contact" },
      { id: "contact.heading.main", label: "Heading — main", type: "text", defaultValue: "Initiate " },
      { id: "contact.heading.accent", label: "Heading — accent", type: "text", defaultValue: "Dialogue." },
      {
        id: "contact.subtext",
        label: "Subtext",
        type: "textarea",
        defaultValue:
          "Connect with our management team to discuss structured solutions for your operational requirements.",
      },
      { id: "contact.headquarters", label: "“Headquarters” label", type: "text", defaultValue: "Headquarters" },
      { id: "contact.address.street", label: "Address — street", type: "text", defaultValue: "Oberhausener Straße 187" },
      { id: "contact.address.cityLine", label: "Address — postal code & city", type: "text", defaultValue: "45476 Mülheim an der Ruhr" },
      { id: "contact.address.country", label: "Address — country", type: "text", defaultValue: "Germany" },
      { id: "contact.directLine", label: "“Direct Line” label", type: "text", defaultValue: "Direct Line" },
      { id: "contact.phone", label: "Phone number", type: "text", defaultValue: "+49 151 27919995" },
      { id: "contact.footerTag", label: "Accent tag under contact info", type: "text", defaultValue: "Pio GmbH · Mülheim · Germany" },
      { id: "contact.form.nameLabel", label: "Form — name field label", type: "text", defaultValue: "Full Name" },
      { id: "contact.form.namePlaceholder", label: "Form — name field placeholder", type: "text", defaultValue: "Klaus Schmidt" },
      { id: "contact.form.emailLabel", label: "Form — email field label", type: "text", defaultValue: "Corporate Email" },
      { id: "contact.form.emailPlaceholder", label: "Form — email field placeholder", type: "text", defaultValue: "k.schmidt@company.de" },
      { id: "contact.form.messageLabel", label: "Form — message field label", type: "text", defaultValue: "Requirement Details" },
      { id: "contact.form.messagePlaceholder", label: "Form — message field placeholder", type: "text", defaultValue: "Describe your operational needs..." },
      { id: "contact.form.submit", label: "Form — submit button", type: "text", defaultValue: "Submit Inquiry" },
      { id: "contact.form.successAlert", label: "Form — success message", type: "text", defaultValue: "Inquiry submitted. We will be in touch shortly." },
    ],
  },
  {
    id: "footer",
    label: "Footer",
    description: "The site footer: brand, link columns, and bottom bar.",
    fields: [
      { id: "footer.tagline", label: "Brand tagline (italic, under copyright)", type: "text", defaultValue: "Engineered for Excellence." },
      { id: "footer.servicesHeading", label: "Services column heading", type: "text", defaultValue: "Services" },
      { id: "footer.serviceLinks.0", label: "Services link 1", type: "text", defaultValue: "Facility Management" },
      { id: "footer.serviceLinks.1", label: "Services link 2", type: "text", defaultValue: "Staffing Solutions" },
      { id: "footer.serviceLinks.2", label: "Services link 3", type: "text", defaultValue: "Operational Optimization" },
      { id: "footer.serviceLinks.3", label: "Services link 4", type: "text", defaultValue: "Import & Export" },
      { id: "footer.legalHeading", label: "Legal column heading", type: "text", defaultValue: "Legal" },
      { id: "footer.legalLinks.0", label: "Legal link 1", type: "text", defaultValue: "Imprint" },
      { id: "footer.legalLinks.1", label: "Legal link 2", type: "text", defaultValue: "Privacy Policy" },
      { id: "footer.legalLinks.2", label: "Legal link 3", type: "text", defaultValue: "Terms & Conditions" },
      { id: "footer.locationHeading", label: "Location column heading", type: "text", defaultValue: "Location" },
      { id: "footer.bottomTag", label: "Bottom bar tag", type: "text", defaultValue: "Premium Management Services" },
      { id: "footer.regionTag", label: "Bottom bar region tag", type: "text", defaultValue: "DE · EU" },
    ],
  },
];
