export default function Services() {
  const services = [
    {
      icon: "💼",
      title: "Career Development",
      desc: "Exclusive job listings, career coaching, interview prep, and resume review from industry experts."
    },
    {
      icon: "💡",
      title: "Startup Incubation",
      desc: "From idea to launch. Get funding support, business mentorship, and co-working space access."
    },
    {
      icon: "📚",
      title: "Skill Development",
      desc: "150+ courses in tech, business, design, marketing, and more. Learn from industry professionals."
    },
    {
      icon: "🤝",
      title: "Mentorship Program",
      desc: "Connect with experienced mentors who can guide you through your career or business journey."
    },
    {
      icon: "🎯",
      title: "Networking Events",
      desc: "Monthly meetups, workshops, and networking sessions with female professionals and entrepreneurs."
    },
    {
      icon: "💰",
      title: "Funding Support",
      desc: "Access to funding opportunities, investor connections, and grants for female entrepreneurs."
    },
    {
      icon: "🏢",
      title: "Co-working Spaces",
      desc: "Affordable, collaborative workspaces in prime Mumbai locations for freelancers and startups."
    },
    {
      icon: "📊",
      title: "Business Analytics",
      desc: "Tools and insights to help you understand market trends and grow your business successfully."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive support for every stage of your career and entrepreneurial journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition border-l-4 border-pink-500"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Sign Up", desc: "Create your free Saumya account in minutes" },
              { step: "2", title: "Build Profile", desc: "Showcase your skills and experience" },
              { step: "3", title: "Explore", desc: "Browse opportunities and connect with mentors" },
              { step: "4", title: "Grow", desc: "Learn, network, and achieve your goals" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of women achieving their dreams with Saumya</p>
          <button className="px-10 py-4 bg-white text-pink-600 rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-105">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
}
