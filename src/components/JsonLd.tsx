// Renders a JSON-LD structured-data block. suppressHydrationWarning avoids
// the "Encountered a script tag" dev warning if this ever gets reconciled on
// the client (e.g. after router.refresh() touches the root layout) — see
// InlineScript.tsx for the same concern on the theme/lang init script.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      // Escape `<` so a value containing "</script>" can't break out of the
      // tag (see node_modules/next/dist/docs/01-app/02-guides/json-ld.md).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
