"use client";

import { motion } from "framer-motion";
import { Eye, Target, Handshake, Gauge } from "lucide-react";

const statements = [
  {
    icon: Eye,
    label: "Our Vision",
    title: "The Premier Provider",
    body: "To be the premier provider for management, service, and staffing solutions.",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Empowering Businesses",
    body: "Empowering businesses through efficient, professional, international standard services.",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Client Engagement",
    body: "Building trusted, long-term strategic partnerships that prioritize your success.",
  },
  {
    icon: Gauge,
    title: "Operational Excellence",
    body: "Precision and flexibility 24/7, ensuring seamless execution in every project.",
  },
];

export default function VisionMission() {
  return (
    <section className="py-[120px] bg-t-bg-elevated border-t border-t-border/50">
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
            Vision &amp; Auftrag
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
            What Drives Us Forward
          </h2>
        </motion.div>

        {/* Vision & Mission — two dark statement panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {statements.map(({ icon: Icon, label, title, body }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative p-10 bg-t-dark-panel overflow-hidden"
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #caf300 1px, transparent 1px), linear-gradient(to bottom, #caf300 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="relative">
                <div className="w-12 h-12 bg-t-accent flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-t-on-accent" />
                </div>
                <span className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-accent mb-3">
                  {label}
                </span>
                <h3 className="text-2xl font-bold tracking-tight text-white mb-4">{title}</h3>
                <p className="text-base leading-7 text-white/60 max-w-md">{body}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-t-accent" />
            </motion.div>
          ))}
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="group relative p-8 border border-t-border hover:border-t-ink bg-t-bg hover:bg-t-bg-elevated transition-all duration-200 overflow-hidden flex items-start gap-5"
            >
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-t-accent group-hover:w-full transition-all duration-300" />
              <div className="w-12 h-12 bg-t-dark-panel flex items-center justify-center shrink-0 group-hover:bg-t-accent transition-colors duration-200">
                <Icon className="w-5 h-5 text-t-accent group-hover:text-t-on-accent transition-colors duration-200" />
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-t-ink mb-3">{title}</h3>
                <p className="text-base leading-6 text-t-body">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
