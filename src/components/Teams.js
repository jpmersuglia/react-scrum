import React from 'react';

import TeamList from './TeamList'
import '../public/styles/Teams.css'

function Teams() {
    return (
        <div className="teams">
            <div className="addTeams">
                <i className="fa fa-plus" />
                <a href="/index.html" className="primary-btn">Add Team</a>
            </div>
            <TeamList />
        </div>
    )
}

export default Teams;