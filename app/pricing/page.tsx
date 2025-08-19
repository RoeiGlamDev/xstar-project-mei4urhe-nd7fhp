import React from 'react';
import { motion } from 'framer-motion';

interface PricingItem {
  title: string;
  price: string;
  description: string;
  features: string[];
}

const pricingData: PricingItem[] = [
  {
    title: 'Basic Glam',
    price: '$29',
    description: 'A simple yet effective glam look for everyday wear.',
    features: [
      'Foundation Application',
      'Luxe Lip Color',
      'Natural Eye Makeup',
    ],
  },
  {
    title: 'Glamorous Glow',
    price: '$49',
    description: 'Elevate your look with this stunning glam package.',
    features: [
      'Foundation & Contouring',
      'High-end Lipstick',
      'Full Eye Makeup with Lashes',
    ],
  },
  {
    title: 'Ultimate Glam Experience',
    price: '$99',
    description: 'The ultimate luxury glam experience for special occasions.',
    features: [
      'Complete Face Makeup',
      'Customized Lip & Eye Design',
      'Makeup Touch-up for 6 Hours',
    ],
  },
];

const FAQData = [
  {
    question: 'What types of cosmetics do you use?',
    answer: 'At GlamCS, we use only high-quality, cruelty-free cosmetics tailored to suit every skin type.',
  },
  {
    question: 'Do you offer makeup trials?',
    answer: 'Absolutely! We recommend scheduling a trial before your special event to ensure your desired look.',
  },
  {
    question: 'Can I book a group session?',
    answer: 'Yes, we offer group discounts for bridal parties and special events. Please contact us for more details.',
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        GlamCS Pricing Plans
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        {pricingData.map((item, index) => (
          <div key={index} className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-semibold">{item.title}</h2>
            <p className="text-xl font-bold">{item.price}</p>
            <p className="mb-4">{item.description}</p>
            <ul className="list-disc list-inside mb-4">
              {item.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-500 transition duration-200">
              Choose Plan
            </button>
          </div>
        ))}
      </motion.div>
      <div className="mt-12">
        <motion.h2 
          className="text-3xl font-bold text-center text-orange-600 mb-6"
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="bg-orange-50 p-6 rounded-lg shadow-lg">
          {FAQData.map((faq, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-semibold text-lg">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;