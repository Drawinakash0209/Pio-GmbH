"use client";

import { motion } from "framer-motion";

const items = [
  "Deutsche Zuverlässigkeit",
  "Internationale Expertise",
  "Facility Management",
  "24/7 Betrieb",
  "Qualität Zuerst",
  "Mülheim an der Ruhr",
  "Personaldienstleistungen",
  "Import & Export",
];

export default function MarqueeBanner() {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="relative py-8 bg-[#131313] overflow-hidden border-y border-white/5">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#131313] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#131313] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: "-33.333%" }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((text, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <span className="text-2xl md:text-3xl font-light uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-[#e5e2e1] to-[#434656]">
              {text}
            </span>
            <div className="w-2 h-2 bg-[#0055ff] rounded-full shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
