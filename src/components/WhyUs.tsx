"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";
import EditableText from "./EditableText";
import { useLanguage } from "./LanguageProvider";
import { useEditableValue } from "./useEditableValue";

export default function WhyUs() {
  const { t } = useLanguage();
  const workWithUs = useEditableValue("whyus.workWithUs", t.whyUs.workWithUs);

  const pillars = [
    {
      id: "whyus.reliability",
      icon: ShieldCheck,
      title: t.cms.whyUsReliabilityTitle,
      body: t.cms.whyUsReliabilityBody,
    },
    {
      id: "whyus.availability",
      icon: Clock,
      title: t.cms.whyUsAvailabilityTitle,
      body: t.cms.whyUsAvailabilityBody,
    },
    {
      id: "whyus.expertise",
      icon: Globe2,
      title: t.cms.whyUsExpertiseTitle,
      body: t.cms.whyUsExpertiseBody,
    },
  ];

  return (
    <section id="reliability" className="py-[120px] bg-t-bg-elevated">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <EditableText id="whyus.sectionLabel" defaultValue={t.whyUs.sectionLabel} className="section-label" />
          <div className="section-divider" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
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
            <EditableText id="whyus.heading.main" defaultValue={t.whyUs.heading.main} />
            <em className="accent-italic">
              <EditableText id="whyus.heading.accent" defaultValue={t.whyUs.heading.accent} />
            </em>
          </h2>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-t-ink hover:text-t-link transition-colors group shrink-0"
          >
            {workWithUs}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map(({ id, icon: Icon, title, body }, i) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative rounded-lg p-8 border border-t-border hover:border-t-accent-dim bg-t-bg hover:bg-t-bg-elevated transition-all duration-200 overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-t-accent group-hover:w-full transition-all duration-300" />

              <div className="w-12 h-12 rounded-sm bg-t-dark-panel flex items-center justify-center mb-6 group-hover:bg-t-accent transition-colors duration-200">
                <Icon className="w-5 h-5 text-t-accent group-hover:text-t-on-accent transition-colors duration-200" />
              </div>
              <EditableText
                id={`${id}.title`}
                as="h3"
                defaultValue={title}
                className="text-xl font-bold tracking-tight text-t-ink mb-3"
              />
              <EditableText
                id={`${id}.body`}
                as="p"
                defaultValue={body}
                className="text-base leading-6 text-t-body"
              />

              {/* Number watermark */}
              <span
                className="section-watermark absolute top-6 right-6"
                style={{ fontSize: "56px", opacity: 0.08 }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
