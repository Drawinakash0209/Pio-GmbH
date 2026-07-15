"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Pencil, Check, RotateCcw, Info } from "lucide-react";
import { useEditable } from "./EditableProvider";

export default function EditModeToggle() {
  const { editMode, toggleEditMode, resetAll } = useEditable();

  return (
    <div className="fixed bottom-6 right-6 z-[80] flex flex-col items-end gap-3">
      <AnimatePresence>
        {editMode && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-end gap-2 max-w-[240px]"
          >
            <div className="flex items-start gap-2 px-4 py-3 bg-t-bg-elevated border border-t-border text-t-body text-xs leading-5 shadow-xl">
              <Info className="w-4 h-4 text-t-accent shrink-0 mt-0.5" />
              <span>
                Click any dashed text to edit it. Hover an image to change or reset it. Changes
                save automatically in this browser.
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                if (window.confirm("Reset all edited content and images back to the defaults?")) {
                  resetAll();
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-t-bg-elevated border border-t-border text-t-body text-[11px] font-black tracking-[0.08em] uppercase hover:border-t-ink hover:text-t-ink transition-colors shadow-lg"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset All Edits
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggleEditMode}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={`inline-flex items-center gap-2 px-5 py-3.5 text-[11px] font-black tracking-[0.08em] uppercase shadow-2xl transition-colors duration-200 ${
          editMode
            ? "bg-t-accent text-t-on-accent hover:bg-t-accent-dim"
            : "bg-t-ink text-t-on-ink hover:bg-t-dark-panel hover:text-t-on-dark-panel"
        }`}
      >
        {editMode ? <Check className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
        {editMode ? "Done Editing" : "Edit Site"}
      </motion.button>
    </div>
  );
}
