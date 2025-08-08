import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaLinkedin, FaInstagram, FaTwitter, FaRocket } from 'react-icons/fa';

const Footer = () => {
  const quickLinks = ['Services', 'Process', 'Pricing', 'FAQ'];
  const services = [
    'Personal Branding',
    'Content Creation', 
    'Social Media Management',
    'Lead Generation',
    'Email Marketing',
    'AI Automation'
  ];

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-500/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.h3
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 text-red-400"
            >
              Trendtial
            </motion.h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              A boutique agency that specializes in Personal branding, content marketing, and public relations for founders. We help you go from unknown to unforgettable.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[FaLinkedin, FaInstagram, FaTwitter].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-400 hover:text-red-400 transition-colors duration-300 cursor-pointer">
                    {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-red-400 text-sm" />
                </div>
                <a 
                  href="mailto:hello@trendtial.com"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  hello@trendtial.com
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-3"
              >
                <div className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-red-400 text-sm" />
                </div>
                <a 
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </motion.div>
            </div>
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
            >
              <FaRocket size={16} />
              <span>Book A Call Now</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Footer bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Trendtial. All rights reserved.
            </p>
            
            <div className="flex space-x-6">
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-red-400 transition-colors duration-300 text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
          
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-6"
          >
            <p className="text-red-400 font-medium italic">
              Corporate brands die, personal brands compound. Build yours now or get left behind.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute top-20 right-20 w-2 h-2 bg-red-500/30 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-red-400/40 rounded-full animate-ping" />
    </footer>
  );
};

export default Footer;
