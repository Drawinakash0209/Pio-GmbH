"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "100%", label: "Quality Focus" },
  { value: "24/7", label: "Operations" },
  { value: "EU", label: "Reach" },
  { value: "DE", label: "Standards" },
];

export default function StatsBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: barRef.current,
            start: "top 85%",
          },
        }
      );
    }, barRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={barRef} className="bg-[#151210] border-y border-[rgba(201,151,58,0.1)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[rgba(201,151,58,0.1)]">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="stat-item flex flex-col items-center text-center md:px-8"
            >
              <span
                className="font-display font-700 text-[#c9973a] leading-none"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 700,
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                }}
              >
                {value}
              </span>
              <span
                className="text-[10px] tracking-[0.18em] uppercase text-[#6e6659] mt-2"
                style={{ fontFamily: "DM Mono, monospace" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
