"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-pink-600 font-medium transition">Features</a>
              <a href="/services" className="text-gray-700 hover:text-pink-600 font-medium transition">Services</a>
              <a href="/blog" className="text-gray-700 hover:text-pink-600 font-medium transition">Blog</a>
              <a href="/about" className="text-gray-700 hover:text-pink-600 font-medium transition">About</a>
              <a href="/contact" className="text-gray-700 hover:text-pink-600 font-medium transition">Contact</a>
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <a href="/pricing" className="px-6 py-2 text-pink-600 border-2 border-pink-600 rounded-lg hover:bg-pink-50 font-semibold transition">Sign In</a>
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg hover:shadow-lg hover:shadow-pink-300 font-semibold transition">Get Started</button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          
          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden border-t border-pink-100 py-4 space-y-3">
              <a href="#features" className="block text-gray-700 hover:text-pink-600 font-medium py-2">Features</a>
              <a href="/services" className="block text-gray-700 hover:text-pink-600 font-medium py-2">Services</a>
              <a href="/pricing" className="block text-gray-700 hover:text-pink-600 font-medium py-2">Pricing</a>
              <a href="/blog" className="block text-gray-700 hover:text-pink-600 font-medium py-2">Blog</a>
              <a href="/about" className="block text-gray-700 hover:text-pink-600 font-medium py-2">About</a>
              <a href="/contact" className="block text-gray-700 hover:text-pink-600 font-medium py-2">Contact</a>
              <button className="w-full px-6 py-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold">Get Started</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700">Escorts</span> in Mumbai
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Experience premium companion services with beautiful, professional escorts. Discreet, reliable, and available for your special occasions, dates, and events.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-pink-300 transition transform hover:scale-105">
                Start Free
              </button>
              <button className="px-8 py-4 border-2 border-pink-600 text-pink-600 rounded-lg font-semibold hover:bg-pink-50 transition">
                Learn More
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <p className="text-gray-600 text-sm">Verified Escorts</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">10K+</div>
                <p className="text-gray-600 text-sm">Happy Clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600">24/7</div>
                <p className="text-gray-600 text-sm">Available</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-100 rounded-3xl blur-2xl opacity-70"></div>
            <div className="relative bg-gradient-to-br from-pink-300 to-pink-500 rounded-3xl h-96 flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
              👩‍💼
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Saumya?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Premium escort services with verified profiles, professional companions, and guaranteed discretion</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "✨",
                title: "Verified Profiles",
                description: "100% verified, authentic escorts with detailed profiles and genuine photos."
              },
              {
                icon: "🔒",
                title: "Complete Discretion",
                description: "Your privacy is our priority. Confidential bookings and secure transactions guaranteed."
              },
              {
                icon: "⭐",
                title: "Premium Quality",
                description: "Carefully selected companions offering exceptional service and memorable experiences."
              },
              {
                icon: "📞",
                title: "Easy Booking",
                description: "Simple and secure booking process. Available for events, dates, and companionship."
              },
              {
                icon: "⏰",
                title: "24/7 Availability",
                description: "Escorts available anytime, day or night for your convenience."
              },
              {
                icon: "💯",
                title: "Satisfaction Guarantee",
                description: "Professional service with client satisfaction as our top priority."
              }
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-8 bg-gradient-to-br from-pink-50 to-white border border-pink-100 rounded-xl hover:shadow-lg transition hover:border-pink-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 sm:py-32 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Client Reviews</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Hear from our satisfied clients about their experiences</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh K.",
                role: "Client",
                testimonial: "Excellent service! Professional, discreet, and exactly as described. Highly recommended!",
                avatar: "😊"
              },
              {
                name: "Amit M.",
                role: "Client",
                testimonial: "Great platform, easy booking process, and the escort was absolutely amazing. Will definitely book again!",
                avatar: "👍"
              },
              {
                name: "Vikram P.",
                role: "Client",
                testimonial: "Best experience ever! Professional, beautiful, and made my event truly special. Five stars!",
                avatar: "⭐"
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-pink-100 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-pink-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
                <div className="flex gap-1 mt-4 text-pink-500">★★★★★</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="community" className="bg-gradient-to-r from-pink-600 to-pink-800 py-20 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Book Your Companion Today</h2>
          <p className="text-xl mb-8 opacity-90">Connect with our verified escorts and enjoy an unforgettable experience. Discreet and professional service guaranteed.</p>
          <button className="px-10 py-4 bg-white text-pink-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-pink-900 transition transform hover:scale-105">
            Browse Escorts
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg"></div>
                <span className="font-bold text-white">Saumya</span>
              </div>
              <p className="text-sm leading-relaxed">Premium escort services in Mumbai. Discreet, professional, and verified companions available 24/7.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-pink-500 transition">Features</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Pricing</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-pink-500 transition">Courses</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Events</a></li>
                <li><a href="#" className="hover:text-pink-500 transition">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <p className="text-sm mb-2">Email: hello@saumya.com</p>
              <p className="text-sm mb-4">Mumbai, India</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-pink-500 transition">Twitter</a>
                <a href="#" className="hover:text-pink-500 transition">LinkedIn</a>
                <a href="#" className="hover:text-pink-500 transition">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 Saumya Escorts. All rights reserved. | Premium Escort Services in Mumbai</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
