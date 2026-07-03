"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Globe,
  Award,
  Target,
  Users,
  Zap,
  Check,
  ArrowRight,
} from "lucide-react";
import Modal from "./Modal";

const pillars = [
  { icon: Building2, label: "Founded in Mülheim" },
  { icon: Globe, label: "International Reach" },
  { icon: Award, label: "German Standards" },
];

const standoutPoints = [
  "German-engineered process discipline, applied to every contract",
  "Direct project ownership — no layers of subcontracted management",
  "Transparent, scheduled reporting on every engagement",
  "Sustainability-first sourcing and operational practices",
];

export default function About() {
  const [open, setOpen] = useState(false);

  return (
    <section id="about" className="py-[120px] bg-[#131313]">
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
              <span className="inline-block border-l-2 border-[#0055ff] pl-4 text-[#0055ff] text-[11px] font-medium tracking-[0.2em] uppercase">
                Über uns
              </span>
            </motion.div>

            <h2
              className="font-display text-[#e5e2e1] mb-6"
              style={{
                fontSize: "clamp(32px, 3vw, 44px)",
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
                fontWeight: 600,
              }}
            >
              Bridging Global Expertise with Local Excellence.
            </h2>
            <p className="text-base leading-7 text-[#c3c5d9] font-light mb-6">
              At Pio GmbH, we operate on the fundamental principles of German
              engineering: precision, reliability, and structured execution. Our
              management methodologies are designed to streamline complex
              operational challenges into highly efficient, scalable solutions.
            </p>
            <p className="text-base leading-7 text-[#c3c5d9] font-light mb-10">
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
                  className="refined-border flex items-center gap-2 px-4 py-2 rounded bg-[#1c1b1b] hover:border-[#0055ff]/40 transition-colors duration-200 group"
                >
                  <Icon className="w-4 h-4 text-[#8d90a2] group-hover:text-[#0055ff] transition-colors" />
                  <span className="text-[11px] font-medium tracking-[0.08em] uppercase text-[#c3c5d9] group-hover:text-[#e5e2e1] transition-colors">
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => setOpen(true)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#e5e2e1] mt-8 hover:text-[#0055ff] transition-colors group/link"
            >
              Learn More
              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Visual panel */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="refined-border relative h-[480px] rounded-xl bg-[#1c1b1b] overflow-hidden">
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
                      className="refined-border rounded bg-white/[0.02] p-5 flex flex-col gap-1 hover:bg-white/5 transition-colors"
                    >
                      <span className="text-3xl font-semibold text-[#e5e2e1] tracking-tight">{n}</span>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-[#c3c5d9]/50 font-medium">{l}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-8 md:p-12">
          <span className="inline-block border-l-2 border-[#0055ff] pl-4 text-[#0055ff] text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
            Our Story &amp; Values
          </span>
          <h3
            className="font-display text-[#e5e2e1] mb-8"
            style={{
              fontSize: "clamp(26px, 3vw, 34px)",
              lineHeight: "1.25",
              letterSpacing: "-0.01em",
              fontWeight: 600,
            }}
          >
            Defining Facility Management Excellence, from Mülheim to the World
          </h3>

          <div className="flex items-start gap-4 mb-10">
            <div className="w-12 h-12 rounded bg-[#1a1a1a] border border-white/10 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-[#0055ff]" />
            </div>
            <div>
              <h4 className="text-xl font-medium tracking-tight text-[#e5e2e1] mb-2">
                Excellence in Execution
              </h4>
              <p className="text-base leading-7 text-[#c3c5d9] font-light">
                At Pio GmbH, we believe mediocrity has no place in facility
                management. Every engagement, from a single maintenance visit
                to a multi-site staffing rollout, is run against the same
                German engineering standard: precise, documented, and
                accountable. Our teams are trained and audited against that
                standard continuously, not just at onboarding.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-10">
            <div className="refined-border rounded-xl p-6 bg-[#1c1b1b]">
              <Target className="w-7 h-7 text-[#0055ff] mb-3" />
              <h5 className="font-medium text-lg mb-2 text-[#e5e2e1]">
                Strategic Foundation
              </h5>
              <p className="text-sm leading-6 text-[#c3c5d9] font-light">
                Rooted in the industrial heritage of Mülheim an der Ruhr,
                aligning every service line with long-term operational goals.
              </p>
            </div>
            <div className="refined-border rounded-xl p-6 bg-[#1c1b1b]">
              <Users className="w-7 h-7 text-[#e9c176] mb-3" />
              <h5 className="font-medium text-lg mb-2 text-[#e5e2e1]">
                People First
              </h5>
              <p className="text-sm leading-6 text-[#c3c5d9] font-light">
                Investing in recruitment, training, and welfare so our
                workforce arrives motivated, skilled, and accountable.
              </p>
            </div>
          </div>

          <div className="refined-border rounded-xl p-8 bg-[#161616]">
            <h4 className="text-xl font-medium mb-6 text-[#e5e2e1] flex items-center gap-3">
              <Zap className="w-5 h-5 text-[#e9c176]" />
              Why We Stand Out
            </h4>
            <ul className="space-y-4">
              {standoutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="p-1 rounded bg-[#0055ff] text-white mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[#c3c5d9] font-light leading-6">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded px-9 py-3.5 bg-[#0055ff] text-white text-sm font-medium tracking-wide hover:bg-[#0055ff]/90 transition-colors duration-300 min-w-[140px]"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
}
