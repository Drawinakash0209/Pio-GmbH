// Registry of every editable field on the site, grouped into the sections
// shown in the admin dashboard sidebar. Keep this in sync with the
// EditableText/EditableImage ids used out in src/components/*.tsx — it has
// no server-only imports so it's safe to import from both server and client.

export type FieldType = "text" | "textarea" | "image";

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
    id: "hero",
    label: "Hero",
    description: "The full-screen intro banner at the top of the site.",
    fields: [
      { id: "hero.bg", label: "Background image", type: "image", defaultValue: HERO_BG },
      {
        id: "hero.badge",
        label: "Location badge",
        type: "text",
        defaultValue: "Mülheim an der Ruhr · Germany",
      },
    ],
  },
  {
    id: "services",
    label: "Services (Features)",
    description: "The four core-capability cards on the Services section.",
    fields: [
      {
        id: "services.facility.image",
        label: "Facility Management — image",
        type: "image",
        defaultValue:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAN4pSLaLjtzJWkQ7F-ef4LTr1zXga3uEc5BaTgwC5HcY7i3vRVRg8nRCzoXPSU8n-bW-wGBR5aF5RVsS3_fkXy-WwFkisqry_-Ynz1uhrqh-AGIQ18bNgUv_8vSt1KW3Cjnsgpe1KLJQLp4m9BxiFM1ItSg-IBfXCZ7yGqPwnFnVKQ1jEmYgFkj05XUq-s2EkOLcirgEfLzxGitYxIpT7PyFYBy3zkiV1qH_HWiIHUYAp_3pu3dl7g0qk9zP7TBf8ZCc_mbRrAH2Y",
      },
      {
        id: "services.facility.title",
        label: "Facility Management — title",
        type: "text",
        defaultValue: "Facility Management",
      },
      {
        id: "services.facility.body",
        label: "Facility Management — description",
        type: "textarea",
        defaultValue:
          "Comprehensive cleaning, maintenance, and technical oversight. We maintain your infrastructure to the highest hygienic and operational standards.",
      },
      {
        id: "services.staffing.title",
        label: "Staffing Solutions — title",
        type: "text",
        defaultValue: "Staffing Solutions",
      },
      {
        id: "services.staffing.body",
        label: "Staffing Solutions — description",
        type: "textarea",
        defaultValue:
          "Skilled workforce integration. We provide vetted, highly trained personnel to meet your operational demands with precision.",
      },
      {
        id: "services.optimization.image",
        label: "Operational Optimization — image",
        type: "image",
        defaultValue:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAwKU18lsm9jZL_eXH0zmMrXGMfdfe56EMg6X38jmw-nW2khKIbS_qzEIyNQqSpfBiCv_eDn9Ktat5UWr6AdVR2BMeVWegoJdJ_H3KPgfwemiSBtp3SfbQAa_qKmNkDOkrxp8GNzDPjwZsSyGbYqzjK7Pe1I33WIIdAn1aETYTonYBrbZ50TS0uDet3AoQcsRqimne2bjsxEFdjRegg01ZdIKL29A4wTtDhrIuPh3QHUr3XMVlXjUkjQBbFsDx-2-yVC4dBIWitUR0",
      },
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
        id: "services.trade.image",
        label: "Import & Export — image",
        type: "image",
        defaultValue:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAzNLU5XTPySUs2I-74gd1DKJLOC3khcf1UoYHxC3pZXMeYSC7f2PgciMKwHU3ZD4fpQKtNFmvZTj_mHeapWhAMnvy_bR8Jafexeiis0Yg6N5StZp70AVG362AALo8vVHKMWdMrSUhFTWcw6c0O5vO-88Cf_YSs5rV2-NRuYULEnbmJtFoYOL6qQHwtEqGOtwuPuuIqwOsiM9o22CzkJNPAAFH2s4SdHwIgi7lq9zgGL3ao5CLFGFLuAfR9W-ftZD12lQbWG7I84rs",
      },
      {
        id: "services.trade.eyebrow",
        label: "Import & Export — eyebrow",
        type: "text",
        defaultValue: "Global Reach",
      },
      {
        id: "services.trade.title",
        label: "Import & Export — title",
        type: "text",
        defaultValue: "Import & Export",
      },
      {
        id: "services.trade.body",
        label: "Import & Export — description",
        type: "textarea",
        defaultValue:
          "European sourcing and logistics. Reliable cross-border trade management ensuring timely delivery and compliance.",
      },
    ],
  },
  {
    id: "whyus",
    label: "Why Us",
    description: "The three reliability pillars in the “Why Us” section.",
    fields: [
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
      { id: "parallax.bg", label: "Background image", type: "image", defaultValue: HERO_BG },
      {
        id: "parallax.eyebrow",
        label: "Eyebrow label",
        type: "text",
        defaultValue: "Zukunftssicher",
      },
      {
        id: "parallax.body",
        label: "Body copy",
        type: "textarea",
        defaultValue:
          "We combine structured German engineering with modern management to deliver services that go beyond expectations.",
      },
    ],
  },
];
