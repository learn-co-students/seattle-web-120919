# React: Components and props


## SWBATs
* What is `create-react-app` and why is it cool?
* How can I create a React app that renders "Hello, World!" to the screen?
* What is a component in the context of React?
* What is a component made of in JavaScript?
* What's the difference between imperative and declarative programming?
    https://youtu.be/cDA3_5982h8?t=42
* What is JSX and why would I want it in my app?
* What is the virtual DOM and why is it cool?
* What is the difference between the virtual DOM and the actual DOM?
* How can I describe the component hierarchy using the terms root, parent, and child?
* How can I create a React app that renders a container, one list, and five list items?
* How can I define the term prop in the context of React?
* How can I understand the types of data that can be passed as props
* Questions:
* ...

1. Find the div element "root"
```Javascript
    root = document.getElementById("root")
    h1 = document.createElement("h1")
    root.appendChild(h1)
```

- Declarative vs Imperitive Programming
- SQLite3




App -> Ace -> Locations -> LocationCard


#### Questions
- Arrow function and when to do one liners
- Arrow function -> is it ever a wrong choice to have arrow function.


### Reference
```Javascript
// Code to update state and replace what parts you need with the spread operator
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

// Adding a new student
    return (
      // console.log("Triggered adding a new student", name, age, hobbies)
      // newLocations = {...this.state.aces[locations]}
      this.setState(() => {
        const newId= Object.keys(this.state.aces).length + 1
        const newAce = {
          name: name,
          id: newId,
          age: age,
          hobbies: [hobbies],
          locations: {}
        }
        locations.forEach(location => {
          newAce.locations[location] = {
              aceId: newId,
              name: location,
              numberOfVisit: 0
          }
        })
        return {
          aces: {
            ...this.state.aces, 
              [newId]: newAce
          }
        }
      })
      // , () => console.log(this.state.aces)
    )

//the whole reference code for Form
import React from 'react'

const INITIAL_STATE = {
        name: "",
        age: 0,
        hobbies: []
}
class StudentForm extends React.Component {

    state =  INITIAL_STATE 
    handleChangeName = (e) =>{
        console.log(e.target.value) 
        this.setState({name: e.target.value})
    }
    handleChangeAge = (e) =>{
        console.log(e.target.value) 
        this.setState({age: e.target.value})
    }
    handleChangeHobby = (e) =>{
        console.log(e.target.value) 
        let newHobby = [...this.state.hobbies,e.target.value]
        this.setState({hobbies: newHobby})
    }
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.addStudent(this.state.name, this.state.age, this.state.hobbies[this.state.hobbies.length-1])
        this.setState(INITIAL_STATE)
    }
    render(){
        return (
            <div> 
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="name"> Name </label> 
                    <input htmltype="text" value={this.state.name} 
                                           onChange={this.handleChangeName}/><p/>
                    <label htmlFor="age"> Age </label> 
                    <input htmltype="text" value={this.state.age}
                                           onChange={this.handleChangeAge}/><p/>
                    <label htmlFor="hobby"> One Hobby </label> 
                    <input htmltype="text" value={this.state.hobbies.first}
                                           onChange={this.handleChangeHobby}/><p/>
                    <button>Create a new Student</button>
                </form>
            </div>
        )
    }
}
export default StudentForm
```