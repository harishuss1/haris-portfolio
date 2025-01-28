import React from 'react';
import monogamelogo from '../assets/images/logos/monogame.png';

import './Skills.css';

const Skills = () => {
  const skills = {
    programmingLanguages: [
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/csharp.svg' },
      { name: 'SQL (Oracle)', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/oracle.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
      { name: 'HTML/CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
      { name: 'Shell Scripting (Bash)', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/gnubash.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/kotlin.svg' },
    ],
    frameworksTools: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/amazonaws.svg' },
      { name: 'Flask', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/flask.svg' },
      { name: 'Monogame', icon: monogamelogo },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg' },
      { name: 'Microsoft Office', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/microsoftoffice.svg' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/androidstudio.svg' },
      { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/githubactions.svg' },
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/dotnet.svg' },
    ],
    webDevelopment: [
      { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/threedotjs.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
      { name: 'GSAP', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/greensock.svg' },
      { name: 'Framer Motion', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/framer.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg' },
      { name: 'REST API', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/json.svg' },
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg' },
    ],
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-categories">
        {/* Programming Languages */}
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-grid">
            {skills.programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="skills-category">
          <h3>Frameworks & Tools</h3>
          <div className="skills-grid">
            {skills.frameworksTools.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Web Development */}
        <div className="skills-category">
          <h3>Web Development</h3>
          <div className="skills-grid">
            {skills.webDevelopment.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;