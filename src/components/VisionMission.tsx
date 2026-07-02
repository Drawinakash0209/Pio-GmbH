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
    <section className="py-[120px] bg-[#0e0e0e] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block border-l-2 border-[#0055ff] pl-4 text-[#0055ff] text-[11px] font-medium tracking-[0.2em] uppercase mb-4">
            Vision &amp; Auftrag
          </span>
          <h2
            className="text-[#e5e2e1]"
            style={{
              fontSize: "clamp(32px, 3vw, 44px)",
              lineHeight: "1.2",
              letterSpacing: "-0.01em",
              fontWeight: 600,
            }}
          >
            What Drives Us Forward
          </h2>
        </motion.div>

        {/* Vision & Mission — two statement panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {statements.map(({ icon: Icon, label, title, body }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="refined-border group relative rounded-xl p-10 bg-[#1c1b1b] overflow-hidden hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded bg-[#0055ff]/10 border border-[#0055ff]/30 flex items-center justify-center mb-6">
                <Icon className="w-5 h-5 text-[#0055ff]" />
              </div>
              <span className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#0055ff] mb-3">
                {label}
              </span>
              <h3 className="text-2xl font-medium tracking-tight text-[#e5e2e1] mb-4">{title}</h3>
              <p className="text-base leading-7 text-[#c3c5d9] font-light max-w-md">{body}</p>
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
              className="refined-border group relative rounded-xl p-8 bg-[#1c1b1b] hover:border-white/20 transition-all duration-300 flex items-start gap-5 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded bg-[#1a1a1a] border border-white/10 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-[#e9c176]" />
              </div>
              <div>
                <h3 className="text-xl font-medium tracking-tight text-[#e5e2e1] mb-3">{title}</h3>
                <p className="text-base leading-6 text-[#c3c5d9] font-light">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
