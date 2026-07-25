import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://delta-code-dev.vercel.app/sitemap.xml",
    host: "https://delta-code-dev.vercel.app",
  };
}
