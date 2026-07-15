"use client";

import { useRef } from "react";
import Image from "next/image";
import { ImageUp, RotateCcw } from "lucide-react";
import { useEditable } from "./EditableProvider";

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

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") setContent(id, reader.result);
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  }

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={style}
        priority={priority}
        unoptimized
      />
      {editMode && (
        <div className="absolute inset-0 z-20 flex items-center justify-center gap-3 bg-black/55 opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-200">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-t-accent text-t-on-accent text-[11px] font-black tracking-[0.08em] uppercase hover:bg-t-accent-dim transition-colors"
          >
            <ImageUp className="w-4 h-4" />
            Change Image
          </button>
          {isCustom && (
            <button
              type="button"
              onClick={() => resetField(id)}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white text-[11px] font-black tracking-[0.08em] uppercase hover:bg-white/20 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          )}
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFile}
          />
        </div>
      )}
    </>
  );
}
