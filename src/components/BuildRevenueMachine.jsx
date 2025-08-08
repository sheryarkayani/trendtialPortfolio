import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ service, isSelected, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={`p-6 rounded-xl border cursor-pointer transition-all duration-300 ${
      isSelected 
        ? 'bg-red-500/20 border-red-500' 
        : 'bg-[#1a1d2352] border-white/10 hover:border-red-500/30'
    }`}
    onClick={onClick}
  >
    <div className="text-3xl mb-4">{service.icon}</div>
    <h3 className="text-lg font-semibold mb-2 text-white">{service.title}</h3>
    <p className="text-gray-400 text-sm">{service.shortDescription}</p>
    {isSelected && (
      <div className="mt-4 text-red-500 text-sm font-medium">
        Click to view details →
      </div>
    )}
  </motion.div>
);

const ServiceDetail = ({ service }) => (
  <div className="bg-[#1a1d2352] border border-white/10 rounded-xl p-8 h-fit sticky top-8">
    <div className="flex items-center mb-6">
      <div className="text-4xl mr-4">{service.icon}</div>
      <h3 className="text-2xl font-bold text-white">{service.title}</h3>
    </div>
    <div className="text-gray-300 leading-relaxed space-y-4">
      {service.detailedDescription.split('\n\n').map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
    {service.bulletPoints && (
      <div className="mt-6">
        <ul className="space-y-2">
          {service.bulletPoints.map((point, index) => (
            <li key={index} className="text-gray-300 flex items-start">
              <span className="text-red-500 mr-2">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

const BuildRevenueMachine = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: "Lead-Generating Instagram Stories",
      shortDescription: "Instagram Stories that drive action and conversions",
      icon: "📱",
      detailedDescription: "Instagram Stories are a powerful tool to engage your audience and drive conversions. We craft high-impact Stories with clear calls to action (CTAs), encouraging your audience to take the next step—whether it's joining your email list, downloading your lead magnet, signing up for your course or free trial, or making a purchase.\n\nWe also leverage interactive features like polls, quizzes, and swipe-up links to boost engagement and keep your brand top-of-mind, ensuring your message reaches the right people at the right time."
    },
    {
      title: "Strategic LinkedIn Comments",
      shortDescription: "Boost your LinkedIn visibility with strategic commenting",
      icon: "💬",
      detailedDescription: "Commenting on other people's posts is a powerful way to get noticed and increase your visibility. We help you craft valuable, insightful comments that add meaningful contributions to conversations, sparking engagement and positioning you as a thought leader in your field.\n\nBy consistently posting thoughtful responses on relevant content, you'll attract attention from your target audience, expand your network, and elevate your personal brand—without being overly promotional."
    },
    {
      title: "Email Marketing Setup",
      shortDescription: "Nurture your leads with automated email sequences",
      icon: "📧",
      detailedDescription: "Email marketing is key to building strong relationships with your leads and driving conversions. We set up automated email sequences that nurture your leads, keeping them engaged with personalized content at every stage of their journey.\n\nFrom welcome emails to post-purchase follow-ups, with segmentation, personalization, and strategically timed follow-ups, we build relationships that lead to conversions, ensuring no lead is left behind."
    },
    {
      title: "Lead Magnets Creation",
      shortDescription: "Write and design irresistible lead magnets",
      icon: "🧲",
      detailedDescription: "Lead magnets are the gateway to building your email list and nurturing your audience. We don't just create any lead magnet—we write and design high-value irresistible offers that speak directly to your audience's pain points.\n\nFrom eBooks and checklists to webinars and templates, we create lead magnets that solve problems and drive immediate action."
    },
    {
      title: "AI Automations",
      shortDescription: "Streamline communication with AI-driven automation",
      icon: "🤖",
      detailedDescription: "AI-driven automation is revolutionizing how businesses communicate with their audience, offering powerful tools that streamline interactions and boost efficiency. We can integrate AI tools that can instantly handle customer queries, qualify leads, and even book appointments or make sales in real-time, providing a seamless experience without manual effort.",
      bulletPoints: [
        "Lead Qualification: Automatically qualify leads by asking targeted questions",
        "Customer Support Automation: Provide 24/7 support by answering common questions",
        "Appointment Scheduling: AI tools can handle appointment bookings",
        "Automated Social Media Replies: Respond instantly to comments and DMs",
        "Sales and Follow-Up Sequences: Automate follow-up emails based on lead behavior",
        "Personalized Content Delivery: Send personalized content based on user behavior"
      ]
    },
    {
      title: "Outbound Marketing",
      shortDescription: "Targeted outreach strategies that deliver results",
      icon: "🎯",
      detailedDescription: "Outbound marketing and sales is essential for expanding your network and driving business growth. We specialize in creating targeted, high-converting outreach strategies across multiple platforms to ensure your brand connects with the right people.",
      bulletPoints: [
        "LinkedIn Lead generation & Outreach for Tech & B2B SaaS Founders",
        "Instagram Outreach for PR Campaigns and brand collaborations",
        "Creator Outreach for UGC Videos and authentic content",
        "10 messages every day, 300 per month - sustainable lead pipeline",
        "No automations used on your main account for safety"
      ]
    },
    {
      title: "Inbound Sales Optimization",
      shortDescription: "Maximize inbound sales with proven strategies",
      icon: "📈",
      detailedDescription: "Turn inbound leads into sales with automated follow-ups, personalized sales frameworks, and dedicated setters. We optimize every part of your inbound process, from lead qualification to closing strategies, ensuring your leads convert into long-term clients.",
      bulletPoints: [
        "Dedicated Sales Setters: Handle qualifying and setting appointments",
        "Personalized Sales Frameworks: Customized scripts and engagement strategies",
        "Automated Follow-Ups: AI-driven automation ensures no lead falls through",
        "Lead qualification and nurturing at every stage",
        "Focus on converting leads into long-term clients"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Build Revenue Machine</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to transform your business into a revenue-generating machine
          </p>
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                isSelected={selectedService === index}
                onClick={() => setSelectedService(index)}
              />
            ))}
          </div>
          
          {/* Service Details */}
          <div>
            <ServiceDetail service={services[selectedService]} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildRevenueMachine; 