import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaComments, FaEnvelope, FaMagnet, FaRobot, FaBullseye, FaChartLine } from 'react-icons/fa';

const ServiceCard = ({ service, isSelected, onClick, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.25, 0.4, 0.25, 1]
    }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    onClick={onClick}
    className={`relative cursor-pointer p-4 md:p-6 rounded-2xl border transition-all duration-300 ${
      isSelected 
        ? 'border-red-500/50 bg-red-500/10 shadow-lg shadow-red-500/10' 
        : 'border-white/5 bg-black hover:border-white/20'
    }`}
  >
    {/* Animated background glow for selected card */}
    {isSelected && (
      <motion.div
        layoutId="selectedBg"
        className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl"
        initial={false}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    )}
    
    <div className="relative z-10 flex items-center space-x-4">
      <motion.div
        animate={{ 
          scale: isSelected ? 1.15 : 1,
          rotate: isSelected ? 10 : 0 
        }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className={`w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isSelected ? 'bg-red-500' : 'bg-white/10'
        }`}
      >
        <div className={`text-lg md:text-xl transition-colors duration-300 ${isSelected ? 'text-white' : 'text-red-400'}`}>
          {service.iconComponent}
        </div>
      </motion.div>
      
      <div className="flex-1">
        <h3 className="text-base md:text-lg font-semibold text-white mb-1">{service.title}</h3>
      </div>
      
      {/* Selection indicator arrow */}
      {isSelected && (
        <motion.div
          layoutId="arrow"
          className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-red-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          →
        </motion.div>
      )}
    </div>
  </motion.div>
);

const ServiceDetail = ({ service }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={service.title}
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.98 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="sticky top-8"
    >
      <div className="bg-black border border-white/5 rounded-3xl p-8 md:p-12 h-fit min-h-[600px] flex flex-col">
        
        {/* Header with animated icon */}
        <div className="flex items-center mb-8 md:mb-10">
          <motion.div
            key={service.title + "-icon"}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-6"
          >
            <div className="text-white text-3xl">{service.iconComponent}</div>
          </motion.div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">{service.title}</h3>
        </div>
        
        {/* Animated description paragraphs */}
        <div className="text-gray-300 leading-relaxed space-y-6 mb-8 flex-grow">
          {service.detailedDescription.split('\n\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.2, duration: 0.5 }}
              className="text-base md:text-lg"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        
        {/* Animated bullet points */}
        {service.bulletPoints && (
          <motion.div
            className="space-y-4 mb-8"
          >
            {service.bulletPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                className="flex items-start"
              >
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-4 flex-shrink-0" />
                <span className="text-gray-300 leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Add relevant graphic/visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-auto pt-8 border-t border-gray-700/30"
        >
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent rounded-xl blur-xl"></div>
              <div className="relative bg-gradient-to-r from-gray-900 to-black border border-red-500/20 rounded-xl p-6 text-center">
                <div className="text-red-400 text-4xl mb-2">📈</div>
                <p className="text-white font-semibold mb-1">Revenue Growth</p>
                <p className="text-gray-400 text-sm">Automated & Optimized</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  </AnimatePresence>
);

const BuildRevenueMachine = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Instagram Stories",
      shortDescription: "High-impact Stories that drive conversions",
      iconComponent: <FaRocket />,
      detailedDescription: "Craft high-impact Stories with clear CTAs to drive action—email signups, course enrollments, or purchases.\n\nLeverage polls, quizzes, and interactive features to boost engagement and keep your brand top-of-mind."
    },
    {
      title: "LinkedIn Comments",
      shortDescription: "Strategic commenting for visibility",
      iconComponent: <FaComments />,
      detailedDescription: "Craft valuable, insightful comments that position you as a thought leader.\n\nConsistent thoughtful responses attract your target audience and expand your network organically."
    },
    {
      title: "Email Marketing",
      shortDescription: "Automated sequences that nurture leads",
      iconComponent: <FaEnvelope />,
      detailedDescription: "Set up automated email sequences with personalized content at every stage.\n\nFrom welcome emails to follow-ups, we build relationships that convert leads into customers."
    },
    {
      title: "Lead Magnets",
      shortDescription: "Irresistible offers that capture leads",
      iconComponent: <FaMagnet />,
      detailedDescription: "Design high-value offers that speak to your audience's pain points.\n\nFrom eBooks to templates, we create lead magnets that solve problems and drive immediate action."
    },
    {
      title: "AI Automations",
      shortDescription: "Streamline communication with AI",
      iconComponent: <FaRobot />,
      detailedDescription: "Integrate AI tools for instant customer queries, lead qualification, and appointment booking.",
      bulletPoints: [
        "Automated lead qualification and segmentation",
        "24/7 customer support automation", 
        "Smart appointment scheduling",
        "Social media reply automation",
        "Personalized content delivery"
      ]
    },
    {
      title: "Outbound Marketing",
      shortDescription: "Targeted outreach that delivers results",
      iconComponent: <FaBullseye />,
      detailedDescription: "Create targeted, high-converting outreach strategies across platforms.",
      bulletPoints: [
        "LinkedIn outreach for B2B founders",
        "Instagram PR campaigns",
        "Creator partnerships for UGC",
        "10 daily messages, 300/month pipeline",
        "No automation on main accounts"
      ]
    },
    {
      title: "Inbound Sales",
      shortDescription: "Optimize your sales funnel",
      iconComponent: <FaChartLine />,
      detailedDescription: "Turn inbound leads into sales with proven frameworks and automation.",
      bulletPoints: [
        "Dedicated sales setters",
        "Personalized sales frameworks",
        "Automated follow-up sequences",
        "Lead qualification systems",
        "Long-term client conversion focus"
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Additional services
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto">
            Transform your social media into a revenue generating machine with
            premium add ons
          </p>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-3">
            Tap a service on the left to see how it compounds reach, trust and revenue on the right.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12">
          
          {/* Services List */}
          <motion.div 
            className="lg:col-span-4 space-y-3 md:space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isSelected={selectedService === index}
                onClick={() => setSelectedService(index)}
                index={index}
              />
            ))}
          </motion.div>
          
          {/* Service Details */}
          <div className="lg:col-span-8">
            <ServiceDetail service={services[selectedService]} />
          </div>
        </div>

        {/* Mobile sticky CTA */}
        <div className="lg:hidden sticky bottom-4 mt-6">
          <button
            data-cal-namespace="30min"
            data-cal-link="trendtial-creators/30min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow-lg shadow-red-500/20"
          >
            Talk to an expert
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuildRevenueMachine; 