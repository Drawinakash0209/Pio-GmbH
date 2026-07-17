"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import EditableImage from "./EditableImage";
import EditableText from "./EditableText";
import { useLanguage } from "./LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const words = t.hero.headline;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-t-bg">
      {/* Giant background watermark text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        aria-hidden="true"
      >
        <span
          className="section-watermark text-[18vw] whitespace-nowrap"
          style={{ letterSpacing: "-0.04em" }}
        >
          PIO GmbH
        </span>
      </div>

      {/* Diagonal grid lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-t-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-t-border) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-16 w-full pt-24 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-0 min-h-screen items-center">
        {/* Left — text */}
        <div className="flex flex-col justify-center py-16 lg:py-0">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="w-8 h-px bg-t-accent" />
            <EditableText
              id="hero.badge"
              defaultValue={t.cms.heroBadge}
              className="section-label"
            />
          </motion.div>

          {/* Headline — word by word */}
          <h1
            className="font-display mb-8 text-t-ink"
            style={{
              fontSize: "clamp(48px, 6.5vw, 88px)",
              lineHeight: "1.05",
              letterSpacing: "-0.025em",
              fontWeight: 700,
            }}
          >
            {words.map((word, wi) => (
              <span
                key={wi}
                className="overflow-hidden inline-block mr-[0.2em]"
                style={{ verticalAlign: "bottom" }}
              >
                <motion.span
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 + wi * 0.09, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                  style={{
                    color: wi >= 2 ? "var(--color-t-faint)" : "var(--color-t-ink)",
                    fontStyle: wi % 2 !== 0 ? "italic" : "normal",
                    fontWeight: wi % 2 === 0 ? 700 : 500,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          {/* Accent divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-16 bg-gradient-to-r from-t-accent to-transparent" />
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="text-lg leading-8 text-t-body font-light mb-12 max-w-md"
          >
            {t.hero.subtitleBefore}
            <span className="not-italic text-t-ink font-medium">{t.hero.subtitleStandard}</span>
            {t.hero.subtitleMid}
            <span className="not-italic text-t-ink font-medium">{t.hero.subtitleExcellence}</span>
            {t.hero.subtitleAfter}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-t-accent text-t-on-accent text-[13px] font-semibold tracking-[0.1em] uppercase rounded-sm hover:bg-t-accent-dim transition-colors duration-300"
            >
              {t.hero.ctaPrimary}
              <span className="text-sm">→</span>
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-t-faint text-t-ink text-[13px] font-medium tracking-[0.1em] uppercase rounded-sm hover:border-t-accent hover:text-t-link transition-all duration-300"
            >
              {t.hero.ctaSecondary}
            </Link>
          </motion.div>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-t-border">
            {t.hero.stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col">
                <span className="font-display text-[28px] font-700 text-t-link dark:text-t-accent leading-none">
                  {value}
                </span>
                <span className="text-[10px] tracking-[0.15em] uppercase text-t-faint mt-1 font-mono">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Image panel */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="hidden lg:block relative h-full min-h-[600px]"
        >
          <div className="absolute inset-0 ml-8 mt-16 mb-16 rounded-lg overflow-hidden border border-t-border">
            <EditableImage
              id="hero.bg"
              defaultSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDld9YW58dCIekh7C7oqkVcPUFY8tB4MqEyKU-TXDooGLeQk70vqNepWB1je21a4riq7G5LneZMQrSIfSuzEKSKcpPvvEsmxmW5_geNG4D_xy_7FCDXWwKmjYIcGjBYv_Kbe3DiZALCyFFeKqA8wfFKV7mqD0tEGqFz6_uJvs-MG72bIWXo8aWLQeTIaf4Vy5siBUEc-3pVQ-QKHrp-uiwgCuwGW8QmlYTcYcQI3pGNLvLECGqV3oJ389G3rbG_qKxV-Z7JJ6rtU7U"
              alt="Hero — Pio GmbH"
              className="object-cover"
              style={{ filter: "brightness(0.75) saturate(0.9)" }}
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-t-dark-panel/80 via-transparent to-transparent" />
            {/* Corner tag */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="glass-panel px-4 py-2 rounded">
                <span className="text-[10px] tracking-[0.18em] uppercase text-t-accent font-mono">
                  {t.hero.cornerTag}
                </span>
              </div>
            </div>
          </div>

          {/* Decorative accent dots */}
          <div className="absolute top-12 right-4 w-3 h-3 rounded-full bg-t-accent opacity-60" />
          <div className="absolute bottom-12 right-8 w-1.5 h-1.5 rounded-full bg-t-accent opacity-40" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-t-faint"
      >
        <span className="text-[9px] tracking-[0.2em] uppercase font-mono">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-t-accent/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
