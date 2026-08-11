"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import EditableText from "./EditableText";
import { useEditableValue } from "./useEditableValue";

export default function Contact() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  const phone = useEditableValue("contact.phone", "+49 151 27919995");
  const namePlaceholder = useEditableValue("contact.form.namePlaceholder", t.contact.form.namePlaceholder);
  const emailPlaceholder = useEditableValue("contact.form.emailPlaceholder", t.contact.form.emailPlaceholder);
  const messagePlaceholder = useEditableValue(
    "contact.form.messagePlaceholder",
    t.contact.form.messagePlaceholder
  );
  const submitLabel = useEditableValue("contact.form.submit", t.contact.form.submit);
  const successAlert = useEditableValue("contact.form.successAlert", t.contact.form.successAlert);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(successAlert);
    setForm({ name: "", email: "", message: "" });
  }

  const infoItems = [
    {
      icon: MapPin,
      label: t.contact.headquarters,
      labelId: "contact.headquarters",
      content: (
        <span className="text-base text-t-ink">
          <EditableText id="contact.address.street" defaultValue="Oberhausener Straße 187" />
          <br />
          <EditableText id="contact.address.cityLine" defaultValue="45476 Mülheim an der Ruhr" />
          <br />
          <EditableText
            id="contact.address.country"
            defaultValue={lang === "de" ? "Deutschland" : "Germany"}
          />
        </span>
      ),
    },
    {
      icon: Phone,
      label: t.contact.directLine,
      labelId: "contact.directLine",
      content: (
        <a
          href={`tel:${phone.replace(/[^\d+]/g, "")}`}
          className="text-base text-t-ink hover:text-t-link transition-colors"
        >
          {phone}
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className="py-[120px] bg-t-bg border-t border-t-border/50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <EditableText id="contact.sectionLabel" defaultValue={t.contact.sectionLabel} className="section-label" />
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2
              className="font-display text-t-ink mb-6"
              style={{
                fontSize: "clamp(32px, 3.5vw, 52px)",
                lineHeight: "1.15",
                letterSpacing: "-0.025em",
                fontWeight: 700,
              }}
            >
              <EditableText id="contact.heading.main" defaultValue={t.contact.heading.main} />
              <em className="accent-italic">
                <EditableText id="contact.heading.accent" defaultValue={t.contact.heading.accent} />
              </em>
            </h2>
            <EditableText
              id="contact.subtext"
              as="p"
              defaultValue={t.contact.subtext}
              className="text-base leading-7 text-t-body mb-12 max-w-md"
            />

            <div className="space-y-8">
              {infoItems.map(({ icon: Icon, label, labelId, content }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-sm bg-t-dark-panel flex items-center justify-center shrink-0 group-hover:bg-t-accent transition-colors duration-200">
                    <Icon className="w-4 h-4 text-t-accent group-hover:text-t-on-accent transition-colors duration-200" />
                  </div>
                  <div>
                    <EditableText
                      id={labelId}
                      defaultValue={label}
                      className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-faint mb-1 font-mono"
                    />
                    {content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative accent line */}
            <div className="mt-16 flex items-center gap-4">
              <div className="h-px w-12 bg-t-accent" />
              <EditableText
                id="contact.footerTag"
                defaultValue={t.contact.footerTag}
                className="text-[10px] tracking-[0.18em] uppercase text-t-faint font-mono"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-lg bg-t-bg-elevated p-8 md:p-10 border border-t-border shadow-sm"
          >
            {/* Accent top bar */}
            <div className="h-0.5 w-12 bg-gradient-to-r from-t-accent to-t-accent-dim mb-8" />

            <form onSubmit={handleSubmit} className="space-y-8">
              {(
                [
                  {
                    name: "name",
                    labelId: "contact.form.nameLabel",
                    label: t.contact.form.nameLabel,
                    type: "text",
                    placeholder: namePlaceholder,
                  },
                  {
                    name: "email",
                    labelId: "contact.form.emailLabel",
                    label: t.contact.form.emailLabel,
                    type: "email",
                    placeholder: emailPlaceholder,
                  },
                ] as const
              ).map(({ name, labelId, label, type, placeholder }) => (
                <div key={name} className="relative">
                  <EditableText
                    id={labelId}
                    as="label"
                    defaultValue={label}
                    className={`block mb-2 text-[10px] font-mono tracking-[0.18em] uppercase transition-colors duration-200 ${
                      focused === name ? "text-t-link dark:text-t-accent" : "text-t-faint"
                    }`}
                  />
                  <input
                    type={type}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    placeholder={placeholder}
                    required
                    className={`w-full bg-transparent border-0 border-b outline-none px-0 py-3 text-base text-t-ink transition-colors placeholder-t-border ${
                      focused === name ? "border-t-accent" : "border-t-border"
                    }`}
                  />
                </div>
              ))}

              <div className="relative">
                <EditableText
                  id="contact.form.messageLabel"
                  as="label"
                  defaultValue={t.contact.form.messageLabel}
                  className={`block mb-2 text-[10px] font-mono tracking-[0.18em] uppercase transition-colors duration-200 ${
                    focused === "message" ? "text-t-link dark:text-t-accent" : "text-t-faint"
                  }`}
                />
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder={messagePlaceholder}
                  rows={4}
                  required
                  className={`w-full bg-transparent border-0 border-b outline-none px-0 py-3 text-base text-t-ink transition-colors resize-none placeholder-t-border ${
                    focused === "message" ? "border-t-accent" : "border-t-border"
                  }`}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 rounded-sm bg-t-ink text-t-on-ink text-[11px] font-black tracking-[0.1em] uppercase border border-transparent hover:border-t-accent transition-all duration-150 flex justify-center items-center gap-3 group"
              >
                {submitLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
