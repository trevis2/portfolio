import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="app__footer">
      <div className="app__footer-content">
        <div className="app__footer-logo">
          <img src="/path-to-your-logo.png" alt="Simone Trevisan Logo" />
          <h3>Simone Trevisan</h3>
        </div>
        <div className="app__footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="app__footer-social">
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:your.email@example.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="app__footer-copyright">
        <p>&copy; 2024 Simone Trevisan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;