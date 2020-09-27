import React from 'react'

import TeamMembers from './TeamMembers'

function ContentList(props) {
    return (
        <div className="team-content">
            <div className="main-team-header">
            <input type="text" id="tname" name="fname" value={props.teamname}/>
                <a href="index.html">Delete Team</a>
            </div>
            <div className="main-team-members">
                <div className="description">
                    <h3>Members</h3>
                    <p>Select Members you want to add to your team.</p>
                </div>
                <div className="action">
                    <i className="fa fa-plus" />
                    <a href="/index.html">Add Member</a>
                </div>
            </div>
            <TeamMembers />
        </div>
    )
}

export default ContentList