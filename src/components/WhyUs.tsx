"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Clock, Globe2, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: ShieldCheck,
    num: "01",
    title: "German Reliability",
    body: "Built on a foundation of exact standards, rigorous quality control, and steadfast commitment to contractual obligations.",
  },
  {
    icon: Clock,
    num: "02",
    title: "24/7 Availability",
    body: "Continuous operational readiness. Our management structures ensure round-the-clock response capabilities for critical infrastructure.",
  },
  {
    icon: Globe2,
    num: "03",
    title: "International Expertise",
    body: "Local operational excellence coupled with global sourcing and management strategies, adapting to diverse market requirements.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pillar-card",
        { opacity: 0, y: 60, rotateX: -8 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="reliability" className="py-32 bg-[#151210] relative overflow-hidden">
      {/* Amber radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(201,151,58,0.05) 0%, transparent 60%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-num" style={{ fontFamily: "DM Mono, monospace", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9973a" }}>
            04 / Why Us
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(201,151,58,0.3)] to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            className="font-display text-[#f0ece6]"
            style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(34px, 3.5vw, 52px)", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: 700 }}
          >
            The Pio GmbH{" "}
            <em className="italic text-[#c9973a]">Standard</em>
          </h2>
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#f0ece6] hover:text-[#c9973a] transition-colors shrink-0"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Work With Us
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" style={{ perspective: "1000px" }}>
          {pillars.map(({ icon: Icon, num, title, body }) => (
            <div
              key={title}
              className="pillar-card group relative rounded-lg p-8 hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-2 transition-all duration-400 overflow-hidden"
              style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}
            >
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(201,151,58,0.05)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 font-display font-900 text-[#c9973a] select-none pointer-events-none"
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontWeight: 900,
                  fontSize: "56px",
                  opacity: 0.06,
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {num}
              </span>

              <div className="relative">
                <div
                  className="w-11 h-11 rounded-sm flex items-center justify-center mb-6 group-hover:border-[rgba(201,151,58,0.4)] transition-colors duration-300"
                  style={{ border: "1px solid rgba(201,151,58,0.2)", background: "rgba(201,151,58,0.06)" }}
                >
                  <Icon className="w-5 h-5 text-[#c9973a]" />
                </div>

                <h3
                  className="font-display text-[#f0ece6] mb-4"
                  style={{ fontFamily: "Playfair Display, serif", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  {title}
                </h3>
                <p className="text-sm leading-6 text-[#b8b09f] font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  {body}
                </p>
              </div>

              {/* Bottom amber accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#c9973a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
