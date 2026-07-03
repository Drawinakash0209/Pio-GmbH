"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ParallaxBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax scroll effect on image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Content fades and scales up on enter
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
          },
        }
      );

      // Animated amber line width
      gsap.fromTo(
        lineRef.current,
        { width: 0 },
        {
          width: "100%",
          duration: 1.2,
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
    <section
      ref={sectionRef}
      className="relative h-[70vh] overflow-hidden flex items-center justify-center"
    >
      {/* Parallax image */}
      <div ref={imageRef} className="absolute inset-0 z-0 scale-125 will-change-transform">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDld9YW58dCIekh7C7oqkVcPUFY8tB4MqEyKU-TXDooGLeQk70vqNepWB1je21a4riq7G5LneZMQrSIfSuzEKSKcpPvvEsmxmW5_geNG4D_xy_7FCDXWwKmjYIcGjBYv_Kbe3DiZALCyFFeKqA8wfFKV7mqD0tEGqFz6_uJvs-MG72bIWXo8aWLQeTIaf4Vy5siBUEc-3pVQ-QKHrp-uiwgCuwGW8QmlYTcYcQI3pGNLvLECGqV3oJ389G3rbG_qKxV-Z7JJ6rtU7U"
          alt="Parallax"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.2) sepia(0.5)" }}
          unoptimized
        />
      </div>

      {/* Amber gradient overlays */}
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to bottom, #0f0d0a 0%, transparent 20%, transparent 80%, #0f0d0a 100%)" }} />
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(to right, rgba(201,151,58,0.08) 0%, transparent 50%, rgba(201,151,58,0.08) 100%)" }} />

      {/* Content */}
      <div ref={contentRef} className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 text-center">
        {/* Amber animated divider */}
        <div className="flex justify-center mb-8">
          <div className="relative h-0.5 overflow-hidden" style={{ width: "80px" }}>
            <div ref={lineRef} className="h-full bg-gradient-to-r from-[#c9973a] to-[#e8b84b] absolute top-0 left-0" />
          </div>
        </div>

        <span
          className="inline-block py-1.5 px-5 rounded-full border text-[10px] tracking-[0.22em] uppercase mb-8 text-[#c9973a]"
          style={{
            fontFamily: "DM Mono, monospace",
            border: "1px solid rgba(201,151,58,0.3)",
            background: "rgba(201,151,58,0.06)",
          }}
        >
          Zukunftssicher
        </span>

        <h2
          className="font-display text-[#f0ece6] mb-6"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(38px, 5vw, 72px)",
            lineHeight: "1.1",
            letterSpacing: "-0.025em",
            fontWeight: 700,
          }}
        >
          Shaping the Future of{" "}
          <em className="italic text-[#c9973a]">Facility Management</em>
        </h2>

        <p className="text-[#b8b09f] font-light text-lg max-w-xl mx-auto leading-relaxed mb-10" style={{ fontFamily: "DM Sans, sans-serif" }}>
          We combine structured German engineering with modern management to deliver services that go beyond expectations.
        </p>

        <Link
          href="#contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#c9973a] text-[#0f0d0a] text-[13px] font-semibold tracking-[0.1em] uppercase rounded-sm hover:bg-[#e8b84b] transition-colors duration-300"
          style={{ fontFamily: "DM Sans, sans-serif" }}
        >
          Start a Conversation
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
