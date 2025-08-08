import React from 'react';
import { motion } from 'framer-motion';
import { FaTiktok, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
        <div className="flex space-x-6">
          {[FaTiktok, FaFacebook, FaLinkedin].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2, y: -4 }}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
