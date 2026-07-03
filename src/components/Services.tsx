"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, Users, Settings2, PlaneTakeoff } from "lucide-react";
import Modal from "./Modal";

gsap.registerPlugin(ScrollTrigger);

type ServiceDetail = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
};

const serviceDetails: Record<string, ServiceDetail> = {
  facility: {
    title: "Facility Management",
    tagline: "Comprehensive Care, Zero Compromise",
    description:
      "Our facility management teams handle the full lifecycle of your building's upkeep — from daily cleaning cycles to scheduled technical maintenance — so hotels, offices, and industrial sites run without interruption.",
    features: ["Daily & Deep Cleaning Cycles", "Preventive Maintenance Scheduling", "Hygiene & Sanitation Compliance", "Interior-Exterior Building Care"],
  },
  staffing: {
    title: "Staffing Solutions",
    tagline: "Powering Your Operations with People",
    description:
      "We recruit, vet, and train personnel who integrate directly into your operations — whether you need short-term coverage or a long-term workforce. Every placement is backed by structured onboarding and ongoing compliance administration.",
    features: ["Specialized Recruitment", "On-Site Personnel Management", "Continuous Training Programs", "Compliance & Payroll Administration"],
  },
  optimization: {
    title: "Operational Optimization",
    tagline: "Precision Process Engineering",
    description:
      "Our project management specialists analyze your existing workflows and rebuild them around measurable quality control and efficiency targets, drawing on structured German engineering methods.",
    features: ["Quality Control Systems", "Workflow Efficiency Audits", "Structured Project Governance", "Data-Driven Reporting"],
  },
  trade: {
    title: "Import & Export",
    tagline: "European Sourcing, Global Delivery",
    description:
      "We source premium European goods — food, textiles, and household products — and manage the full cross-border logistics chain, ensuring every shipment clears compliance and arrives on schedule.",
    features: ["European Sourcing Network", "Global Logistics Coordination", "Quality Assurance Checks", "Efficient Cross-Border Supply"],
  },
};

