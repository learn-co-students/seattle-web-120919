import React from 'react'


function AceForm(){
    const newAce = {
        name: "",
        age:"",
        hobbies: [ ]
    }
    return(
        <div>
            Create a Student
            <form>
                <label> Name</label> 
                <input type="text"/> <br/>
                <label> Age </label>
                <input type="text"/> <br/>
                <label> One Hobby </label>
                <input type="text"/> <br/>
                <button>Create a new Student</button>
            </form>
        </div>
    )
}

export default AceForm;
