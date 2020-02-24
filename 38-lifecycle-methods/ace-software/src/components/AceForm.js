import React from 'react'

class AceForm extends React.Component {

    constructor(){
        super();
        console.log("%c CONSTR FOR ACE FORM", "color: green")
        this.state =  {
            name: "",
            age: 0,
            hobbies: [] 
        }
      }

    // state =  {
    //     name: "",
    //     age: 0,
    //     hobbies: [] 
    // }
    handleNameInput = (e) => {
        console.log(e.target.value)
        this.setState({name: e.target.value})
    }
    handleAgeInput = (e) => {
        console.log(e.target.value)
        this.setState({age: e.target.value})
    }
    handleHobbiesInput = (e) => {
        console.log(e.target.value)
        this.setState({hobbies: [e.target.value]})
    }

    handleSubmit = (e) => {
        console.log("Form Submitted")
        e.preventDefault()
        this.props.newAceState(this.state.name, this.state.age, this.state.hobbies)
    }

    componentDidMount(){
        console.log("%c FORM MOUNTED", "color: green")
    }

    render(){
        console.log("%c RENDER FORM", "color: green")
        return (
            <div> 
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name" > Name </label> 
                    <input htmltype="text" value={this.state.name} onChange={this.handleNameInput}/><p/>
                    <label htmlFor="age" > Age </label>
                    <input htmltype="text" value={this.state.age} onChange={this.handleAgeInput}/><p/>
                    <label htmlFor="hobby" > One Hobby </label> 
                    <input htmltype="text" value={this.state.hobbies} onChange={this.handleHobbiesInput}/><p/>
                    <button htmltype="submit" >Create a new Student</button>
                </form>
            </div>
        )
    }
}
export default AceForm