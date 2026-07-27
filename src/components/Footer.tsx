"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import EditableText from "./EditableText";
import { useEditable } from "./EditableProvider";
import { pickEditable } from "./useEditableValue";

export default function Footer() {
  const { t, lang } = useLanguage();
  const { content } = useEditable();

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
            <EditableText
              id="nav.tagline"
              defaultValue={lang === "de" ? "Mülheim · Deutschland" : "Mülheim · Germany"}
              className="text-[9px] tracking-[0.2em] uppercase text-t-accent mt-0.5 block font-mono"
            />
          </div>
          <p className="text-sm text-white/30 leading-relaxed">
            © {new Date().getFullYear()} Pio GmbH.
            <br />
            <em className="font-script text-white/40">
              <EditableText id="footer.tagline" defaultValue={t.footer.tagline} />
            </em>
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <EditableText
            id="footer.servicesHeading"
            as="h4"
            defaultValue={t.footer.servicesHeading}
            className="text-[10px] tracking-[0.18em] uppercase text-t-accent mb-2 font-mono"
          />
          {t.footer.serviceLinks.map((label, i) => (
            <Link
              key={label}
              href="#services"
              className="text-sm text-white/30 hover:text-white transition-colors"
            >
              {pickEditable(content, `footer.serviceLinks.${i}`, label)}
            </Link>
          ))}
        </div>

        {/* Legal */}
        <div className="flex flex-col gap-4">
          <EditableText
            id="footer.legalHeading"
            as="h4"
            defaultValue={t.footer.legalHeading}
            className="text-[10px] tracking-[0.18em] uppercase text-t-accent mb-2 font-mono"
          />
          {t.footer.legalLinks.map((label, i) => (
            <Link key={label} href="#" className="text-sm text-white/30 hover:text-white transition-colors">
              {pickEditable(content, `footer.legalLinks.${i}`, label)}
            </Link>
          ))}
        </div>

        {/* Location */}
        <div className="flex flex-col gap-4">
          <EditableText
            id="footer.locationHeading"
            as="h4"
            defaultValue={t.footer.locationHeading}
            className="text-[10px] tracking-[0.18em] uppercase text-t-accent mb-2 font-mono"
          />
          <p className="text-sm text-white/30 leading-relaxed">
            <EditableText id="contact.address.street" defaultValue="Oberhausener Straße 187" />
            <br />
            <EditableText id="contact.address.cityLine" defaultValue="45476 Mülheim an der Ruhr" />
            <br />
            <EditableText
              id="contact.address.country"
              defaultValue={lang === "de" ? "Deutschland" : "Germany"}
            />
          </p>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px] py-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 bg-t-accent opacity-50" />
          <EditableText
            id="footer.bottomTag"
            defaultValue={t.footer.bottomTag}
            className="text-[10px] tracking-[0.18em] uppercase text-white/20 font-mono"
          />
        </div>
        <EditableText
          id="footer.regionTag"
          defaultValue="DE · EU"
          className="text-[10px] tracking-wider text-white/20 font-mono"
        />
      </div>
    </footer>
  );
}
