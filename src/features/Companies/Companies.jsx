import React from 'react';
import './Companies.scss';
import { sections } from '../../constants';

// Importa i loghi delle aziende
import logo1 from '../../assets/loghi-aziende/samsung.png';

const Companies = () => {
    const companies = [
        { name: 'Company 1', logo: logo1 },
        { name: 'Company 2', logo: logo1 },
        { name: 'Company 3', logo: logo1 },
        { name: 'Company 4', logo: logo1 },
    ];

    return (
        <section id="companies" className="companies">
            <h2>{sections.find(section => section.id === 'companies').sectionTitle}</h2>
            <p>Ho avuto il piacere di collaborare con queste fantastiche aziende:</p>
            <div className="companies-grid">
                {companies.map((company, index) => (
                    <div key={index} className="company-logo">
                        <img src={company.logo} alt={company.name} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Companies;