import React from "react";
import { Redirect } from "react-router-dom";

class Details extends React.Component {
  getGlasses = () => {
    const id = this.props.match.params.id;
    // inside react router dom, props.match.params is where our id lives.
    let foundGlasses = { image: "", style: "", maker: "" };
    for (const glasses of this.props.glasses) {
      if (glasses.id == id) {
        foundGlasses = glasses;
      }
    }
    return foundGlasses;
  };

  render() {
    if (this.props.match.params.id > 4) {
      return <Redirect to="/glasses" />;
      // redirect if it is an invalid.
    } else {
      setTimeout(() => {
        this.props.history.push("/manager");
      }, 2500);
      const { image, style, maker } = this.getGlasses();
      return (
        <>
          {" "}
          <img className="card-img-top" alt="glasses" src={image} />
          <div className="card-body">
            <h3>{style}</h3>
            <h4>{maker}</h4>
          </div>
        </>
      );
    }
  }
}

export default Details;
