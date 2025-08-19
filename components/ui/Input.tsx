import React from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-orange-600 font-semibold mb-2">
        {label}
      </label>
      <motion.input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={border-2 border-orange-300 rounded-lg p-3 w-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 ${
          error ? 'border-red-500' : ''
        }}
        whileHover={{ scale: 1.02 }}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;