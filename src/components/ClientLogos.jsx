import React from 'react';
import { motion } from 'framer-motion';

const LogoCard = ({ name, logo, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex-shrink-0 mx-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-red-500/30 transition-all duration-300 min-w-[200px] flex items-center justify-center"
  >
    <div className="text-center">
      <div className="text-4xl mb-2">{logo}</div>
      <p className="text-white font-semibold text-sm">{name}</p>
    </div>
  </motion.div>
);

const ClientLogos = () => {
  const clients = [
    { name: "Tez Financial", logo: "💳" },
    { name: "EduTech Solutions", logo: "📚" },
    { name: "AgriConnect", logo: "🌾" },
    { name: "HealthTech Pro", logo: "🏥" },
    { name: "LogiPak", logo: "🚛" },
    { name: "RetailTech", logo: "🛍️" },
    { name: "FinanceFlow", logo: "💰" },
    { name: "WomenTech", logo: "👩‍💻" },
    { name: "FoodieExpress", logo: "🍔" },
    { name: "PropTech Solutions", logo: "🏢" },
    { name: "CleanEnergy Co", logo: "⚡" },
    { name: "DigitalMarket", logo: "📱" }
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-red-500/5 blur-3xl rounded-full" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-red-600/5 blur-3xl rounded-full" />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
            Trusted by Growing Startups
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join successful Pakistani entrepreneurs who've scaled their businesses with strategic personal branding
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-px bg-red-500 mx-auto mt-6"
          />
        </motion.div>

        {/* Animated Logo Carousel */}
        <div className="relative overflow-hidden">
          
          {/* First Row - Moving Right to Left */}
          <motion.div
            animate={{ x: [0, -100 * clients.length] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex mb-6"
          >
            {[...clients, ...clients].map((client, index) => (
              <LogoCard 
                key={`first-${index}`} 
                name={client.name}
                logo={client.logo}
                index={index % clients.length} 
              />
            ))}
          </motion.div>

          {/* Second Row - Moving Left to Right */}
          <motion.div
            animate={{ x: [-100 * clients.length, 0] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex"
          >
            {[...clients.slice(6), ...clients.slice(6)].map((client, index) => (
              <LogoCard 
                key={`second-${index}`} 
                name={client.name}
                logo={client.logo}
                index={index % 6} 
              />
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">50+</div>
            <div className="text-gray-400 text-sm">Successful Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">10M+</div>
            <div className="text-gray-400 text-sm">Total Impressions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">5X</div>
            <div className="text-gray-400 text-sm">Average Growth</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-red-500 mb-2">98%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientLogos; 