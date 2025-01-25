import React from 'react';
import { motion } from 'framer-motion';

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
    </motion.footer>
  );
};

export default Footer;