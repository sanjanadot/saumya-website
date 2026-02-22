import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or suggestions? We would love to hear from you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-pink-600 mt-2">📍</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Location</h3>
                    <p className="text-gray-600">
                      Mumbai, Maharashtra<br />
                      India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-pink-600 mt-2">📧</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                    <p className="text-gray-600">
                      hello@saumya.com<br />
                      support@saumya.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-pink-600 mt-2">📱</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">
                      +91 98765 43210<br />
                      +91 98765 43211
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl text-pink-600 mt-2">🕒</div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 text-lg mb-6">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: "f", name: "Facebook" },
                  { icon: "in", name: "LinkedIn" },
                  { icon: "tw", name: "Twitter" },
                  { icon: "ig", name: "Instagram" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-full flex items-center justify-center font-bold hover:shadow-lg transition transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "Is Saumya really free?",
                a: "We offer a free tier with basic features. Premium plans start at just ₹499/month for unlimited access."
              },
              {
                q: "How do I get a mentor?",
                a: "After creating your profile, browse our mentor directory and send mentorship requests. Our team ensures great matches."
              },
              {
                q: "Can I get a job through Saumya?",
                a: "Yes! We have 1000+ job listings from top companies. Use our job board and let employers find you."
              },
              {
                q: "Are there any hidden fees?",
                a: "Absolutely not. All pricing is transparent. Pay monthly, yearly, or use our free tier."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="font-bold text-gray-900 text-lg mb-3">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}