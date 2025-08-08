import React from 'react';

const TargetCard = ({ title, description, icon }) => (
  <div className="p-6 rounded-xl bg-[#1a1d2352] border border-white/10 hover:border-red-500/30 transition-colors duration-300">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const WhoThisIsFor = () => {
  const targets = [
    {
      title: "Coaches and Consultants",
      description: "Ready to transform their ideas into viral content",
      icon: "🎯"
    },
    {
      title: "CEOs and Founders",
      description: "Looking to position themselves as industry leaders",
      icon: "👔"
    },
    {
      title: "Authors and Speakers",
      description: "Wanting to promote their latest projects, book launch or gig",
      icon: "📚"
    },
    {
      title: "Corporate Executives",
      description: "Ready to showcase their influence and career opportunities",
      icon: "💼"
    },
    {
      title: "Financial Advisors",
      description: "Looking to build trust and attract high-net worth clients",
      icon: "💰"
    },
    {
      title: "Tech Entrepreneurs",
      description: "Aiming to position their startups in their minds",
      icon: "💻"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Who this is for</h2>
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {targets.map((target, index) => (
            <TargetCard
              key={index}
              title={target.title}
              description={target.description}
              icon={target.icon}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Anyone who understands the value in having an audience of the right people
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor; 