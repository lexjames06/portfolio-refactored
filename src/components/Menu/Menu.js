import React from 'react';
import bg from '../../assets/images/background_4.png';

import './Menu.css';
import CloseButton from '../../assets/icons/CloseButton';

export default function Menu({ isMenuVisible, toggleMenu }) {
    return (
        <div className='menu outer-container' name={`${isMenuVisible}`}>
            <img src={bg} alt='' />
            <div className='close-button' onClick={toggleMenu}>
                <CloseButton />
            </div>
            <div className='menu inner-container'>
                <div className='menu link'>
                    <a href='#about' onClick={toggleMenu}>
                        <h1>ABOUT ME</h1>
                    </a>
                </div>
                <div className='menu link'>
                    <a href='#projects' onClick={toggleMenu}>
                        <h1>PROJECTS</h1>
                    </a>
                </div>
                <div className='menu link'>
                    <a href='#contact' onClick={toggleMenu}>
                        <h1>CONTACT ME</h1>
                    </a>
                </div>
                <div className='menu link'>
                    <a href='https://www.linkedin.com/in/alexander-j-stewart/' target='_blank' onClick={toggleMenu}>
                        <h1>LINKEDIN</h1>
                    </a>
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}
