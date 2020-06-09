import React, { useEffect, useState } from 'react';
import basketballImage from '../../assets/images/basketball.png';
import podcastImage from '../../assets/images/podcast.png';
import codingImage from '../../assets/images/coding.png';
import fitnessImage from '../../assets/images/fitness.png';
import mathsImage from '../../assets/images/maths.png';
import Coding from '../../assets/icons/Laptop';
import Basketball from '../../assets/icons/Basketball';
import Maths from '../../assets/icons/Math';
import Podcast from '../../assets/icons/Podcast';
import Fitness from '../../assets/icons/Fitness';

import './AboutMe.css';

export default function AboutMe() {
    const icons = [
        {name: 'coding', icon: Coding,},
        {name: 'podcast', icon: Podcast,},
        {name: 'basketball', icon: Basketball,},
        {name: 'fitness', icon: Fitness,},
        {name: 'maths', icon: Maths,},
    ];

    const hobbies = [
        {image: basketballImage, title: 'Basketball', body: 'Basketball is my first love. It has brought many tears of joy and disappointment, and even afforded me the opportunity to live in Iceland and receive a scholarship to university in Florida. I\'m also a Boston Celtics fan!',},
        {image: fitnessImage, title: 'Fitness', body: 'After I finished playing basketball, I fell in love with health and fitness. I\'ve completed multiple Strength & Conditioning internships and become a qualified Personal Trainer; all for the love of it as a hobby.',},
        {image: codingImage, title: 'Coding', body: 'Discovering coding has been an injection of passion into my life. I haven\'t felt this drawn towards something since I stopped playing basketball. It\'s something I truly enjoy learning, and look forward to building a career and impactful technology!',},
        {image: mathsImage, title: 'Maths', body: 'I love to solve problems! Studying maths at university wasn\'t enough; if I can find a riddle or logic problem to solve in my spare time, I will!',},
        {image: podcastImage, title: 'Podcast', body: 'Since Aug 2018, I\'ve been a part of a podcast with a group of friends from around the world. We discuss interesting articles in the news and share our thoughts and opinions.',},
    ];

    const [selectedIcon, setSelectedIcon] = useState('basketball');

    function toggleSelectedIcon(icon) {
        setSelectedIcon(icon);
    }

    function displayIcons() {

        return icons.map(icon => {

            if(icon.name === selectedIcon) {
                return (
                    <div 
                        className='about-me-icon'
                        id='true'
                        onClick={() => toggleSelectedIcon(icon.name)}>
                        {icon.icon()}
                    </div>
                );
            } else {
                return (
                    <div 
                        className='about-me-icon'
                        id='false'
                        onClick={() => toggleSelectedIcon(icon.name)}>
                        {icon.icon()}
                    </div>
                );
            }
        });
    }

    function displayDetails() {
        let detailsToDisplay = hobbies.find(hobby => hobby.title.toLowerCase() === selectedIcon);
        return (
            <div className='about-me details'>
                <div className='about-me-picture'>
                    <img src={detailsToDisplay.image} alt='' />
                </div>
                <div className='about-me text'>
                    <div className='spacer'></div>
                    <div className='about-me text-title'>
                        <h2>{detailsToDisplay.title}</h2>
                    </div>
                    <div className='about-me text-body'>
                        <h4>{detailsToDisplay.body}</h4>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className='about-me outer-container' id='about'>
            <div className='about-me inner-container'>
                <div className='about-me-title'>
                    <h1>ABOUT ME</h1>
                </div>
                <div className='about-me-icons'>
                    {displayIcons()}
                </div>
                    {displayDetails()}
            </div>
        </div>
    );
}
