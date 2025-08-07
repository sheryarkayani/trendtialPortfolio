const PricingCard = ({ plan, isPopular }) => (
  <div className={`p-6 rounded-xl ${isPopular ? 'bg-gradient-to-b from-blue-500/20 to-[#1a1d23] relative' : 'bg-[#1a1d2352]'} border border-white/10`}>
    {isPopular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </span>
      </div>
    )}
    <h3 className="text-lg font-semibold">{plan.name}</h3>
    <p className="text-gray-400 text-sm mt-2 mb-4">{plan.description}</p>
    <ul className="space-y-3 mb-6">
      {plan.features.map((feature, i) => (
        <li key={i} className="flex items-center text-sm text-gray-300">
          <svg className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`mt-auto w-full ${isPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white/10 hover:bg-white/20'} text-white px-6 py-2 rounded-lg transition-colors`}>
      Get Started
    </button>
  </div>
);

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for getting started with social media",
      features: [
        "10 shorts plus 5 carousels/text posts",
        "One platform optimization",
        "Basic content strategy",
        "Monthly performance report"
      ]
    },
    {
      name: "Growth",
      description: "Best for expanding your reach across platforms",
      features: [
        "15 shorts plus 5 carousels",
        "Two platforms (repurposing included)",
        "Advanced content strategy",
        "Weekly performance reports",
        "Community management"
      ]
    },
    {
      name: "Scale",
      description: "For serious growth and maximum impact",
      features: [
        "25 shorts plus 5 carousels",
        "Three platforms optimization",
        "Premium content strategy",
        "Daily performance monitoring",
        "Priority support",
        "Monthly strategy call"
      ]
    },
    {
      name: "Custom",
      description: "Tailored solution for unique requirements",
      features: [
        "Custom content volume",
        "All platform optimization",
        "Full service package",
        "Dedicated account manager",
        "All additional services included",
        "White-glove service"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Pricing
        </h2>
        <p className="text-gray-400 text-lg text-center mb-16 max-w-2xl mx-auto">
          Choose the perfect package for your social media growth needs
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isPopular={index === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;