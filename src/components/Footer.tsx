"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const serviceLinks = [
  { label: "Facility Management", href: "#services" },
  { label: "Staffing Solutions", href: "#services" },
  { label: "Operational Optimization", href: "#services" },
  { label: "Import & Export", href: "#services" },
];

const legalLinks = [
  { label: "Impressum", href: "#" },
  { label: "Datenschutz", href: "#" },
  { label: "AGB", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0805]" style={{ borderTop: "1px solid rgba(201,151,58,0.08)" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
      >
        {/* Brand */}
        <div className="flex flex-col gap-5">
          <div>
            <span
              className="font-display text-[22px] font-600 text-[#f0ece6]"
              style={{ fontFamily: "Playfair Display, serif", fontWeight: 600, letterSpacing: "-0.02em", display: "block" }}
            >
              Pio GmbH
            </span>
            <span
              className="text-[9px] tracking-[0.2em] uppercase text-[#c9973a] mt-0.5 block"
              style={{ fontFamily: "DM Mono, monospace" }}
            >
              Mülheim · Germany
            </span>
          </div>
          <p className="text-sm text-[#6e6659] font-light leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
            © {new Date().getFullYear()} Pio GmbH.<br />
            <em className="italic text-[#b8b09f]">Engineered for Excellence.</em>
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4
            className="text-[10px] tracking-[0.18em] uppercase text-[#c9973a] mb-2"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            Services
          </h4>
          {serviceLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-[#6e6659] hover:text-[#f0ece6] transition-colors font-light"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h4
            className="text-[10px] tracking-[0.18em] uppercase text-[#c9973a] mb-2"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            Legal
          </h4>
          {legalLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-[#6e6659] hover:text-[#f0ece6] transition-colors font-light"
              style={{ fontFamily: "DM Sans, sans-serif" }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Location */}
        <div className="flex flex-col gap-4">
          <h4
            className="text-[10px] tracking-[0.18em] uppercase text-[#c9973a] mb-2"
            style={{ fontFamily: "DM Mono, monospace" }}
          >
            Location
          </h4>
          <p className="text-sm text-[#6e6659] font-light leading-relaxed" style={{ fontFamily: "DM Sans, sans-serif" }}>
            Oberhausener Straße 187<br />
            45476 Mülheim an der Ruhr<br />
            Germany
          </p>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-4 flex items-center justify-between" style={{ borderTop: "1px solid rgba(201,151,58,0.06)" }}>
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-[#c9973a] opacity-50" />
          <span className="text-[10px] tracking-[0.18em] uppercase text-[#6e6659]" style={{ fontFamily: "DM Mono, monospace" }}>
            Premium Management Services
          </span>
        </div>
        <span className="text-[10px] tracking-wider text-[#6e6659]" style={{ fontFamily: "DM Mono, monospace" }}>
          DE ·  EU
        </span>
      </div>
    </footer>
  );
}
