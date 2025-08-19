import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const buttonVariants = {
  primary: 'bg-orange-500 text-white hover:bg-orange-600',
  secondary: 'bg-white text-orange-500 border border-orange-500 hover:bg-orange-500 hover:text-white',
};

const buttonAnimation = {
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  return (
    <motion.button
      className={font-bold py-2 px-4 rounded transition-all duration-300 ${buttonVariants[variant]}}
      onClick={onClick}
      whileHover="hover"
      whileTap="tap"
      variants={buttonAnimation}
      aria-label={GlamCS ${variant} button}
    >
      {children}
    </motion.button>
  );
};

export default Button;