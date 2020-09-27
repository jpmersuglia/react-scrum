import React from 'react'


function TeamList(props){
    const TeamsArray = [
        "Front-End Development",
        "Back-End Development",
        "UI/UX Development",
        "Marketing",
        "Human Resources",
        "Legal Resorces"
    ]

    const ListItem = TeamsArray.map((teams) =>
        <a href={teams}>  
            {teams}
        </a>
    )

    return(
        <div className="team-list-Items">
            {ListItem}
        </div>
    )
}

export default TeamList