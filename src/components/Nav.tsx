"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Briefcase, ShieldCheck, Mail, X, Menu } from "lucide-react";
import Link from "next/link";

const links = [
  { name: "Home", href: "#", icon: Home },
  { name: "About", href: "#about", icon: Info },
  { name: "Services", href: "#services", icon: Briefcase },
  { name: "Reliability", href: "#reliability", icon: ShieldCheck },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Nav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-5 inset-x-0 z-50 flex justify-center pointer-events-none px-4">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`pointer-events-auto flex items-center gap-1 rounded-full px-2 py-2 shadow-2xl transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-2xl border border-[#c4c7c7]/40 shadow-black/10"
              : "bg-[#1a1c1c]/85 backdrop-blur-xl border border-white/10"
          }`}
        >
          {/* Logo pill */}
          <Link
            href="#"
            className={`px-4 py-1.5 rounded-full font-black tracking-tighter text-sm transition-colors ${
              scrolled ? "text-[#000000]" : "text-white"
            }`}
          >
            Pio GmbH
          </Link>

          <div className={`w-px h-5 mx-1 ${scrolled ? "bg-[#c4c7c7]" : "bg-white/15"}`} />

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link key={link.name} href={link.href}>
                  <motion.div
                    onHoverStart={() => setHoveredIndex(index)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    className="relative px-3 py-2 rounded-full flex items-center gap-1.5 cursor-pointer"
                  >
                    {hoveredIndex === index && (
                      <motion.div
                        layoutId="nav-hover-pill"
                        className={`absolute inset-0 rounded-full ${scrolled ? "bg-[#f3f3f4]" : "bg-white/15"}`}
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <Icon
                      className={`relative z-10 w-4 h-4 transition-colors duration-200 ${
                        hoveredIndex === index
                          ? "text-[#caf300]"
                          : scrolled
                          ? "text-[#444748]"
                          : "text-white/60"
                      }`}
                    />
                    <span
                      className={`relative z-10 text-[11px] font-bold tracking-[0.08em] uppercase transition-colors duration-200 ${
                        hoveredIndex === index
                          ? "text-[#caf300]"
                          : scrolled
                          ? "text-[#444748]"
                          : "text-white/60"
                      }`}
                    >
                      {link.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <div className={`hidden md:block w-px h-5 mx-1 ${scrolled ? "bg-[#c4c7c7]" : "bg-white/15"}`} />

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#caf300] text-[#000000] text-[11px] font-black tracking-[0.08em] uppercase rounded-full hover:bg-[#b0d500] transition-colors duration-150"
          >
            Get Quote
          </Link>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? "text-[#000000] hover:bg-[#f3f3f4]" : "text-white hover:bg-white/10"}`}
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 inset-x-4 z-40 bg-white/95 backdrop-blur-2xl border border-[#c4c7c7]/40 rounded-2xl shadow-2xl p-4 flex flex-col gap-2"
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#f3f3f4] text-[#444748] hover:text-[#000000] transition-colors group"
                >
                  <Icon className="w-4 h-4 group-hover:text-[#caf300] transition-colors" />
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase">{link.name}</span>
                </Link>
              );
            })}
            <div className="h-px bg-[#c4c7c7]/40 my-1" />
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-3 bg-[#caf300] text-[#000000] text-[11px] font-black tracking-[0.08em] uppercase rounded-xl hover:bg-[#b0d500] transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
