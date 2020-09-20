import React from 'react'

function TeamMembers(props){
    return (
        <div className="persons-selection">
        <div className="person">
            <label className="person-chk">{props.personname}</label>
            <input type="checkbox" className="checkbox" />
        </div>
    </div>
    )
}

export default TeamMembers