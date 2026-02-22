export default function Blog() {
  const posts = [
    {
      date: "Feb 20, 2026",
      title: "5 Tips for Female Entrepreneurs in 2026",
      excerpt: "Learn how to navigate the startup ecosystem as a female founder in Mumbai.",
      author: "Priya Sharma",
      avatar: "👩‍💼",
      readTime: "5 min read"
    },
    {
      date: "Feb 18, 2026",
      title: "Breaking the Glass Ceiling in Tech Industry",
      excerpt: "Success stories of women who transformed their careers in technology.",
      author: "Anjali Patel",
      avatar: "👩‍💻",
      readTime: "7 min read"
    },
    {
      date: "Feb 15, 2026",
      title: "Negotiating Your First Salary - A Complete Guide",
      excerpt: "Practical tips and strategies for negotiating better compensation.",
      author: "Sneha Desai",
      avatar: "👩‍🎨",
      readTime: "6 min read"
    },
    {
      date: "Feb 12, 2026",
      title: "Building Your Personal Brand as a Freelancer",
      excerpt: "How to stand out and attract high-paying clients as a freelance professional.",
      author: "Priya Sharma",
      avatar: "👩‍💼",
      readTime: "8 min read"
    },
    {
      date: "Feb 10, 2026",
      title: "Networking Strategies That Actually Work",
      excerpt: "Move beyond small talk and build meaningful professional relationships.",
      author: "Anjali Patel",
      avatar: "👩‍💻",
      readTime: "6 min read"
    },
    {
      date: "Feb 8, 2026",
      title: "Balancing Career and Personal Life - Real Talk",
      excerpt: "Insights from successful women on maintaining work-life balance.",
      author: "Sneha Desai",
      avatar: "👩‍🎨",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Saumya Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and success stories from women breaking barriers in Mumbai
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden group cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-pink-300 to-pink-500 group-hover:scale-105 transition transform"></div>
              <div className="p-8">
                <p className="text-pink-600 font-semibold text-sm mb-2">{post.date}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{post.avatar}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p className="text-sm text-gray-600">{post.readTime}</p>
                    </div>
                  </div>
                  <button className="px-4 py-2 text-pink-600 font-semibold hover:bg-pink-50 rounded-lg transition">
                    Read →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-600 to-pink-800 rounded-3xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-lg mb-8 opacity-90">Subscribe to our newsletter for tips, opportunities, and success stories</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
            <button className="px-8 py-3 bg-white text-pink-600 rounded-lg font-semibold hover:shadow-lg transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}