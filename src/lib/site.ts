// Falls back to localhost so dev/preview builds don't need the env var set;
// production deploys should set NEXT_PUBLIC_SITE_URL to the real domain.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
  /\/$/,
  ""
);
