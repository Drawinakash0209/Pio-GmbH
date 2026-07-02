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
    <section id="contact" className="py-[120px] bg-[#0e0e0e] border-t border-white/5">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <span className="inline-block border-l-2 border-[#0055ff] pl-4 text-[#0055ff] text-[11px] font-medium tracking-[0.2em] uppercase mb-6">
              Kontakt
            </span>
            <h2
              className="text-[#e5e2e1] mb-6"
              style={{
                fontSize: "clamp(32px, 3vw, 44px)",
                lineHeight: "1.2",
                letterSpacing: "-0.01em",
                fontWeight: 600,
              }}
            >
              Initiate Dialogue.
            </h2>
            <p className="text-base leading-7 text-[#c3c5d9] font-light mb-12 max-w-md">
              Connect with our management team to discuss structured solutions
              for your operational requirements.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Headquarters",
                  content: (
                    <span className="text-base text-[#e5e2e1]">
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
                      className="text-base text-[#e5e2e1] hover:text-[#0055ff] transition-colors"
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
                  <div className="w-10 h-10 rounded bg-[#1a1a1a] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#0055ff]/40 transition-colors duration-300">
                    <Icon className="w-4 h-4 text-[#0055ff]" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#8d90a2] mb-1">
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
            className="refined-border rounded-xl bg-[#1c1b1b] p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Klaus Schmidt" },
                { name: "email", label: "Corporate Email", type: "email", placeholder: "k.schmidt@company.de" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#e5e2e1] mb-2">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    className="w-full bg-transparent border-0 border-b border-white/10 focus:border-[#0055ff] focus:ring-0 outline-none px-0 py-3 text-base text-[#e5e2e1] transition-colors placeholder-white/20"
                  />
                </div>
              ))}

              <div>
                <label className="block text-[11px] font-medium tracking-[0.15em] uppercase text-[#e5e2e1] mb-2">
                  Requirement Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe your operational needs..."
                  rows={4}
                  required
                  className="w-full bg-transparent border-0 border-b border-white/10 focus:border-[#0055ff] focus:ring-0 outline-none px-0 py-3 text-base text-[#e5e2e1] transition-colors resize-none placeholder-white/20"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full py-3.5 rounded bg-[#0055ff] text-white text-sm font-medium tracking-wide hover:bg-[#0055ff]/90 transition-all duration-300 flex justify-center items-center gap-3 group"
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
