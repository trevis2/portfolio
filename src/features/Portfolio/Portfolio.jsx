import React from 'react';
import './Portfolio.scss';
import { sections } from '../../constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Portfolio = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "Piattaforma di e-commerce full-stack con pannello di amministrazione, gestione inventario e integrazione pagamenti.",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            github: "https://github.com/yourusername/ecommerce-platform",
            live: "https://your-ecommerce-platform.com"
        },
        {
            title: "Task Management App",
            description: "Applicazione di gestione attività con funzionalità di collaborazione in tempo reale e notifiche push.",
            technologies: ["React", "Firebase", "Material-UI"],
            github: "https://github.com/yourusername/task-management-app",
            live: "https://your-task-app.com"
        },
        {
            title: "Portfolio Personale",
            description: "Sito web portfolio responsive con animazioni fluide e ottimizzazione SEO.",
            technologies: ["React", "GSAP", "Next.js"],
            github: "https://github.com/yourusername/personal-portfolio",
            live: "https://your-portfolio.com"
        }
    ];

    return (
        <section id="portfolio" className="portfolio">
            <h2>{sections.find(section => section.id === 'portfolio').sectionTitle}</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="technologies">
                            {project.technologies.map((tech, i) => (
                                <span key={i} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <FaGithub /> GitHub
                            </a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;