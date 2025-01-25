import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="navbar-logo"
        >
          Your Name
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="navbar-link"
            >
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="navbar-link"
            >
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="navbar-link"
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;