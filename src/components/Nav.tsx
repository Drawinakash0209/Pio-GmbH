"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, X, Menu } from "lucide-react";
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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 border-b transition-all duration-300 ${
          scrolled ? "bg-[#0e0e0e]/90 border-white/10" : "bg-[#0e0e0e]/70 border-white/5"
        } backdrop-blur-xl`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-[64px] flex justify-between items-center h-20">
          {/* Brand */}
          <Link href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Compass className="w-5 h-5 text-[#0055ff]" />
            <span className="font-display text-[20px] font-semibold text-[#e5e2e1] tracking-tight">Pio GmbH</span>
          </Link>

          {/* Links (Desktop) */}
          <div className="hidden md:flex gap-10 items-center">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#c3c5d9] font-medium hover:text-[#0055ff] transition-colors text-sm tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center bg-[#0055ff]/10 text-[#0055ff] border border-[#0055ff]/30 text-sm px-6 py-2.5 rounded hover:bg-[#0055ff] hover:text-white transition-all duration-300 font-medium tracking-wide"
          >
            Get Quote
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#e5e2e1]"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-40 refined-border rounded-xl bg-[#1c1b1b] shadow-2xl p-4 flex flex-col gap-2"
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 rounded hover:bg-white/5 text-[#c3c5d9] hover:text-[#e5e2e1] transition-colors text-sm font-medium tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            <div className="h-px bg-white/10 my-1" />
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-3 bg-[#0055ff] text-white text-sm font-medium tracking-wide rounded hover:bg-[#0055ff]/90 transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
