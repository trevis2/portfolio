import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <section id='home' className="app__home">
      <div className="app__home-content">
        <h1>Simone Trevisan</h1>
        <h2>Sviluppatore Web Full-Stack</h2>
        <p>
          Trasformo idee in applicazioni web innovative e performanti.
          Specializzato in React, Node.js e architetture cloud.
        </p>
        <button className="app__home-cta">Contattami</button>
      </div>
    </section>
  );
};

export default Home;