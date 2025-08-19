import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  name: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Glam Starter',
    price: '$29/month',
    features: [
      'Basic Makeup Consultation',
      'Access to GlamCS Online Tutorials',
      '10% Discount on Products',
      'Exclusive GlamCS Newsletter',
    ],
  },
  {
    name: 'Glam Pro',
    price: '$59/month',
    features: [
      'Personalized Makeup Consultation',
      'Advanced Tutorials & Workshops',
      '15% Discount on Products',
      'Early Access to New Releases',
    ],
  },
  {
    name: 'Glam Elite',
    price: '$99/month',
    features: [
      'One-on-One Glam Session',
      'VIP Access to Workshops',
      '20% Discount on All Products',
      'Custom GlamCS Beauty Box',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-orange-600 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Pricing Plans at GlamCS
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Choose the plan that best suits your beauty needs and elevate your glam game!
        </motion.p>
        <div className="flex justify-center space-x-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 rounded-lg shadow-lg p-6 w-72"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-2xl font-semibold text-orange-600 mb-4">
                {tier.name}
              </h3>
              <p className="text-xl font-bold text-orange-600 mb-4">
                {tier.price}
              </p>
              <ul className="list-disc list-inside mb-6 text-left text-gray-700">
                {tier.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-300 focus:outline-none">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;