import React from "react";
import { connect } from "react-redux";
import { increaseVote, decreaseVote } from "../actions/bandActions";

const BandCard = props => {
  const { band } = props;
  // destructuring to make things easier to work with

  return (
    <div className="band-card">
      <h2>{band.name}</h2>
      {/* <h4>{band.venue}</h4> */}
      <h4>{band.seen_in_person ? band.seen_in_person : ""}</h4>
      <h3>Votes: {band.votes}</h3>
      <div className="logo-card">
        <img src={band.image} alt={band.name}></img>
      </div>

      <br />
      <button
        className="increase-btn"
        onClick={() => {
          props.increaseVote(band.id);
        }}
      >
        Upvote
      </button>
      <button
        className="decrease-btn"
        onClick={() => {
          props.decreaseVote(band.id);
        }}
      >
        Downvote
      </button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    increaseVote: id => dispatch(increaseVote(id)),
    decreaseVote: id => dispatch(decreaseVote(id))
  };
};

// mDTP takes in a dispatch and returns an object of two methods

export default connect(
  null,
  mapDispatchToProps
)(BandCard);

// what is happening here? what is null?
// A: because we are not using state here. State is null. mSTP needs to go first in this method.
