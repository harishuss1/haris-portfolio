import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <motion.section
      className="projects"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>Projects</h2>
      <div className="project-grid">
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Project 1</h3>
          <p>Description of Project 1</p>
        </motion.div>
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Project 2</h3>
          <p>Description of Project 2</p>
        </motion.div>
        <motion.div
          className="project-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3>Project 3</h3>
          <p>Description of Project 3</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;