import React from 'react';
import './Skills.scss';

const Skills = () => {
  const skillsList = [
    { name: 'C++', level: 90 },
    { name: 'Unreal Engine 5', level: 85 },
    { name: 'Unity & C#', level: 80 },
    { name: 'DirectX 11 / OpenGL', level: 75 },
    { name: 'Math & Physics', level: 85 },
    { name: 'AI & NavMesh', level: 80 },
    { name: 'Memory Management', level: 85 },
    { name: 'ECS & Design Patterns', level: 90 },
  ];

  const additionalSkills = [
    'CI/CD & TDD',
    'Performance Analysis',
    'Audio Programming (FMOD)',
    '2D/3D Graphics',
    'Physics Simulation',
    'Resource Management',
    'Collision Detection',
    'Character Movement'
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Competenze Tecniche</h2>
        <p className="skills-description">
          Le mie competenze principali come Game Programmer, dal codice al gameplay.
        </p>
        
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

        <div className="additional-skills">
          <h3>Altre Competenze</h3>
          <div className="skills-tags">
            {additionalSkills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;