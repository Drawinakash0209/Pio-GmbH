"use client";

import { motion } from "framer-motion";
import { Users, Trophy, Clock } from "lucide-react";

const stats = [
  { value: "100", suffix: "%", label: "Quality Focus", icon: Trophy },
  { value: "24/7", suffix: "", label: "Operations", icon: Clock },
  { value: "Expert", suffix: "", label: "Core Team", icon: Users },
];

export default function StatsBar() {
  return (
    <section className="bg-[#131316] border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map(({ value, suffix, label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-start pt-4 md:pt-0 md:pl-8 first:pl-0 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#b6c4ff]/10 flex items-center justify-center rounded">
                  <Icon className="w-4 h-4 text-[#b6c4ff]" />
                </div>
              </div>
              <span
                className="text-[#f0f0f2] mb-1 font-black tracking-tight"
                style={{ fontSize: "clamp(32px, 5vw, 64px)", lineHeight: 1 }}
              >
                {value}
                {suffix && <span className="text-[#e9c176]">{suffix}</span>}
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
