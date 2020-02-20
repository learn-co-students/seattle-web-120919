import React from 'react'
import AceCard from './AceCard.js'
import AceForm from './AceForm'

let locations = ["mars", "venus", "earth", "pallettown", "tokyo", "shire"]
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
      },
      earth: {
        aceId: 1,
        name: "earth",
        numberOfVisit: 0
      },
      pallettown: {
        aceId: 1,
        name: "pallettown",
        numberOfVisit: 0
      },
      tokyo: {
        aceId: 1,
        name: "tokyo",
        numberOfVisit: 0
      },
      malta: {
        aceId: 1,
        name: "malta",
        numberOfVisit: 0
      },
      shire: {
        aceId: 1,
        name: "shire",
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
      },
      earth: {
        aceId: 2,
        name: "earth",
        numberOfVisit: 0
      },
      pallettown: {
        aceId: 2,
        name: "pallettown",
        numberOfVisit: 0
      },
      tokyo: {
        aceId: 2,
        name: "tokyo",
        numberOfVisit: 0
      },
      malta: {
        aceId: 2,
        name: "malta",
        numberOfVisit: 0
      },
      shire: {
        aceId: 2,
        name: "shire",
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
      },
      earth: {
        aceId: 3,
        name: "earth",
        numberOfVisit: 0
      },
      pallettown: {
        aceId: 3,
        name: "pallettown",
        numberOfVisit: 0
      },
      tokyo: {
        aceId: 3,
        name: "tokyo",
        numberOfVisit: 0
      },
      malta: {
        aceId: 3,
        name: "malta",
        numberOfVisit: 0
      },
      shire: {
        aceId: 3,
        name: "shire",
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
      },
      earth: {
        aceId: 4,
        name: "earth",
        numberOfVisit: 0
      },
      pallettown: {
        aceId: 4,
        name: "pallettown",
        numberOfVisit: 0
      },
      tokyo: {
        aceId: 4,
        name: "tokyo",
        numberOfVisit: 0
      },
      malta: {
        aceId: 4,
        name: "malta",
        numberOfVisit: 0
      },
      shire: {
        aceId: 4,
        name: "shire",
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
      },
      earth: {
        aceId: 5,
        name: "earth",
        numberOfVisit: 0
      },
      pallettown: {
        aceId: 5,
        name: "pallettown",
        numberOfVisit: 0
      },
      tokyo: {
        aceId: 5,
        name: "tokyo",
        numberOfVisit: 0
      },
      malta: {
        aceId: 5,
        name: "malta",
        numberOfVisit: 0
      },
      shire: {
        aceId: 5,
        name: "shire",
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
    // debugger;
    const aceId = location.aceId
    const keyName = location.name
    // const tempAce = {
    //   [aceId]: {
    //     locations
    //   }
    // }
    const newAces = {
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
    }
    console.log("New Aces", this.state)
    return (
      this.setState(newAces)
    )
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
        <AceForm />
        {
          this.renderAceCards()
        }
      </div>
    )
  }
}
export default Aces;