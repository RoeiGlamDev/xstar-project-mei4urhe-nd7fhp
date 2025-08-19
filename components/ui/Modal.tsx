import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-white opacity-50 backdrop-blur-md" onClick={onClose} />
      <motion.div
        className="bg-white rounded-lg shadow-lg max-w-lg mx-auto p-6 transform transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
      >
        <h2 className="text-2xl font-bold text-orange-600 mb-4">{title}</h2>
        <p className="text-gray-700 mb-6">{content}</p>
        <button
          className="bg-orange-600 text-white rounded-lg px-4 py-2 hover:bg-orange-500 transition duration-300"
          onClick={onClose}
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;