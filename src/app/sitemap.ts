import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Single-page marketing site — every section (#about, #services, etc.) lives
// on the homepage, so there's just the one canonical URL to list.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