const services = [
  {
    key: "facility",
    icon: Sparkles,
    label: "Facility Management",
    desc: "Comprehensive cleaning, maintenance, and technical oversight to the highest hygienic and operational standards.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAN4pSLaLjtzJWkQ7F-ef4LTr1zXga3uEc5BaTgwC5HcY7i3vRVRg8nRCzoXPSU8n-bW-wGBR5aF5RVsS3_fkXy-WwFkisqry_-Ynz1uhrqh-AGIQ18bNgUv_8vSt1KW3Cjnsgpe1KLJQLp4m9BxiFM1ItSg-IBfXCZ7yGqPwnFnVKQ1jEmYgFkj05XUq-s2EkOLcirgEfLzxGitYxIpT7PyFYBy3zkiV1qH_HWiIHUYAp_3pu3dl7g0qk9zP7TBf8ZCc_mbRrAH2Y",
    tags: ["Cleaning", "Maintenance", "Hygiene", "Care"],
    wide: true,
  },
  {
    key: "staffing",
    icon: Users,
    label: "Staffing Solutions",
    desc: "Skilled workforce integration. Vetted, highly trained personnel to meet your operational demands with precision.",
    image: null,
    tags: ["Rapid Deployment", "Vetted", "Training"],
    wide: false,
  },
  {
    key: "optimization",
    icon: Settings2,
    label: "Operational Optimization",
    desc: "Project management and efficiency consulting through rigorous analysis and structured execution.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwKU18lsm9jZL_eXH0zmMrXGMfdfe56EMg6X38jmw-nW2khKIbS_qzEIyNQqSpfBiCv_eDn9Ktat5UWr6AdVR2BMeVWegoJdJ_H3KPgfwemiSBtp3SfbQAa_qKmNkDOkrxp8GNzDPjwZsSyGbYqzjK7Pe1I33WIIdAn1aETYTonYBrbZ50TS0uDet3AoQcsRqimne2bjsxEFdjRegg01ZdIKL29A4wTtDhrIuPh3QHUr3XMVlXjUkjQBbFsDx-2-yVC4dBIWitUR0",
    tags: null,
    wide: false,
  },
  {
    key: "trade",
    icon: PlaneTakeoff,
    label: "Import & Export",
    desc: "European sourcing and logistics. Reliable cross-border trade management ensuring timely delivery and compliance.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzNLU5XTPySUs2I-74gd1DKJLOC3khcf1UoYHxC3pZXMeYSC7f2PgciMKwHU3ZD4fpQKtNFmvZTj_mHeapWhAMnvy_bR8Jafexeiis0Yg6N5StZp70AVG362AALo8vVHKMWdMrSUhFTWcw6c0O5vO-88Cf_YSs5rV2-NRuYULEnbmJtFoYOL6qQHwtEqGOtwuPuuIqwOsiM9o22CzkJNPAAFH2s4SdHwIgi7lq9zgGL3ao5CLFGFLuAfR9W-ftZD12lQbWG7I84rs",
    tags: ["European Sourcing", "Global Logistics", "QA"],
    wide: true,
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const activeDetail = activeService ? serviceDetails[activeService] : null;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".svc-card",
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
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
    <section ref={sectionRef} id="services" className="py-32 bg-[#151210] relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-num" style={{ fontFamily: "DM Mono, monospace", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9973a" }}>
            03 / Services
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(201,151,58,0.3)] to-transparent" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2
            className="font-display text-[#f0ece6]"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(34px, 3.5vw, 52px)",
              lineHeight: "1.1",
              letterSpacing: "-0.025em",
              fontWeight: 700,
            }}
          >
            Strategic Service{" "}
            <em className="italic text-[#c9973a]">Pillars</em>
          </h2>
          <p className="text-sm text-[#6e6659] max-w-xs" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Four core capabilities built on German engineering principles
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Facility — wide */}
          <div
            className="svc-card lg:col-span-2 group rounded-lg overflow-hidden hover:border-[rgba(201,151,58,0.3)] transition-all duration-400 flex flex-col md:flex-row min-h-[400px] hover:-translate-y-1"
            style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}
          >
            <div className="md:w-1/2 p-8 flex flex-col justify-between order-2 md:order-1">
              <div>
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-5"
                  style={{ border: "1px solid rgba(201,151,58,0.25)", background: "rgba(201,151,58,0.06)" }}
                >
                  <Sparkles className="w-4 h-4 text-[#c9973a]" />
                </div>
                <h3
                  className="font-display text-[#f0ece6] mb-3"
                  style={{ fontFamily: "Playfair Display, serif", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.01em" }}
                >
                  Facility Management
                </h3>
                <p className="text-sm leading-6 text-[#b8b09f] font-light mb-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Comprehensive cleaning, maintenance, and technical oversight to the highest hygienic and operational standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Cleaning", "Maintenance", "Hygiene", "Care"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-sm text-[10px] font-medium tracking-[0.08em] uppercase text-[#6e6659]" style={{ border: "1px solid rgba(201,151,58,0.12)", fontFamily: "DM Mono, monospace" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-6 mt-6">
                <Link href="#contact" className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#f0ece6] hover:text-[#c9973a] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Request Audit
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <button onClick={() => setActiveService("facility")} className="text-sm text-[#6e6659] hover:text-[#b8b09f] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 h-56 md:h-auto order-1 md:order-2 relative overflow-hidden">
              <Image
                src={services[0].image!}
                alt="Facility Management"
                fill
                className="object-cover group-hover:scale-105 transition-all duration-500"
                style={{ filter: "brightness(0.5) sepia(0.3)" }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1e1a15]/40" />
            </div>
          </div>

          {/* Staffing */}
          <div
            className="svc-card group rounded-lg p-8 flex flex-col justify-between min-h-[400px] hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-1 transition-all duration-400"
            style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}
          >
            <div>
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-5 group-hover:border-[rgba(201,151,58,0.4)] transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#151210" }}
              >
                <Users className="w-4 h-4 text-[#c9973a]" />
              </div>
              <h3 className="font-display text-[#f0ece6] mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.01em" }}>
                Staffing Solutions
              </h3>
              <p className="text-sm leading-6 text-[#b8b09f] font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Skilled workforce integration. Vetted, highly trained personnel to meet your operational demands.
              </p>
            </div>
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(201,151,58,0.1)" }}>
              <ul className="space-y-2 mb-5">
                {["Rapid Deployment", "Quality Assured", "Vetted Personnel"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#b8b09f] font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>
                    <span className="w-1 h-1 rounded-full bg-[#c9973a] inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={() => setActiveService("staffing")} className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#f0ece6] hover:text-[#c9973a] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Learn More
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Operational Optimization */}
          <div
            className="svc-card group rounded-lg overflow-hidden flex flex-col min-h-[380px] hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-1 transition-all duration-400"
            style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}
          >
            <div className="h-48 relative overflow-hidden">
              <Image
                src={services[2].image!}
                alt="Operational Optimization"
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                style={{ filter: "sepia(0.4) brightness(0.6)" }}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1a15] to-transparent" />
              <div
                className="absolute top-4 left-4 w-9 h-9 rounded-sm flex items-center justify-center backdrop-blur-sm"
                style={{ border: "1px solid rgba(201,151,58,0.25)", background: "rgba(15,13,10,0.7)" }}
              >
                <Settings2 className="w-4 h-4 text-[#c9973a]" />
              </div>
            </div>
            <div className="p-7 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="font-display text-[#f0ece6] mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "20px", fontWeight: 600 }}>
                  Operational Optimization
                </h3>
                <p className="text-sm leading-6 text-[#b8b09f] font-light" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Project management and efficiency consulting through rigorous analysis and structured execution.
                </p>
              </div>
              <button onClick={() => setActiveService("optimization")} className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#f0ece6] mt-5 hover:text-[#c9973a] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                Learn More
                <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Import & Export — wide */}
          <div
            className="svc-card lg:col-span-2 group rounded-lg overflow-hidden hover:border-[rgba(201,151,58,0.3)] hover:-translate-y-1 transition-all duration-400 flex flex-col md:flex-row min-h-[380px]"
            style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}
          >
            <div className="md:w-1/2 h-56 md:h-auto relative overflow-hidden">
              <Image
                src={services[3].image!}
                alt="Import & Export"
                fill
                className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                style={{ filter: "sepia(0.3) brightness(0.5)" }}
                unoptimized
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between" style={{ background: "#151210" }}>
              <div>
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                  style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#1e1a15" }}
                >
                  <PlaneTakeoff className="w-4 h-4 text-[#c9973a]" />
                </div>
                <span className="block mb-3" style={{ fontFamily: "DM Mono, monospace", fontSize: "10px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#c9973a" }}>
                  Global Reach
                </span>
                <h3 className="font-display text-[#f0ece6] mb-3" style={{ fontFamily: "Playfair Display, serif", fontSize: "22px", fontWeight: 600, letterSpacing: "-0.01em" }}>
                  Import & Export
                </h3>
                <p className="text-sm leading-6 text-[#b8b09f] font-light mb-5" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  European sourcing and logistics. Reliable cross-border trade management ensuring timely delivery and compliance.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["European Sourcing", "Global Logistics", "Quality Assurance", "Efficient Supply"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-sm text-[10px] font-medium tracking-[0.08em] uppercase text-[#6e6659]" style={{ border: "1px solid rgba(255,255,255,0.06)", fontFamily: "DM Mono, monospace" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(201,151,58,0.1)" }}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-[#6e6659]" style={{ fontFamily: "DM Mono, monospace" }}>Logistics Efficiency</span>
                  <span className="text-[10px] text-[#c9973a]" style={{ fontFamily: "DM Mono, monospace" }}>85%</span>
                </div>
                <div className="h-0.5 w-full rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full w-[85%] rounded-full" style={{ background: "linear-gradient(90deg, #c9973a, #e8b84b)" }} />
                </div>
                <button onClick={() => setActiveService("trade")} className="group/link inline-flex items-center gap-2 text-sm font-medium text-[#f0ece6] mt-5 hover:text-[#c9973a] transition-colors" style={{ fontFamily: "DM Sans, sans-serif" }}>
                  Learn More
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <Modal open={activeDetail !== null} onClose={() => setActiveService(null)}>
        {activeDetail && (
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-0.5 bg-[#c9973a]" />
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#c9973a]" style={{ fontFamily: "DM Mono, monospace" }}>
                Service Detail
              </span>
            </div>
            <h3
              className="font-display text-[#f0ece6] mb-2 pr-8"
              style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(24px, 3vw, 32px)", fontWeight: 700, letterSpacing: "-0.02em" }}
            >
              {activeDetail.title}
            </h3>
            <p className="mb-6 italic text-[#c9973a] text-sm" style={{ fontFamily: "Playfair Display, serif" }}>{activeDetail.tagline}</p>
            <p className="text-base leading-7 text-[#b8b09f] font-light mb-8" style={{ fontFamily: "DM Sans, sans-serif" }}>
              {activeDetail.description}
            </p>
            <div className="p-6 rounded-lg mb-8" style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}>
              <h4 className="font-medium text-[#f0ece6] mb-4" style={{ fontFamily: "DM Sans, sans-serif" }}>Key Features</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {activeDetail.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-4 h-4 rounded-sm bg-[#c9973a] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-[#0f0d0a]" />
                    </div>
                    <span className="text-sm text-[#b8b09f]" style={{ fontFamily: "DM Sans, sans-serif" }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-5 flex justify-end" style={{ borderTop: "1px solid rgba(201,151,58,0.1)" }}>
              <button
                onClick={() => setActiveService(null)}
                className="px-8 py-3.5 rounded-sm bg-[#c9973a] text-[#0f0d0a] text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-[#e8b84b] transition-colors duration-300"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
