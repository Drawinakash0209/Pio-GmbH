"use client";

import { motion } from "framer-motion";
import { Compass } from "lucide-react";
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
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-[1440px] mx-auto px-4 md:px-[64px] py-16 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
      >
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <Compass className="w-5 h-5 text-[#0055ff]" />
            <span className="font-display text-[20px] font-semibold text-[#e5e2e1] tracking-tight">Pio GmbH</span>
          </div>
          <p className="text-sm text-[#c3c5d9] font-light leading-relaxed">
            © {new Date().getFullYear()} Pio GmbH.<br />
            Engineered for Excellence.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[11px] text-[#8d90a2] uppercase tracking-[0.15em] mb-2 font-medium">Services</h4>
          {serviceLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-[#c3c5d9] hover:text-white transition-colors font-light"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[11px] text-[#8d90a2] uppercase tracking-[0.15em] mb-2 font-medium">Legal</h4>
          {legalLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-[#c3c5d9] hover:text-white transition-colors font-light"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Location */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[11px] text-[#8d90a2] uppercase tracking-[0.15em] mb-2 font-medium">Location</h4>
          <p className="text-sm text-[#c3c5d9] font-light leading-relaxed">
            Oberhausener Straße 187<br />
            45476 Mülheim an der Ruhr<br />
            Germany
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
