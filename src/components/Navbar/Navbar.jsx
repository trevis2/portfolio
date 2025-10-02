import React, { useState } from 'react';
import './Navbar.scss';
import { images, sections } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleLinkClick = (sectionId) => {
        setToggleMenu(false);
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -80; // Adjust this value based on your navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logonobg} alt="logo" />
            </div>
            <ul className='app__navbar-links'>
                {sections.map((section) => (
                    <li className='app__flex p-text' key={`link-${section.id}`}>
                        <div />
                        <a href={`#${section.id}`} onClick={() => handleLinkClick(section.id)}>{section.navbarTitle}</a>
                    </li>
                ))}
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggleMenu(true)} />
                {toggleMenu && (
                    <motion.div
                        initial={{ x: 300 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggleMenu(false)} />
                        <ul>
                            {sections.map((section) => (
                                <motion.li key={section.id}>
                                    <a href={`#${section.id}`} onClick={() => handleLinkClick(section.id)}>
                                        {section.navbarTitle}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;