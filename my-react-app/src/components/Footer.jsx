import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <p>
        <strong>Haris Hussain</strong> | hussainharis170@gmail.com
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/harishuss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/harishuss1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
      <p>
        Copyright &copy; {new Date().getFullYear()} Haris Hussain. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/harishuss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/harishuss1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:hussainharis170@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;