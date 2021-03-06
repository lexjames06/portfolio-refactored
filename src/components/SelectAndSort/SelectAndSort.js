import React from 'react';

export default function SelectAndSort({
    items,
    toggleProjects,
    toggleSelected,
    toggleSidebar,
}) {
    items.sort((a, b) => (a.name > b.name ? 1 : -1));

    if (window.innerWidth < 1200) {
        items.sort((a, b) => (a.selectedStatus > b.selectedStatus ? -1 : 1));

        return items.map((item, index) => {
            let name = item.name === 'Mongo' ? 'MongoDB' : item.name;

            if (index === 0) {
                return (
                    <div
                        className='option'
                        name={`${item.selectedStatus}`}
                        onClick={toggleSidebar}
                        key={index}
                    >
                        <h3>{name}</h3>
                    </div>
                );
            } else {
                return (
                    <div
                        className='option'
                        name={`${item.selectedStatus}`}
                        key={index}
                        onClick={() => {
                            toggleSelected(item.name);
                            toggleProjects();
                        }}
                    >
                        <h3>{name}</h3>
                    </div>
                );
            }
        });
    }

    return items.map((item, index) => {

        let name = item.name === 'Mongo' ? 'MongoDB' : item.name;

        return (
            <div
                className='option'
                name={`${item.selectedStatus}`}
                key={index}
                onClick={() => {
                    toggleSelected(item.name);
                    toggleProjects();
                }}
            >
                <h3>{name}</h3>
            </div>
        );
    });
}
