"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Modal from "./Modal";
import EditableImage from "./EditableImage";
import EditableText from "./EditableText";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

type ServiceDetail = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

const serviceDetails: Record<string, ServiceDetail> = {
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
};

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const activeDetail = activeService ? serviceDetails[activeService] : null;

  return (
    <section id="services" className="py-[120px] bg-t-bg-elevated">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] font-black tracking-[0.15em] uppercase text-t-on-badge px-3 py-1.5 bg-t-badge mb-4 inline-block">
            Core Capabilities
          </span>
          <h2
            className="text-t-ink"
            style={{
              fontSize: "clamp(32px, 3vw, 44px)",
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              fontWeight: 700,
            }}
          >
            Strategic Service Pillars
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Facility Management — spans 2 cols */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group border border-t-border hover:border-t-ink transition-all duration-200 bg-t-bg flex flex-col md:flex-row overflow-hidden min-h-[420px]"
          >
            <div className="md:w-1/2 p-8 flex flex-col justify-between order-2 md:order-1">
              <div>
                <div className="w-11 h-11 bg-t-ink flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-t-accent text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    cleaning_services
                  </span>
                </div>
                <EditableText
                  id="services.facility.title"
                  as="h3"
                  defaultValue="Facility Management"
                  className="text-2xl font-bold leading-8 tracking-tight text-t-ink mb-4"
                />
                <EditableText
                  id="services.facility.body"
                  as="p"
                  defaultValue="Comprehensive cleaning, maintenance, and technical oversight. We maintain your infrastructure to the highest hygienic and operational standards."
                  className="text-base leading-6 text-t-body"
                />
                <div className="flex flex-wrap gap-2 mt-6">
                  {["Cleaning", "Maintenance", "Hygiene", "Care"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-t-bg-elevated border border-t-border text-[10px] font-bold tracking-[0.08em] uppercase text-t-body"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-ink hover:text-t-link transition-colors group/link"
                >
                  Request Audit
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setActiveService("facility")}
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-faint hover:text-t-ink transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto order-1 md:order-2 relative overflow-hidden">
              <EditableImage
                id="services.facility.image"
                defaultSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAN4pSLaLjtzJWkQ7F-ef4LTr1zXga3uEc5BaTgwC5HcY7i3vRVRg8nRCzoXPSU8n-bW-wGBR5aF5RVsS3_fkXy-WwFkisqry_-Ynz1uhrqh-AGIQ18bNgUv_8vSt1KW3Cjnsgpe1KLJQLp4m9BxiFM1ItSg-IBfXCZ7yGqPwnFnVKQ1jEmYgFkj05XUq-s2EkOLcirgEfLzxGitYxIpT7PyFYBy3zkiV1qH_HWiIHUYAp_3pu3dl7g0qk9zP7TBf8ZCc_mbRrAH2Y"
                alt="Facility Management"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Staffing Solutions */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            className="border border-t-border hover:border-t-ink transition-all duration-200 bg-t-bg p-8 flex flex-col justify-between min-h-[420px] group"
          >
            <div>
              <div className="w-11 h-11 bg-t-bg-muted border border-t-border flex items-center justify-center mb-6 group-hover:bg-t-ink transition-colors duration-200">
                <span className="material-symbols-outlined text-t-ink group-hover:text-t-accent transition-colors duration-200">
                  groups
                </span>
              </div>
              <EditableText
                id="services.staffing.title"
                as="h3"
                defaultValue="Staffing Solutions"
                className="text-2xl font-bold leading-8 tracking-tight text-t-ink mb-4"
              />
              <EditableText
                id="services.staffing.body"
                as="p"
                defaultValue="Skilled workforce integration. We provide vetted, highly trained personnel to meet your operational demands with precision."
                className="text-base leading-6 text-t-body"
              />
            </div>
            <div className="mt-8 pt-4 border-t border-t-border">
              <ul className="space-y-2 mb-6">
                {["Rapid Deployment", "Quality Assured", "Vetted Personnel"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm leading-5 text-t-body">
                    <span className="w-1.5 h-1.5 bg-t-accent inline-block shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveService("staffing")}
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-ink hover:text-t-link transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Operational Optimization */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            className="border border-t-border hover:border-t-ink transition-all duration-200 bg-t-bg flex flex-col overflow-hidden min-h-[420px] group"
          >
            <div className="h-52 relative overflow-hidden">
              <EditableImage
                id="services.optimization.image"
                defaultSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAwKU18lsm9jZL_eXH0zmMrXGMfdfe56EMg6X38jmw-nW2khKIbS_qzEIyNQqSpfBiCv_eDn9Ktat5UWr6AdVR2BMeVWegoJdJ_H3KPgfwemiSBtp3SfbQAa_qKmNkDOkrxp8GNzDPjwZsSyGbYqzjK7Pe1I33WIIdAn1aETYTonYBrbZ50TS0uDet3AoQcsRqimne2bjsxEFdjRegg01ZdIKL29A4wTtDhrIuPh3QHUr3XMVlXjUkjQBbFsDx-2-yVC4dBIWitUR0"
                alt="Operational Optimization"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-t-accent" />
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <EditableText
                  id="services.optimization.title"
                  as="h3"
                  defaultValue="Operational Optimization"
                  className="text-2xl font-bold leading-8 tracking-tight text-t-ink mb-4"
                />
                <EditableText
                  id="services.optimization.body"
                  as="p"
                  defaultValue="Project management and efficiency consulting. Streamlining your processes through rigorous analysis and structured execution."
                  className="text-base leading-6 text-t-body"
                />
              </div>
              <button
                onClick={() => setActiveService("optimization")}
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-ink mt-6 hover:text-t-link transition-colors group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Import & Export — spans 2 cols */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group border border-t-border hover:border-t-ink transition-all duration-200 bg-t-bg flex flex-col md:flex-row overflow-hidden min-h-[420px]"
          >
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <EditableImage
                id="services.trade.image"
                defaultSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAzNLU5XTPySUs2I-74gd1DKJLOC3khcf1UoYHxC3pZXMeYSC7f2PgciMKwHU3ZD4fpQKtNFmvZTj_mHeapWhAMnvy_bR8Jafexeiis0Yg6N5StZp70AVG362AALo8vVHKMWdMrSUhFTWcw6c0O5vO-88Cf_YSs5rV2-NRuYULEnbmJtFoYOL6qQHwtEqGOtwuPuuIqwOsiM9o22CzkJNPAAFH2s4SdHwIgi7lq9zgGL3ao5CLFGFLuAfR9W-ftZD12lQbWG7I84rs"
                alt="Import & Export"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between bg-t-dark-panel text-white">
              <div>
                <EditableText
                  id="services.trade.eyebrow"
                  defaultValue="Global Reach"
                  className="text-[10px] font-black tracking-[0.15em] uppercase text-t-accent mb-4 inline-block"
                />
                <EditableText
                  id="services.trade.title"
                  as="h3"
                  defaultValue="Import & Export"
                  className="text-2xl font-bold leading-8 tracking-tight text-white mb-4"
                />
                <EditableText
                  id="services.trade.body"
                  as="p"
                  defaultValue="European sourcing and logistics. Reliable cross-border trade management ensuring timely delivery and compliance."
                  className="text-base leading-6 text-white/60"
                />
                <div className="flex flex-wrap gap-2 mt-6">
                  {["European Sourcing", "Global Logistics", "Quality Assurance", "Efficient Supply"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 border border-white/15 text-[10px] font-bold tracking-[0.08em] uppercase text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <div className="h-px w-full bg-white/10 mb-4" />
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.1em] text-white/40 font-bold mb-2">
                  <span>Logistics Efficiency</span>
                  <span className="text-t-accent">85%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-t-accent rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <button
                  onClick={() => setActiveService("trade")}
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-white mt-6 hover:text-t-accent transition-colors group/link"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal open={activeDetail !== null} onClose={() => setActiveService(null)}>
        {activeDetail && (
          <div className="relative p-8 md:p-10">
            <h3 className="text-3xl font-bold tracking-tight text-t-ink mb-2 pr-10">
              {activeDetail.title}
            </h3>
            <p className="text-t-link font-bold mb-6">{activeDetail.tagline}</p>
            <p className="text-base leading-7 text-t-body mb-8">
              {activeDetail.description}
            </p>

            <div className="bg-t-bg border border-t-border p-6">
              <h4 className="font-bold text-t-ink mb-4">Key Features</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {activeDetail.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-t-accent flex items-center justify-center text-t-on-accent shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm font-medium text-t-body">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-t-border flex justify-end">
              <button
                onClick={() => setActiveService(null)}
                className="inline-flex items-center justify-center px-9 py-4 bg-t-ink text-t-on-ink text-[11px] font-black tracking-[0.1em] uppercase hover:bg-t-dark-panel hover:text-t-on-dark-panel transition-colors duration-150 min-w-[120px]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
