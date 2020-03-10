import React from "react";
import BandCard from "./BandCard";
import { connect } from "react-redux";

const Bands = props => {
  console.log("connect functionality: ", connect);

  const mapBands = () => {
    let bandArray = Object.values(props.bands);
    debugger;
    let bandCards = bandArray.map(band => {
      return <BandCard key={band.id} band={band} />;
    });
    return bandCards;
  };

  return (
    <div>
      <div className="container">{mapBands()}</div>
    </div>
  );
};

const mapStateToProps = state => {
  debugger;
  return {
    bands: state.bandReducer.bands
  };
};

export default connect(mapStateToProps)(Bands);
// what is happening here? Why no null in second position?
