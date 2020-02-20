import React from 'react'

function LocationCard(props){
    return(
        <div>
            {props.location.name} 
            <button onClick={ () => props.handleVisit(props.location)} >Visited {props.location.numberOfVisit} times!</button>
        </div>
    )
}

export default LocationCard