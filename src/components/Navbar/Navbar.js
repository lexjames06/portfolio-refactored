import React, { useState } from 'react';
import Logo from '../../assets/SVGs/Logo';
import Menu from '../Menu/Menu';
import HamburgerIcon from './HamburgerIcon';

import './Navbar.css';

export default function Navbar() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);

    function toggleMenu() {
        setIsMenuVisible(!isMenuVisible);
        console.log('is menu visible: ', isMenuVisible);
    }

    return (
        <div className='navbar outer-container'>
            <div className='navbar middle-container'>
                <div className='navbar inner-container'>
                        <div className='navbar-icon'>
                    <a href='#top'>
                            <Logo />
                    </a>
                        </div>
                    <div className='navbar-icon'>
                        <HamburgerIcon toggleMenu={() => toggleMenu()} />
                    </div>
                </div>
            </div>
            <Menu isMenuVisible={isMenuVisible} toggleMenu={toggleMenu} />
        </div>
    );
}
