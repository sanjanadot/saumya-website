export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "₹0",
      period: "Free Forever",
      features: [
        "Community Access",
        "5 Job Listings/month",
        "Basic Profile",
        "Email Support",
        "Limited Courses"
      ],
      color: "bg-pink-50",
      buttonColor: "border-pink-600 text-pink-600 hover:bg-pink-50",
      highlighted: false
    },
    {
      name: "Professional",
      price: "₹499",
      period: "per month",
      features: [
        "Everything in Starter",
        "Unlimited Job Listings",
        "Advanced Profile",
        "Priority Support",
        "150+ Courses",
        "1:1 Mentorship 2x/month",
        "Networking Events Access"
      ],
      color: "bg-gradient-to-br from-pink-500 to-pink-700",
      buttonColor: "bg-white text-pink-600 hover:shadow-lg",
      highlighted: true
    },
    {
      name: "Elite",
      price: "₹999",
      period: "per month",
      features: [
        "Everything in Professional",
        "Unlimited Mentorship",
        "Funding Support",
        "Co-working Space Access",
        "Startup Incubation",
        "Premium Events",
        "Direct Investor Connections"
      ],
      color: "bg-pink-100",
      buttonColor: "border-pink-600 text-pink-600 hover:bg-pink-50",
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">Choose the plan that works for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`${plan.color} rounded-2xl p-8 ${plan.highlighted ? 'ring-2 ring-pink-500 scale-105 shadow-2xl' : 'shadow-lg'} transition transform hover:shadow-xl`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <div className={`mb-6 ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-pink-600'}`}>
                  {plan.price}
                </span>
                <p className="text-sm">{plan.period}</p>
              </div>
              <button className={`w-full py-3 rounded-lg font-semibold mb-6 border-2 transition ${plan.buttonColor}`}>
                Get Started
              </button>
              <ul className={`space-y-3 ${plan.highlighted ? 'text-white' : 'text-gray-700'}`}>
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center">
                    <span className="mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}