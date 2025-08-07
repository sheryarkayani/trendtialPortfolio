import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaRobot, FaUsers, FaDollarSign } from "react-icons/fa";
import { MdOutlineContentPaste } from "react-icons/md";

const FeatureCard = ({ title, description, icon }) => (
  <div className="p-6 rounded-xl bg-[#1a1d2352] border border-white/10">
    <motion.div
      whileHover={{ scale: 1.06 }} 
      transition={{ duration: 0.3 }} 
      className="rounded-lg w-max p-2 mb-6 border bg-gray-100 flex justify-center items-center"
    >
      {icon}
    </motion.div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      title: "Personal Brand Content Creation",
      description: "Transform your expertise into viral content with our done-for-you monthly social media marketing that turns founders into thought leaders.",
      icon: <MdOutlineContentPaste size={20} color="black" />,
    },
    {
      title: "LinkedIn Personal Branding",
      description: "Build authority and generate leads with our proven LinkedIn strategy that has generated 100+ million views for 200+ clients.",
      icon: <FaLinkedin size={20} color="black" />,
    },
    {
      title: "Instagram Growth & Monetization",
      description: "Convert your Instagram into a lead-generating machine with strategic content that attracts your ideal audience and drives sales.",
      icon: <FaInstagram size={20} color="black" />,
    },
    {
      title: "AI-Powered Lead Generation",
      description: "Automate your sales process with AI chatbots, email sequences, and smart follow-ups that convert prospects into paying clients 24/7.",
      icon: <FaRobot size={20} color="black" />,
    },
    {
      title: "Content Monetization Strategy",
      description: "Turn your expertise into profitable digital products, courses, and communities with our complete product development and launch strategy.",
      icon: <FaDollarSign size={20} color="black" />,
    },
    {
      title: "Multi-Platform Outreach",
      description: "Expand your network through targeted LinkedIn outreach for B2B, Instagram PR campaigns, and creator partnerships for UGC content.",
      icon: <FaUsers size={20} color="black" />,
    },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            We provide
            <br />
            <span className="text-gray-400">the best</span>
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;