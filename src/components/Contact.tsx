"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Inquiry submitted. We will be in touch shortly.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className="py-32 bg-[#0f0d0a] relative" style={{ borderTop: "1px solid rgba(201,151,58,0.08)" }}>
      {/* Amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(201,151,58,0.06) 0%, transparent 60%)" }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="section-num" style={{ fontFamily: "DM Mono, monospace", fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#c9973a" }}>
            05 / Contact
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-[rgba(201,151,58,0.3)] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <h2
              className="font-display text-[#f0ece6] mb-6"
              style={{ fontFamily: "Playfair Display, serif", fontSize: "clamp(34px, 3.5vw, 52px)", lineHeight: "1.15", letterSpacing: "-0.025em", fontWeight: 700 }}
            >
              Initiate{" "}
              <em className="italic text-[#c9973a]">Dialogue.</em>
            </h2>
            <p className="text-base leading-8 text-[#b8b09f] font-light mb-12 max-w-sm" style={{ fontFamily: "DM Sans, sans-serif" }}>
              Connect with our management team to discuss structured solutions for your operational requirements.
            </p>

            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  label: "Headquarters",
                  content: (
                    <span className="text-base text-[#f0ece6]" style={{ fontFamily: "DM Sans, sans-serif" }}>
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
                      className="text-base text-[#f0ece6] hover:text-[#c9973a] transition-colors"
                      style={{ fontFamily: "DM Sans, sans-serif" }}
                    >
                      +49 151 27919995
                    </a>
                  ),
                },
              ].map(({ icon: Icon, label, content }) => (
                <div key={label} className="flex items-start gap-4 group">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-[rgba(201,151,58,0.4)] transition-colors duration-300"
                    style={{ border: "1px solid rgba(255,255,255,0.06)", background: "#1e1a15" }}
                  >
                    <Icon className="w-4 h-4 text-[#c9973a]" />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-[0.18em] uppercase text-[#6e6659] mb-1" style={{ fontFamily: "DM Mono, monospace" }}>
                      {label}
                    </span>
                    {content}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative amber line */}
            <div className="mt-16 flex items-center gap-4">
              <div className="h-px w-12 bg-[#c9973a]" />
              <span className="text-[10px] tracking-[0.18em] uppercase text-[#6e6659]" style={{ fontFamily: "DM Mono, monospace" }}>
                Pio GmbH · Mülheim · Germany
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            viewport={{ once: true }}
            className="rounded-lg p-8 md:p-10"
            style={{ border: "1px solid rgba(201,151,58,0.12)", background: "#1e1a15" }}
          >
            {/* Amber top accent */}
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#c9973a] to-[#e8b84b] mb-8" />

            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { name: "name", label: "Full Name", type: "text", placeholder: "Klaus Schmidt" },
                { name: "email", label: "Corporate Email", type: "email", placeholder: "k.schmidt@company.de" },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name} className="relative">
                  <label
                    className="block mb-2"
                    style={{
                      fontFamily: "DM Mono, monospace",
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: focused === name ? "#c9973a" : "#6e6659",
                      transition: "color 0.2s",
                    }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name as keyof typeof form]}
                    onChange={handleChange}
                    onFocus={() => setFocused(name)}
                    onBlur={() => setFocused(null)}
                    placeholder={placeholder}
                    required
                    className="w-full bg-transparent border-0 border-b outline-none py-3 text-base text-[#f0ece6] placeholder-[#6e6659]/50 transition-all duration-300"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      borderColor: focused === name ? "#c9973a" : "rgba(201,151,58,0.15)",
                    }}
                  />
                </div>
              ))}

              <div className="relative">
                <label
                  className="block mb-2"
                  style={{
                    fontFamily: "DM Mono, monospace",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: focused === "message" ? "#c9973a" : "#6e6659",
                    transition: "color 0.2s",
                  }}
                >
                  Requirement Details
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                  placeholder="Describe your operational needs..."
                  rows={4}
                  required
                  className="w-full bg-transparent border-0 border-b outline-none py-3 text-base text-[#f0ece6] placeholder-[#6e6659]/50 resize-none transition-all duration-300"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    borderColor: focused === "message" ? "#c9973a" : "rgba(201,151,58,0.15)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-sm bg-[#c9973a] text-[#0f0d0a] text-[13px] font-semibold tracking-[0.1em] uppercase hover:bg-[#e8b84b] transition-colors duration-300 flex justify-center items-center gap-3 group"
                style={{ fontFamily: "DM Sans, sans-serif" }}
              >
                Submit Inquiry
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
