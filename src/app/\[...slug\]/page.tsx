"use client";

import Link from "next/link";
import { LOCATIONS, CALL_GIRLS_LOCATIONS, ESCORT_CATEGORIES, INFO_PAGES, Location, Category } from "@/data/locations";

interface PageProps {
  params: {
    slug: string[];
  };
}

export default function DynamicPage({ params }: PageProps) {
  const slug = params.slug?.join("/") || "";
  const slugWithoutHtml = slug.replace(".html", "");

  // Check if it's a location page (escorts-[location].html or call-girls-[location].html)
  if (slugWithoutHtml.startsWith("escorts-")) {
    const location = LOCATIONS.find((loc) => loc.slug === slugWithoutHtml);
    if (location) {
      return <LocationPage location={location} type="escorts" />;
    }
  }

  if (slugWithoutHtml.startsWith("call-girls-")) {
    const callGirlLocation = CALL_GIRLS_LOCATIONS.find(
      (loc) => loc.slug === slugWithoutHtml
    );
    if (callGirlLocation) {
      return <LocationPage location={callGirlLocation} type="call-girls" />;
    }
  }

  if (slugWithoutHtml.startsWith("escorts-in-")) {
    const location = LOCATIONS.find((loc) => loc.slug === slugWithoutHtml);
    if (location) {
      return <LocationPage location={location} type="escorts" />;
    }
  }

  if (slugWithoutHtml.startsWith("call-girls-in-")) {
    const callGirlLocation = CALL_GIRLS_LOCATIONS.find(
      (loc) => loc.slug === slugWithoutHtml
    );
    if (callGirlLocation) {
      return <LocationPage location={callGirlLocation} type="call-girls" />;
    }
  }

  // Check if it's a category page
  const category = ESCORT_CATEGORIES.find(
    (cat) => cat.slug === slugWithoutHtml
  );
  if (category) {
    return <CategoryPage category={category} />;
  }

  // Check if it's an info page
  const infoPage = INFO_PAGES.find((page) => page.slug === slugWithoutHtml);
  if (infoPage) {
    return <InfoPage page={infoPage} />;
  }

  // Fallback for special cases
  if (slugWithoutHtml === "" || slugWithoutHtml === "/") {
    return <HomePage />;
  }

  return <NotFoundPage />;
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 p-4">
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Premium Escorts in Mumbai
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to Saumya Escorts - Your premier escort service in Mumbai. Discover our exclusive collection of verified escorts across multiple locations.
        </p>
      </div>
    </div>
  );
}

function LocationPage({
  location,
  type,
}: {
  location: Location;
  type: "escorts" | "call-girls";
}) {
  const isCallGirls = type === "call-girls";
  const pageTitle = isCallGirls
    ? `${location.name} Call Girls`
    : `${location.name} Escorts`;
  const description = isCallGirls
    ? `Find premium ${location.name} call girls online. Professional, verified, and discreet services available.`
    : `Premium ${location.name} escorts - Professional, verified and discreet services available 24/7.`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold text-pink-600">Saumya</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            {pageTitle} in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
              {location.name}
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-300 transition">
              Browse Profiles
            </button>
            <button className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition">
              Contact Us
            </button>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-pink-600 mb-2">500+</div>
              <p className="text-gray-600">Verified Escorts</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-pink-600 mb-2">10K+</div>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <p className="text-gray-600">Available</p>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-6 bg-white rounded-lg shadow text-left">
              <div className="text-2xl mb-3">✨</div>
              <h3 className="font-bold text-gray-900 mb-2">Verified Profiles</h3>
              <p className="text-gray-600">
                100% verified, authentic {location.name} {type} with genuine
                photos and detailed profiles.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-left">
              <div className="text-2xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-2">
                Complete Discretion
              </h3>
              <p className="text-gray-600">
                Your privacy is our priority. Completely confidential and secure
                services guaranteed.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-left">
              <div className="text-2xl mb-3">⭐</div>
              <h3 className="font-bold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Carefully selected companions offering exceptional service and
                memorable experiences.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow text-left">
              <div className="text-2xl mb-3">📞</div>
              <h3 className="font-bold text-gray-900 mb-2">Easy Booking</h3>
              <p className="text-gray-600">
                Simple and secure booking process. Available for events, dates,
                and companionship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-800 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            Book Your Companion Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Connect with verified {location.name} {type} and enjoy an
            unforgettable experience.
          </p>
          <button className="px-10 py-4 bg-white text-pink-600 rounded-lg font-bold text-lg hover:shadow-lg transition">
            Browse Escorts
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Saumya Escorts. All rights reserved. | Premium Escort
            Services
          </p>
        </div>
      </footer>
    </div>
  );
}

function CategoryPage({ category }: { category: Category }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold text-pink-600">Saumya</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">
              {category.name}
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {category.description} - Premium escort services with verified
            profiles and complete discretion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-300 transition">
              Browse Profiles
            </button>
            <button className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Saumya Escorts. All rights reserved. | Premium Escort
            Services
          </p>
        </div>
      </footer>
    </div>
  );
}

function InfoPage({ page }: { page: (typeof INFO_PAGES)[0] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="text-xl font-bold text-pink-600">Saumya</span>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-pink-600 font-medium"
              >
                Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">{page.name}</h1>
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            This is the {page.name} page for Saumya Escorts. Professional,
            verified, and discreet escort services in Mumbai.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">
            © 2026 Saumya Escorts. All rights reserved. | Premium Escort
            Services
          </p>
        </div>
      </footer>
    </div>
  );
}

function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link
          href="/"
          className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold hover:shadow-lg inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  const params: Array<{ slug: string[] }> = [];

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
