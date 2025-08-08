import React from 'react';
import { motion } from 'framer-motion';
import { FaAd, FaInstagram, FaLinkedin, FaLightbulb, FaEnvelope, FaMagnet, FaRobot, FaBullseye, FaChartLine } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.25, 0.4, 0.25, 1]
    }}
    viewport={{ once: true }}
    whileHover={{ y: -4 }}
    className="bg-black border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300"
  >
    <div className="flex items-start space-x-4">
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
        className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center flex-shrink-0"
      >
        <div className="text-white text-lg">{service.icon}</div>
      </motion.div>
      
      <div>
        <h3 className="text-white font-semibold mb-2 leading-tight">
          {service.name}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  </motion.div>
);

const AdditionalServices = () => {
  const services = [
    {
      name: "Ads Campaign Creation",
      description: "Professional ad campaigns with targeting and optimization",
      icon: <FaAd />
    },
    {
      name: "Instagram Stories",
      description: "Lead-generating Stories with clear CTAs",
      icon: <FaInstagram />
    },
    {
      name: "LinkedIn Commenting",
      description: "Strategic commenting for increased visibility",
      icon: <FaLinkedin />
    },
    {
      name: "Digital Product Ideas",
      description: "Creative development strategies for digital products",
      icon: <FaLightbulb />
    },
    {
      name: "Email Marketing Setup",
      description: "Automated email sequences and workflows",
      icon: <FaEnvelope />
    },
    {
      name: "Lead Magnet Design",
      description: "High-converting lead magnets that capture emails",
      icon: <FaMagnet />
    },
    {
      name: "AI Automation",
      description: "Smart automation for customer interactions",
      icon: <FaRobot />
    },
    {
      name: "Platform Outreach",
      description: "LinkedIn & Instagram outreach campaigns",
      icon: <FaBullseye />
    },
    {
      name: "Inbound Sales",
      description: "Sales funnel optimization and conversion",
      icon: <FaChartLine />
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
            Additional Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Enhance your package with these premium add-on services
          </p>
          
          {/* Simple divider */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto mt-8"
          />
        </motion.div>
        
        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
        
        {/* Pricing section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-black border border-red-500/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Custom Pricing
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Cost varies based on number of platforms and specific service requirements
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-2xl font-semibold transition-colors duration-300"
            >
              Get Custom Quote
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdditionalServices; 