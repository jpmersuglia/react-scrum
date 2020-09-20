import React from 'react'


function TeamList(props){
    return(
        <div>
            <a href="/index.html" className="selection-btn"> {props.name} </a>
        </div>
    )
}

export default TeamList