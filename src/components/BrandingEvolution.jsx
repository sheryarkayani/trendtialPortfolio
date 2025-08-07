import React from 'react';

const TimelineItem = ({ number, period, title, description, isLast }) => (
  <div className="flex items-start">
    <div className="flex flex-col items-center mr-6">
      <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
        {number}
      </div>
      {!isLast && <div className="w-0.5 h-24 bg-gray-600 mt-4"></div>}
    </div>
    <div className="flex-1 pb-8">
      <div className="text-sm text-red-400 font-semibold mb-1">{period}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  </div>
);

const BrandingEvolution = () => {
  const timelineData = [
    {
      number: 1,
      period: "Before 2000s",
      title: "Company-Centric Branding",
      description: "In the past, branding was all about the company—massive logos and perfect ads. Think Coca-Cola, Nike, and Apple. The message was clear: the company was the hero, and the customer was just a recipient."
    },
    {
      number: 2,
      period: "2000s – Present",
      title: "Founder-Led Branding",
      description: "Then came the shift. Elon Musk, Richard Branson, and Gary Vee changed the game. They used their personal stories to fuel their brands. Founder-led branding made companies relatable and built trust by putting people at the center of their brands. Suddenly, your story, values, and voice were just as important as your product."
    },
    {
      number: 3,
      period: "2020s – Present",
      title: "The Rise of Employee-Generated Content (EGC)",
      description: "Fast forward to today—Employee-Generated Content (EGC) is taking over. Brands like Starbucks and Lush empower their employees to share authentic stories online, making brands feel more genuine and transparent. Real voices, real stories—human brands are the ones thriving. EGC helps in trust-building and recruitment, it humanizes brands and boosts engagement and who doesn't want that??"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Personal Branding has evolved: From Companies to People</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Branding has come a long way from corporate logos and catchy slogans. Today, personal branding is the key to standing out in a crowded marketplace. Let's take a quick look at how it evolved—and why it's crucial for you.
          </p>
        </div>
        
        <div className="space-y-0">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              number={item.number}
              period={item.period}
              title={item.title}
              description={item.description}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingEvolution; 