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
        <a href="#contact">Contactez-moi</a>
      </p>
      <p>
        Conçu et développé par <strong>AB Beniamouch</strong>.
      </p>
      <p>
        Copyright &copy; {new Date().getFullYear()} AB Beniamouch. Tous droits réservés.
      </p>

      {/* Social Icons */}
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:your-email@example.com"
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