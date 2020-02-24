import React, { Component } from "react";

class Buffet extends Component {

  render() {

    return (
      <div className="col col-md-2">
        <div className="card">
          {/* IMAGE BELOW */}
          <img className="card-img-top" />
          <div className="card-body">
            <p>NAME OF FOOD</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Buffet;
