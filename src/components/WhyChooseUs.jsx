import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaRocket, FaBuilding, FaUser } from 'react-icons/fa';

const WhyChooseUs = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);

  const title = "Why build a personal brand?";
  const coreMessage = "Corporate brands die, personal brands compound.";

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      
      {/* Animated background elements for parallax depth */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
        style={{ y: y1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-red-600/3 rounded-full blur-3xl"
        style={{ y: y2 }}
      />
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* Header with staggered text animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ delay: index * 0.03, duration: 0.5 }}
                className="inline-block"
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto"
          />
        </motion.div>
        
        {/* Visual comparison with 3D tilt effect */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            style={{ transformPerspective: 1000 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                rotateX: 10,
                rotateY: -10,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.3)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900/50 border border-gray-700/30 rounded-3xl p-12 relative h-full"
            >
              {/* Card content for Corporate Brands */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-20 h-20 bg-gray-700/50 rounded-3xl flex items-center justify-center mx-auto mb-8"
                >
                  <FaBuilding className="text-gray-400 text-2xl" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-gray-300 mb-6">Corporate Brands</h3>
                <motion.svg width="120" height="60" className="mx-auto mb-8">
                  <motion.path
                    d="M10 20 L40 25 L70 40 L100 55"
                    stroke="#6b7280"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                </motion.svg>
                <p className="text-gray-500 font-medium text-lg">Decline</p>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
            viewport={{ once: true }}
            style={{ transformPerspective: 1000 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                rotateX: 10,
                rotateY: 10,
                boxShadow: "0px 20px 40px rgba(239, 68, 68, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-red-500/5 border border-red-500/20 rounded-3xl p-12 relative h-full"
            >
              {/* Card content for Personal Brands */}
              <div className="relative z-10 text-center">
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="w-20 h-20 bg-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8"
                >
                  <FaUser className="text-white text-2xl" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-6">Personal Brands</h3>
                <motion.svg width="120" height="60" className="mx-auto mb-8">
                  <motion.path
                    d="M10 55 L40 40 L70 25 L100 10"
                    stroke="#ef4444"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1.2 }}
                  />
                </motion.svg>
                <p className="text-red-400 font-medium text-lg">Compound</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Core message with word-by-word animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
            {coreMessage.split(' ').map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 }
                }}
                transition={{ duration: 0.8 }}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Build yours now or get left behind in the age of AI and automation.
          </motion.p>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs; 