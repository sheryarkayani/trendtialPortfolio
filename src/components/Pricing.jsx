import { motion } from 'framer-motion';
import React from 'react';

const PricingCard = ({ plan, isPopular, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.2,
      ease: [0.25, 0.4, 0.25, 1]
    }}
    viewport={{ once: true }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className={`relative h-full flex flex-col p-8 rounded-3xl border ${isPopular ? 'border-red-500/30 bg-red-500/5' : 'border-white/5 bg-black'}`}
  >
    {isPopular && (
      <motion.div 
        className="absolute -top-3 left-8"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay: index * 0.2 + 0.5, type: 'spring' }}
      >
        <span className="bg-red-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
          Most Popular
        </span>
      </motion.div>
    )}
    <div className="flex-grow">
      <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
      <p className="text-gray-400 text-sm mb-6">{plan.description}</p>
      <ul className="space-y-3 mb-8">
        {plan.features.map((feature, i) => (
          <motion.li 
            key={i} 
            className="flex items-start text-sm text-gray-300"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + index * 0.2 + 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{feature}</span>
          </motion.li>
        ))}
      </ul>
    </div>
    <motion.button 
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      data-cal-namespace="30min"
      data-cal-link="trendtial-creators/30min"
      data-cal-config='{"layout":"month_view","theme":"dark"}'
      className={`w-full mt-auto ${isPopular ? 'bg-red-500 hover:bg-red-600' : 'bg-white/10 hover:bg-white/20'} text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300`}
    >
      Get Started
    </motion.button>
  </motion.div>
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
    }
  ];

  return (
    <section id="pricing" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the perfect package for your social media growth needs
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto mt-8"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} isPopular={index === 1} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;