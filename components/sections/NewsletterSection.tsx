import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterProps {
  title: string;
  description: string;
}

const NewsletterSection: React.FC<NewsletterProps> = ({
  title = "Stay Glammed with GlamCS!",
  description = "Subscribe to our newsletter for exclusive updates on the latest trends in cosmetics and special offers.",
}) => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle email submission logic here
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <motion.h2
        className="text-3xl font-bold text-orange-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-gray-700 mt-2 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          className="flex-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
          required
        />
        <button
          type="submit"
          className="mt-4 md:mt-0 md:ml-4 p-3 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition duration-300 transform hover:scale-105"
        >
          Subscribe
        </button>
      </form>
      {isSubmitted && (
        <motion.p
          className="text-green-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for subscribing to GlamCS! Stay tuned for our latest updates.
        </motion.p>
      )}
    </div>
  );
};

export default NewsletterSection;