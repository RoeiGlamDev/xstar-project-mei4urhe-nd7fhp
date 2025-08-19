import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-orange-500 to-white text-white">
      <motion.h1
        className="text-5xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h1>
      <motion.p
        className="text-xl mb-8 text-center max-w-xl"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
      <div className="flex space-x-4">
        <motion.button
          className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Shop Now
        </motion.button>
        <motion.button
          className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Learn More
        </motion.button>
      </div>
      <div className="mt-10 flex space-x-2">
        <span className="text-sm text-white">Trusted by:</span>
        <img src="/trust-badge.png" alt="Trust Badge" className="h-6" />
      </div>
    </section>
  );
};

export default HeroSection;