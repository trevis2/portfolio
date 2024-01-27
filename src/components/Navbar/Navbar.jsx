import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={images.logonobg} alt="logo"></img>
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((element) => (
                    <li className='app__flex p-text' key={`link-${element}`}>
                        <div />
                        <a href={`#${element}`}>{element}</a>
                    </li>
                ))}
            </ul>
            <div className='app__navbar-menu'>
                <HiMenuAlt4 onClick={() => setToggleMenu(true)} />
                {toggleMenu &&
                    <motion.div whileInView={{ x: [300, 0] }} transition={{ duration: 0.35, ease: 'easeInOut' }}>
                        <HiX onClick={() => setToggleMenu(false)} />
                        <motion.ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((element) => (
                                <li key={element}>
                                    <div />
                                    <a href={`#${element}`} onClick={() => setToggleMenu(false)}>{element}</a>
                                </li>
                            ))}
                        </motion.ul>
                    </motion.div>
                }
            </div>
        </nav>
    )
}

export default Navbar