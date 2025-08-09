import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaCheck } from "react-icons/fa";
import React from "react"; // Added missing import for React

const FeatureCard = ({ title, description, icon, stats, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.3,
      ease: [0.25, 0.4, 0.25, 1]
    }}
    viewport={{ once: true }}
    className="group relative"
  >
    {/* Minimalist card */}
    <div className="relative bg-black border border-white/5 rounded-3xl p-12 h-full transition-all duration-700 hover:border-white/10">
      
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-red-500/0 via-red-500/0 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      {/* Icon with purpose */}
      <div className="relative mb-8">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl"
        >
          {React.cloneElement(icon, { size: 28 })}
        </motion.div>
      </div>
      
      {/* Content hierarchy */}
      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-6 text-white leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-400 text-base leading-relaxed mb-8">
          {description}
        </p>
        
        {/* Stats with meaning */}
        {stats && (
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.3, duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center">
              <FaCheck size={10} className="text-white" />
            </div>
            <span className="text-red-400 font-medium text-sm">{stats}</span>
          </motion.div>
        )}
      </div>
    </div>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "LinkedIn Personal Branding",
      description: "Transform your expertise into a powerful personal brand that attracts opportunities. We position you as an authority in your field, ensuring your profile stands out to the right people.",
      icon: <FaLinkedin color="black" />,
      stats: "80+ clients • 10M+ views generated"
    },
    {
      title: "Instagram Personal Branding", 
      description: "Build a personal brand that attracts your ideal audience and converts them into loyal clients. Turn your Instagram into a powerful, lead-generating machine.",
      icon: <FaInstagram color="black" />,
      stats: "Just 2 hours/month investment required"
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-black relative">
      
      <div className="max-w-6xl mx-auto px-8 relative z-10">
        
        {/* Clean header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            What We Offer
          </h2>
          
          {/* Simple, elegant divider */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto"
          />
        </motion.div>

        {/* Two-column grid with proper spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
        
        {/* Subtle call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 text-lg">
            Ready to transform your personal brand?
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;