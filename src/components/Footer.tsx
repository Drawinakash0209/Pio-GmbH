"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
  { label: "AGB", href: "#" },
  { label: "Kontakt", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-t-dark-panel border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px] py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          {/* Brand */}
          <div>
            <div className="text-2xl font-black tracking-tighter text-white mb-2">
              Pio GmbH
            </div>
            <p className="text-sm text-white/30">
              Engineered for Excellence · Mülheim an der Ruhr
            </p>
          </div>

          {/* Lime divider on mobile */}
          <div className="h-px w-16 bg-t-accent md:hidden" />

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[11px] font-bold tracking-[0.1em] uppercase text-white/30 hover:text-t-accent transition-colors duration-150"
              >
                {label}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <p className="text-[11px] text-white/20 tracking-wide">
            © {new Date().getFullYear()} Pio GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-t-accent" />
            <span className="text-[11px] text-white/20 tracking-wide">International Expertise. German Reliability.</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
