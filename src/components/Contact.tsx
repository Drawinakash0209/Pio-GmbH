"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Inquiry submitted. We will be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-[120px] bg-t-bg border-t border-t-border/50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="text-[10px] font-black tracking-[0.15em] uppercase text-t-on-badge px-3 py-1.5 bg-t-badge mb-6 inline-block">
              Kontakt
            </span>
            <h2
              className="text-t-ink mb-6"
              style={{
                fontSize: "clamp(32px, 3vw, 44px)",
                lineHeight: "1.15",
                letterSpacing: "-0.03em",
                fontWeight: 700,
              }}
            >
              Initiate Dialogue.
            </h2>
            <p className="text-base leading-7 text-t-body mb-12 max-w-md">
              Connect with our management team to discuss structured solutions
              for your operational requirements.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Headquarters",
                  content: (
                    <span className="text-base text-t-ink">
                      Oberhausener Straße 187<br />
                      45476 Mülheim an der Ruhr<br />
                      Germany
                    </span>
                  ),
                },
                {
                  icon: Phone,
                  label: "Direct Line",
                  content: (
                    <a
                      href="tel:+4915127919995"
                      className="text-base text-t-ink hover:text-t-link transition-colors"
                    >
                      +49 151 27919995
                    </a>
                  ),
                },
              ].map(({ icon: Icon, label, content }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-t-dark-panel flex items-center justify-center shrink-0 group-hover:bg-t-accent transition-colors duration-200">
                    <Icon className="w-4 h-4 text-t-accent group-hover:text-t-on-accent transition-colors duration-200" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-faint mb-1">
                      {label}
                    </span>
                    {content}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-t-bg-elevated p-8 border border-t-border shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Klaus Schmidt" },
                { name: "email", label: "Corporate Email", type: "email", placeholder: "k.schmidt@company.de" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-ink mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full bg-transparent border-0 border-b border-t-border focus:border-t-accent focus:ring-0 outline-none px-0 py-3 text-base text-t-ink transition-colors placeholder-t-border"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[10px] font-black tracking-[0.15em] uppercase text-t-ink mb-2">
                  Requirement Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your operational needs..."
                  rows={4}
                  required
                  className="w-full bg-transparent border-0 border-b border-t-border focus:border-t-accent focus:ring-0 outline-none px-0 py-3 text-base text-t-ink transition-colors resize-none placeholder-t-border"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-4 bg-t-ink text-t-on-ink text-[11px] font-black tracking-[0.1em] uppercase border border-transparent hover:border-t-accent transition-all duration-150 flex justify-center items-center gap-3 group"
              >
                Submit Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
