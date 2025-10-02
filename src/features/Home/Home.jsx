import React from 'react';
import './Home.scss';

const Home = () => {
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
          <button className="app__home-cta primary">Vedi Progetti</button>
          <button className="app__home-cta secondary">Download CV</button>
        </div>
      </div>
    </section>
  );
};

export default Home;