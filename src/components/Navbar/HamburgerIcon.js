import React from 'react';

export default function HamburgerIcon({ toggleMenu }) {
    return (
        <div className='hamburger-container' onClick={toggleMenu}>
            <div className='hamburger top'></div>
            <div className='hamburger middle'></div>
            <div className='hamburger bottom'></div>
        </div>
    );
}
