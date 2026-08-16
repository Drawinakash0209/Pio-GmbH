"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import Modal from "./Modal";
import EditableImage from "./EditableImage";
import EditableText from "./EditableText";
import { useLanguage } from "./LanguageProvider";
import { useEditableValue } from "./useEditableValue";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Services() {
  const { t } = useLanguage();
  const [activeService, setActiveService] = useState<string | null>(null);
  const activeDetail = activeService ? t.services.modal.details[activeService] : null;
  const requestAudit = useEditableValue("services.facility.requestAudit", t.services.facility.requestAudit);
  const facilityLearnMore = useEditableValue("services.facility.learnMore", t.services.facility.learnMore);
  const staffingLearnMore = useEditableValue("services.staffing.learnMore", t.services.staffing.learnMore);
  const optimizationLearnMore = useEditableValue(
    "services.optimization.learnMore",
    t.services.optimization.learnMore
  );
  const tradeLearnMore = useEditableValue("services.trade.learnMore", t.services.trade.learnMore);
  const modalClose = useEditableValue("services.modal.close", t.services.modal.close);

  return (
    <section id="services" className="py-[120px] bg-t-bg-elevated">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <EditableText id="services.sectionLabel" defaultValue={t.services.sectionLabel} className="section-label" />
          <div className="section-divider" />
        </div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <h2
            className="font-display text-t-ink"
            style={{
              fontSize: "clamp(32px, 3.5vw, 52px)",
              lineHeight: "1.1",
              letterSpacing: "-0.025em",
              fontWeight: 700,
            }}
          >
            <EditableText id="services.heading.main" defaultValue={t.services.heading.main} />
            <em className="accent-italic">
              <EditableText id="services.heading.accent" defaultValue={t.services.heading.accent} />
            </em>
          </h2>
          <EditableText
            id="services.subtext"
            as="p"
            defaultValue={t.services.subtext}
            className="text-sm text-t-faint max-w-xs"
          />
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
            className="lg:col-span-2 group rounded-lg border border-t-border hover:border-t-accent-dim transition-all duration-200 bg-t-bg-elevated shadow-sm hover:shadow-md dark:shadow-none flex flex-col lg:flex-row overflow-hidden lg:min-h-[420px]"
          >
            <div className="lg:w-1/2 p-8 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="w-11 h-11 rounded-sm bg-t-ink flex items-center justify-center mb-6">
                  <span
                    className="material-symbols-outlined text-t-accent text-xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    cleaning_services
                  </span>
                </div>
                <EditableText
                  id="services.facility.title"
                  as="h3"
                  defaultValue={t.cms.servicesFacilityTitle}
                  className="text-2xl font-bold leading-8 tracking-tight text-t-ink mb-4"
                />
                <EditableText
                  id="services.facility.body"
                  as="p"
                  defaultValue={t.cms.servicesFacilityBody}
                  className="text-base leading-6 text-t-body"
                />
                <div className="flex flex-wrap gap-2 mt-6">
                  {t.services.facility.tags.map((tag, i) => (
                    <EditableText
                      key={tag}
                      id={`services.facility.tags.${i}`}
                      defaultValue={tag}
                      className="px-3 py-1.5 rounded-sm bg-t-bg-elevated border border-t-border text-[10px] font-bold tracking-[0.08em] uppercase text-t-body font-mono inline-block"
                    />
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-6 mt-8">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-ink hover:text-t-link transition-colors group/link"
                >
                  {requestAudit}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <button
                  onClick={() => setActiveService("facility")}
                  className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-faint hover:text-t-ink transition-colors"
                >
                  {facilityLearnMore}
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 h-64 lg:h-auto order-1 lg:order-2 relative overflow-hidden">
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
            className="rounded-lg border border-t-border hover:border-t-accent-dim transition-all duration-200 bg-t-bg-elevated shadow-sm hover:shadow-md dark:shadow-none p-8 flex flex-col justify-between md:min-h-[420px] group"
          >
            <div>
              <div className="w-11 h-11 rounded-sm bg-t-bg-muted border border-t-border flex items-center justify-center mb-6 group-hover:bg-t-ink transition-colors duration-200">
                <span className="material-symbols-outlined text-t-ink group-hover:text-t-accent transition-colors duration-200">
                  groups
                </span>
              </div>
              <EditableText
                id="services.staffing.title"
                as="h3"
                defaultValue={t.cms.servicesStaffingTitle}
                className="text-2xl font-bold leading-8 tracking-tight text-t-ink mb-4"
              />
              <EditableText
                id="services.staffing.body"
                as="p"
                defaultValue={t.cms.servicesStaffingBody}
                className="text-base leading-6 text-t-body"
              />
            </div>
            <div className="mt-8 pt-4 border-t border-t-border">
              <ul className="space-y-2 mb-6">
                {t.services.staffing.items.map((item, i) => (
                  <li key={item} className="flex items-center gap-2 text-sm leading-5 text-t-body">
                    <span className="w-1.5 h-1.5 bg-t-accent inline-block shrink-0 rounded-full" />
                    <EditableText id={`services.staffing.items.${i}`} defaultValue={item} />
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActiveService("staffing")}
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-ink hover:text-t-link transition-colors group/link"
              >
                {staffingLearnMore}
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
            className="rounded-lg border border-t-border hover:border-t-accent-dim transition-all duration-200 bg-t-bg-elevated shadow-sm hover:shadow-md dark:shadow-none flex flex-col overflow-hidden md:min-h-[420px] group"
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
                  defaultValue={t.cms.servicesOptimizationTitle}
                  className="text-2xl font-bold leading-8 tracking-tight text-t-ink mb-4"
                />
                <EditableText
                  id="services.optimization.body"
                  as="p"
                  defaultValue={t.cms.servicesOptimizationBody}
                  className="text-base leading-6 text-t-body"
                />
              </div>
              <button
                onClick={() => setActiveService("optimization")}
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-ink mt-6 hover:text-t-link transition-colors group/link"
              >
                {optimizationLearnMore}
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
            className="lg:col-span-2 group rounded-lg border border-t-border hover:border-t-accent-dim transition-all duration-200 shadow-sm hover:shadow-md dark:shadow-none flex flex-col lg:flex-row overflow-hidden lg:min-h-[420px]"
          >
            <div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
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
                  defaultValue={t.cms.servicesTradeEyebrow}
                  className="text-[10px] font-black tracking-[0.15em] uppercase text-t-accent mb-4 inline-block font-mono"
                />
                <EditableText
                  id="services.trade.title"
                  as="h3"
                  defaultValue={t.cms.servicesTradeTitle}
                  className="text-2xl font-bold leading-8 tracking-tight text-white mb-4"
                />
                <EditableText
                  id="services.trade.body"
                  as="p"
                  defaultValue={t.cms.servicesTradeBody}
                  className="text-base leading-6 text-white/60"
                />
                <div className="flex flex-wrap gap-2 mt-6">
                  {t.services.trade.tags.map((tag, i) => (
                    <EditableText
                      key={tag}
                      id={`services.trade.tags.${i}`}
                      defaultValue={tag}
                      className="px-3 py-1.5 rounded-sm border border-white/15 text-[10px] font-bold tracking-[0.08em] uppercase text-white/60 font-mono inline-block"
                    />
                  ))}
                </div>
              </div>
              <div className="mt-8">
                <div className="h-px w-full bg-white/10 mb-4" />
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.1em] text-white/40 font-bold mb-2 font-mono">
                  <EditableText id="services.trade.efficiencyLabel" defaultValue={t.services.trade.efficiencyLabel} />
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
                  {tradeLearnMore}
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal open={activeDetail !== null} onClose={() => setActiveService(null)}>
        {activeDetail && activeService && (
          <div className="relative p-8 md:p-10">
            <EditableText
              id={`services.modal.details.${activeService}.title`}
              as="h3"
              defaultValue={activeDetail.title}
              className="text-3xl font-bold tracking-tight text-t-ink mb-2 pr-10"
            />
            <EditableText
              id={`services.modal.details.${activeService}.tagline`}
              as="p"
              defaultValue={activeDetail.tagline}
              className="text-t-link font-bold mb-6"
            />
            <EditableText
              id={`services.modal.details.${activeService}.description`}
              as="p"
              defaultValue={activeDetail.description}
              className="text-base leading-7 text-t-body mb-8"
            />

            <div className="bg-t-bg rounded-lg border border-t-border p-6">
              <EditableText
                id="services.modal.keyFeatures"
                as="h4"
                defaultValue={t.services.modal.keyFeatures}
                className="font-bold text-t-ink mb-4"
              />
              <div className="grid sm:grid-cols-2 gap-4">
                {activeDetail.features.map((feature, i) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-sm bg-t-accent flex items-center justify-center text-t-on-accent shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <EditableText
                      id={`services.modal.details.${activeService}.features.${i}`}
                      defaultValue={feature}
                      className="text-sm font-medium text-t-body"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-t-border flex justify-end">
              <button
                onClick={() => setActiveService(null)}
                className="inline-flex items-center justify-center px-9 py-4 rounded-sm bg-t-ink text-t-on-ink text-[11px] font-black tracking-[0.1em] uppercase hover:bg-t-dark-panel hover:text-t-on-dark-panel transition-colors duration-150 min-w-[120px]"
              >
                {modalClose}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
