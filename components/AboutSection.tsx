import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Lee',
    role: 'Chief Makeup Artist',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Chen',
    role: 'Product Development Lead',
    image: '/images/liam.jpg',
  },
  {
    name: 'Emma Robinson',
    role: 'Marketing Strategist',
    image: '/images/emma.jpg',
  },
];

const AboutSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About GlamCS
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At GlamCS, we believe in the power of beauty and self-expression. Founded in 2023, GlamCS emerged from a passion for creating high-quality cosmetics that empower individuals to express their unique style. Our innovative products are designed with luxury and elegance in mind, ensuring that every makeup experience feels like a glamorous affair.
        </motion.p>
        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our mission at GlamCS is to provide exceptional cosmetics that enhance beauty while promoting confidence and self-care. We strive to use sustainable ingredients and practices, ensuring that our products are not only luxurious but also environmentally friendly.
        </motion.p>

        <h3 className="text-2xl font-bold text-orange-600 mt-12 mb-4">Meet Our Team</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-orange-100 rounded-lg p-4 shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-orange-600">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-lg text-gray-700 mt-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          At GlamCS, we value creativity, inclusivity, and innovation. Our achievements reflect our commitment to quality and customer satisfaction, making us a trusted name in the cosmetics industry.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;