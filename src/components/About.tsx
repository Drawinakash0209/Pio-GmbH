"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Building2, Globe, Award, Target, Users, Zap, Check, ArrowRight } from "lucide-react";
import Modal from "./Modal";
import EditableText from "./EditableText";
import { useLanguage } from "./LanguageProvider";
import { useEditableValue } from "./useEditableValue";

const pillarIcons = [Building2, Globe, Award];

export default function About() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const learnMore = useEditableValue("about.learnMore", t.about.learnMore);
  const modalClose = useEditableValue("about.modal.close", t.about.modal.close);

  // Subtle cursor-reactive tilt on the dark visual panel
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useTransform(my, [0, 1], [6, -6]);
  const rotateY = useTransform(mx, [0, 1], [-6, 6]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }
  function handleMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <section id="about" className="relative py-16 sm:py-20 md:py-24 lg:py-[120px] bg-t-bg overflow-hidden">
      {/* Section number watermark */}
      <span
        className="section-watermark absolute top-0 right-0"
        style={{ fontSize: "clamp(120px, 18vw, 280px)", right: "-0.05em", top: "-0.1em" }}
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <EditableText id="about.sectionLabel" defaultValue={t.about.sectionLabel} className="section-label" />
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2
              className="font-display text-t-ink mb-6"
              style={{
                fontSize: "clamp(32px, 3.5vw, 50px)",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              <EditableText id="about.heading.main" defaultValue={t.about.heading.main} />
              <em className="accent-italic">
                <EditableText id="about.heading.accent" defaultValue={t.about.heading.accent} />
              </em>
            </h2>
            <EditableText
              id="about.paragraph1"
              as="p"
              defaultValue={t.about.paragraph1}
              className="text-base leading-7 text-t-body font-light mb-5"
            />
            <EditableText
              id="about.paragraph2"
              as="p"
              defaultValue={t.about.paragraph2}
              className="text-base leading-7 text-t-body font-light mb-10"
            />

            {/* Pillar chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {t.about.pillars.map((label, i) => {
                const Icon = pillarIcons[i];
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm border border-t-border bg-t-accent/5 hover:border-t-accent-dim hover:bg-t-accent/10 transition-all duration-300 group"
                  >
                    <Icon className="w-3.5 h-3.5 text-t-link dark:text-t-accent" />
                    <EditableText
                      id={`about.pillars.${i}`}
                      defaultValue={label}
                      className="text-[11px] font-medium tracking-[0.1em] uppercase text-t-body group-hover:text-t-ink transition-colors font-mono"
                    />
                  </motion.div>
                );
              })}
            </div>

            <motion.button
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              viewport={{ once: true }}
              className="group inline-flex items-center gap-3 text-sm font-medium text-t-ink hover:text-t-link transition-colors duration-300"
            >
              <span>{learnMore}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
            style={{ perspective: 1000 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              className="relative h-[340px] sm:h-[400px] lg:h-[480px] rounded-lg bg-t-dark-panel overflow-hidden"
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--color-t-accent) 1px, transparent 1px), linear-gradient(to bottom, var(--color-t-accent) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Decorative stat blocks */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-sm">
                  {t.about.statPanel.map(({ n, l }, i) => (
                    <motion.div
                      key={l}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      viewport={{ once: true }}
                      className="rounded-sm border border-white/10 bg-white/5 p-5 flex flex-col gap-1 hover:bg-white/10 transition-colors"
                    >
                      <EditableText
                        id={`about.statPanel.${i}.n`}
                        defaultValue={n}
                        className="font-display text-3xl font-black text-white tracking-tight"
                      />
                      <EditableText
                        id={`about.statPanel.${i}.l`}
                        defaultValue={l}
                        className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-bold font-mono"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-t-accent" />
              <div className="absolute bottom-0 left-0 w-1 h-16 bg-t-accent" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-0.5 bg-t-accent" />
            <EditableText id="about.modal.eyebrow" defaultValue={t.about.modal.eyebrow} className="section-label" />
          </div>
          <h3
            className="font-display text-t-ink mb-8"
            style={{
              fontSize: "clamp(26px, 3vw, 34px)",
              lineHeight: "1.2",
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            <EditableText id="about.modal.heading.main" defaultValue={t.about.modal.heading.main} />
            <em className="accent-italic">
              <EditableText id="about.modal.heading.accent" defaultValue={t.about.modal.heading.accent} />
            </em>
          </h3>

          <div className="flex items-start gap-4 mb-10">
            <div className="w-12 h-12 rounded border border-t-accent-dim/40 bg-t-accent/5 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-t-link dark:text-t-accent" />
            </div>
            <div>
              <EditableText
                id="about.modal.executionTitle"
                as="h4"
                defaultValue={t.about.modal.executionTitle}
                className="text-xl font-bold tracking-tight text-t-ink mb-2"
              />
              <EditableText
                id="about.modal.executionBody"
                as="p"
                defaultValue={t.about.modal.executionBody}
                className="text-base leading-7 text-t-body"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="p-6 rounded-sm bg-t-bg border border-t-border">
              <Target className="w-7 h-7 text-t-link mb-3" />
              <EditableText
                id="about.modal.strategicTitle"
                as="h5"
                defaultValue={t.about.modal.strategicTitle}
                className="font-bold text-lg mb-2 text-t-ink"
              />
              <EditableText
                id="about.modal.strategicBody"
                as="p"
                defaultValue={t.about.modal.strategicBody}
                className="text-sm leading-6 text-t-body"
              />
            </div>
            <div className="p-6 rounded-sm bg-t-bg border border-t-border">
              <Users className="w-7 h-7 text-t-link mb-3" />
              <EditableText
                id="about.modal.peopleTitle"
                as="h5"
                defaultValue={t.about.modal.peopleTitle}
                className="font-bold text-lg mb-2 text-t-ink"
              />
              <EditableText
                id="about.modal.peopleBody"
                as="p"
                defaultValue={t.about.modal.peopleBody}
                className="text-sm leading-6 text-t-body"
              />
            </div>
          </div>

          <div className="p-8 rounded-lg bg-t-dark-panel relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--color-t-accent) 1px, transparent 1px), linear-gradient(to bottom, var(--color-t-accent) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <h4 className="relative text-xl font-bold mb-6 text-white flex items-center gap-3">
              <Zap className="w-5 h-5 text-t-accent" />
              <EditableText id="about.modal.standoutTitle" defaultValue={t.about.modal.standoutTitle} />
            </h4>
            <ul className="relative space-y-4">
              {t.about.modal.standoutPoints.map((point, i) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="p-1 rounded-sm bg-t-accent text-t-on-accent mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <EditableText
                    id={`about.modal.standoutPoints.${i}`}
                    defaultValue={point}
                    className="text-white/80 leading-6"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center px-9 py-4 rounded-sm bg-t-accent text-t-on-accent text-[11px] font-black tracking-[0.1em] uppercase hover:bg-t-accent-dim transition-colors duration-150 min-w-[140px]"
            >
              {modalClose}
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
