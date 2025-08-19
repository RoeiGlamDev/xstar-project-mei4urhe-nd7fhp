import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  companyName: string;
  links: { label: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ 
  companyName = "GlamCS", 
  links = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },
    { label: "About Us", url: "/about" },
    { label: "Contact", url: "/contact" },
    { label: "Privacy Policy", url: "/privacy" }
  ], 
  socialMedia = [
    { platform: "Facebook", url: "https://facebook.com/GlamCS" },
    { platform: "Instagram", url: "https://instagram.com/GlamCS" },
    { platform: "Twitter", url: "https://twitter.com/GlamCS" }
  ] 
}) => {
  return (
    <footer className="bg-white text-orange-600 py-10 px-5">
      <div className="container mx-auto text-center">
        <motion.h2 
          className="text-3xl font-bold mb-5" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          {companyName}
        </motion.h2>
        <nav className="mb-5">
          {links.map((link, index) => (
            <motion.a 
              key={index} 
              href={link.url} 
              className="text-lg hover:text-orange-500 transition duration-300 mx-2"
              initial={{ y: -10 }} 
              animate={{ y: 0 }} 
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        <div className="mb-5">
          <p className="text-md">Elevate your beauty with GlamCS - luxury cosmetics for the modern woman.</p>
        </div>
        <div className="flex justify-center space-x-5">
          {socialMedia.map((media, index) => (
            <motion.a 
              key={index} 
              href={media.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-600 hover:text-orange-500 transition duration-300"
              initial={{ scale: 1 }} 
              whileHover={{ scale: 1.1 }}
            >
              {media.platform}
            </motion.a>
          ))}
        </div>
        <div className="mt-5 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;