import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CaseStudyCard = ({ study, isActive }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1 : 0.95 }}
    transition={{ duration: 0.5 }}
    className={`relative bg-gradient-to-br from-gray-900 to-black border rounded-3xl p-8 ${
      isActive ? 'border-red-500/50 shadow-2xl shadow-red-500/20' : 'border-gray-700/30'
    }`}
  >
    {/* Profile Section */}
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-red-500/20">
        <span className="text-white font-bold text-lg">{study.initials}</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white">{study.name}</h3>
        <p className="text-red-400 font-medium">{study.title}</p>
      </div>
    </div>

    {/* Before/After Stats */}
    <div className="grid grid-cols-2 gap-6 mb-6">
      <div>
        <h4 className="text-red-400 font-semibold mb-3 text-center uppercase tracking-wide text-sm">Before</h4>
        <div className="space-y-2">
          {study.before.map((stat, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3 border border-gray-700/30">
              <span className="text-gray-300 text-sm">{stat.label}</span>
              <div className="flex items-center space-x-2">
                {stat.icon}
                <span className="text-white font-bold">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-red-400 font-semibold mb-3 text-center uppercase tracking-wide text-sm">After</h4>
        <div className="space-y-2">
          {study.after.map((stat, index) => (
            <div key={index} className="flex items-center justify-between bg-red-500/10 rounded-lg p-3 border border-red-500/20">
              <span className="text-gray-300 text-sm">{stat.label}</span>
              <div className="flex items-center space-x-2">
                {stat.icon}
                <span className="text-red-400 font-bold">{stat.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Description */}
    <p className="text-gray-300 leading-relaxed mb-4">{study.description}</p>
    
    {/* Privacy Note */}
    <div className="text-xs text-gray-500 text-center pt-4 border-t border-gray-700/30">
      PS: We prioritize client privacy. Profiles are caricatures reflecting our clients' professions.
    </div>
  </motion.div>
);

const CaseStudies = () => {
  const [currentStudy, setCurrentStudy] = useState(0);

  const caseStudies = [
    {
      name: "Client A",
      title: "Co-Founder, B2C Startup | Creator",
      initials: "CA",
      before: [
        { label: "Followers", value: "50K", icon: <FaLinkedin className="text-blue-500" /> },
        { label: "Impressions", value: "100K", icon: <span className="text-yellow-500">📊</span> },
        { label: "Revenue", value: "$1M+", icon: <span className="text-red-500">💰</span> }
      ],
      after: [
        { label: "Followers", value: "181K", icon: <FaLinkedin className="text-blue-500" /> },
        { label: "Impressions", value: "90M", icon: <span className="text-yellow-500">📊</span> },
        { label: "Revenue", value: "1M+", icon: <span className="text-red-500">💰</span> }
      ],
      description: "His goal was clear from the beginning, get a lot of followers and become well known in the entrepreneurship space. So keeping that goal in mind we did 80% TOFU content for him and with engaging stories, fascinating podcast breakdowns we were able to get to the 181k."
    },
    {
      name: "Client B",
      title: "Tech CEO, SaaS Founder",
      initials: "CB",
      before: [
        { label: "Followers", value: "25K", icon: <FaLinkedin className="text-blue-500" /> },
        { label: "Impressions", value: "50K", icon: <span className="text-yellow-500">📊</span> },
        { label: "Revenue", value: "$500K", icon: <span className="text-red-500">💰</span> }
      ],
      after: [
        { label: "Followers", value: "120K", icon: <FaLinkedin className="text-blue-500" /> },
        { label: "Impressions", value: "45M", icon: <span className="text-yellow-500">📊</span> },
        { label: "Revenue", value: "2M+", icon: <span className="text-red-500">💰</span> }
      ],
      description: "As a tech founder, she needed to establish thought leadership in the SaaS space. Our strategic content approach focusing on industry insights and leadership content helped her build a massive following and drive significant business growth."
    },
    {
      name: "Client C",
      title: "Financial Advisor & Coach",
      initials: "CC",
      before: [
        { label: "Followers", value: "15K", icon: <FaInstagram className="text-pink-500" /> },
        { label: "Impressions", value: "30K", icon: <span className="text-yellow-500">📊</span> },
        { label: "Revenue", value: "$200K", icon: <span className="text-red-500">💰</span> }
      ],
      after: [
        { label: "Followers", value: "85K", icon: <FaInstagram className="text-pink-500" /> },
        { label: "Impressions", value: "25M", icon: <span className="text-yellow-500">📊</span> },
        { label: "Revenue", value: "800K+", icon: <span className="text-red-500">💰</span> }
      ],
      description: "Building trust in the financial space requires consistent, valuable content. Our educational content strategy helped him attract high-net worth clients and establish himself as a trusted authority in financial planning."
    }
  ];

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevStudy = () => {
    setCurrentStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-red-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-red-600/10 blur-3xl rounded-full" />
      </div>
      <div className="max-w-6xl mx-auto px-8 relative">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Case Studies
          </h2>
          <p className="text-gray-400 text-base md:text-xl max-w-3xl mx-auto mb-8">
            Real growth from real founders. See how consistent content and positioning translated into reach, trust and revenue.
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto"
          />
        </motion.div>

        {/* Case Study Display */}
        <div className="relative">
          <div className="flex justify-center mb-8">
            <CaseStudyCard study={caseStudies[currentStudy]} isActive={true} />
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-6">
            <button
              onClick={prevStudy}
              aria-label="Previous case study"
              className="p-3 rounded-full bg-gray-800 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
            >
              <FaChevronLeft className="text-white" />
            </button>
            
            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStudy(index)}
                  aria-label={`Go to case study ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentStudy ? 'bg-red-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextStudy}
              aria-label="Next case study"
              className="p-3 rounded-full bg-gray-800 hover:bg-red-500/20 border border-gray-700 hover:border-red-500/50 transition-all duration-300"
            >
              <FaChevronRight className="text-white" />
            </button>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-cal-namespace="30min"
              data-cal-link="trendtial-creators/30min"
              data-cal-config='{"layout":"month_view","theme":"dark"}'
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold text-base md:text-lg transition-colors duration-300 shadow-lg shadow-red-500/20"
            >
              Get a tailored growth plan
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 