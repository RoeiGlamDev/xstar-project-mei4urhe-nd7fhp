import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white text-orange-600 min-h-screen flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact GlamCS
      </motion.h1>
      <motion.p
        className="text-lg text-center mt-4 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        We would love to hear from you! Fill out the form below or visit us at our location.
      </motion.p>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-orange-100 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-orange-600 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-orange-600 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-orange-600 text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows={4}
            placeholder="Your Message"
            required
          />
        </div>
        <motion.button
          type="submit"
          className="bg-orange-600 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>
      <div className="mt-10 text-center">
        <motion.h2
          className="text-2xl font-bold text-orange-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Visit Us
        </motion.h2>
        <p className="text-lg">GlamCS Boutique</p>
        <p>123 Glam Street</p>
        <p>Beauty City, BC 12345</p>
        <p className="mt-2">Business Hours: Mon-Fri 9 AM - 6 PM</p>
      </div>
    </div>
  );
};

export default Contact;