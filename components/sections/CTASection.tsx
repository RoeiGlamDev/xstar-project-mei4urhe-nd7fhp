import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Elevate Your Beauty with GlamCS", 
  subtitle = "Indulge in our luxurious cosmetics that define elegance and sophistication.", 
  buttonText = "Shop Now", 
  buttonLink = "/shop" 
}) => {
  return (
    <section className="bg-white py-12 px-6 lg:px-20">
      <motion.div 
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-orange-500 mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
        <motion.a 
          href={buttonLink} 
          className="inline-block bg-orange-500 text-white font-semibold py-3 px-6 rounded shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTASection;