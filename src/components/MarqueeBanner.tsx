"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

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
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const ctx = gsap.context(() => {
      const total = trackRef.current!.scrollWidth / 3;
      gsap.fromTo(
        trackRef.current,
        { x: 0 },
        {
          x: -total,
          ease: "none",
          repeat: -1,
          duration: 28,
        }
      );
    });
    return () => ctx.revert();
  }, []);

  const tripled = [...items, ...items, ...items];

  return (
    <div className="relative py-6 bg-[#0f0d0a] overflow-hidden border-y border-[rgba(201,151,58,0.08)]">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0f0d0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0f0d0a] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap">
        <div ref={trackRef} className="flex items-center gap-10 will-change-transform">
          {tripled.map((text, i) => (
            <div key={i} className="flex items-center gap-10 shrink-0">
              <span
                className="font-display text-2xl md:text-3xl font-400 italic text-[#2a241c]"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  WebkitTextStroke: "1px rgba(201,151,58,0.25)",
                  color: "transparent",
                  letterSpacing: "-0.01em",
                }}
              >
                {text}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-[#c9973a] opacity-60 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
