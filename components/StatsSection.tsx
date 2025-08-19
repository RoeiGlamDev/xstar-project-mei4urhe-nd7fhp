import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  title: string;
  count: number;
  description: string;
}

const statsData: StatsProps[] = [
  { title: 'Products Launched', count: 120, description: 'Innovative cosmetic products that redefine beauty.' },
  { title: 'Happy Customers', count: 50000, description: 'Our customers love us and their feedback drives our passion.' },
  { title: 'Awards Won', count: 15, description: 'Recognized in the industry for excellence and innovation.' },
  { title: 'Years in Business', count: 5, description: 'Dedicated to providing the best cosmetic solutions since 2018.' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-8">GlamCS Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-orange-500 text-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl font-bold mb-2">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, transition: { duration: 0.5 } }}
                  className="inline-block"
                >
                  {stat.count}
                </motion.span>
              </h3>
              <p className="text-lg">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;