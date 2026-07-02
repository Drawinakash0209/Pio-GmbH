"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Info, Briefcase, ShieldCheck, Mail, X, Menu, Compass } from "lucide-react";
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
          className={`pointer-events-auto flex items-center gap-1 rounded-full px-2 py-2 border border-white/10 shadow-2xl shadow-black/40 transition-all duration-300 ${
            scrolled ? "bg-[#131316]/90 backdrop-blur-2xl" : "bg-[#131316]/60 backdrop-blur-xl"
          }`}
        >
          {/* Logo pill */}
          <Link
            href="#"
            className="flex items-center gap-2 px-4 py-1.5 rounded-full font-black tracking-tighter text-sm text-[#f0f0f2]"
          >
            <Compass className="w-4 h-4 text-[#b6c4ff]" />
            Pio GmbH
          </Link>

          <div className="w-px h-5 mx-1 bg-white/10" />

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
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <Icon
                      className={`relative z-10 w-4 h-4 transition-colors duration-200 ${
                        hoveredIndex === index ? "text-[#b6c4ff]" : "text-[#9b9db0]"
                      }`}
                    />
                    <span
                      className={`relative z-10 text-[11px] font-bold tracking-[0.08em] uppercase transition-colors duration-200 ${
                        hoveredIndex === index ? "text-[#b6c4ff]" : "text-[#9b9db0]"
                      }`}
                    >
                      {link.name}
                    </span>
                  </motion.div>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block w-px h-5 mx-1 bg-white/10" />

          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#e9c176] text-[#3b2a08] text-[11px] font-black tracking-[0.08em] uppercase rounded-full hover:bg-[#f0cd8a] transition-colors duration-150"
          >
            Get Quote
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-full text-[#f0f0f2] hover:bg-white/10 transition-colors"
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
            className="fixed top-20 inset-x-4 z-40 bg-[#131316]/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col gap-2"
          >
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-[#9b9db0] hover:text-[#f0f0f2] transition-colors group"
                >
                  <Icon className="w-4 h-4 group-hover:text-[#b6c4ff] transition-colors" />
                  <span className="text-[11px] font-bold tracking-[0.1em] uppercase">{link.name}</span>
                </Link>
              );
            })}
            <div className="h-px bg-white/10 my-1" />
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center px-4 py-3 bg-[#e9c176] text-[#3b2a08] text-[11px] font-black tracking-[0.08em] uppercase rounded-xl hover:bg-[#f0cd8a] transition-colors"
            >
              Get Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
