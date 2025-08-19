import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-24">
                <motion.h1 
                    className="text-5xl font-bold text-center text-orange-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Welcome to GlamCS
                </motion.h1>
                <motion.p 
                    className="mt-4 text-xl text-center text-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Elevate your beauty routine with our luxurious cosmetics.
                </motion.p>
            </div>
        </section>
    );
};

const FeaturesSection: React.FC = () => {
    return (
        <section className="bg-orange-500 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center text-white mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Why Choose GlamCS?
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-500">Premium Quality</h3>
                        <p className="mt-2 text-gray-600">Our products are made with the finest ingredients for a luxurious feel.</p>
                    </motion.div>
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-500">Cruelty-Free</h3>
                        <p className="mt-2 text-gray-600">We believe in beauty without harm. All our products are cruelty-free.</p>
                    </motion.div>
                    <motion.div 
                        className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-2xl font-semibold text-orange-500">Sustainable Packaging</h3>
                        <p className="mt-2 text-gray-600">We prioritize eco-friendly materials in all our packaging.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

const LuxuryDesignSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center text-orange-500 mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Experience Luxury with GlamCS
                </motion.h2>
                <motion.p 
                    className="text-center text-lg text-gray-700 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Indulge in our exquisite range of cosmetics that enhance your natural beauty with luxurious textures and finishes.
                </motion.p>
                <div className="flex justify-center">
                    <motion.img 
                        src="/images/luxury-collection.jpg" 
                        alt="GlamCS Luxury Collection" 
                        className="rounded-lg shadow-lg w-full max-w-xl"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                </div>
            </div>
        </section>
    );
};

const GlamCSHomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <FeaturesSection />
            <LuxuryDesignSection />
        </div>
    );
};

export default GlamCSHomePage;