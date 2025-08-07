import React from 'react';

const ProcessStep = ({ number, title, description, icon }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center mb-4">
      <div className="text-2xl">{icon}</div>
    </div>
    <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center text-sm font-bold mb-4 -mt-2">
      {number}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const OurProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Onboarding Call",
      description: "We ask you 50-60 questions about your personal and professional life to help us get into your shoes and understand your stories",
      icon: "📞"
    },
    {
      number: 2,
      title: "Profile Optimization",
      description: "Our team will then work on your headline, bio, banner etc and give you, your optimisation in the next 24 hours.",
      icon: "⚡"
    },
    {
      number: 3,
      title: "Content Pillars",
      description: "We will be using our infamous funnel - TOFU, MOFU, BOFU to give you the perfect mix of topics that you will love.",
      icon: "🎯"
    },
    {
      number: 4,
      title: "Content Calendar",
      description: "We share a notion board with you with content every Monday. Which means 0 stress about what to post next.",
      icon: "📅"
    },
    {
      number: 5,
      title: "Graphics Approval",
      description: "To communicate with you in real-time & churn content as per your requirements. We use this platform.",
      icon: "✅"
    },
    {
      number: 6,
      title: "Progress Report",
      description: "We track your progress weekly to understand what's working & then deep dive into those content pillars more.",
      icon: "📊"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic approach to transform your personal brand from unknown to unforgettable
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess; 