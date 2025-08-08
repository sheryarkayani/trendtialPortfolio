import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaBuilding, FaUser } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-32 bg-black relative">
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* Clean header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Why Choose Our Services?
          </h2>
          
          {/* Simple divider */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto"
          />
        </motion.div>
        
        {/* Visual comparison - Clean and purposeful */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          {/* Corporate Brands - Declining */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gray-900/50 border border-gray-700/30 rounded-3xl p-12 relative overflow-hidden"
              >
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-600/5 to-transparent" />
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 bg-gray-700/50 rounded-3xl flex items-center justify-center mx-auto mb-8"
                  >
                    <FaBuilding className="text-gray-400 text-2xl" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold text-gray-300 mb-6">
                    Corporate Brands
                  </h3>
                  
                  {/* Declining chart visualization */}
                  <motion.div
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 2 }}
                    className="mb-8"
                  >
                    <svg width="120" height="60" className="mx-auto">
                      <motion.path
                        d="M10 20 L40 25 L70 40 L100 55"
                        stroke="#6b7280"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 0.8 }}
                      />
                    </svg>
                  </motion.div>
                  
                  <p className="text-gray-500 font-medium text-lg">
                    Decline
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Personal Brands - Growing */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-red-500/5 border border-red-500/20 rounded-3xl p-12 relative overflow-hidden"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent" />
                
                <div className="relative z-10">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                    className="w-20 h-20 bg-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8"
                  >
                    <FaUser className="text-white text-2xl" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Personal Brands
                  </h3>
                  
                  {/* Growing chart visualization */}
                  <motion.div
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ delay: 1.2, duration: 2 }}
                    className="mb-8"
                  >
                    <svg width="120" height="60" className="mx-auto">
                      <motion.path
                        d="M10 55 L40 40 L70 25 L100 10"
                        stroke="#ef4444"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </svg>
                  </motion.div>
                  
                  <p className="text-red-400 font-medium text-lg">
                    Compound
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Core message */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
            Corporate brands die,<br />personal brands compound.
          </h3>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Build yours now or get left behind in the age of AI and automation.
          </p>
        </motion.div>
        
        {/* Clean CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(239, 68, 68, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-2xl font-semibold text-lg transition-colors duration-300 flex items-center space-x-3 mx-auto"
          >
            <FaRocket />
            <span>BUILD MY REVENUE MACHINE</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 