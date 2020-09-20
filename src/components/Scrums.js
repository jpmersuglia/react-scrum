import React from 'react';

import Teams from './Teams'
import TeamContent from './TeamContent'
import '../public/styles/Scrums.css';

function Scrums() {
    return (
        // The Modal 1 for Scrums
        <div id="scrums" className="modal">
            <div className="modalheader">
                <div className="modalheadertitle">
                    <h3>Manage your teams</h3>
                </div>
                <div className="modalheaderoptions">
                    <a href="/index.html" className="cnl">Cancel</a>
                    <a href="/index.html" className="save">Save</a>
                    <a href="/index.html" className="close">&times; Esc</a>
                </div>
            </div>
            <div className="content">
                <Teams />
                <TeamContent />
            </div>
        </div>
    );
}

export default Scrums;
