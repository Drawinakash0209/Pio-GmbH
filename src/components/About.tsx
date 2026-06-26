"use client";

import { motion } from "framer-motion";
import { Building2, Globe, Award } from "lucide-react";

const pillars = [
  { icon: Building2, label: "Founded in Mülheim" },
  { icon: Globe, label: "International Reach" },
  { icon: Award, label: "German Standards" },
];

export default function About() {
  return (
    <section id="about" className="py-[120px] bg-[#f9f9f9]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="text-[10px] font-black tracking-[0.15em] uppercase text-[#536600] px-3 py-1.5 bg-[#c7ef00] inline-block">
                Über uns
              </span>
            </motion.div>

            <h2
              className="text-[#000000] mb-6"
              style={{
                fontSize: "clamp(32px, 3vw, 44px)",
                lineHeight: "1.15",
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              Bridging Global Expertise with Local Excellence.
            </h2>
            <div className="h-1 w-16 bg-[#caf300] mb-8" />
            <p className="text-base leading-7 text-[#444748] mb-6">
              At Pio GmbH, we operate on the fundamental principles of German
              engineering: precision, reliability, and structured execution. Our
              management methodologies are designed to streamline complex
              operational challenges into highly efficient, scalable solutions.
            </p>
            <p className="text-base leading-7 text-[#444748] mb-10">
              Located in the industrial heartland of Mülheim an der Ruhr, we
              leverage regional industrial heritage combined with modern,
              international management practices to deliver uncompromising
              quality across all our service divisions.
            </p>

            {/* Pillar chips */}
            <div className="flex flex-wrap gap-3">
              {pillars.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2 px-4 py-2 border border-[#c4c7c7] bg-white hover:border-[#caf300] transition-colors duration-200 group"
                >
                  <Icon className="w-4 h-4 text-[#747878] group-hover:text-[#000000] transition-colors" />
                  <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#444748] group-hover:text-[#000000] transition-colors">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[480px] bg-[#1a1c1c] overflow-hidden">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #caf300 1px, transparent 1px), linear-gradient(to bottom, #caf300 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />

              {/* Decorative stat blocks */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-sm">
                  {[
                    { n: "100%", l: "Qualität" },
                    { n: "24/7", l: "Betrieb" },
                    { n: "DE", l: "Standort" },
                    { n: "EU", l: "Reichweite" },
                  ].map(({ n, l }, i) => (
                    <motion.div
                      key={l}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                      viewport={{ once: true }}
                      className="border border-white/10 bg-white/5 p-5 flex flex-col gap-1 hover:bg-white/10 transition-colors"
                    >
                      <span className="text-3xl font-black text-white tracking-tight">{n}</span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 font-bold">{l}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Corner lime accent */}
              <div className="absolute bottom-0 left-0 w-16 h-1 bg-[#caf300]" />
              <div className="absolute bottom-0 left-0 w-1 h-16 bg-[#caf300]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
