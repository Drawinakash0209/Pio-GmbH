"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Eye, Target, Handshake, Gauge } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const statements = [
  {
    icon: Eye,
    label: "Our Vision",
    title: "The Premier Provider",
    body: "To be the premier provider for management, service, and staffing solutions.",
  },
  {
    icon: Target,
    label: "Our Mission",
    title: "Empowering Businesses",
    body: "Empowering businesses through efficient, professional, international standard services.",
  },
];

const values = [
  {
    icon: Handshake,
    title: "Client Engagement",
    body: "Building trusted, long-term strategic partnerships that prioritize your success.",
  },
  {
    icon: Gauge,
    title: "Operational Excellence",
    body: "Precision and flexibility 24/7, ensuring seamless execution in every project.",
  },
];

export default function VisionMission() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".vm-card",
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-[#0f0d0a] relative overflow-hidden">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 50%, rgba(201,151,58,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-num" style={{ fontFamily: "DM Mono, monospace", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9973a" }}>
            02 / Vision & Mission
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(201,151,58,0.3)] to-transparent" />
        </div>

        <h2
          className="font-display text-[#f0ece6] mb-16"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(34px, 3.5vw, 50px)",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            fontWeight: 700,
          }}
        >
          What Drives Us{" "}
          <em className="italic text-[#c9973a]">Forward</em>
        </h2>

        {/* Vision & Mission panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {statements.map(({ icon: Icon, label, title, body }) => (
            <div
              key={label}
              className="vm-card group relative rounded-lg p-10 overflow-hidden hover:-translate-y-1 transition-transform duration-300 cursor-default"
              style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,151,58,0.04)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-6"
                  style={{ border: "1px solid rgba(201,151,58,0.3)", background: "rgba(201,151,58,0.06)" }}
                >
                  <Icon className="w-5 h-5 text-[#c9973a]" />
                </div>
                <span
                  className="block mb-3"
                  style={{ fontFamily: "DM Mono, monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9973a" }}
                >
                  {label}
                </span>
                <h3
                  className="font-display text-[#f0ece6] mb-4"
                  style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(22px, 2vw, 28px)", fontWeight: 700, letterSpacing: "-0.01em" }}
                >
                  {title}
                </h3>
                <p className="text-base leading-7 text-[#b8b09f] font-light max-w-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {body}
                </p>
              </div>

              {/* Corner amber accent */}
              <div className="absolute top-0 left-0 w-8 h-0.5 bg-[#c9973a] opacity-60" />
            </div>
          ))}
        </div>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="vm-card group flex items-start gap-5 p-8 rounded-lg hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-1 transition-all duration-300"
              style={{ border: "1px solid rgba(201,151,58,0.1)", background: "#1e1a15" }}
            >
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[rgba(201,151,58,0.4)] transition-colors duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#151210" }}
              >
                <Icon className="w-5 h-5 text-[#c9973a]" />
              </div>
              <div>
                <h3
                  className="font-display text-[#f0ece6] mb-3"
                  style={{ fontFamily: "Playfair Display, serif", fontSize: "20px", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-6 text-[#b8b09f] font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
