"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: ShieldCheck,
    title: "German Reliability",
    body: "Built on a foundation of exact standards, rigorous quality control, and steadfast commitment to contractual obligations.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    body: "Continuous operational readiness. Our management structures ensure round-the-clock response capabilities for critical infrastructure.",
  },
  {
    icon: Globe2,
    title: "International Expertise",
    body: "Local operational excellence coupled with global sourcing and management strategies, adapting to diverse market requirements.",
  },
];

export default function WhyUs() {
  return (
    <section id="reliability" className="py-[120px] bg-[#131313]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span className="inline-block border-l-2 border-[#0055ff] pl-4 text-[#0055ff] text-[11px] font-medium tracking-[0.2em] uppercase mb-4">
              Warum wir
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
              The Pio GmbH Standard
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#e5e2e1] hover:text-[#0055ff] transition-colors group shrink-0"
          >
            Work With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="refined-border group relative rounded-xl p-8 bg-[#1c1b1b] hover:border-white/20 transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded bg-[#1a1a1a] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#0055ff]/40 transition-colors duration-300">
                <Icon className="w-5 h-5 text-[#0055ff]" />
              </div>
              <h3 className="text-xl font-medium tracking-tight text-[#e5e2e1] mb-3">{title}</h3>
              <p className="text-base leading-6 text-[#c3c5d9] font-light">{body}</p>

              {/* Number */}
              <span
                className="absolute top-6 right-6 text-6xl font-semibold text-white/5 select-none pointer-events-none"
                style={{ lineHeight: 1 }}
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
