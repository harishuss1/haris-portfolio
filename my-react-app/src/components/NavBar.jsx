// import React from 'react';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#home">My Portfolio</a>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item">
          <a href="#about">About</a>
        </li>
        <li className="navbar-item">
          <a href="#projects">Projects</a>
        </li>
        <li className="navbar-item">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
