import React from "react";
import "./assets/css/minty.css";
import "./App.css";
import GlassesBrowser from "./components/GlassesBrowser";
import Manager from "./components/Manager";
import NavBar from "./components/NavBar";
import GLASSES from "./data";
import Details from "./components/Details";

import { BrowserRouter as Router, Route } from "react-router-dom";

// We need to take care of routing and rendering GlassesBrowser, Manager, and Details
// With appropriate client-side routes / URLs

class App extends React.Component {
  state = {
    glasses: []
  };

  componentDidMount() {
    this.setState({ glasses: GLASSES });
  }

  render() {
    return (
      <div className="App">
        {/* <NavBar />
        <GlassesBrowser glasses={this.state.glasses} />
        <Manager /> */}
        {/* old version above */}
        {/* below. make sure Router wraps your route components! */}
        <Router>
          <NavBar />
          <Route
            path="/glasses"
            exact
            render={() => <GlassesBrowser glasses={this.state.glasses} />}
          />
          {/* needs render to accept state. exact to do exact match */}
          <Route
            path="/glasses/:id"
            exact
            render={props => (
              <Details {...props} glasses={this.state.glasses} />
            )}
          />
          {/* how to pass props down. the props has our id that we need */}
          <Route path="/manager" component={Manager} />
          {/* above component is dumb. does not need a render. */}
        </Router>
      </div>
    );
  }
}

export default App;
