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
      title: "Discovery & Immersion",
      description: "On an onboarding call, we get a thorough understanding of background, goals, and current brand perception by asking you 50-60 questions.",
      icon: "🔍"
    },
    {
      number: 2,
      title: "Research",
      description: "We find and study the top creators/best performing content in your niche on social media and then craft a clear, actionable roadmap for your personal brand, including messaging, positioning, and visual identity.",
      icon: "📊"
    },
    {
      number: 3,
      title: "Profile Optimization and Script",
      description: "Using the research and information on you and your business. We first work on your headline, bio and banner then write and design your text posts, carousels, and infographics and script an entire month of short form content.",
      icon: "✏️"
    },
    {
      number: 4,
      title: "Film & Edit",
      description: "You record the videos using just your phone and send them to us. We edit the videos and produce 30 days of short-form content aimed to: Nurture your audience. Pull in conversations for your setters, converting them into sales calls.",
      icon: "🎬"
    },
    {
      number: 5,
      title: "Upload",
      description: "We upload the content on your chosen social media channels (Instagram, TikTok, Facebook, LinkedIn, YouTube).",
      icon: "🚀"
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
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