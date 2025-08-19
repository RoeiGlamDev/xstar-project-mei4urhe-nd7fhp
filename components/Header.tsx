import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-5">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="GlamCS Logo" className="h-10" />
          <h1 className="text-orange-500 text-2xl font-bold ml-3">GlamCS</h1>
        </motion.div>
        <nav className="hidden md:flex space-x-8">
          <motion.a
            href="#home"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.a
            href="#products"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Products
          </motion.a>
          <motion.a
            href="#about"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="#contact"
            className="text-gray-800 hover:text-orange-500 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <div className="md:hidden">
          <button className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;