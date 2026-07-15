"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, LogOut, RotateCcw } from "lucide-react";
import { useEditable } from "../EditableProvider";
import type { ContentSection } from "@/lib/content-schema";
import DashboardField from "./DashboardField";

export default function AdminDashboard({ sections }: { sections: ContentSection[] }) {
  const { content, setContent, resetField, logout } = useEditable();
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div className="min-h-screen bg-t-bg flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 shrink-0 bg-t-dark-panel text-white flex md:flex-col md:h-screen md:sticky md:top-0">
        <div className="p-6 border-b border-white/10">
          <div className="text-lg font-black tracking-tight font-display">Pio GmbH</div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-t-accent font-bold mt-1">
            Content Dashboard
          </div>
        </div>
        <nav className="flex-1 p-3 space-y-1 overflow-x-auto md:overflow-visible flex md:block gap-1 md:gap-0">
          {sections.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveId(s.id)}
              className={`shrink-0 md:w-full text-left px-4 py-3 text-sm font-bold transition-colors whitespace-nowrap md:whitespace-normal ${
                s.id === active?.id
                  ? "bg-t-accent text-t-on-accent"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <div className="p-3 border-t border-white/10 space-y-1 hidden md:block">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-white/60 hover:bg-white/5 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Site
          </Link>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Log out of admin mode?")) logout();
            }}
            className="w-full flex items-center gap-2 px-4 py-3 text-sm font-bold text-white/60 hover:bg-white/5 hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Log Out
          </button>
        </div>
      </aside>

      {/* Main panel */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-10 md:py-12">
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div>
                    <h1 className="text-2xl font-bold tracking-tight text-t-ink mb-1">
                      {active.label}
                    </h1>
                    <p className="text-sm text-t-body">{active.description}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (
                        window.confirm(
                          `Reset every field in "${active.label}" back to its default?`
                        )
                      ) {
                        active.fields.forEach((f) => resetField(f.id));
                      }
                    }}
                    className="shrink-0 inline-flex items-center gap-2 px-3 py-2 text-[11px] font-black uppercase tracking-[0.08em] text-t-body hover:text-t-ink border border-t-border hover:border-t-ink transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset Section
                  </button>
                </div>

                <div className="space-y-6">
                  {active.fields.map((field) => (
                    <DashboardField
                      key={field.id}
                      field={field}
                      value={content[field.id] ?? field.defaultValue}
                      isCustom={Boolean(content[field.id])}
                      onSave={setContent}
                      onReset={() => resetField(field.id)}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
