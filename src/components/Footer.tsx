"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

export default function Footer() {
  const { t, lang } = useLanguage();

  return (
    <footer className="bg-t-dark-panel border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto px-4 md:px-[64px] py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
      >
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div>
            <span className="font-display text-[22px] font-black tracking-tighter text-white block">
              Pio GmbH
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-t-accent mt-0.5 block font-mono">
              {lang === "de" ? "Mülheim · Deutschland" : "Mülheim · Germany"}
            </span>
          </div>
          <p className="text-sm text-white/30 leading-relaxed">
            © {new Date().getFullYear()} Pio GmbH.
            <br />
            <em className="italic text-white/40">{t.footer.tagline}</em>
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] tracking-[0.18em] uppercase text-t-accent mb-2 font-mono">
            {t.footer.servicesHeading}
          </h4>
          {t.footer.serviceLinks.map((label) => (
            <Link
              key={label}
              href="#services"
              className="text-sm text-white/30 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] tracking-[0.18em] uppercase text-t-accent mb-2 font-mono">
            {t.footer.legalHeading}
          </h4>
          {t.footer.legalLinks.map((label) => (
            <Link key={label} href="#" className="text-sm text-white/30 hover:text-white transition-colors">
              {label}
            </Link>
          ))}
        </div>

        {/* Location */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[10px] tracking-[0.18em] uppercase text-t-accent mb-2 font-mono">
            {t.footer.locationHeading}
          </h4>
          <p className="text-sm text-white/30 leading-relaxed">
            Oberhausener Straße 187
            <br />
            45476 Mülheim an der Ruhr
            <br />
            {lang === "de" ? "Deutschland" : "Germany"}
          </p>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px] py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-t-accent opacity-50" />
          <span className="text-[10px] tracking-[0.18em] uppercase text-white/20 font-mono">
            {t.footer.bottomTag}
          </span>
        </div>
        <span className="text-[10px] tracking-wider text-white/20 font-mono">DE · EU</span>
      </div>
    </footer>
  );
}
