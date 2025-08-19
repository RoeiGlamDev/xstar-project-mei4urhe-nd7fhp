import React from 'react';
import { motion } from 'framer-motion';

interface SlideUpProps {
  children: React.ReactNode;
  delay?: number;
}

const SlideUp: React.FC<SlideUpProps> = ({ children, delay = 0 }) => {
  const slideUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay },
    },
  };

  return (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg transform transition-all hover:scale-105"
      variants={slideUpAnimation}
      initial="initial"
      animate="animate"
      role="region"
      aria-labelledby="slide-up-heading"
    >
      <h2
        id="slide-up-heading"
        className="text-2xl font-bold text-orange-600 mb-4"
      >
        Welcome to GlamCS
      </h2>
      <p className="text-gray-700">
        Experience the luxury of high-end cosmetics with GlamCS. Our products are designed to enhance your beauty and elevate your confidence, all while using the finest ingredients tailored for your skin.
      </p>
      <p className="text-gray-700 mt-2">
        Explore our exclusive range and indulge in the glam that you deserve.
      </p>
    </motion.div>
  );
};

export default SlideUp;