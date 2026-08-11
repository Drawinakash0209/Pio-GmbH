"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Check, ImageUp, Loader2, RotateCcw } from "lucide-react";
import type { ContentField } from "@/lib/content-schema";
import { isVideoSrc } from "@/lib/media";

type SaveStatus = "idle" | "saving" | "saved";

interface DashboardFieldProps {
  field: ContentField;
  value: string;
  isCustom: boolean;
  onSave: (id: string, value: string) => Promise<void>;
  onReset: () => void;
}

function StatusIndicator({ status }: { status: SaveStatus }) {
  if (status === "saving") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.08em] text-t-faint">
        <Loader2 className="w-3 h-3 animate-spin" />
        Saving…
      </span>
    );
  }
  if (status === "saved") {
    return (
      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[0.08em] text-t-accent-dim">
        <Check className="w-3 h-3" />
        Saved
      </span>
    );
  }
  return null;
}

function FieldChrome({
  field,
  isCustom,
  onReset,
  status,
  children,
}: {
  field: ContentField;
  isCustom: boolean;
  onReset: () => void;
  status: SaveStatus;
  children: React.ReactNode;
}) {
  return (
    <div className="border border-t-border bg-t-bg-elevated p-5">
      <div className="flex items-center justify-between gap-3 mb-3">
        <label className="text-[10px] font-black tracking-[0.15em] uppercase text-t-ink">
          {field.label}
        </label>
        <div className="flex items-center gap-3 shrink-0">
          <StatusIndicator status={status} />
          {isCustom && (
            <button
              type="button"
              onClick={onReset}
              title="Reset to default"
              className="text-t-faint hover:text-t-ink transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}

function TextField({ field, value, isCustom, onSave, onReset }: DashboardFieldProps) {
  const [draft, setDraft] = useState(value);
  const [status, setStatus] = useState<SaveStatus>("idle");
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const clearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Resync the local draft when `value` changes for reasons outside this
  // component (e.g. a Reset click) — adjusted during render, per React's
  // guidance, rather than via an effect that would cause an extra render.
  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    setDraft(value);
  }

  useEffect(
    () => () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
      if (clearTimer.current) clearTimeout(clearTimer.current);
    },
    []
  );

  function handleChange(next: string) {
    setDraft(next);
    setStatus("idle");
    if (saveTimer.current) clearTimeout(saveTimer.current);
    if (clearTimer.current) clearTimeout(clearTimer.current);
    saveTimer.current = setTimeout(async () => {
      setStatus("saving");
      await onSave(field.id, next);
      setStatus("saved");
      clearTimer.current = setTimeout(() => setStatus("idle"), 1500);
    }, 600);
  }

  return (
    <FieldChrome field={field} isCustom={isCustom} onReset={onReset} status={status}>
      {field.type === "textarea" ? (
        <textarea
          value={draft}
          onChange={(e) => handleChange(e.target.value)}
          rows={3}
          className="w-full bg-t-bg border border-t-border focus:border-t-accent focus:ring-0 outline-none px-3 py-2.5 text-sm text-t-ink transition-colors resize-y"
        />
      ) : (
        <input
          type="text"
          value={draft}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full bg-t-bg border border-t-border focus:border-t-accent focus:ring-0 outline-none px-3 py-2.5 text-sm text-t-ink transition-colors"
        />
      )}
    </FieldChrome>
  );
}

function MediaField({ field, value, isCustom, onSave, onReset }: DashboardFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<SaveStatus>("idle");

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploading(true);
    setStatus("saving");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/content/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        await onSave(field.id, data.url);
        setStatus("saved");
        setTimeout(() => setStatus("idle"), 1500);
      } else {
        setStatus("idle");
      }
    } finally {
      setUploading(false);
    }
  }

  return (
    <FieldChrome field={field} isCustom={isCustom} onReset={onReset} status={status}>
      <div className="relative w-full h-48 bg-t-bg-subtle overflow-hidden mb-3">
        {isVideoSrc(value) ? (
          <video src={value} className="absolute inset-0 w-full h-full object-cover" muted loop autoPlay playsInline />
        ) : (
          <Image src={value} alt={field.label} fill className="object-cover" unoptimized />
        )}
      </div>
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-t-ink text-t-on-ink text-[11px] font-black tracking-[0.08em] uppercase hover:bg-t-dark-panel hover:text-t-on-dark-panel transition-colors disabled:opacity-60"
      >
        {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ImageUp className="w-4 h-4" />}
        {uploading ? "Uploading…" : "Change Image or Video"}
      </button>
      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={handleFile}
      />
    </FieldChrome>
  );
}

export default function DashboardField(props: DashboardFieldProps) {
  if (props.field.type === "media") return <MediaField {...props} />;
  return <TextField {...props} />;
}
