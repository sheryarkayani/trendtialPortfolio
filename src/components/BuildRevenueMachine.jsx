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
    whileHover={{ y: -8 }}
    onClick={onClick}
    className={`relative cursor-pointer p-8 rounded-2xl border transition-all duration-500 ${
      isSelected 
        ? 'border-red-500/50 bg-red-500/5' 
        : 'border-white/5 bg-black hover:border-white/10'
    }`}
  >
    {/* Selected indicator */}
    {isSelected && (
      <motion.div
        layoutId="selectedIndicator"
        className="absolute top-6 right-6 w-3 h-3 bg-red-500 rounded-full"
        transition={{ duration: 0.3 }}
      />
    )}
    
    <div className="flex items-start space-x-4">
      <motion.div
        animate={{ 
          scale: isSelected ? 1.1 : 1,
          rotate: isSelected ? 5 : 0 
        }}
        transition={{ duration: 0.3 }}
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${
          isSelected ? 'bg-red-500' : 'bg-white/10'
        }`}
      >
        <div className={`text-xl ${isSelected ? 'text-white' : 'text-red-400'}`}>
          {service.iconComponent}
        </div>
      </motion.div>
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {service.shortDescription}
        </p>
      </div>
    </div>
  </motion.div>
);

const ServiceDetail = ({ service }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={service.title}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
      className="sticky top-8"
    >
      <div className="bg-black border border-white/5 rounded-3xl p-10 h-fit">
        
        {/* Header */}
        <div className="flex items-center mb-8">
          <motion.div
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-6"
          >
            <div className="text-white text-2xl">{service.iconComponent}</div>
          </motion.div>
          <h3 className="text-2xl font-bold text-white">{service.title}</h3>
        </div>
        
        {/* Description */}
        <div className="text-gray-300 leading-relaxed space-y-6 mb-8">
          {service.detailedDescription.split('\n\n').map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        
        {/* Bullet points */}
        {service.bulletPoints && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            {service.bulletPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="flex items-start"
              >
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2.5 mr-4 flex-shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
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
            Revenue Machine
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform your business into a revenue-generating machine
          </p>
          
          {/* Simple divider */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto mt-8"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Services List */}
          <div className="lg:col-span-2 space-y-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isSelected={selectedService === index}
                onClick={() => setSelectedService(index)}
                index={index}
              />
            ))}
          </div>
          
          {/* Service Details */}
          <div className="lg:col-span-3">
            <ServiceDetail service={services[selectedService]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildRevenueMachine; 