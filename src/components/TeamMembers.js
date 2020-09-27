import React from 'react'

function TeamMembers(props) {
    const members = [
        "Enrique West",
        "Damien Braun",
        "Ellie Osborne",
        "Cierra Vega",
        "Alden Cantrell",
        "Kierra Gentry",
        "Pierre Cox",
        "Thomas Crane",
        "Damien Braun",
        "Ellie Osborne",
        "Cierra Vega",
        "Alden Cantrell",
        "Enrique West",
        "Damien Braun",
        "Ellie Osborne",
        "Cierra Vega",
        "Alden Cantrell"
    ]
    const ListPersons = members.map((member) =>
        <label className="person-chk">
            {member}
            <input type="checkbox" className="checkbox" />
         </label>
        );
    
    return (
        <div className="persons-selection">
            {ListPersons}
        </div>
    )
}

export default TeamMembers