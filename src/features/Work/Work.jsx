import React from 'react';
import './Work.scss';

const Work = () => {
    const projects = [
        {
            title: "E-commerce Platform",
            description: "Piattaforma di e-commerce full-stack con pannello di amministrazione, gestione inventario e integrazione pagamenti.",
            technologies: "React, Node.js, MongoDB, Stripe"
        },
        {
            title: "Task Management App",
            description: "Applicazione di gestione attività con funzionalità di collaborazione in tempo reale e notifiche push.",
            technologies: "React, Firebase, Material-UI"
        },
        {
            title: "Portfolio Personale",
            description: "Sito web portfolio responsive con animazioni fluide e ottimizzazione SEO.",
            technologies: "React, GSAP, Next.js"
        }
    ];

    return (
        <section className="work">
            <h2>Progetti Recenti</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p className="technologies">Tecnologie: {project.technologies}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Work;