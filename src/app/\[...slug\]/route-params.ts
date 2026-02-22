import { LOCATIONS, CALL_GIRLS_LOCATIONS, ESCORT_CATEGORIES, INFO_PAGES } from "@/data/locations";

export function generateStaticParams() {
  const params = [];

  // Generate params for all escort locations
  for (const location of LOCATIONS) {
    params.push({ slug: [location.slug + ".html"] });
  }

  // Generate params for all call-girls locations
  for (const location of CALL_GIRLS_LOCATIONS) {
    params.push({ slug: [location.slug + ".html"] });
  }

  // Generate params for all categories
  for (const category of ESCORT_CATEGORIES) {
    params.push({ slug: [category.slug + ".html"] });
  }

  // Generate params for all info pages
  for (const page of INFO_PAGES) {
    params.push({ slug: [page.slug + ".html"] });
  }

  // Add root page
  params.push({ slug: [] });

  return params;
}
