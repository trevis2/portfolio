import React from 'react';
import './Skills.scss';

const Skills = () => {
  const skillsList = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'JavaScript (ES6+)', level: 95 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML5 & CSS3', level: 90 },
    { name: 'GraphQL', level: 75 },
    { name: 'MongoDB', level: 80 },
    { name: 'AWS', level: 70 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Competenze Tecniche</h2>
        <p className="skills-description">Una panoramica delle mie principali competenze tecniche e il relativo livello di esperienza.</p>
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-item">
              <div className="skill-info">
                <h3>{skill.name}</h3>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;