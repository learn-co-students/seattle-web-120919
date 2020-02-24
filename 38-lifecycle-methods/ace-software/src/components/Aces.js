import React from 'react'
import AceCard from './AceCard.js'
import AceForm from './AceForm'
// import uuid from 'uuid'
// uuid()

let locations = ["mars", "venus"]
// "earth", "pallettown", "tokyo", "shire"]
class Aces extends React.Component {

  constructor(){
    super();
    console.log("%c CONSTR FOR ACES", "color: red")
    this.state = {
      aces: []
    }
  }
  // this.handleSubmit = this.handleSubmit.bind(this)
  state = {
    aces: []
  }

  handleClick = (location) => {
    let aceId = location.aceId
    let keyName = location.name.toLowerCase()
    this.setState({
      aces: {
        ...this.state.aces,
        [location.aceId]: {
          ...this.state.aces[aceId],
          locations: {
            ...this.state.aces[aceId].locations,
            [keyName]: {
              ...this.state.aces[aceId].locations[keyName],
              numberOfVisit: this.state.aces[aceId].locations[keyName].numberOfVisit + 1
            }
          }
        }
      }
    })
  }

  newAceState = (name, age, hobbies) => {
    const newAceId = Object.keys(this.state.aces).length + 1
    const newAce = {
      id: Object.keys(this.state.aces).length + 1,
      name: name,
      age: age,
      hobbies: hobbies,
      locations: {}
    }
    locations.forEach( location => {
      newAce.locations[location] = {
        aceId: newAceId,
        name: location,
        numberOfVisit: 0
      } 
    })
    console.log("FORM SUBMITTED, DATA SENT", newAce )
    this.setState({ aces: {...this.state.aces, 
      [newAceId]: newAce }
    }, () => console.log("After Render:", this.state.aces))
    // console.log(this.state.aces)
  }

renderAceCards = () => {
  console.log("Ace.js : render Ace Cards", this.state)
  let stateArray = Object.values(this.state.aces)
  let aceCards = stateArray.map(ace => <AceCard ace={ace} handleVisit={this.handleClick} key={ace.id} />)
  return aceCards
}

componentDidMount(){
  console.log("COMPONENT ACES MOUNTED")
  fetch("http://localhost:3000/aces")
  .then(response => response.json())
  .then(data => this.setState(
    {
      aces: data
    }
  ))
}

render() {
  // console.log("Aces : ", this.state.aces)
  console.log("%c RENDER ACES", "color: red")
  return (
    <div>
      <AceForm newAceState={this.newAceState}/>
      {this.renderAceCards()}
    </div>
  )
}
}
export default Aces;