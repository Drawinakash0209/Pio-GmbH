"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import EditableImage from "./EditableImage";
import EditableText from "./EditableText";

const headline = ["International", "Expertise.", "German", "Reliability."];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0">
        <EditableImage
          id="hero.bg"
          defaultSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDld9YW58dCIekh7C7oqkVcPUFY8tB4MqEyKU-TXDooGLeQk70vqNepWB1je21a4riq7G5LneZMQrSIfSuzEKSKcpPvvEsmxmW5_geNG4D_xy_7FCDXWwKmjYIcGjBYv_Kbe3DiZALCyFFeKqA8wfFKV7mqD0tEGqFz6_uJvs-MG72bIWXo8aWLQeTIaf4Vy5siBUEc-3pVQ-QKHrp-uiwgCuwGW8QmlYTcYcQI3pGNLvLECGqV3oJ389G3rbG_qKxV-Z7JJ6rtU7U"
          alt="Hero Background"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-t-bg/30 via-t-bg/20 to-t-bg/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-t-bg/70 via-t-bg/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-[64px] w-full pt-28"
      >
        <div className="max-w-3xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <EditableText
              id="hero.badge"
              defaultValue="Mülheim an der Ruhr · Germany"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-t-accent text-t-on-accent text-[10px] font-black tracking-[0.15em] uppercase"
            />
          </motion.div>

          {/* Headline — letter by letter */}
          <h1
            className="text-t-ink mb-8"
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
                    className="inline-block"
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
            className="text-lg leading-7 text-t-body mb-10 max-w-xl"
          >
            A premier management and service company combining{" "}
            <span className="text-t-ink font-semibold">European standards</span> with{" "}
            <span className="text-t-ink font-semibold">local excellence</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-t-ink text-t-on-ink text-[11px] font-black tracking-[0.1em] uppercase hover:bg-t-dark-panel hover:text-t-on-dark-panel transition-colors duration-150 group"
            >
              Our Services
              <span className="w-4 h-[1px] bg-t-accent group-hover:w-6 transition-all duration-300" />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-t-faint text-t-ink text-[11px] font-black tracking-[0.1em] uppercase hover:border-t-ink hover:bg-t-bg-subtle transition-all duration-150"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-t-faint"
      >
        <span className="text-[9px] uppercase tracking-[0.2em] font-bold">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-t-faint to-transparent"
        />
      </motion.div>
    </section>
  );
}
