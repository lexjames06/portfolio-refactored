import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Background from './components/Background/Background';
import Gallery from './components/Gallery/Gallery';
import AboutMe from './components/AboutMe/AboutMe';
import ContactMe from './components/ContactMe/ContactMe';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
    return (
        <div className='App' id='top'>
            <Background />
            <div id='projects'></div>
            <Navbar />
            <Gallery />
            <ContactMe id={false} />
            <AboutMe />
            <ContactMe id={true} />
            <Footer />
        </div>
    );
}

export default App;
