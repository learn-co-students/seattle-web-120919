import React from 'react';
import logo from './logo.svg';
import './App.css';

let ace = [
  {
    name: "Alicia",
    age: 12,
    hobbies: [ ],
  },
  {
  name: "Eli",
  age:12,
  hobbies: [ ]
  },
  {
  name: "Christina",
  age:12,
  hobbies: [ ]
  },
  {
  name: "Allen",
  age:12,
  hobbies: [ ]
  },
  {
    name: "Eric",
    age:12,
    hobbies: [ ],  
  }
]

let locations = ["Mars", 
                "Venus", 
                "Earth", 
                "Pallet Town", 
                "Tokyo",
                "Malta",
                "The Shire"]

function App() {
  return (
    <>
      <h2>Hello ACE!!!</h2>
          {
          locations.map( location =>  <div>
                                      <li>{location}</li> 
                                      <button>Been There! </button>
                                      </div> )
          }
    </>
  )}

export default App;
