import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

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
          <motion.h1 whileHover={{ scale: 1.1 }}>Hi, I'm Haris Hussain</motion.h1>
          <p>Junior Developper</p>

        </div>
        <div className="hero-image">
          <img src="src/assets/haris.png" alt="Your Name" />
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;