import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaComments, FaEnvelope, FaMagnet, FaRobot, FaBullseye, FaChartLine, FaArrowRight } from 'react-icons/fa';

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
    whileHover={{ y: -4, transition: { duration: 0.2 } }}
    onClick={onClick}
    className={`relative cursor-pointer p-6 rounded-2xl border transition-all duration-300 group ${
      isSelected 
        ? 'border-red-500/50 bg-red-500/10 shadow-lg shadow-red-500/20' 
        : 'border-white/10 bg-gradient-to-br from-gray-900/50 to-black hover:border-red-500/30'
    }`}
  >
    {/* Animated background glow for selected card */}
    {isSelected && (
      <motion.div
        layoutId="selectedBg"
        className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl"
        initial={false}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    )}
    
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <motion.div
          animate={{ 
            scale: isSelected ? 1.1 : 1,
            rotate: isSelected ? 5 : 0 
          }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
            isSelected ? 'bg-red-500' : 'bg-red-500/20 group-hover:bg-red-500/30'
          }`}
        >
          <div className={`text-xl transition-colors duration-300 ${isSelected ? 'text-white' : 'text-red-400'}`}>
            {service.iconComponent}
          </div>
        </motion.div>
        
        {/* Selection indicator */}
        <motion.div
          animate={{ 
            opacity: isSelected ? 1 : 0,
            x: isSelected ? 0 : 10
          }}
          transition={{ duration: 0.2 }}
          className="text-red-400"
        >
          <FaArrowRight />
        </motion.div>
      </div>
      
      <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.shortDescription}
      </p>
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
      <div className="bg-gradient-to-br from-gray-900/80 to-black border border-red-500/20 rounded-3xl p-8 md:p-10 shadow-2xl shadow-red-500/10">
        
        {/* Header with animated icon */}
        <div className="flex items-start md:items-center mb-8">
          <motion.div
            key={service.title + "-icon"}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-red-500/20 flex-shrink-0"
          >
            <div className="text-white text-3xl">{service.iconComponent}</div>
          </motion.div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{service.title}</h3>
            <p className="text-red-400 font-medium">Premium Add-on Service</p>
          </div>
        </div>
        
        {/* Key Benefits */}
        <div className="mb-8">
          <h4 className="text-red-400 font-semibold mb-4 uppercase tracking-wide text-sm">Key Benefits</h4>
          <div className="text-gray-300 leading-relaxed space-y-4">
            {service.detailedDescription.split('\n\n').map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.2, duration: 0.5 }}
                className="text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
        
        {/* Feature List */}
        {service.bulletPoints && (
          <div className="mb-8">
            <h4 className="text-red-400 font-semibold mb-4 uppercase tracking-wide text-sm">What's Included</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.bulletPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.4, duration: 0.5 }}
                  className="flex items-start bg-red-500/10 rounded-lg p-3 border border-red-500/20"
                >
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 leading-relaxed text-sm">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="border-t border-red-500/20 pt-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <p className="text-white font-semibold mb-1">Ready to accelerate your growth?</p>
              <p className="text-gray-400 text-sm">Talk to our experts about this service</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cal-namespace="30min"
              data-cal-link="trendtial-creators/30min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300 shadow-lg shadow-red-500/20 flex items-center space-x-2"
            >
              <span>Book Strategy Call</span>
              <FaArrowRight className="text-sm" />
            </motion.button>
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
      shortDescription: "High-impact Stories that drive conversions and engagement",
      iconComponent: <FaRocket />,
      detailedDescription: "Craft high-impact Stories with clear CTAs to drive action—email signups, course enrollments, or purchases.\n\nLeverage polls, quizzes, and interactive features to boost engagement and keep your brand top-of-mind."
    },
    {
      title: "LinkedIn Comments",
      shortDescription: "Strategic commenting for visibility and thought leadership",
      iconComponent: <FaComments />,
      detailedDescription: "Craft valuable, insightful comments that position you as a thought leader.\n\nConsistent thoughtful responses attract your target audience and expand your network organically."
    },
    {
      title: "Email Marketing",
      shortDescription: "Automated sequences that nurture leads into customers",
      iconComponent: <FaEnvelope />,
      detailedDescription: "Set up automated email sequences with personalized content at every stage.\n\nFrom welcome emails to follow-ups, we build relationships that convert leads into customers."
    },
    {
      title: "Lead Magnets",
      shortDescription: "Irresistible offers that capture high-quality leads",
      iconComponent: <FaMagnet />,
      detailedDescription: "Design high-value offers that speak to your audience's pain points.\n\nFrom eBooks to templates, we create lead magnets that solve problems and drive immediate action."
    },
    {
      title: "AI Automations",
      shortDescription: "Streamline communication with intelligent automation",
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
      shortDescription: "Targeted outreach that delivers measurable results",
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
      shortDescription: "Optimize your funnel for maximum conversions",
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
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-600/5 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-red-500/5 blur-3xl rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Premium Add-on Services
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto mb-4">
            Accelerate your growth with our specialized services designed to multiply your reach, trust, and revenue
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4"
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
          <div>
            <ServiceDetail service={services[selectedService]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildRevenueMachine; 