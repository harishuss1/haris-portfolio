import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Hi, I'm John Doe</h1>
      <p>Full Stack Developer | Designer | Tech Enthusiast</p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.button>
    </motion.section>
  );
};

export default Hero;