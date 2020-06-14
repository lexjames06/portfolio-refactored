import React from 'react';
import Logo from '../../assets/SVGs/Logo';

import './Footer.css';

export default function Footer() {
    return (
        <div className='footer container'>
            <a href='#top'>
                <Logo />
            </a>
        </div>
    );
}