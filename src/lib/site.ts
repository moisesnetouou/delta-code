/** Canonical origin, no trailing slash. Used by metadata, sitemap and robots. */
export const SITE_URL = "https://delta-code-dev.vercel.app";

export const absoluteUrl = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
