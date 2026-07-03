"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Users, Trophy, Clock } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { value: "100", suffix: "%", label: "Quality Focus", icon: Trophy, numeric: 100 },
  { value: "24/7", suffix: "", label: "Operations", icon: Clock, numeric: null },
  { value: "Expert", suffix: "", label: "Core Team", icon: Users, numeric: null },
];

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
  return (
    <section className="bg-t-dark-panel border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map(({ value, suffix, label, icon: Icon, numeric }, i) => (
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
                className="text-white mb-1 font-black tracking-tight"
                style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1 }}
              >
                {numeric !== null ? <CountUp to={numeric} /> : value}
                {suffix && <span className="text-t-accent">{suffix}</span>}
              </span>
              <span className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/40">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
