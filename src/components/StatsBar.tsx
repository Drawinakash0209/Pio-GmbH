"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Trophy, Clock } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLanguage } from "./LanguageProvider";
import EditableText from "./EditableText";

const iconFor = [Trophy, Clock, Users];
const valueFor = ["100", "24/7", "Expert"];
const suffixFor = ["%", "", ""];
const numericFor: (number | null)[] = [100, null, null];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    const controls = animate(count, to, { duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] });
    return controls.stop;
  }, [to, count]);

  useEffect(() => {
    return rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v);
    });
  }, [rounded]);

  return <span ref={ref}>0</span>;
}

export default function StatsBar() {
  const { t } = useLanguage();

  return (
    <section className="bg-t-dark-panel border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {t.statsBar.map(({ label }, i) => {
            const Icon = iconFor[i];
            const numeric = numericFor[i];
            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-start pt-4 md:pt-0 md:pl-8 first:pl-0 group"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.1, type: "spring", stiffness: 200, damping: 14 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 mb-3"
                >
                  <div className="w-8 h-8 bg-t-accent/10 flex items-center justify-center rounded">
                    <Icon className="w-4 h-4 text-t-accent" />
                  </div>
                </motion.div>
                <span
                  className="font-display text-white mb-1 font-black tracking-tight"
                  style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1 }}
                >
                  {numeric !== null ? <CountUp to={numeric} /> : valueFor[i]}
                  {suffixFor[i] && <span className="text-t-accent">{suffixFor[i]}</span>}
                </span>
                <EditableText
                  id={`statsBar.${i}.label`}
                  defaultValue={label}
                  className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/40 font-mono"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
