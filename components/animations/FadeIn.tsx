import React, { useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useIntersection } from 'react-intersection-observer';

interface FadeInProps {
  children: React.ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { ref: observerRef, inView } = useIntersection({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ref.current?.classList.add('fade-in');
    }
  }, [inView]);

  return (
    <motion.div
      ref={observerRef}
      initial={{ opacity: 0, translateY: 20 }}
      animate={inView ? { opacity: 1, translateY: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="transition-opacity duration-500 ease-in-out"
      style={{ backgroundColor: 'white', color: 'orange' }}
    >
      <div ref={ref} className="p-6 rounded-lg shadow-lg">
        {children}
      </div>
    </motion.div>
  );
};

export default FadeIn;