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
  const contentY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);

  return (
    <section ref={ref} className="relative h-[65vh] overflow-hidden flex items-center justify-center bg-t-dark-panel">
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
      <div className="absolute inset-0 bg-gradient-to-t from-t-dark-panel via-transparent to-t-dark-panel z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-t-dark-panel/60 via-transparent to-t-dark-panel/60 z-[1]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #caf300 1px, transparent 1px), linear-gradient(to bottom, #caf300 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <motion.div style={{ y: contentY }} className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-[64px] text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
        >
          <span className="inline-block py-1 px-4 border border-t-accent/30 bg-t-accent/5 text-t-accent text-[10px] font-black tracking-[0.2em] uppercase mb-8">
            Zukunftssicher
          </span>
          <h2
            className="text-white mb-6"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: "1.1",
              letterSpacing: "-0.04em",
              fontWeight: 800,
            }}
          >
            Shaping the Future of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-t-accent to-t-accent-dim">
              Facility Management
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            We combine structured German engineering with modern management to deliver services that go beyond expectations.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-t-accent text-t-on-accent text-[11px] font-black tracking-[0.1em] uppercase hover:bg-t-accent-dim transition-colors duration-150"
          >
            Start a Conversation
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
