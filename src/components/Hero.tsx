"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const words = ["International", "Expertise.", "German", "Reliability."];

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split headline words into individual animated spans
      const wordEls = headlineRef.current?.querySelectorAll(".word-anim");
      const tl = gsap.timeline({ delay: 0.2 });

      // Label slides in
      tl.fromTo(
        labelRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power3.out" }
      );

      // Words drop in with stagger
      if (wordEls) {
        tl.fromTo(
          wordEls,
          { y: 80, opacity: 0, rotateX: -30 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: 0.09,
            duration: 0.75,
            ease: "power4.out",
          },
          "-=0.3"
        );
      }

      // Subtitle fades
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
        "-=0.3"
      );

      // CTA slides up
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.4"
      );

      // Image panel reveals
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 60, clipPath: "inset(0 100% 0 0)" },
        { opacity: 1, x: 0, clipPath: "inset(0 0% 0 0)", duration: 1, ease: "power4.inOut" },
        0.15
      );

      // Background text slow drift
      gsap.to(bgTextRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0f0d0a]"
    >
      {/* Giant background text */}
      <div
        ref={bgTextRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span
          className="font-display font-900 text-[18vw] leading-none whitespace-nowrap text-transparent"
          style={{
            fontFamily: "Playfair Display, serif",
            fontWeight: 900,
            WebkitTextStroke: "1px rgba(201,151,58,0.05)",
            letterSpacing: "-0.04em",
          }}
        >
          PIO GmbH
        </span>
      </div>

      {/* Diagonal grid lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(201,151,58,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,151,58,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full pt-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0 min-h-screen items-center">
        {/* Left — text */}
        <div className="flex flex-col justify-center py-16 lg:py-0">
          {/* Label */}
          <div ref={labelRef} className="flex items-center gap-4 mb-10">
            <div className="w-8 h-px bg-[#c9973a]" />
            <span
              className="section-num"
              style={{ fontFamily: "DM Mono, monospace", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9973a" }}
            >
              Mülheim an der Ruhr · Germany
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="font-display mb-8"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(48px, 6.5vw, 88px)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
              fontWeight: 700,
              perspective: "800px",
            }}
          >
            {words.map((word, wi) => (
              <span key={wi} className="overflow-hidden inline-block mr-[0.2em]" style={{ verticalAlign: "bottom" }}>
                <span
                  className="word-anim inline-block"
                  style={{
                    color: wi >= 2 ? "#b8b09f" : "#f0ece6",
                    fontStyle: wi % 2 !== 0 ? "italic" : "normal",
                    fontWeight: wi % 2 === 0 ? 700 : 500,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Amber divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-[#c9973a] to-transparent" />
          </div>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg leading-8 text-[#b8b09f] font-light mb-12 max-w-md"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            A premier management and service company combining{" "}
            <em className="not-italic text-[#f0ece6]">European standards</em> with{" "}
            <em className="not-italic text-[#f0ece6]">local excellence</em>.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#c9973a] text-[#0f0d0a] text-[13px] font-semibold tracking-[0.1em] uppercase rounded-sm hover:bg-[#e8b84b] transition-colors duration-300"
            >
              Our Services
              <span className="text-sm">→</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[rgba(201,151,58,0.3)] text-[#f0ece6] text-[13px] font-medium tracking-[0.1em] uppercase rounded-sm hover:border-[#c9973a] hover:text-[#c9973a] transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-[rgba(201,151,58,0.1)]">
            {[
              { value: "100%", label: "Quality" },
              { value: "24/7", label: "Operations" },
              { value: "EU", label: "Reach" },
            ].map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span
                  className="font-display text-[28px] font-700 text-[#c9973a] leading-none"
                  style={{ fontFamily: "Playfair Display, serif", fontWeight: 700 }}
                >
                  {value}
                </span>
                <span
                  className="text-[10px] tracking-[0.15em] uppercase text-[#6e6659] mt-1"
                  style={{ fontFamily: "DM Mono, monospace" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image panel */}
        <div ref={imageRef} className="hidden lg:block relative h-full min-h-[600px]">
          {/* Frame */}
          <div className="absolute inset-0 ml-8 mt-16 mb-16 rounded-lg overflow-hidden amber-border" style={{ border: "1px solid rgba(201,151,58,0.18)" }}>
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDld9YW58dCIekh7C7oqkVcPUFY8tB4MqEyKU-TXDooGLeQk70vqNepWB1je21a4riq7G5LneZMQrSIfSuzEKSKcpPvvEsmxmW5_geNG4D_xy_7FCDXWwKmjYIcGjBYv_Kbe3DiZALCyFFeKqA8wfFKV7mqD0tEGqFz6_uJvs-MG72bIWXo8aWLQeTIaf4Vy5siBUEc-3pVQ-QKHrp-uiwgCuwGW8QmlYTcYcQI3pGNLvLECGqV3oJ389G3rbG_qKxV-Z7JJ6rtU7U"
              alt="Hero — Pio GmbH"
              fill
              className="object-cover"
              style={{ filter: "brightness(0.65) sepia(0.2)" }}
              priority
              unoptimized
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0a]/80 via-transparent to-transparent" />
            {/* Corner tag */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="glass-amber px-4 py-2 rounded">
                <span className="text-[10px] tracking-[0.18em] uppercase text-[#c9973a]" style={{ fontFamily: "DM Mono, monospace" }}>
                  Est. Germany
                </span>
              </div>
            </div>
          </div>

          {/* Decorative amber dot */}
          <div className="absolute top-12 right-4 w-3 h-3 rounded-full bg-[#c9973a] opacity-60" />
          <div className="absolute bottom-12 right-8 w-1.5 h-1.5 rounded-full bg-[#c9973a] opacity-40" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6e6659]">
        <span className="text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "DM Mono, monospace" }}>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#c9973a]/60 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
