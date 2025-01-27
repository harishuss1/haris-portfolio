import React from 'react';
import { FaGithub } from 'react-icons/fa';
import projectPlaceholder from '../assets/images/projects/project-placeholder.png'; // Import the local image
import Paintdropsimage from '../assets/images/projects/paintdrops-simulation.png';
import ClimateC02 from '../assets/images/projects/climate-co2-fluctuation.png';
import CarShowroom from '../assets/images/projects/car-showroom.png';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Interactive PaintDrops Simulation',
      description: [
        '2D paint simulation game with real-time marbling effects and pattern generation.',
        'Optimized performance using parallel loops and CI/CD pipelines.',
        'High test coverage with unit tests for core components.',
      ],
      technologies: [
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/csharp.svg' },
        { name: 'MonoGame', icon: 'src/assets/images/logos/monogame.png' },
        { name: 'Unit Testing', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/jest.svg' },
        { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/githubactions.svg' },
      ],
      image: Paintdropsimage, // Replace with your project image URL
      githubLink: 'https://github.com/your-username/paintdrops-simulation', // Add your GitHub link
    },
    {
      title: 'Climate CO2 Fluctuation',
      description: [
        'MERN stack app to visualize CO2 emissions and global temperature changes.',
        'Interactive visualizations with React-Plotly and REST APIs for data filtering.',
        'Optimized performance with server-side caching and compression.',
      ],
      technologies: [
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg' },
        { name: 'Express', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg' },
        { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/amazonaws.svg' },
        { name: 'Render', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/render.svg' },
      ],
      image: ClimateC02, // Replace with your project image URL
      githubLink: 'https://github.com/your-username/climate-co2-fluctuation', // Add your GitHub link
    },
    {
      title: 'Car Showroom',
      description: [
        'Three.js application showcasing interactive 3D car models.',
        'Features smooth page transitions using GSAP and scroll-triggered animations.',
        'Responsive design with a floating car model that reacts to scroll events.',
      ],
      technologies: [
        { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/threedotjs.svg' },
        { name: 'GSAP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/greensock.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg' },
      ],
      image: CarShowroom,
      githubLink: 'https://github.com/your-username/car-showroom',
    },
    {
      title: 'Medical Appointment Booking System',
      description: [
        'Flask-based web app for managing doctor appointments.',
        'Robust SQL database and REST APIs for seamless communication.',
        'Automated testing and CI for rapid updates.',
      ],
      technologies: [
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg' },
        { name: 'Flask', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/flask.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg' },
        { name: 'REST APIs', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/json.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg' },
      ],
      image: projectPlaceholder, // Replace with your project image URL
      githubLink: 'https://github.com/your-username/medical-appointment-booking', // Add your GitHub link
    },
    {
      title: 'Recipe Sharing Platform',
      description: [
        'C# app for managing recipes with Entity Framework and MVC pattern.',
        'Secure user authentication and profile management.',
        'Comprehensive unit testing and Git collaboration.',
      ],
      technologies: [
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/csharp.svg' },
        { name: 'Avalonia', icon: 'src/assets/images/logos/avalonia.png' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mysql.svg' },
        { name: 'Entity Framework', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/dotnet.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg' },
      ],
      image: projectPlaceholder, // Replace with your project image URL
      githubLink: 'https://github.com/your-username/recipe-sharing-platform', // Add your GitHub link
    },
    {
      title: 'Mega Store Database',
      description: [
        'Java app integrated with Oracle SQL for managing store data.',
        'PL/SQL for database setup and updates.',
        'Modular design for maintainability and scalability.',
      ],
      technologies: [
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg' },
        { name: 'SQL Oracle', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/oracle.svg' },
        { name: 'PL/SQL', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/oracle.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg' },
      ],
      image: projectPlaceholder, // Replace with your project image URL
      githubLink: 'https://github.com/your-username/mega-store-database', // Add your GitHub link
    },
   
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-media">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <ul>
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="tech-icon">
                    <img src={tech.icon} alt={tech.name} className="skill-icon" />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
              >
                <FaGithub />
                <span>View on GitHub</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;