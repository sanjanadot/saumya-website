export default function Resources() {
  const categories = [
    {
      title: "Career Resources",
      icon: "💼",
      items: [
        "Resume Templates & Tips",
        "Interview Preparation Guide",
        "Salary Negotiation Strategies",
        "Career Path Roadmaps",
        "Job Search Tools"
      ]
    },
    {
      title: "Business Tools",
      icon: "💡",
      items: [
        "Business Plan Templates",
        "Financial Planning Sheets",
        "Marketing Guides",
        "Pitch Deck Examples",
        "Funding Resources"
      ]
    },
    {
      title: "Learning Materials",
      icon: "📚",
      items: [
        "Skill Assessment Tests",
        "Course Recommendations",
        "Certification Prep",
        "Industry Reports",
        "Case Studies"
      ]
    },
    {
      title: "Personal Development",
      icon: "💪",
      items: [
        "Leadership Workshops",
        "Communication Skills",
        "Confidence Building",
        "Time Management",
        "Wellness Resources"
      ]
    },
    {
      title: "Networking",
      icon: "🤝",
      items: [
        "Networking Guide",
        "LinkedIn Profile Tips",
        "Event Calendar",
        "Mentor Directory",
        "Alumni Network"
      ]
    },
    {
      title: "Legal & Financial",
      icon: "📊",
      items: [
        "Women Entrepreneur Laws",
        "Tax Guide for Freelancers",
        "Insurance Information",
        "Contract Templates",
        "Rights & Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Resources Hub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Free tools, guides, and templates to support your career and business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-8 border-t-4 border-pink-500"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="text-gray-600 flex items-start"
                  >
                    <span className="text-pink-600 font-bold mr-3">•</span>
                    <a href="#" className="hover:text-pink-600 transition">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-lg font-semibold hover:shadow-lg transition">
                Explore
              </button>
            </div>
          ))}
        </div>

        {/* Featured Resources */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📖",
                title: "Women Entrepreneur Handbook",
                desc: "Complete guide to starting and scaling your business",
                type: "PDF Guide",
                color: "from-pink-400 to-pink-600"
              },
              {
                icon: "🎥",
                title: "Career Success Video Series",
                desc: "Learn from successful women professionals",
                type: "Video Series",
                color: "from-pink-500 to-pink-700"
              },
              {
                icon: "🎓",
                title: "Professional Development Course",
                desc: "Comprehensive online training program",
                type: "Online Course",
                color: "from-pink-600 to-pink-800"
              }
            ].map((resource, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${resource.color} rounded-xl p-8 text-white shadow-lg hover:shadow-xl transition transform hover:scale-105 cursor-pointer`}
              >
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{resource.title}</h3>
                <p className="mb-4 opacity-90">{resource.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{resource.type}</span>
                  <button className="text-lg">→</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Popular Downloads</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Resume Template",
              "Business Plan",
              "Budget Sheet",
              "Pitch Deck"
            ].map((item, idx) => (
              <button
                key={idx}
                className="p-6 bg-gradient-to-br from-pink-50 to-white border-2 border-pink-300 rounded-lg hover:border-pink-600 hover:shadow-lg transition font-semibold text-gray-900"
              >
                ⬇️ {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}