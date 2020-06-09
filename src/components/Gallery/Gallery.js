import React, { useState, useEffect } from 'react';
import tile_1 from '../../assets/images/phone_black_tile.png';
import tile_2 from '../../assets/images/phone_white_tile.png';
import tile_3 from '../../assets/images/phone_black_tile_hover.png';
import tile_4 from '../../assets/images/phone_white_tile_hover.png';
import kodflix1 from '../../assets/images/kodflix_light_1.png';
import kodflix2 from '../../assets/images/kodflix_light_2.png';
import kodflix3 from '../../assets/images/kodflix_dark_1.png';
import kodflix4 from '../../assets/images/kodflix_dark_2.png';

import './Gallery.css';
import GetPictureTiles from './GetPictureTiles';
import SelectAndSort from '../SelectAndSort/SelectAndSort';

export default function Gallery() {
    const [tileOneExpanded, setTileOneExpanded] = useState(false);
    const [tileTwoExpanded, setTileTwoExpanded] = useState(false);
    const [tileThreeExpanded, setTileThreeExpanded] = useState(false);
    const [tileFourExpanded, setTileFourExpanded] = useState(false);

    const projects = [
        {
            title: 'Fit-4-You',
            description: 'A fitness phone app',
            light1: tile_2,
            light2: tile_4,
            dark1: tile_1,
            dark2: tile_3,
            isExpanded: tileOneExpanded,
            technologies: ['flutter', 'firebase'],
        },
        {
            title: 'Paper Weather',
            description: 'A simple weather phone app',
            light1: tile_2,
            light2: tile_4,
            dark1: tile_1,
            dark2: tile_3,
            isExpanded: tileTwoExpanded,
            technologies: ['flutter'],
        },
        {
            title: 'Kodflix',
            description: 'A video streaming web app',
            light1: kodflix1,
            light2: kodflix2,
            dark1: kodflix3,
            dark2: kodflix4,
            isExpanded: tileThreeExpanded,
            technologies: ['javascript', 'react', 'node'],
        },
        {
            title: 'The Quiet Room',
            description: 'A real-time chat app',
            light1: tile_2,
            light2: tile_4,
            dark1: tile_1,
            dark2: tile_3,
            isExpanded: tileFourExpanded,
            technologies: ['flutter', 'firebase'],
        },
    ];

    function toggleTileExpand(selectedIndex) {
        setTileOneExpanded(selectedIndex === 0 ? true : false);
        setTileTwoExpanded(selectedIndex === 1 ? true : false);
        setTileThreeExpanded(selectedIndex === 2 ? true : false);
        setTileFourExpanded(selectedIndex === 3 ? true : false);
    }

    function toggleTileCollapse() {
        setTileOneExpanded(false);
        setTileTwoExpanded(false);
        setTileThreeExpanded(false);
        setTileFourExpanded(false);
    }

    const [javaScriptSelected, setJavaScriptSelected] = useState(false);
    const [reactSelected, setReactSelected] = useState(false);
    const [flutterSelected, setFlutterSelected] = useState(true);
    const [nodeSelected, setNodeSelected] = useState(false);
    const [firebaseSelected, setFirebaseSelected] = useState(false);
    const [dockerSelected, setDockerSelected] = useState(false);
    const [allTechSelected, setAllTechSelected] = useState(false);

    const technologies = [
        { name: 'JavaScript', selectedStatus: javaScriptSelected },
        { name: 'React', selectedStatus: reactSelected },
        { name: 'Flutter', selectedStatus: flutterSelected },
        { name: 'Node', selectedStatus: nodeSelected },
        { name: 'Firebase', selectedStatus: firebaseSelected },
        { name: 'Docker', selectedStatus: dockerSelected },
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
        setDockerSelected(techClicked === 'Docker' ? true : false);
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

    useEffect(() => {
        toggleProjects();
    }, [selectedTech, technologies]);

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
                        toggleTileCollapse={() => toggleTileCollapse()}
                    />
                </div>
            </div>
            <div className='anchor-tag' id='contact'></div>
        </>
    );
}
