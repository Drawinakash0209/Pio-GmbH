"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Globe, Award, ArrowRight, Check, Target, Users, Zap } from "lucide-react";
import Modal from "./Modal";

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  { icon: Building2, label: "Founded in Mülheim" },
  { icon: Globe, label: "International Reach" },
  { icon: Award, label: "German Standards" },
];

const standoutPoints = [
  "German-engineered process discipline, applied to every contract",
  "Direct project ownership — no layers of subcontracted management",
  "Transparent, scheduled reporting on every engagement",
  "Sustainability-first sourcing and operational practices",
];

export default function About() {
  const [open, setOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text side slides in from left
      gsap.fromTo(
        textRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Visual panel slides in from right
      gsap.fromTo(
        panelRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Number counter animation
      gsap.fromTo(
        numRef.current,
        { opacity: 0.03 },
        {
          opacity: 0.06,
          duration: 1.5,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative py-32 bg-[#151210] overflow-hidden">
      {/* Section number watermark */}
      <span
        ref={numRef}
        className="absolute top-0 right-0 font-display font-900 text-[#c9973a] select-none pointer-events-none leading-none"
        style={{
          fontFamily: "Playfair Display, serif",
          fontWeight: 900,
          fontSize: "clamp(120px, 18vw, 280px)",
          opacity: 0.04,
          lineHeight: 1,
          right: "-0.05em",
          top: "-0.1em",
        }}
        aria-hidden="true"
      >
        01
      </span>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-num" style={{ fontFamily: "DM Mono, monospace", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9973a" }}>
            01 / About
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(201,151,58,0.3)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <div ref={textRef}>
            <h2
              className="font-display mb-6 text-[#f0ece6]"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(34px, 3.5vw, 50px)",
                lineHeight: "1.15",
                letterSpacing: "-0.02em",
                fontWeight: 700,
              }}
            >
              Bridging Global Expertise{" "}
              <em className="italic text-[#c9973a]">with Local Excellence.</em>
            </h2>

            <p className="text-base leading-8 text-[#b8b09f] font-light mb-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
              At Pio GmbH, we operate on the fundamental principles of German engineering: precision, reliability, and structured execution. Our management methodologies are designed to streamline complex operational challenges into highly efficient, scalable solutions.
            </p>
            <p className="text-base leading-8 text-[#b8b09f] font-light mb-10" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Located in the industrial heartland of Mülheim an der Ruhr, we leverage regional industrial heritage combined with modern, international management practices to deliver uncompromising quality across all our service divisions.
            </p>

            {/* Pillars */}
            <div className="flex flex-wrap gap-3 mb-10">
              {pillars.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-sm border border-[rgba(201,151,58,0.2)] bg-[rgba(201,151,58,0.04)] hover:border-[rgba(201,151,58,0.4)] hover:bg-[rgba(201,151,58,0.08)] transition-all duration-300 group"
                >
                  <Icon className="w-3.5 h-3.5 text-[#c9973a]" />
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-[#b8b09f] group-hover:text-[#f0ece6] transition-colors" style={{ fontFamily: "DM Mono, monospace" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="group inline-flex items-center gap-3 text-sm font-medium text-[#f0ece6] hover:text-[#c9973a] transition-colors duration-300"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Visual panel */}
          <div ref={panelRef} className="relative">
            <div
              className="relative h-[480px] rounded-lg overflow-hidden"
              style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}
            >
              {/* Grid of stat panels */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <div className="grid grid-cols-2 gap-4 h-full">
                  {[
                    { n: "100%", l: "Qualität", accent: true },
                    { n: "24/7", l: "Betrieb", accent: false },
                    { n: "DE", l: "Standort", accent: false },
                    { n: "EU", l: "Reichweite", accent: true },
                  ].map(({ n, l, accent }) => (
                    <div
                      key={l}
                      className="flex flex-col justify-center p-6 rounded-sm hover:bg-[rgba(201,151,58,0.05)] transition-colors duration-300"
                      style={{ border: "1px solid rgba(201,151,58,0.1)" }}
                    >
                      <span
                        className="font-display font-700 leading-none mb-2"
                        style={{
                          fontFamily: "Playfair Display, serif",
                          fontWeight: 700,
                          fontSize: "clamp(28px, 3vw, 40px)",
                          color: accent ? "#c9973a" : "#f0ece6",
                        }}
                      >
                        {n}
                      </span>
                      <span
                        className="text-[10px] tracking-[0.18em] uppercase text-[#6e6659]"
                        style={{ fontFamily: "DM Mono, monospace" }}
                      >
                        {l}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amber accent line */}
              <div className="absolute top-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#c9973a] to-transparent" />
              <div className="absolute bottom-0 right-0 w-12 h-0.5 bg-gradient-to-l from-[#c9973a] to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-6 h-0.5 bg-[#c9973a]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#c9973a]" style={{ fontFamily: "DM Mono, monospace" }}>
              Our Story & Values
            </span>
          </div>
          <h3
            className="font-display text-[#f0ece6] mb-8"
            style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(26px, 3vw, 36px)", lineHeight: 1.2, fontWeight: 700, letterSpacing: "-0.02em" }}
          >
            Defining Facility Management Excellence,{" "}
            <em className="italic text-[#c9973a]">from Mülheim to the World</em>
          </h3>

          <div className="flex items-start gap-4 mb-10">
            <div className="w-10 h-10 rounded border border-[rgba(201,151,58,0.3)] bg-[rgba(201,151,58,0.06)] flex items-center justify-center shrink-0">
              <Target className="w-4 h-4 text-[#c9973a]" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-[#f0ece6] mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>Excellence in Execution</h4>
              <p className="text-base leading-7 text-[#b8b09f] font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>
                At Pio GmbH, we believe mediocrity has no place in facility management. Every engagement is run against the same German engineering standard: precise, documented, and accountable.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { icon: Target, title: "Strategic Foundation", body: "Rooted in the industrial heritage of Mülheim an der Ruhr, aligning every service line with long-term operational goals." },
              { icon: Users, title: "People First", body: "Investing in recruitment, training, and welfare so our workforce arrives motivated, skilled, and accountable." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="p-6 rounded-sm" style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}>
                <Icon className="w-6 h-6 text-[#c9973a] mb-3" />
                <h5 className="font-medium text-[#f0ece6] mb-2" style={{ fontFamily: "DM Sans, sans-serif" }}>{title}</h5>
                <p className="text-sm leading-6 text-[#b8b09f] font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>

          <div className="p-6 rounded-sm mb-8" style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#151210" }}>
            <h4 className="text-base font-medium text-[#f0ece6] mb-5 flex items-center gap-2" style={{ fontFamily: "DM Sans, sans-serif" }}>
              <Zap className="w-4 h-4 text-[#c9973a]" />
              Why We Stand Out
            </h4>
            <ul className="space-y-3">
              {standoutPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-sm bg-[#c9973a] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 text-[#0f0d0a]" />
                  </div>
                  <span className="text-sm text-[#b8b09f] font-light leading-6" style={{ fontFamily: "DM Sans, sans-serif" }}>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="w-full py-3.5 rounded-sm bg-[#c9973a] text-[#0f0d0a] text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-[#e8b84b] transition-colors duration-300"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
}
