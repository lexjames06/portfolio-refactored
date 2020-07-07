import React, { useState, useEffect, useCallback } from 'react';

import './Gallery.css';
import GetPictureTiles from './GetPictureTiles';
import SelectAndSort from '../SelectAndSort/SelectAndSort';
import ImportedProjects from '../Data/projects';

export default function Gallery() {
    const [tileOneExpanded, setTileOneExpanded] = useState(false);
    const [tileTwoExpanded, setTileTwoExpanded] = useState(false);
    const [tileThreeExpanded, setTileThreeExpanded] = useState(false);
    const [tileFourExpanded, setTileFourExpanded] = useState(false);
    const [tileFiveExpanded, setTileFiveExpanded] = useState(false);
    const [tileSixExpanded, setTileSixExpanded] = useState(false);
    const [tileSevenExpanded, setTileSevenExpanded] = useState(false);
    const [tileEightExpanded, setTileEightExpanded] = useState(false);

    const projects = ImportedProjects(
        tileOneExpanded,
        tileTwoExpanded,
        tileThreeExpanded,
        tileFourExpanded,
        tileFiveExpanded,
        tileSixExpanded,
        tileSevenExpanded,
        tileEightExpanded
    );

    function toggleTileExpand(selectedIndex) {
        setTileOneExpanded(selectedIndex === 0 ? true : false);
        setTileTwoExpanded(selectedIndex === 1 ? true : false);
        setTileThreeExpanded(selectedIndex === 2 ? true : false);
        setTileFourExpanded(selectedIndex === 3 ? true : false);
        setTileFiveExpanded(selectedIndex === 4 ? true : false);
        setTileSixExpanded(selectedIndex === 5 ? true : false);
        setTileSevenExpanded(selectedIndex === 6 ? true : false);
        setTileEightExpanded(selectedIndex === 7 ? true : false);
    }

    const [javaScriptSelected, setJavaScriptSelected] = useState(false);
    const [reactSelected, setReactSelected] = useState(false);
    const [flutterSelected, setFlutterSelected] = useState(false);
    const [nodeSelected, setNodeSelected] = useState(false);
    const [firebaseSelected, setFirebaseSelected] = useState(false);
    const [mongoSelected, setMongoSelected] = useState(false);
    const [reduxSelected, setReduxSelected] = useState(false);
    const [scratchSelected, setScratchSelected] = useState(false);
    const [allTechSelected, setAllTechSelected] = useState(true);

    const technologies = [
        { name: 'JavaScript', selectedStatus: javaScriptSelected },
        { name: 'React', selectedStatus: reactSelected },
        { name: 'Flutter', selectedStatus: flutterSelected },
        { name: 'Node', selectedStatus: nodeSelected },
        { name: 'Firebase', selectedStatus: firebaseSelected },
        { name: 'Mongo', selectedStatus: mongoSelected },
        { name: 'Redux', selectedStatus: reduxSelected },
        { name: 'Scratch', selectedStatus: scratchSelected },
        { name: 'All', selectedStatus: allTechSelected },
    ];

    const [selectedTech, setSelectedTech] = useState(
        technologies[0].name.toLowerCase()
    );

    const [siderbarOpen, setSiderbarOpen] = useState(false);

    function toggleSidebar() {
        setSiderbarOpen(!siderbarOpen);
    }

    function toggleSelected(techClicked) {
        setJavaScriptSelected(techClicked === 'JavaScript' ? true : false);
        setReactSelected(techClicked === 'React' ? true : false);
        setFlutterSelected(techClicked === 'Flutter' ? true : false);
        setNodeSelected(techClicked === 'Node' ? true : false);
        setFirebaseSelected(techClicked === 'Firebase' ? true : false);
        setMongoSelected(techClicked === 'Mongo' ? true : false);
        setReduxSelected(techClicked === 'Redux' ? true : false);
        setScratchSelected(techClicked === 'Scratch' ? true : false);
        setAllTechSelected(techClicked === 'All' ? true : false);

        setSiderbarOpen(false);
        toggleProjects();
    }

    function toggleProjects() {
        let chosenTech = technologies.find(
            tech => tech.selectedStatus === true
        );
        setSelectedTech(chosenTech.name.toLowerCase());
    }

    let toggleActiveProjects = useCallback(() => toggleProjects(), [
        selectedTech,
        technologies,
    ]);

    useEffect(() => {
        toggleActiveProjects();
    }, [toggleActiveProjects]);

    return (
        <>
            <div className='gallery outer-container'>
                <div id={`${siderbarOpen}`} className='sidebar'>
                    <div className='title'>
                        <h1>PROJECTS</h1>
                    </div>
                    <div className='options'>
                        <SelectAndSort
                            items={technologies}
                            toggleProjects={() => toggleProjects()}
                            toggleSidebar={() => toggleSidebar()}
                            toggleSelected={itemName =>
                                toggleSelected(itemName)
                            }
                        />
                    </div>
                </div>
                <div
                    id={`${siderbarOpen}`}
                    className='technology-selector'
                    onClick={toggleSidebar}
                ></div>
                <div className='gallery inner-container'>
                    <GetPictureTiles
                        selectedTech={selectedTech}
                        projects={projects}
                        toggleTileExpand={selectedIndex =>
                            toggleTileExpand(selectedIndex)
                        }
                    />
                </div>
            </div>
            <div className='anchor-tag' id='contact'></div>
        </>
    );
}
