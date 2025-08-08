import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaChartBar, FaEdit, FaVideo, FaRocket } from 'react-icons/fa';

const ProcessStep = ({ number, title, description, iconComponent, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.2,
      ease: [0.25, 0.4, 0.25, 1]
    }}
    viewport={{ once: true }}
    className="relative group"
  >
    {/* Connection line */}
    {!isLast && (
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
        className="hidden lg:block absolute left-1/2 top-24 w-full h-px bg-gradient-to-r from-red-500/50 to-red-500/20 origin-left"
      />
    )}
    
    <div className="relative text-center">
      
      {/* Step number indicator */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ 
          delay: index * 0.2 + 0.3, 
          duration: 0.5,
          type: "spring",
          stiffness: 200
        }}
        className="w-12 h-12 bg-red-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10"
      >
        <span className="text-lg font-semibold">{number}</span>
      </motion.div>
      
      {/* Icon */}
      <motion.div
        whileHover={{ y: -4, rotate: 5 }}
        transition={{ duration: 0.3 }}
        className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
      >
        <div className="text-2xl text-black">{iconComponent}</div>
      </motion.div>
      
      {/* Content */}
      <div className="max-w-xs mx-auto">
        <h3 className="text-xl font-semibold text-white mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const OurProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery & Immersion",
      description: "Thorough understanding of your background, goals, and brand perception through strategic questions.",
      iconComponent: <FaSearch />
    },
    {
      number: 2,
      title: "Research",
      description: "Study top creators and best-performing content in your niche to craft your actionable brand roadmap.",
      iconComponent: <FaChartBar />
    },
    {
      number: 3,
      title: "Profile & Script",
      description: "Optimize your headline, bio, banner, and script an entire month of short-form content strategy.",
      iconComponent: <FaEdit />
    },
    {
      number: 4,
      title: "Film & Edit",
      description: "You record with your phone, we edit and produce 30 days of content to nurture and convert.",
      iconComponent: <FaVideo />
    },
    {
      number: 5,
      title: "Launch",
      description: "We handle content distribution across all your chosen social media channels.",
      iconComponent: <FaRocket />
    }
  ];

  return (
    <section className="py-32 bg-black relative">
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Clean header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Our Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A systematic approach to transform your personal brand
          </p>
          
          {/* Simple divider */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto mt-8"
          />
        </motion.div>
        
        {/* Process steps in horizontal flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              iconComponent={step.iconComponent}
              index={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>
        
        {/* Simple progress indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex justify-center mt-20"
        >
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.3 }}
                className="w-2 h-2 bg-red-500/60 rounded-full"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurProcess; 