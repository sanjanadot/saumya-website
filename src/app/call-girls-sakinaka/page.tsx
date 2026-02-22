"use client";

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
          Call Girls <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">in Sakinaka</span>
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Welcome to our Sakinaka Call Girls page. Premium, verified, and discreet escort services available 24/7.
        </p>

        <p className="text-lg text-gray-600 mb-8">
          Customize this page with unique content for Sakinaka.
        </p>

        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="font-bold text-lg mb-4">About Our Service</h2>
          <p className="text-gray-600">Add your custom content here. Include pricing, availability, service descriptions, testimonials, and special offers.</p>
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
