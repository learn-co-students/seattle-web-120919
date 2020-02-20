import React from 'react'
import LocationCard from './LocationCard'

const renderLocationCards = (props)=>{
  let locationArray = Object.values(props.locations)

  let locationCards = locationArray.map( location => <LocationCard 
                        location={location}
                        handleVisit={props.handleVisit} 
                        aceId = {props.aceId}
                        key={location.id}/> );
    return locationCards;
}

function Locations(props){
    return(
        <div>
          {renderLocationCards(props)}
        </div>

    )
}
export default Locations;