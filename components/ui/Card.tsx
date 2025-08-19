import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg glassmorphism transition-transform duration-300 ease-in-out transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-5 bg-white bg-opacity-30 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-orange-500">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default Card;