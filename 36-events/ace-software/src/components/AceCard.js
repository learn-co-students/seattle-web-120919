import React from 'react'
import Locations from './Locations'

function AceCard(props) {
    return (
        <div>
             <div>
                <h3>{props.ace.name}</h3>
                <Locations locations={props.ace.locations} handleVisit={props.handleVisit} aceId={props.aceId} key={props.id}/>
              </div>       
        </div>
    )
}

export default AceCard;
