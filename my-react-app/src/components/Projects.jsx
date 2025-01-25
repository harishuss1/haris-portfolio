import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaGitlab, FaGithub } from 'react-icons/fa'; // Import icons
import { SiMongodb, SiExpress, SiRender } from 'react-icons/si'; // Import icons
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Climate CO2 Fluctuation',
      description: [
        'Developed a MERN application to visualize the relationship between CO2 emissions and global temperature changes.',
        'Integrated datasets into MongoDB Atlas, enabling efficient querying and analysis.',
        'Created interactive visualizations with React-Plotly, including line charts, pie charts, and a map.',
        'Implemented REST APIs for filtering and retrieving data by country and year.',
        'Enabled advanced features such as dual-country comparison and dynamic map tooltips.',
        'Optimized web performance using server-side caching and compression middleware.',
        'Collaborated via GitLab Issues and Merge Requests, ensuring high-quality code and peer reviews.',
        'Prepared a performance report highlighting client- and server-side optimizations.',
      ],
      technologies: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'Express', icon: <SiExpress /> },
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNodeJs /> },
        { name: 'AWS', icon: <FaAws /> },
        { name: 'Render', icon: <SiRender /> },
        { name: 'GitLab', icon: <FaGitlab /> },
      ],
      image: 'https://via.placeholder.com/400x300', // Replace with your project image/video
      githubLink: 'https://github.com/your-username/your-repo', // Add your GitHub link
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
                    {tech.icon}
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