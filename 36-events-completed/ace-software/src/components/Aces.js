import React from 'react'
import AceCard from './AceCard.js'
import AceForm from './AceForm'
// import uuid from 'uuid'
// uuid()

let locations = ["mars", "venus"]
// , "earth", "pallettown", "tokyo", "shire"]
let aces = {
  1: {
    id: 1,
    name: "Alicia",
    age: 12,
    hobbies: ["Calligraphy", "Snowboarding"],
    locations: {
      mars: {
        aceId: 1,
        name: "mars",
        numberOfVisit: 0
      },
      venus: {
        aceId: 1,
        name: "venus",
        numberOfVisit: 0
      }
    }
  },
  2: {
    id: 2,
    name: "Eli",
    age: 12,
    hobbies: ["Rocks", "Football"],
    locations: {
      mars: {
        aceId: 2,
        name: "mars",
        numberOfVisit: 0
      },
      venus: {
        aceId: 2,
        name: "venus",
        numberOfVisit: 0
      }
    }
  },
  3: {
    id: 3,
    name: "Christina",
    age: 12,
    hobbies: ["reading", "board games", "drawing"],
    locations: {
      mars: {
        aceId: 3,
        name: "mars",
        numberOfVisit: 0
      },
      venus: {
        aceId: 3,
        name: "venus",
        numberOfVisit: 0
      }
    }
  },
  4: {
    id: 4,
    name: "Allen",
    age: 12,
    hobbies: ["League of Legends", "Cars"],
    locations: {
      mars: {
        aceId: 4,
        name: "mars",
        numberOfVisit: 0
      },
      venus: {
        aceId: 4,
        name: "venus",
        numberOfVisit: 0
      }
    }
  },
  5: {
    id: 5,
    name: "Eric",
    age: 12,
    hobbies: ["Football", "Cooking"],
    locations: {
      mars: {
        aceId: 5,
        name: "mars",
        numberOfVisit: 0
      },
      venus: {
        aceId: 5,
        name: "venus",
        numberOfVisit: 0
      }
    }
  }
}
class Aces extends React.Component {
  state = {
    aces: aces
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
  let stateArray = Object.values(this.state.aces)
  console.log("Ace.js : render ACe Cards", stateArray)
  let aceCards = stateArray.map(ace => <AceCard ace={ace} handleVisit={this.handleClick} key={ace.id} />)
  return aceCards
}

render() {
  console.log("Aces : ", this.state.aces)
  return (
    <div>
      <AceForm newAceState={this.newAceState}/>
      {
        this.renderAceCards()
      }
    </div>
  )
}
}
export default Aces;