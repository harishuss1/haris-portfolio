import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/html5.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/css3.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/javascript.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/react.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/nodedotjs.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/python.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/git.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/visualstudiocode.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/figma.svg' },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <img src={skill.icon} alt={skill.name} className="skill-icon" />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;