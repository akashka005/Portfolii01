import React from 'react';
import { motion } from 'motion/react';

interface TextSlamProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const TextSlam: React.FC<TextSlamProps> = ({ children, className = "", delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.5, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`inline-block origin-bottom ${className}`}
    >
      {children}
    </motion.div>
  );
};
