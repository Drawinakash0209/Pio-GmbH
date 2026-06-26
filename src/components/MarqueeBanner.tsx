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
    <div className="relative py-8 bg-[#f3f3f4] overflow-hidden border-y border-[#c4c7c7]/60">
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#f3f3f4] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f3f3f4] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: "-33.333%" }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((text, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <span className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#1a1c1c] to-[#747878]">
              {text}
            </span>
            <div className="w-2 h-2 bg-[#caf300] rounded-full shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
