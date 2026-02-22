import fs from "fs";
import path from "path";
import { LOCATIONS, CALL_GIRLS_LOCATIONS, ESCORT_CATEGORIES, INFO_PAGES, Location, Category } from "@/data/locations";

const pagesDir = path.join(process.cwd(), "src/app");

// Template for escort location pages
const escortPageTemplate = (location: Location) => `"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold text-pink-600">Saumya</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">Escorts</span> in ${location.name}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Welcome to our ${location.name} escorts page. Premium, verified, and discreet escort services available 24/7.
        </p>

        <p className="text-lg text-gray-600 mb-8">
          Add your custom content here for ${location.name} escorts. This page is ready for your unique description, pricing information, and special offerings.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">About Our Service</h3>
            <p className="text-gray-600">
              Add details about your escort services in ${location.name}. Include information about availability, specialties, and what makes your service unique.
            </p>
          </div>
          
          <div className="p-6 bg-white rounded-lg shadow">
            <h3 className="font-bold text-lg mb-4">How to Book</h3>
            <p className="text-gray-600">
              Add booking instructions and contact information specific to ${location.name}.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Saumya Escorts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
`;

// Template for category pages
const categoryPageTemplate = (category: Category) => `"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold text-pink-600">Saumya</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">${category.name}</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          ${category.description} - Premium escort services with verified profiles and guaranteed discretion.
        </p>

        <p className="text-lg text-gray-600 mb-8">
          Add your custom content here for ${category.name}. Customize this page with unique descriptions, featured profiles, and special information.
        </p>

        <div className="p-6 bg-white rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">About ${category.name}</h3>
          <p className="text-gray-600">
            Edit this section to add details specific to ${category.name}. Include pricing tiers, availability, and what clients should expect.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Saumya Escorts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
`;

// Template for info pages
const infoPageTemplate = (page: (typeof INFO_PAGES)[0]) => `"use client";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center text-white font-bold">S</div>
              <span className="text-xl font-bold text-pink-600">Saumya</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">${page.name}</h1>
        
        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Welcome to the ${page.name} page. Add your custom content here.
          </p>
          
          <div className="p-6 bg-white rounded-lg">
            <p>Edit this page to add information about ${page.name}.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm">© 2026 Saumya Escorts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
`;

async function generatePages() {
  try {
    // Create escort location pages
    for (const location of LOCATIONS) {
      const folderPath = path.join(pagesDir, location.slug.replace(".html", ""));
      const filePath = path.join(folderPath, "page.tsx");
      
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      
      fs.writeFileSync(filePath, escortPageTemplate(location));
      console.log(`Created: ${location.slug}/page.tsx`);
    }

    // Create call-girls location pages
    for (const location of CALL_GIRLS_LOCATIONS) {
      const folderPath = path.join(pagesDir, location.slug.replace(".html", ""));
      const filePath = path.join(folderPath, "page.tsx");
      
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      
      fs.writeFileSync(filePath, escortPageTemplate(location));
      console.log(`Created: ${location.slug}/page.tsx`);
    }

    // Create category pages
    for (const category of ESCORT_CATEGORIES) {
      const folderPath = path.join(pagesDir, category.slug.replace(".html", ""));
      const filePath = path.join(folderPath, "page.tsx");
      
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      
      fs.writeFileSync(filePath, categoryPageTemplate(category));
      console.log(`Created: ${category.slug}/page.tsx`);
    }

    // Create info pages
    for (const page of INFO_PAGES) {
      const folderPath = path.join(pagesDir, page.slug.replace(".html", ""));
      const filePath = path.join(folderPath, "page.tsx");
      
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
      }
      
      fs.writeFileSync(filePath, infoPageTemplate(page));
      console.log(`Created: ${page.slug}/page.tsx`);
    }

    console.log("✅ All pages generated successfully!");
  } catch (error) {
    console.error("❌ Error generating pages:", error);
    process.exit(1);
  }
}

generatePages();
