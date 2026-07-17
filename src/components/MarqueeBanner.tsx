"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./LanguageProvider";

export default function MarqueeBanner() {
  const { t } = useLanguage();
  const doubled = [...t.marquee, ...t.marquee, ...t.marquee];
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.94]);

  return (
    <motion.div
      ref={ref}
      style={{ scale }}
      className="relative py-8 bg-t-bg-subtle overflow-hidden border-y border-t-border/60"
    >
      {/* Fade edges */}
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-t-bg-subtle to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-t-bg-subtle to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: "-33.333%" }}
        transition={{ duration: 35, ease: "linear", repeat: Infinity }}
      >
        {doubled.map((text, i) => (
          <div key={i} className="flex items-center gap-4 shrink-0">
            <span
              className="font-display text-2xl md:text-3xl italic uppercase tracking-tighter"
              style={{
                WebkitTextStroke: "1px var(--color-t-accent-dim)",
                color: "transparent",
              }}
            >
              {text}
            </span>
            <div className="w-2 h-2 bg-t-accent rounded-full shrink-0" />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
