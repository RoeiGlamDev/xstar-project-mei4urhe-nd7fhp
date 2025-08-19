import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Anderson',
    role: 'Founder & CEO',
    image: '/images/team/sophia.jpg',
  },
  {
    name: 'Liam Johnson',
    role: 'Head of Product Development',
    image: '/images/team/liam.jpg',
  },
  {
    name: 'Olivia Smith',
    role: 'Marketing Director',
    image: '/images/team/olivia.jpg',
  },
];

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-orange-600 p-8">
      <motion.header 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold">About GlamCS</h1>
        <p className="mt-4 text-lg">Where luxury meets beauty.</p>
      </motion.header>

      <section className="mb-12">
        <motion.h2 
          initial={{ y: -20 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-3xl font-semibold mb-4"
        >
          Our History
        </motion.h2>
        <p className="text-lg">
          GlamCS was established in 2023 with a vision to redefine the cosmetics industry. 
          Our founder, Sophia Anderson, believed in creating high-quality, luxurious products 
          that empower individuals to express their unique beauty. With a commitment to innovation 
          and sustainability, GlamCS has quickly become a sought-after brand in the beauty market.
        </p>
      </section>

      <section className="mb-12">
        <motion.h2 
          initial={{ y: -20 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-3xl font-semibold mb-4"
        >
          Our Values
        </motion.h2>
        <ul className="list-disc list-inside text-lg">
          <li>Quality: We prioritize high-quality ingredients and formulations.</li>
          <li>Innovation: We constantly seek new ways to enhance beauty.</li>
          <li>Diversity: We celebrate beauty in all its forms and shades.</li>
          <li>Sustainability: We are committed to eco-friendly practices.</li>
        </ul>
      </section>

      <section>
        <motion.h2 
          initial={{ y: -20 }} 
          animate={{ y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="text-3xl font-semibold mb-4"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index} 
              className="bg-orange-100 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img src={member.image} alt={member.name} className="rounded-full w-32 h-32 mx-auto mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-lg text-gray-700">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;