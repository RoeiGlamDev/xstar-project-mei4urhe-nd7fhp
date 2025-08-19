import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '', reason: '' });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Partial<ContactFormData> = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (!formData.reason) newErrors.reason = 'Reason for contact is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <section className="bg-white py-10 px-5">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-orange-500 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact GlamCS
        </motion.h2>
        <p className="text-gray-600 mb-4">
          Have questions about our luxurious cosmetics? Reach out to us!
        </p>
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={border border-gray-300 rounded-lg p-2 w-full ${errors.name ? 'border-red-500' : 'focus:border-orange-500'}}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={border border-gray-300 rounded-lg p-2 w-full ${errors.email ? 'border-red-500' : 'focus:border-orange-500'}}
              placeholder="Your Email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="reason">Reason for Contact</label>
            <select
              name="reason"
              id="reason"
              value={formData.reason}
              onChange={handleChange}
              className={border border-gray-300 rounded-lg p-2 w-full ${errors.reason ? 'border-red-500' : 'focus:border-orange-500'}}
            >
              <option value="">Select a reason</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Feedback">Feedback</option>
              <option value="Partnership">Partnership</option>
            </select>
            {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={border border-gray-300 rounded-lg p-2 w-full ${errors.message ? 'border-red-500' : 'focus:border-orange-500'}}
              rows={4}
              placeholder="Your Message"
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-orange-500">GlamCS Business Information</h3>
          <p className="text-gray-600">Location: 123 Glam Street, Beauty City, BC 12345</p>
          <p className="text-gray-600">Business Hours: Mon-Fri 9am - 6pm</p>
          <p className="text-gray-600">Email: support@glamcs.com</p>
          <p className="text-gray-600">Phone: (123) 456-7890</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;