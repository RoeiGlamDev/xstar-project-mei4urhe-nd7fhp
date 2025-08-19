import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: 'Luxury Formulations',
    description: 'Indulge in our expertly crafted cosmetics that enhance your natural beauty with high-quality ingredients.',
    icon: <i className="fas fa-gem text-orange-500"></i>,
  },
  {
    title: 'Custom Shades',
    description: 'Discover your perfect match with our range of customizable shades designed for every skin tone.',
    icon: <i className="fas fa-paint-brush text-orange-500"></i>,
  },
  {
    title: 'Sustainable Practices',
    description: 'GlamCS is committed to eco-friendly practices, ensuring our products are as kind to the planet as they are to your skin.',
    icon: <i className="fas fa-leaf text-orange-500"></i>,
  },
  {
    title: 'Expert Guidance',
    description: 'Our beauty advisors are here to help you choose the right products for your unique style and needs.',
    icon: <i className="fas fa-user-tie text-orange-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-600 mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover the GlamCS Difference
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-orange-600">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;