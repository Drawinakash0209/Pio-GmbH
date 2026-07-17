"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export default function Nav() {
  const { t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-t-bg-elevated/90 backdrop-blur-2xl border-b border-t-border/60 shadow-lg shadow-black/5 py-3"
            : "bg-t-bg/40 backdrop-blur-sm py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Brand */}
          <Link href="#" className="flex flex-col group">
            <span
              className="font-display text-[22px] leading-none text-t-ink transition-colors duration-300"
              style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Pio GmbH
            </span>
            <span className="font-mono text-[9px] tracking-[0.22em] uppercase text-t-accent mt-0.5">
              {t.nav.tagline}
            </span>
          </Link>

          {/* Desktop Nav — center */}
          <div className="hidden md:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
            {t.nav.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link px-5 py-1 text-[13px] font-medium tracking-wide text-t-body hover:text-t-ink transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right cluster */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
            <Link
              href="#contact"
              className="group flex items-center gap-2 ml-2 px-6 py-2.5 text-[12px] font-medium tracking-[0.12em] uppercase border border-t-border text-t-link rounded-sm hover:bg-t-accent hover:text-t-on-accent hover:border-t-accent transition-all duration-300"
            >
              {t.nav.cta}
              <span className="text-[10px] group-hover:translate-x-1 transition-transform inline-block">
                →
              </span>
            </Link>
          </div>

          {/* Mobile toggles */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <LanguageToggle />
            <button
              className="flex flex-col gap-1.5 p-2 group"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-5 h-5 text-t-ink" />
              ) : (
                <Menu className="w-5 h-5 text-t-ink" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-20 inset-x-4 z-40 rounded-xl glass-panel shadow-2xl p-6 flex flex-col gap-1"
          >
            {t.nav.links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3.5 rounded-lg text-[14px] font-medium text-t-body hover:text-t-ink hover:bg-t-bg-subtle transition-all duration-200 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-t-border my-2" />
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-3.5 bg-t-accent text-t-on-accent text-[13px] font-semibold tracking-[0.1em] uppercase rounded-lg hover:bg-t-accent-dim transition-colors"
            >
              {t.nav.cta}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
