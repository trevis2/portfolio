import React from 'react';
import './Portfolio.scss';
import { sections } from '../../constants';
import { FaGithub, FaGamepad } from 'react-icons/fa';
import { SiUnrealengine, SiUnity } from 'react-icons/si';

const Portfolio = () => {
    const projects = [
        {
            title: "Overdrill",
            description: "Un twin-stick shooter e tower defense in Unreal Engine. Progetto attualmente in corso al Master",
            technologies: ["UE5", "C++"],
            engine: "unreal",
            github: "",
            demo: ""
        },
        {
            title: "Unreal Platform Game",
            description: "Un platformer 3D completo in Unreal Engine con movimento custom, AI con NavMesh, boss fight, gestione risorse, power-up e aree sbloccabili. Sfida: sconfiggi tutti i nemici raccogliendo il massimo delle risorse nel minor tempo!",
            technologies: ["UE5", "C++", "AI NavMesh", "Resource Systems", "FSM", "Animations"],
            engine: "unreal",
            github: "https://github.com/yourusername/unreal-platformer",
            demo: "https://yourusername.itch.io/platformer"
        },
        {
            title: "BB8 Physics Simulation",
            description: "Character controller basato sulla fisica che simula la meccanica del droide BB8 in Unreal Engine. Sistema di rotolamento sferico con velocità angolare, stabilizzazione giroscopica della testa e componente movimento custom per locomozione realistica.",
            technologies: ["UE5", "C++", "Physics 3D", "Applied Forces", "Character Movement"],
            engine: "unreal",
            github: "https://github.com/yourusername/bb8-physics"
        },
        {
            title: "Soccer AI System",
            description: "Sistema AI completo per gioco di calcio 2v2/3v3 in Unity. Implementazione di FSM con comportamenti complessi: tattica difensiva (goalkeeper positioning, interpose, ball protection), tattica offensiva (corner tactics, standard attack), steering behaviors (seek/flee/separation), decision-making intelligente per tiri e passaggi. Architettura modulare con ruoli dinamici e coordinazione di squadra real-time.",
            technologies: ["Unity", "C#", "FSM", "Steering Behaviors", "Game AI", "Team Coordination"],
            engine: "unity",
            github: "https://github.com/yourusername/soccer-ai"
        },
        {
            title: "Physics-Based Networking",
            description: "Implementazione multiplayer di simulazioni fisiche in Unity utilizzando Photon PUN, seguendo i tutorial di Gaffer on Games. Features: client-side prediction, server reconciliation, snapshot interpolation e lag compensation per garantire sincronizzazione precisa delle entità fisiche tra i client.",
            technologies: ["Unity", "C#", "Photon PUN", "Physics Simulation", "Networking"],
            engine: "unity",
            github: "https://github.com/yourusername/networking-physics"
        },
        {
            title: "Pang Clone",
            description: "Ricreazione single-level del classico arcade in Unity 2D per Android. Sistema di split dinamico dei palloncini con simulazione fisica, controlli touch responsive, animazioni e UI dinamica.",
            technologies: ["Unity", "C#", "2D Physics", "Mobile Dev", "Touch Input"],
            engine: "unity",
            github: "https://github.com/yourusername/pang-clone",
            demo: "https://play.google.com/store/apps/details?id=your.pang.clone"
        },
        {
            title: "Memory Manager",
            description: "Memory manager che implementa il pattern Small Object Allocator di Alexandrescu con override globale di new/delete.",
            technologies: ["C++", "Memory Management", "Operator Overloading", "Performance"],
            engine: "library",
            github: "https://github.com/yourusername/memory-manager"
        },
        {
            title: "Arkanoid Clone",
            description: "Implementazione del classico arcade in DirectX seguendo i tutorial di Rastertek. Features: rendering sprite 2D, sistema collision detection, movimento entità e gestione degli stati di gioco.",
            technologies: ["C++", "DirectX 11", "2D Graphics", "Sprite Rendering", "Collision"],
            engine: "directx",
            github: "https://github.com/yourusername/arkanoid-clone"
        },
        {
            title: "FMod Wrapper Library",
            description: "Libreria wrapper C++ per FMOD API, con sistema di riproduzione audio multi-canale e interfaccia di controllo runtime.",
            technologies: ["C++", "FMOD API", "Audio Programming", "Resource Management"],
            engine: "library",
            github: "https://github.com/yourusername/fmod-wrapper"
        }
    ];

    const getEngineIcon = (engine) => {
        switch(engine) {
            case 'unreal': return <SiUnrealengine />;
            case 'unity': return <SiUnity />;
            default: return <FaGamepad />;
        }
    };

    return (
        <section id="portfolio" className="portfolio">
            <h2>{sections.find(section => section.id === 'portfolio').sectionTitle}</h2>
            <p className="portfolio-subtitle">I miei progetti personali di Game Development</p>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-header">
                            <h3>{project.title}</h3>
                            <span className="engine-icon">{getEngineIcon(project.engine)}</span>
                        </div>
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
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                    <FaGamepad /> Demo
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;