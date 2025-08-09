import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const TestimonialCard = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="bg-gradient-to-br from-gray-900 to-black border border-gray-700/30 rounded-2xl p-8 min-w-[350px] md:min-w-[400px] mx-4 hover:border-red-500/30 transition-all duration-300"
  >
    {/* Quote Icon */}
    <div className="flex justify-between items-start mb-6">
      <FaQuoteLeft className="text-red-500 text-2xl" />
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="text-yellow-400 text-sm" />
        ))}
      </div>
    </div>

    {/* Testimonial Text */}
    <p className="text-gray-300 leading-relaxed mb-6 text-lg italic">
      "{testimonial.text}"
    </p>

    {/* Client Info */}
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mr-4">
        <span className="text-white font-bold text-lg">{testimonial.initials}</span>
      </div>
      <div>
        <h4 className="text-white font-semibold">{testimonial.name}</h4>
        <p className="text-gray-400 text-sm">{testimonial.title}</p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Rashid",
      title: "Co-Founder, Tez Financial Services",
      initials: "AR",
      text: "Trendtial transformed how we communicate our fintech solutions on LinkedIn. Our thought leadership content now reaches 50K+ monthly impressions, directly contributing to our Series A funding success."
    },
    {
      name: "Fatima Khan",
      title: "CEO, EduTech Solutions",
      initials: "FK",
      text: "As an edtech founder, building trust with parents and students was crucial. The team helped us create authentic content that showcased our impact. Our enrollment increased by 180% in 6 months."
    },
    {
      name: "Hassan Ali",
      title: "Founder, AgriConnect",
      initials: "HA",
      text: "Positioning ourselves in the agtech space seemed impossible until we worked with Trendtial. Their content strategy helped us secure partnerships with major farming cooperatives across Punjab."
    },
    {
      name: "Zara Mahmood",
      title: "Co-Founder, HealthTech Innovations",
      initials: "ZM",
      text: "The healthcare sector demands credibility. Trendtial's approach to content helped us establish authority, leading to strategic partnerships with hospitals and a successful exit to a multinational."
    },
    {
      name: "Omar Siddique",
      title: "CEO, LogiPak Solutions",
      initials: "OS",
      text: "Our logistics startup needed visibility in a crowded market. The personal branding strategy opened doors to enterprise clients and investors. We closed our largest deal after a client saw our LinkedIn content."
    },
    {
      name: "Ayesha Tariq",
      title: "Founder, RetailTech Pro",
      initials: "AT",
      text: "Building a SaaS for retail in Pakistan required establishing trust with traditional business owners. Trendtial's storytelling approach helped us communicate complex tech in simple terms, tripling our customer base."
    },
    {
      name: "Usman Shah",
      title: "Co-Founder, FinanceFlow",
      initials: "US",
      text: "The team understood the nuances of the Pakistani market perfectly. Our content now resonates with both local businesses and international investors. Raised $2M Series A largely due to our online presence."
    },
    {
      name: "Nadia Ahmed",
      title: "CEO, WomenTech Initiative",
      initials: "NA",
      text: "As a woman founder in tech, visibility was my biggest challenge. Trendtial helped amplify my voice and our mission. We now have 10,000+ women in our network and partnerships with major tech companies."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Real stories from founders and executives who transformed their personal brands
          </p>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="h-px bg-red-500 mx-auto"
          />
        </motion.div>

        {/* Animated Testimonials Carousel */}
        <div className="relative overflow-hidden">
          {/* Single Row - Moving Right to Left */}
          <motion.div
            animate={{ x: [0, -100 * testimonials.length] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard 
                key={`row-${index}`} 
                testimonial={testimonial} 
                index={index % testimonials.length} 
              />
            ))}
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-lg mb-6">
            Ready to join these successful entrepreneurs?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cal-namespace="30min"
            data-cal-link="trendtial-creators/30min"
            data-cal-config='{"layout":"month_view","theme":"dark"}'
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors duration-300 shadow-lg shadow-red-500/20"
          >
            Start Your Transformation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 