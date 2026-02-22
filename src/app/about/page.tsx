export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">About Saumya</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering females across Mumbai through opportunities, mentorship, and community support since 2024
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Saumya, we believe that every female has the potential to achieve extraordinary things. Our mission is to create a platform where women in Mumbai can access opportunities, learn new skills, build meaningful connections, and achieve their dreams.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are building an ecosystem that supports women at every stage of their career and entrepreneurial journey.
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-300 to-pink-500 rounded-3xl h-96 flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
            🎯
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "🤝", title: "Community", desc: "Support and solidarity" },
              { icon: "💪", title: "Empowerment", desc: "Growth through resources" },
              { icon: "🌟", title: "Excellence", desc: "Quality and innovation" },
              { icon: "❤️", title: "Inclusivity", desc: "Everyone is welcome" }
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-pink-600 to-pink-800 rounded-3xl p-12 text-white mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "50K+", desc: "Active Users" },
              { number: "1000+", desc: "Job Opportunities" },
              { number: "15K+", desc: "Success Stories" },
              { number: "500+", desc: "Mentors" }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-lg opacity-90">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { avatar: "👩‍💼", name: "Saumya Basu", role: "Founder & CEO" },
              { avatar: "👩‍💻", name: "Priya Sharma", role: "Head of Operations" },
              { avatar: "👩‍🔬", name: "Anjali Desai", role: "Community Manager" }
            ].map((member, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-pink-600 font-semibold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
