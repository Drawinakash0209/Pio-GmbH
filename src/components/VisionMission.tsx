"use client";

import { motion } from "framer-motion";
import { Eye, Target, Handshake, Gauge } from "lucide-react";
import { useLanguage } from "./LanguageProvider";

const statementIcons = [Eye, Target];
const valueIcons = [Handshake, Gauge];

export default function VisionMission() {
  const { t } = useLanguage();

  return (
    <section className="py-[120px] bg-t-bg-elevated border-t border-t-border/50 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-label">{t.visionMission.sectionLabel}</span>
          <div className="section-divider" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="font-display text-t-ink mb-16"
          style={{
            fontSize: "clamp(32px, 3.5vw, 50px)",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          {t.visionMission.heading.main}
          <em className="accent-italic">{t.visionMission.heading.accent}</em>
        </motion.h2>

        {/* Vision & Mission — two dark statement panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {t.visionMission.statements.map(({ label, title, body }, i) => {
            const Icon = statementIcons[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group relative p-10 rounded-lg bg-t-dark-panel overflow-hidden"
              >
                {/* Grid pattern */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, var(--color-t-accent) 1px, transparent 1px), linear-gradient(to bottom, var(--color-t-accent) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative">
                  <div className="w-12 h-12 rounded-sm bg-t-accent flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-t-on-accent" />
                  </div>
                  <span className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-accent mb-3 font-mono">
                    {label}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-4">{title}</h3>
                  <p className="text-base leading-7 text-white/60 max-w-md">{body}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-1 bg-t-accent" />
              </motion.div>
            );
          })}
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {t.visionMission.values.map(({ title, body }, i) => {
            const Icon = valueIcons[i];
            return (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-lg border border-t-border hover:border-t-ink bg-t-bg hover:bg-t-bg-elevated transition-all duration-200 overflow-hidden flex items-start gap-5"
              >
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-t-accent group-hover:w-full transition-all duration-300" />
                <div className="w-12 h-12 rounded-sm bg-t-dark-panel flex items-center justify-center shrink-0 group-hover:bg-t-accent transition-colors duration-200">
                  <Icon className="w-5 h-5 text-t-accent group-hover:text-t-on-accent transition-colors duration-200" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-t-ink mb-3">{title}</h3>
                  <p className="text-base leading-6 text-t-body">{body}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
