import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    frameworksTools: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/express.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/mongodb.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg' },
      { name: 'AWS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/amazonaws.svg' },
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/docker.svg' },
    ],
    programmingLanguages: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/java.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/cplusplus.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/typescript.svg' },
    ],
    webDevelopment: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg' },
      { name: 'SASS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/sass.svg' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/bootstrap.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/tailwindcss.svg' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/redux.svg' },
    ],
  };

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-categories">
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