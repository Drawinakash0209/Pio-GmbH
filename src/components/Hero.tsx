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
          className="object-cover opacity-30 mix-blend-luminosity"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
      </div>

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
            <span className="inline-block border-l-2 border-[#0055ff] pl-4 text-[#0055ff] text-[11px] font-medium tracking-[0.2em] uppercase">
              Mülheim an der Ruhr · Germany
            </span>
          </motion.div>

          {/* Headline — letter by letter */}
          <h1
            className="font-display text-[#e5e2e1] mb-8"
            style={{ fontSize: "clamp(44px, 6vw, 76px)", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: 600 }}
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
                    className={`inline-block ${wi >= 2 ? "text-[#c3c5d9] font-light" : ""}`}
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
            className="text-lg leading-7 text-[#c3c5d9] font-light mb-10 max-w-xl"
          >
            A premier management and service company combining{" "}
            <span className="font-accent text-[#e5e2e1]">European standards</span> with{" "}
            <span className="font-accent text-[#e5e2e1]">local excellence</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded bg-[#0055ff] text-white text-sm font-medium tracking-wide hover:bg-[#0055ff]/90 transition-colors duration-300"
            >
              Our Services
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded bg-transparent border border-white/20 text-[#e5e2e1] text-sm font-medium tracking-wide hover:bg-white/5 transition-colors duration-300"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8d90a2]"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-[#8d90a2] to-transparent"
        />
      </motion.div>
    </section>
  );
}
