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
      name: "Sarah Chen",
      title: "Tech CEO & Founder",
      initials: "SC",
      text: "Working with Trendtial transformed my LinkedIn presence completely. From 25K to 120K followers in just 8 months, and the quality of leads has been incredible. They really understand personal branding for tech leaders."
    },
    {
      name: "Marcus Rodriguez",
      title: "Financial Advisor",
      initials: "MR",
      text: "The team helped me build trust and credibility in the financial space. My client acquisition has increased by 300% and I'm now seen as a thought leader in my field. Best investment I've made for my business."
    },
    {
      name: "Emily Johnson",
      title: "Executive Coach",
      initials: "EJ",
      text: "Their content strategy is phenomenal. They turned my expertise into engaging stories that resonate with my audience. My personal brand has never been stronger, and it's directly impacted my business growth."
    },
    {
      name: "David Park",
      title: "SaaS Founder",
      initials: "DP",
      text: "The ROI on personal branding is unmatched. Trendtial helped me position myself as an authority in the SaaS space, leading to speaking opportunities, partnerships, and significant business growth."
    },
    {
      name: "Lisa Thompson",
      title: "Management Consultant",
      initials: "LT",
      text: "Professional, strategic, and results-driven. They don't just create content - they build authentic personal brands that attract the right opportunities. Highly recommend their services."
    },
    {
      name: "James Wilson",
      title: "Real Estate Investor",
      initials: "JW",
      text: "From unknown to industry influencer in less than a year. Their approach to personal branding is sophisticated and effective. The quality of opportunities that come my way has completely changed."
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
        <div className="relative">
          {/* First Row - Moving Right to Left */}
          <motion.div
            animate={{ x: [0, -100 * testimonials.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex mb-8"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard 
                key={`first-${index}`} 
                testimonial={testimonial} 
                index={index % testimonials.length} 
              />
            ))}
          </motion.div>

          {/* Second Row - Moving Left to Right (slower) */}
          <motion.div
            animate={{ x: [-100 * testimonials.length, 0] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            className="flex"
          >
            {[...testimonials.slice(3), ...testimonials.slice(3)].map((testimonial, index) => (
              <TestimonialCard 
                key={`second-${index}`} 
                testimonial={testimonial} 
                index={index % 3} 
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