"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ParallaxBanner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative h-[65vh] overflow-hidden flex items-center justify-center bg-[#0e0e0e]">
      {/* Parallax image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDld9YW58dCIekh7C7oqkVcPUFY8tB4MqEyKU-TXDooGLeQk70vqNepWB1je21a4riq7G5LneZMQrSIfSuzEKSKcpPvvEsmxmW5_geNG4D_xy_7FCDXWwKmjYIcGjBYv_Kbe3DiZALCyFFeKqA8wfFKV7mqD0tEGqFz6_uJvs-MG72bIWXo8aWLQeTIaf4Vy5siBUEc-3pVQ-QKHrp-uiwgCuwGW8QmlYTcYcQI3pGNLvLECGqV3oJ389G3rbG_qKxV-Z7JJ6rtU7U"
          alt="Parallax"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.25) grayscale(0.6)" }}
          unoptimized
        />
      </motion.div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e] z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/60 via-transparent to-[#0e0e0e]/60 z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-[64px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-4 rounded border border-[#0055ff]/30 bg-[#0055ff]/5 text-[#0055ff] text-[11px] font-medium tracking-[0.2em] uppercase mb-8">
            Zukunftssicher
          </span>
          <h2
            className="font-display text-white mb-6"
            style={{
              fontSize: "clamp(36px, 5vw, 68px)",
              lineHeight: "1.15",
              letterSpacing: "-0.02em",
              fontWeight: 600,
            }}
          >
            Shaping the Future of{" "}
            <span className="font-accent text-[#0055ff]">
              Facility Management
            </span>
          </h2>
          <p className="text-[#c3c5d9] font-light text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            We combine structured German engineering with modern management to deliver services that go beyond expectations.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 rounded px-8 py-3.5 bg-[#0055ff] text-white text-sm font-medium tracking-wide hover:bg-[#0055ff]/90 transition-colors duration-300"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
