import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What do all these people and their businesses have in common?",
      answer:
        "Kylie Jenner - Kylie Cosmetics - Youngest Person to Become a Billionaire\nRihanna - Fenty Beauty - 2.8 Billion Dollar Valuation\nRyan Reynolds - Mint Mobile - Sold for 1 Billion\nLogan Paul - Prime - 3.1 Billion Dollar Valuation\nThe Rock - Teremana Tequila - 3.5 Billion Dollar Valuation\n\nAll these people built up their personal brands by acting, singing, TV, or social media. When they started businesses because they had such BIG personal brands their companies exploded. Their personal brand essentially was their marketing. Social media is the best way for your average person to do this without being an actor, singer, or athlete. A regular business owner can build themselves and their business on social media like never before. There is a huge opportunity here, if you don't take it your competitors will and will take all your customers with them.",
    },
    {
      question: "Why should my business be on social media?",
      answer:
        "There are 4.26 billion social media users\n54% of people use social media to research products\n71% of purchase decisions are made on social media",
    },
    {
      question: "What kind of results can I expect?",
      answer:
        "Results vary from person to person. Factors like your niche, target audience, number of posts per month all influence how fast you will grow!",
    },
    {
      question: "Platforms We Work With",
      answer:
        "Instagram, TikTok, Facebook, YouTube, LinkedIn, Twitter—optimizing primarily for LinkedIn and Instagram as they are the best platforms to sell now.",
    },
    {
      question: "Timeline for Results",
      answer:
        "You'll start seeing traction once we start posting! Our process, call, research, scripting, filming, editing, takes around 1-2 weeks to get rolling.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 bg-[black] border border-white/10 hover:border-red-400 hover:shadow-lg`}
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">
                  {faq.question}
                </h3>
                <span
                  className={`text-xl transform transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  &#x25BC;
                </span>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-500 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="text-gray-400 mt-4 whitespace-pre-line">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;
