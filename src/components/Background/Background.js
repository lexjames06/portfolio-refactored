import React from 'react';
import bg from '../../assets/images/background_4.png';
import DockerSVG from '../../assets/SVGs/Docker';
import FirebaseSVG from '../../assets/SVGs/Firebase';
import ReactSVG from '../../assets/SVGs/React';
import JavaScriptSVG from '../../assets/SVGs/JavaScript';
import NodeSVG from '../../assets/SVGs/Node';
import FlutterSVG from '../../assets/SVGs/Flutter';

import './Background.css';

export default function Background() {
    const title = 'Lex James';
    const subtitle = 'FULL STACK DEVELOPER';
    const buttonText = 'PROJECTS';

    const techIcons = [
        { name: 'javascript', svg: JavaScriptSVG() },
        { name: 'react', svg: ReactSVG() },
        { name: 'node', svg: NodeSVG() },
        { name: 'flutter', svg: FlutterSVG() },
        { name: 'firebase', svg: FirebaseSVG() },
        { name: 'docker', svg: DockerSVG() },
    ];

    function getTechIcons() {
        return techIcons.map(icon => {
            return <div key={icon.name}>{icon.svg}</div>;
        });
    }

    return (
        <div className='background outer-container'>
            <div className='background inner-container'>
                <img src={bg} alt=''></img>
                <div className='background-details'>
                    <h1>{title}</h1>
                    <h3>{subtitle}</h3>
                    <div className='tech-bar'>{getTechIcons()}</div>
                    <div className='background-button'>
                        <a href='#projects'>
                        <button>
                            <h3>{buttonText}</h3>
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
