"use client";

import { useEditable } from "./EditableProvider";

type EditableTag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "div";

interface EditableTextProps {
  id: string;
  defaultValue: string;
  as?: EditableTag;
  className?: string;
  style?: React.CSSProperties;
}

export default function EditableText({
  id,
  defaultValue,
  as = "span",
  className,
  style,
}: EditableTextProps) {
  const { editMode, content, setContent } = useEditable();
  const value = content[id] ?? defaultValue;
  const Tag = as;

  function handleBlur(e: React.FocusEvent<HTMLElement>) {
    const text = e.currentTarget.textContent ?? "";
    if (text.trim() && text !== value) {
      setContent(id, text);
    } else if (!text.trim()) {
      e.currentTarget.textContent = value;
    }
  }

  return (
    <Tag
      // Remounts whenever the saved value changes (only happens on blur, so
      // there's no active cursor to lose) instead of letting React reconcile
      // against a contentEditable-mutated DOM it doesn't fully track.
      key={value}
      className={`${className ?? ""}${
        editMode
          ? " outline-dashed outline-1 outline-t-accent/70 outline-offset-4 rounded-sm cursor-text hover:bg-t-accent/10 transition-colors"
          : ""
      }`}
      style={style}
      contentEditable={editMode}
      suppressContentEditableWarning
      onBlur={editMode ? handleBlur : undefined}
    >
      {value}
    </Tag>
  );
}
