import React from 'react';
import './About.scss';

const About = () => {
    return (
        <section id="about-me" className="about">
            <div className="about-content">
                <h2>Chi Sono</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            Sono un Game Programmer con un solido background in Software Engineering (2018-2025) 
                            e attualmente sto completando il Master in Computer Game Development all'Università di Verona.
                        </p>
                        <p>
                            La mia specializzazione è il Gameplay Development, con particolare focus su:
                        </p>
                        <ul>
                            <li>Sviluppo di meccaniche di gioco in C++ e Unreal Engine</li>
                            <li>Programmazione di sistemi AI e fisica applicata</li>
                            <li>Implementazione di pattern di programmazione e architetture ECS</li>
                            <li>Ottimizzazione delle performance e gestione della memoria</li>
                        </ul>
                        <p>
                            Il mio approccio ai problemi è analitico e orientato alla qualità del codice. 
                            Sono spinto dalla curiosità e dall'apprendimento continuo, dal perfezionamento 
                            delle meccaniche di gioco alla costruzione di strumenti potenti per migliorare 
                            il ciclo di sviluppo.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">7+</span>
                            <span className="stat-label">Anni di Programmazione</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">6+</span>
                            <span className="stat-label">Progetti GameDev</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">2</span>
                            <span className="stat-label">Game Engines</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;