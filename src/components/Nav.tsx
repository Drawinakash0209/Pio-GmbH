"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Reliability", href: "#reliability" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
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
            ? "glass-amber border-b border-[rgba(201,151,58,0.15)] py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex items-center justify-between">
          {/* Brand */}
          <Link href="#" className="flex flex-col group">
            <span
              className="font-display text-[22px] font-600 leading-none text-[#f0ece6] group-hover:text-[#c9973a] transition-colors duration-300"
              style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
            >
              Pio GmbH
            </span>
            <span
              className="font-mono text-[9px] tracking-[0.22em] uppercase text-[#c9973a] mt-0.5"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Mülheim · Germany
            </span>
          </Link>

          {/* Desktop Nav — center */}
          <div className="hidden md:flex items-center gap-0 absolute left-1/2 -translate-x-1/2">
            {links.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                className="nav-link px-5 py-1 text-[13px] font-medium tracking-wide text-[#b8b09f] hover:text-[#f0ece6] transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#contact"
              className="group flex items-center gap-2 px-6 py-2.5 text-[12px] font-medium tracking-[0.12em] uppercase border border-[rgba(201,151,58,0.4)] text-[#c9973a] rounded-sm hover:bg-[#c9973a] hover:text-[#0f0d0a] transition-all duration-300"
            >
              Get a Quote
              <span className="text-[10px] group-hover:translate-x-1 transition-transform inline-block">→</span>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1 group"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-px w-6 bg-[#f0ece6] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`block h-px w-4 bg-[#c9973a] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-[#f0ece6] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
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
            className="fixed top-20 inset-x-4 z-40 rounded-xl glass-amber shadow-2xl p-6 flex flex-col gap-1"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3.5 rounded-lg text-[14px] font-medium text-[#b8b09f] hover:text-[#f0ece6] hover:bg-white/5 transition-all duration-200 tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-[rgba(201,151,58,0.15)] my-2" />
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-3.5 bg-[#c9973a] text-[#0f0d0a] text-[13px] font-semibold tracking-[0.1em] uppercase rounded-lg hover:bg-[#e8b84b] transition-colors"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
