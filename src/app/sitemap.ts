import type { MetadataRoute } from "next";
import { LOCATIONS, CALL_GIRLS_LOCATIONS, ESCORT_CATEGORIES, INFO_PAGES } from "@/data/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://saumyabasu.in";
  const lastModified = new Date("2025-02-07");

  const entries: MetadataRoute.Sitemap = [];

  // Root page
  entries.push({
    url: `${baseUrl}/`,
    lastModified,
    priority: 1.0,
  });

  // Escort locations
  for (const location of LOCATIONS) {
    entries.push({
      url: `${baseUrl}/${location.slug}.html`,
      lastModified,
      priority: location.priority,
    });
  }

  // Call-girls locations
  for (const location of CALL_GIRLS_LOCATIONS) {
    entries.push({
      url: `${baseUrl}/${location.slug}.html`,
      lastModified,
      priority: location.priority,
    });
  }

  // Categories
  for (const category of ESCORT_CATEGORIES) {
    entries.push({
      url: `${baseUrl}/${category.slug}.html`,
      lastModified,
      priority: category.priority,
    });
  }

  // Info pages
  for (const page of INFO_PAGES) {
    entries.push({
      url: `${baseUrl}/${page.slug}.html`,
      lastModified,
      priority: page.priority,
    });
  }

  return entries;
}
