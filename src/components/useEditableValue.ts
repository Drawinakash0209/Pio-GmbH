"use client";

import { useEditable } from "./EditableProvider";

// For text that lives inside a Link/button/label/placeholder attribute, where
// wrapping it in <EditableText>'s contentEditable span would fight with the
// element's own click behavior (e.g. navigation). Still fully editable via
// the admin dashboard — just not inline-click-to-edit on the live page.
export function useEditableValue(id: string, fallback: string): string {
  const { content } = useEditable();
  return content[id] ?? fallback;
}

// Same lookup, usable inside a .map() over a list — calling the hook above
// per-item would break the rules of hooks. Call useEditable() once in the
// component body and pass its `content` down to this plain function instead.
export function pickEditable(content: Record<string, string>, id: string, fallback: string): string {
  return content[id] ?? fallback;
}
