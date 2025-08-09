import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaBuilding, FaBook, FaBriefcase, FaDollarSign, FaLaptopCode } from 'react-icons/fa';

const TargetCard = ({ title, description, iconComponent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.15,
      ease: [0.25, 0.4, 0.25, 1]
    }}
    viewport={{ once: true }}
    whileHover={{ y: -8 }}
    className="group relative"
  >
    <div className="relative bg-black border border-white/5 rounded-2xl p-8 h-full transition-all duration-500 hover:border-red-500/20">
      
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon with purpose */}
      <div className="relative mb-6">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-14 h-14 bg-red-500 rounded-xl flex items-center justify-center"
        >
          <div className="text-white text-xl">{iconComponent}</div>
        </motion.div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-xl font-semibold mb-3 text-white leading-tight">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const WhoThisIsFor = () => {
  const targets = [
    {
      title: "Coaches and Consultants",
      description: "Ready to transform their ideas into viral content",
      iconComponent: <FaBullseye />
    },
    {
      title: "CEOs and Founders",
      description: "Looking to position themselves as industry leaders",
      iconComponent: <FaBuilding />
    },
    {
      title: "Authors and Speakers",
      description: "Wanting to promote their latest projects, book launch or gig",
      iconComponent: <FaBook />
    },
    {
      title: "Corporate Executives",
      description: "Ready to showcase their influence and career opportunities",
      iconComponent: <FaBriefcase />
    },
    {
      title: "Financial Advisors",
      description: "Looking to build trust and attract high-net worth clients",
      iconComponent: <FaDollarSign />
    },
    {
      title: "Tech Entrepreneurs",
      description: "Aiming to position their startups in their minds",
      iconComponent: <FaLaptopCode />
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative">
      
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        
        {/* Clean header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Who this is for
          </h2>
          
          {/* Simple divider */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto"
          />
        </motion.div>
        
        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {targets.map((target, index) => (
            <TargetCard
              key={index}
              title={target.title}
              description={target.description}
              iconComponent={target.iconComponent}
              index={index}
            />
          ))}
        </div>
        
        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-black border border-red-500/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed">
              Anyone who understands the value in having an audience of the right people
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoThisIsFor; 