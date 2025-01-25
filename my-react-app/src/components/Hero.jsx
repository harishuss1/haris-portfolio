import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Haris Hussain</h1>
          <p>Junior Developper</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View My Work
          </motion.button>
        </div>
        <div className="hero-image">
          <img src="src/assets/haris.png" alt="Your Name" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;