import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const FeatureCard = ({ title, description, icon, stats }) => (
  <div className="p-6 rounded-xl bg-[#1a1d2352] border border-white/10">
    <motion.div
      whileHover={{ scale: 1.06 }} 
      transition={{ duration: 0.3 }} 
      className="rounded-lg w-max p-2 mb-6 border bg-gray-100 flex justify-center items-center"
    >
      {icon}
    </motion.div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm mb-4">{description}</p>
    {stats && (
      <div className="text-red-500 text-sm font-medium">
        {stats}
      </div>
    )}
  </div>
);

const Features = () => {
  const features = [
    {
      title: "LinkedIn Personal Branding",
      description: "We specialize in transforming your expertise into a powerful personal brand that attracts the right opportunities. We craft content that not only boosts your visibility but also positions you as an authority in your field, ensuring your profile stands out to the right people. Let us help you build a brand that opens doors and drives results.",
      icon: <FaLinkedin size={20} color="black" />,
      stats: "80+ clients, 10 million views generated"
    },
    {
      title: "Instagram Personal Branding",
      description: "As a business owner, growing your Instagram isn't just about posting – it's about building a personal brand that attracts your ideal audience and converts them into loyal clients. We understand the pain points of slow follower growth and low engagement. We craft a personal branding strategy that turns your Instagram into a powerful, lead-generating machine.",
      icon: <FaInstagram size={20} color="black" />,
      stats: "Ready to invest 2 hours per month? We can sort this for you!"
    },
  ];

  return (
    <section id="features" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            What All Do We Offer
          </h2>
          <div className="flex justify-center gap-2 mt-3">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;