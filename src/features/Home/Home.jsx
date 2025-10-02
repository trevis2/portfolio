import React from 'react';
import './Home.scss';

const Home = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const yOffset = -80; // Navbar height offset
      const y = portfolioSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const downloadCV = () => {
    // Opzione 1: Se hai il CV nella cartella public
    const link = document.createElement('a');
    link.href = '/CV_Game_Programmer_ST.pdf'; // Metti il tuo CV in public/
    link.download = 'CV_Game_Programmer_ST';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='home' className="app__home">
      <div className="app__home-content">
        <h1>Simone Trevisan</h1>
        <h2>Game Programmer</h2>
        <p>
          Specializzato in Gameplay Development con solida esperienza in Software Engineering.
          Esperto in C++, Unreal Engine e Unity, con focus su meccaniche di gioco performanti e architetture pulite.
        </p>
        <div className="app__home-buttons">
          <button className="app__home-cta primary" onClick={scrollToPortfolio}>
            Vedi Progetti
          </button>
          <button className="app__home-cta secondary" onClick={downloadCV}>
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;