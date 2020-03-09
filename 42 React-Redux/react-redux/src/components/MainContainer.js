import React from "react";
import Bands from "./Bands.js";

class MainContainer extends React.Component {
  render() {
    return (
      <div>
        <Bands />
        <h3> Thanks for voting!! </h3>
      </div>
    );
  }
}

export default MainContainer;

// Q? why no map statements here?
// A: No state or props here.
