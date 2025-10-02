import React from 'react';
import './Experience.scss';
import { FaGraduationCap, FaBriefcase, FaTrophy } from 'react-icons/fa';

const Experience = () => {
    const education = [
        {
            year: "2025",
            title: "Master in Computer Game Development",
            institution: "Università di Verona",
            type: "education"
        },
        {
            year: "2018",
            title: "Master's Degree in Engineering",
            institution: "Università Roma 2 - Tor Vergata",
            type: "education"
        },
        {
            year: "2012",
            title: "Bachelor's Degree in Engineering",
            institution: "Università Roma 2 - Tor Vergata",
            type: "education"
        }
    ];

    const work = [
        {
            year: "2018 - 2025",
            title: "Software Engineer",
            description: "7 anni di esperienza professionale nello sviluppo software, con focus su architetture scalabili e performance optimization"
        },
        {
            year: "2012 - 2018",
            title: "Private Teacher for University Students",
            description: "Insegnamento di materie ingegneristiche a studenti universitari"
        }
    ];

    const achievements = [
        {
            year: "2025",
            title: "Global Game Jam",
            description: "Partecipazione alla Global Game Jam 2025"
        },
        {
            year: "2012",
            title: "1° posto IBEC Competition",
            description: "IT Best Engineering Competition - Università Roma Tor Vergata"
        },
        {
            year: "2011",
            title: "2° posto Soccer Competition",
            description: "Tor Vergata's Soccer Competition (sponsored CampusX)"
        }
    ];

    return (
        <section id="experience" className="experience">
            <h2>Percorso Professionale</h2>
            
            <div className="experience-section">
                <div className="section-header">
                    <FaGraduationCap className="section-icon" />
                    <h3>Formazione Accademica</h3>
                </div>
                <div className="timeline">
                    {education.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                                <h4>{item.title}</h4>
                                <p>{item.institution}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="experience-section">
                <div className="section-header">
                    <FaBriefcase className="section-icon" />
                    <h3>Esperienza Lavorativa</h3>
                </div>
                <div className="timeline">
                    {work.map((item, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-year">{item.year}</div>
                            <div className="timeline-content">
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="experience-section">
                <div className="section-header">
                    <FaTrophy className="section-icon" />
                    <h3>Riconoscimenti</h3>
                </div>
                <div className="achievements-grid">
                    {achievements.map((item, index) => (
                        <div key={index} className="achievement-card">
                            <div className="achievement-year">{item.year}</div>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;