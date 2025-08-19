import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia L.',
    review: 'GlamCS has completely transformed my makeup routine! The quality of their products is unmatched, and I love how they make my skin feel luxurious.',
    rating: 5,
    photo: '/images/testimonial1.jpg',
  },
  {
    name: 'Isabella R.',
    review: 'The customer service at GlamCS is phenomenal! They helped me choose the perfect shade for my skin tone, and I couldn’t be happier with the results.',
    rating: 5,
    photo: '/images/testimonial2.jpg',
  },
  {
    name: 'Emma W.',
    review: 'I adore the packaging of GlamCS products! They are not only beautiful but also eco-friendly, which is a huge plus for me.',
    rating: 4,
    photo: '/images/testimonial3.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-orange-500 mb-6">What Our Customers Say</h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 rounded-lg shadow-lg p-6 m-4 max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img src={testimonial.photo} alt={${testimonial.name}'s photo} className="w-16 h-16 rounded-full mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-600 mb-4">{testimonial.review}</p>
              <div className="flex justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.12-6.53L0 6.18l6.91-1.02L10 0l2.09 5.16L20 6.18l-5.242 5.38 1.121 6.53z" />
                  </svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;