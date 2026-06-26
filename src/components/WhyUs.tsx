"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Clock, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: ShieldCheck,
    title: "German Reliability",
    body: "Built on a foundation of exact standards, rigorous quality control, and steadfast commitment to contractual obligations.",
    accent: "text-[#caf300]",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    body: "Continuous operational readiness. Our management structures ensure round-the-clock response capabilities for critical infrastructure.",
    accent: "text-[#caf300]",
  },
  {
    icon: Globe2,
    title: "International Expertise",
    body: "Local operational excellence coupled with global sourcing and management strategies, adapting to diverse market requirements.",
    accent: "text-[#caf300]",
  },
];

export default function WhyUs() {
  return (
    <section id="reliability" className="py-[120px] bg-white">
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
            <span className="text-[10px] font-black tracking-[0.15em] uppercase text-[#536600] px-3 py-1.5 bg-[#c7ef00] mb-4 inline-block">
              Warum wir
            </span>
            <h2
              className="text-[#000000]"
              style={{
                fontSize: "clamp(32px, 3vw, 44px)",
                lineHeight: "1.15",
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              The Pio GmbH Standard
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#000000] hover:text-[#536600] transition-colors group shrink-0"
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
              className="group relative p-8 border border-[#c4c7c7] hover:border-[#000000] bg-[#f9f9f9] hover:bg-white transition-all duration-200 overflow-hidden"
            >
              {/* Hover lime accent bar */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#caf300] group-hover:w-full transition-all duration-300" />

              <div className="w-12 h-12 bg-[#1a1c1c] flex items-center justify-center mb-6 group-hover:bg-[#caf300] transition-colors duration-200">
                <Icon className="w-5 h-5 text-[#caf300] group-hover:text-[#000000] transition-colors duration-200" />
              </div>
              <h3 className="text-xl font-bold tracking-tight text-[#000000] mb-3">{title}</h3>
              <p className="text-base leading-6 text-[#444748]">{body}</p>

              {/* Number */}
              <span
                className="absolute top-6 right-6 text-6xl font-black text-[#000000]/5 select-none pointer-events-none"
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
