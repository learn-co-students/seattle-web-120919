import React from 'react'
import Locations from './Locations'

class AceCard extends React.Component {
    render() {
        console.log("RENDERED ACE CARD")
        return (
            <div>
                <div>
                    <h3>{this.props.ace.name}</h3>
                    <Locations locations={this.props.ace.locations} handleVisit={this.props.handleVisit} aceId={this.props.ace.id} key={this.props.id} />
                </div>
            </div>
        )
    }
}

export default AceCard;