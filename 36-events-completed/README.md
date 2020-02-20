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


    creating an object key : Object.keys(this.state.aces).length + 1
```




- Declarative vs Imperitive Programming
- SQLite3




App -> Ace -> Locations -> LocationCard

```Javascript
    handleNameInput = (e) => {
        console.log(e.target.value)
        this.setState({name: e.target.value})
    }
    handleAgeInput = (e) => {
        console.log(e.target.value)
        this.setState({age: e.target.value})
    }
    handleHobbyInput = (e) => {
        console.log(e.target.value)
        this.setState({hobbies: [e.target.value]})
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.addStudent(this.state.name, this.state.age, this.state.hobbies)
    }
```

## Questions
- state.persists, react uses this to keep state around while react implements and attached new state to DOM
- previousState;