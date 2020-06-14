import React, { useState } from 'react';
import JavaScriptSVG from '../../assets/SVGs/JavaScript';
import ReactSVG from '../../assets/SVGs/React';
import NodeSVG from '../../assets/SVGs/Node';
import FlutterSVG from '../../assets/SVGs/Flutter';
import FirebaseSVG from '../../assets/SVGs/Firebase';
import MongoSVG from '../../assets/SVGs/MongoDB';
import CloseButton from '../../assets/icons/CloseButton';
import InfoButton from '../../assets/icons/InfoButton';

export default function GetPictureTiles({
    selectedTech,
    projects,
    toggleTileExpand,
}) {
    const javaScript = { name: 'javascript', svg: JavaScriptSVG() };
    const react = { name: 'react', svg: ReactSVG() };
    const node = { name: 'node', svg: NodeSVG() };
    const flutter = { name: 'flutter', svg: FlutterSVG() };
    const firebase = { name: 'firebase', svg: FirebaseSVG() };
    const mongo = { name: 'mongo', svg: MongoSVG() };

    const technologyIcons = [javaScript, react, node, flutter, firebase, mongo];

    const [showTile1Details, setShowTile1Details] = useState(false);
    const [showTile2Details, setShowTile2Details] = useState(false);
    const [showTile3Details, setShowTile3Details] = useState(false);
    const [showTile4Details, setShowTile4Details] = useState(false);
    const [showTile5Details, setShowTile5Details] = useState(false);
    const [showTile6Details, setShowTile6Details] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    let projectsToMap = [];

    let showDetails = showTile1Details || showTile2Details || showTile3Details || showTile4Details || showTile5Details || showTile6Details;

    let projectsDetailsVisibility = [
        showTile1Details,
        showTile2Details,
        showTile3Details,
        showTile4Details,
        showTile5Details,
        showTile6Details,
    ];

    if (selectedTech !== 'all') {
        projectsToMap = projects.filter(project => {
            return project.technologies.find(tech => tech === selectedTech);
        });
    } else {
        projectsToMap = projects;
    }

    return projectsToMap.map((project, index) => {
        let isExpanded = false;

        let lightTile = false;

        if (window.innerWidth < 800) {
            if (index % 2) {
                lightTile = false;
            } else {
                lightTile = true;
            }
        } else {
            if (index % 4 === 0 || index % 4 === 3) {
                lightTile = true;
            } else {
                lightTile = false;
            }
        }

        let expandedIndex = projects.findIndex(
            project => project.isExpanded === true
        );

        if (expandedIndex === -1) {
            isExpanded = false;
        } else if (expandedIndex === index) {
            isExpanded = true;
        } else {
            isExpanded = 'hidden';
        }

        function displayTechBar() {
            let projectTech = technologyIcons.filter(icon => {
                return project.technologies.find(tech => tech === icon.name);
            });

            return projectTech.map(tech => tech.svg);
        }

        function displayWebsiteLink() {
            if (project.website !== null) {
                return (
                    <div className='link website'>
                        <a href={project.website} target='_blank' rel='noopener noreferrer'>
                            <button>
                                <h3 id={lightTile ? 'true' : 'false'}>WEBSITE</h3>
                            </button>
                        </a>
                    </div>
                );
            }
        }

        function displayLinks() {
            if (isExpanded || projectsDetailsVisibility[index]) {
                return (
                    <div className='project-links'>
                        <div className='link github'>
                            <a
                                href={project.github !== 'preview' ? project.github : 'https://youtu.be/2L-gl3ftnmc'}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button id={lightTile ? 'true' : 'false'}>
                                    <h3>{project.github !== 'preview' ? 'GITHUB' : 'PREVIEW'}</h3>
                                </button>
                            </a>
                        </div>
                        {displayWebsiteLink()}
                    </div>
                );
            }
        }

        function displayExpand() {
            if (!isExpanded) {
                return (
                    <div
                        className='project-expand'
                        onClick={() => toggleTileExpand(index)}
                    >
                        <button id={lightTile ? 'true' : 'false'}>
                            <h3>LEARN MORE</h3>
                        </button>
                    </div>
                );
            }
        }

        function displayCloseButton() {
            if (isExpanded) {
                return (
                    <div
                        className='close-button'
                        onClick={() => toggleTileExpand(null)}
                    >
                        {CloseButton()}
                    </div>
                );
            }
        }

        function mobileDetails() {
            return (
                <div
                    className='mobile-expand-details'
                    id={`${projectsDetailsVisibility[index]}`}
                    key={project.name}
                >
                    <div className='project-title'>
                        <h2>{project.title}</h2>
                    </div>
                    <h4>{project.longDescription}</h4>
                    <div className='tech-bar'>{displayTechBar()}</div>
                    {displayLinks()}
                </div>
            );
        }

        function mobileExpand(chosenIndex) {
            if (window.innerWidth < 850) {
                setShowTile1Details(chosenIndex === 0 ? showTile1Details === true ? false : true : false);
                setShowTile2Details(chosenIndex === 1 ? showTile2Details === true ? false : true : false);
                setShowTile3Details(chosenIndex === 2 ? showTile3Details === true ? false : true : false);
                setShowTile4Details(chosenIndex === 3 ? showTile4Details === true ? false : true : false);
                setShowTile5Details(chosenIndex === 4 ? showTile5Details === true ? false : true : false);
                setShowTile6Details(chosenIndex === 5 ? showTile6Details === true ? false : true : false);
                setSelectedIndex(chosenIndex);
            }
        }

        function infoButton() {
            if (window.innerWidth < 850) {
                return (
                    <div className='info-button'>
                        <InfoButton />
                    </div>
                );
            }
        }

        return (
            <div className='gallery-tile-container'>
                <div
                    className='gallery tile'
                    name={`${isExpanded}`}
                    id={lightTile ? 'true' : 'false'}
                    key={project.name}
                    onClick={() => mobileExpand(index)}
                >
                    {infoButton()}
                    {displayCloseButton()}
                    <img
                        id='pic-1'
                        src={lightTile ? project.light1 : project.dark1}
                        alt=''
                    />
                    <div className='project-details'>
                        <img
                            id='pic-2'
                            src={lightTile ? project.light2 : project.dark2}
                            alt=''
                        />
                        <div className='project-description'>
                            <div className='project-title'>
                                <h2>{project.title}</h2>
                            </div>
                            <h4>{isExpanded ? project.longDescription : project.shortDescription}</h4>
                            <div className='tech-bar'>{displayTechBar()}</div>
                            {displayExpand()}
                            {displayLinks()}
                        </div>
                    </div>
                </div>
                {mobileDetails(index)}
            </div>
        );
    });
}
