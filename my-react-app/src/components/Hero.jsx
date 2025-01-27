import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

// Helper function to split text into letters for animation
const splitText = (text) => {
  return text.split('').map((char, index) => (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      {char}
    </motion.span>
  ));
};

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            {splitText("Hi, I'm Haris Hussain")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Junior Developer
          </motion.p>
        </div>
        <div className="hero-image">
          <img src="src/assets/haris.png" alt="Haris Hussain" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;