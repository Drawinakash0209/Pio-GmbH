"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const headline = ["International", "Expertise.", "German", "Reliability."];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDld9YW58dCIekh7C7oqkVcPUFY8tB4MqEyKU-TXDooGLeQk70vqNepWB1je21a4riq7G5LneZMQrSIfSuzEKSKcpPvvEsmxmW5_geNG4D_xy_7FCDXWwKmjYIcGjBYv_Kbe3DiZALCyFFeKqA8wfFKV7mqD0tEGqFz6_uJvs-MG72bIWXo8aWLQeTIaf4Vy5siBUEc-3pVQ-QKHrp-uiwgCuwGW8QmlYTcYcQI3pGNLvLECGqV3oJ389G3rbG_qKxV-Z7JJ6rtU7U"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0d]/60 via-[#0b0b0d]/50 to-[#0b0b0d]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0d]/90 via-[#0b0b0d]/40 to-transparent" />
      </div>

      {/* Ambient glow */}
      <div className="ambient-glow bg-[#b6c4ff] w-[600px] h-[600px] top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <div className="ambient-glow bg-[#e9c176] w-[500px] h-[500px] bottom-0 right-0 translate-x-1/3 translate-y-1/3" />

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-[64px] w-full pt-28">
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#e9c176]/10 border border-[#e9c176]/20 text-[#e9c176] text-[10px] font-black tracking-[0.15em] uppercase">
              Mülheim an der Ruhr · Germany
            </span>
          </motion.div>

          {/* Headline — letter by letter */}
          <h1
            className="text-[#f0f0f2] glow-text mb-8"
            style={{ fontSize: "clamp(44px, 6vw, 80px)", lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: 800 }}
          >
            {headline.map((word, wi) => (
              <span key={wi} className="inline-block mr-[0.25em] last:mr-0">
                {word.split("").map((letter, li) => (
                  <motion.span
                    key={`${wi}-${li}`}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wi * 0.12 + li * 0.018,
                      type: "spring",
                      stiffness: 120,
                      damping: 18,
                    }}
                    className={`inline-block ${wi >= 2 ? "text-[#b6c4ff]" : ""}`}
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg leading-7 text-[#9b9db0] mb-10 max-w-xl"
          >
            A premier management and service company combining{" "}
            <span className="text-[#f0f0f2] font-semibold">European standards</span> with{" "}
            <span className="text-[#f0f0f2] font-semibold">local excellence</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#b6c4ff] text-[#001551] text-[11px] font-black tracking-[0.1em] uppercase shadow-lg shadow-[#b6c4ff]/20 hover:bg-[#c9d3ff] hover:-translate-y-0.5 transition-all duration-200 group"
            >
              Our Services
              <span className="w-4 h-[1px] bg-[#001551] group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link
              href="#contact"
              className="glass-panel inline-flex items-center justify-center px-8 py-4 rounded-lg text-[#f0f0f2] text-[11px] font-black tracking-[0.1em] uppercase hover:border-[#b6c4ff]/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#9b9db0]"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#9b9db0] to-transparent"
        />
      </motion.div>
    </section>
  );
}
