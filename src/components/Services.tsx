"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Services() {
  return (
    <section id="services" className="py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[64px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-[10px] font-black tracking-[0.15em] uppercase text-[#536600] px-3 py-1.5 bg-[#c7ef00] mb-4 inline-block">
            Core Capabilities
          </span>
          <h2
            className="text-[#000000]"
            style={{
              fontSize: "clamp(32px, 3vw, 44px)",
              lineHeight: "1.15",
              letterSpacing: "-0.03em",
              fontWeight: 700,
            }}
          >
            Strategic Service Pillars
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Facility Management — spans 2 cols */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 group border border-[#c4c7c7] hover:border-[#000000] transition-all duration-200 bg-[#f9f9f9] flex flex-col md:flex-row overflow-hidden min-h-[420px]"
          >
            <div className="md:w-1/2 p-8 flex flex-col justify-between order-2 md:order-1">
              <div>
                <div className="w-11 h-11 bg-[#000000] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[#caf300] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    cleaning_services
                  </span>
                </div>
                <h3 className="text-2xl font-bold leading-8 tracking-tight text-[#000000] mb-4">
                  Facility Management
                </h3>
                <p className="text-base leading-6 text-[#444748]">
                  Comprehensive cleaning, maintenance, and technical oversight.
                  We maintain your infrastructure to the highest hygienic and
                  operational standards.
                </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.1em] uppercase text-[#000000] mt-8 hover:text-[#536600] transition-colors group/link"
              >
                Request Audit
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto order-1 md:order-2 relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN4pSLaLjtzJWkQ7F-ef4LTr1zXga3uEc5BaTgwC5HcY7i3vRVRg8nRCzoXPSU8n-bW-wGBR5aF5RVsS3_fkXy-WwFkisqry_-Ynz1uhrqh-AGIQ18bNgUv_8vSt1KW3Cjnsgpe1KLJQLp4m9BxiFM1ItSg-IBfXCZ7yGqPwnFnVKQ1jEmYgFkj05XUq-s2EkOLcirgEfLzxGitYxIpT7PyFYBy3zkiV1qH_HWiIHUYAp_3pu3dl7g0qk9zP7TBf8ZCc_mbRrAH2Y"
                alt="Facility Management"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Staffing Solutions */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#c4c7c7] hover:border-[#000000] transition-all duration-200 bg-[#f9f9f9] p-8 flex flex-col justify-between min-h-[420px] group"
          >
            <div>
              <div className="w-11 h-11 bg-[#e8e8e8] border border-[#c4c7c7] flex items-center justify-center mb-6 group-hover:bg-[#000000] transition-colors duration-200">
                <span className="material-symbols-outlined text-[#000000] group-hover:text-[#caf300] transition-colors duration-200">
                  groups
                </span>
              </div>
              <h3 className="text-2xl font-bold leading-8 tracking-tight text-[#000000] mb-4">
                Staffing Solutions
              </h3>
              <p className="text-base leading-6 text-[#444748]">
                Skilled workforce integration. We provide vetted, highly trained
                personnel to meet your operational demands with precision.
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-[#c4c7c7]">
              <ul className="space-y-2">
                {["Rapid Deployment", "Quality Assured", "Vetted Personnel"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm leading-5 text-[#444748]">
                    <span className="w-1.5 h-1.5 bg-[#caf300] inline-block shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Operational Optimization */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-[#c4c7c7] hover:border-[#000000] transition-all duration-200 bg-[#f9f9f9] flex flex-col overflow-hidden min-h-[420px] group"
          >
            <div className="h-52 relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwKU18lsm9jZL_eXH0zmMrXGMfdfe56EMg6X38jmw-nW2khKIbS_qzEIyNQqSpfBiCv_eDn9Ktat5UWr6AdVR2BMeVWegoJdJ_H3KPgfwemiSBtp3SfbQAa_qKmNkDOkrxp8GNzDPjwZsSyGbYqzjK7Pe1I33WIIdAn1aETYTonYBrbZ50TS0uDet3AoQcsRqimne2bjsxEFdjRegg01ZdIKL29A4wTtDhrIuPh3QHUr3XMVlXjUkjQBbFsDx-2-yVC4dBIWitUR0"
                alt="Operational Optimization"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                unoptimized
              />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#caf300]" />
            </div>
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold leading-8 tracking-tight text-[#000000] mb-4">
                  Operational Optimization
                </h3>
                <p className="text-base leading-6 text-[#444748]">
                  Project management and efficiency consulting. Streamlining
                  your processes through rigorous analysis and structured
                  execution.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Import & Export — spans 2 cols */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 group border border-[#c4c7c7] hover:border-[#000000] transition-all duration-200 bg-[#f9f9f9] flex flex-col md:flex-row overflow-hidden min-h-[420px]"
          >
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzNLU5XTPySUs2I-74gd1DKJLOC3khcf1UoYHxC3pZXMeYSC7f2PgciMKwHU3ZD4fpQKtNFmvZTj_mHeapWhAMnvy_bR8Jafexeiis0Yg6N5StZp70AVG362AALo8vVHKMWdMrSUhFTWcw6c0O5vO-88Cf_YSs5rV2-NRuYULEnbmJtFoYOL6qQHwtEqGOtwuPuuIqwOsiM9o22CzkJNPAAFH2s4SdHwIgi7lq9zgGL3ao5CLFGFLuAfR9W-ftZD12lQbWG7I84rs"
                alt="Import & Export"
                fill
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                unoptimized
              />
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-between bg-[#000000] text-white">
              <div>
                <span className="text-[10px] font-black tracking-[0.15em] uppercase text-[#caf300] mb-4 inline-block">
                  Global Reach
                </span>
                <h3 className="text-2xl font-bold leading-8 tracking-tight text-white mb-4">
                  Import &amp; Export
                </h3>
                <p className="text-base leading-6 text-white/60">
                  European sourcing and logistics. Reliable cross-border trade
                  management ensuring timely delivery and compliance.
                </p>
              </div>
              <div className="mt-8">
                <div className="h-px w-full bg-white/10 mb-4" />
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.1em] text-white/40 font-bold mb-2">
                  <span>Logistics Efficiency</span>
                  <span className="text-[#caf300]">85%</span>
                </div>
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#caf300] rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
