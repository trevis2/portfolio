import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaItchIo } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id="contact-info" className="app__footer">
      <div className="app__footer-content">
        <div className="app__footer-logo">
          <h3>Simone Trevisan</h3>
          <p>Game Programmer</p>
        </div>
        
        {/* 
        <div className="app__footer-links">
          <a href="#home">Home</a>
          <a href="#about-me">Chi Sono</a>
          <a href="#skills">Competenze</a>
          <a href="#portfolio">Progetti</a>
          <a href="#contact-info">Contatti</a>
        </div>
        */}

        <div className="app__footer-social">
          <a href="https://www.linkedin.com/in/simone-t-99ab2265/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/KratosDevT" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://kratosdevt.itch.io/" target="_blank" rel="noopener noreferrer" title="Itch.io">
            <FaItchIo />
          </a>
          <a href="mailto:simone.trevisan.gamedev@gmail.com" title="Email">
            <FaEnvelope />
          </a>
        </div>
      </div>
      
      <div className="app__footer-copyright">
        <p>&copy; 2025 Simone Trevisan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;