import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="about"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>
      <p>
        I'm a passionate developer with experience in building web applications
        using modern technologies like React, Node.js, and more. I love solving
        problems and creating beautiful, user-friendly interfaces.
      </p>
    </motion.section>
  );
};

export default About;