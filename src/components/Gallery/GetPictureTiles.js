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

    const [showDetails, setShowDetails] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);

    let projectsToMap = [];

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
                                <h3>WEBSITE</h3>
                            </button>
                        </a>
                    </div>
                );
            }
        }

        function displayLinks() {
            if (isExpanded || showDetails) {
                return (
                    <div className='project-links'>
                        <div className='link github'>
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                <button>
                                    <h3>GITHUB</h3>
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
                        <button>
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
                    id={index === selectedIndex ? `${showDetails}` : 'false'}
                    key={project.name}
                >
                    <div className='project-title'>
                        <h2>{project.title}</h2>
                    </div>
                    <h4>{project.description}</h4>
                    <div className='tech-bar'>{displayTechBar()}</div>
                    {displayLinks()}
                </div>
            );
        }

        function mobileExpand(chosenIndex) {
            if (window.innerWidth < 800) {
                setShowDetails(!showDetails);
                setSelectedIndex(chosenIndex);
            }
        }

        function infoButton() {
            if (window.innerWidth < 800) {
                return (
                    <div className='info-button'>
                        <InfoButton />
                    </div>
                );
            }
        }

        return (
            <>
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
                            <h4>{project.description}</h4>
                            <div className='tech-bar'>{displayTechBar()}</div>
                            {displayExpand()}
                            {displayLinks()}
                        </div>
                    </div>
                </div>
                {mobileDetails(index)}
            </>
        );
    });
}
