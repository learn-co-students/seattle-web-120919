import React from 'react';
import Aces from "./components/Aces"
import './App.css';



class App extends React.Component {
  render(){
    return (
      <>
        <h2>Hello ACES!!!</h2>
        Search by Student <input />
        <Aces />
      </>
    )}
  }
export default App;
