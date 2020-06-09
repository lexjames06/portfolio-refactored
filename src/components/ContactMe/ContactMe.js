import React from 'react';

import './ContactMe.css';

export default function ContactMe({ id }) {

    let bannerId = id;

    return (
        <div className='contact-me outer-container' name={`${bannerId}`}>
            <div className='contact-me-header' name={`${bannerId}`}>
                <h1>I'd love to hear from you</h1>
            </div>
            <div className='contact-me-sub-header' name={`${bannerId}`}>
                <h3>Open to new opportunities and willing to relocate</h3>
            </div>
            <div className='contact-me-button' name={`${bannerId}`}>
                <a href='mailto:ajs.stewart@btinternet.com'>
                    <button>
                        <h3>GET IN TOUCH</h3>
                    </button>
                </a>
            </div>
        </div>
    );
}
