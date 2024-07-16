import React from 'react';
import './About.scss';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-content">
                <h2>Chi Sono</h2>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            Sono uno sviluppatore web full-stack con 5 anni di esperienza nella creazione di applicazioni
                            web scalabili e intuitive. La mia passione per il codice e l'innovazione mi spinge a rimanere
                            sempre aggiornato sulle ultime tecnologie e best practices del settore.
                        </p>
                        <p>
                            Specializzato in tecnologie JavaScript moderne, il mio approccio allo sviluppo si concentra su:
                        </p>
                        <ul>
                            <li>Creazione di interfacce utente reattive e performanti</li>
                            <li>Sviluppo di API robuste e scalabili</li>
                            <li>Ottimizzazione delle performance e sicurezza delle applicazioni</li>
                            <li>Implementazione di architetture cloud-native</li>
                        </ul>
                        <p>
                            Sono sempre alla ricerca di nuove sfide e opportunità per ampliare le mie competenze, 
                            contribuendo a progetti innovativi che possano fare la differenza nel mondo digitale.
                        </p>
                    </div>
                    <div className="about-stats">
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Anni di Esperienza</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Progetti Completati</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">10+</span>
                            <span className="stat-label">Tecnologie Padrone</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;