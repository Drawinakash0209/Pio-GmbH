"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ImageUp, RotateCcw } from "lucide-react";
import { useEditable } from "./EditableProvider";
import { isVideoSrc } from "@/lib/media";

interface EditableImageProps {
  id: string;
  defaultSrc: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

export default function EditableImage({
  id,
  defaultSrc,
  alt,
  className,
  style,
  priority,
}: EditableImageProps) {
  const { editMode, content, setContent, resetField } = useEditable();
  const src = content[id] ?? defaultSrc;
  const isCustom = Boolean(content[id]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/content/upload", { method: "POST", body: formData });
      if (res.ok) {
        const data = await res.json();
        await setContent(id, data.url);
      }
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      {isVideoSrc(src) ? (
        <video
          src={src}
          className={`absolute inset-0 w-full h-full ${className ?? ""}`}
          style={style}
          muted
          loop
          autoPlay
          playsInline
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          className={className}
          style={style}
          priority={priority}
          unoptimized
        />
      )}
      {editMode && (
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-black/55 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-t-accent text-t-on-accent text-[11px] font-black tracking-[0.08em] uppercase hover:bg-t-accent-dim transition-colors disabled:opacity-60"
          >
            <ImageUp className="w-4 h-4" />
            {uploading ? "Uploading…" : "Change Image or Video"}
          </button>
          {isCustom && (
            <button
              type="button"
              onClick={() => resetField(id)}
              disabled={uploading}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white text-[11px] font-black tracking-[0.08em] uppercase hover:bg-white/20 transition-colors disabled:opacity-60"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*,video/*"
            className="hidden"
            onChange={handleFile}
          />
        </div>
      )}
    </>
  );
}
