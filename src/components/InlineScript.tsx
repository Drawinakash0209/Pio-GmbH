// Per node_modules/next/dist/docs/01-app/02-guides/preventing-flash-before-hydration.md:
// `type` flips to "text/plain" if this ever re-renders in the browser (e.g. after
// router.refresh() reconciles the root layout on the client), so the browser
// doesn't try to re-run a script tag React didn't execute the first time.
export function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
