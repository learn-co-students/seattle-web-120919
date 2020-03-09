import React from "react";
import { connect } from "react-redux";
import { updateTitle } from "../actions/headerActions";

const Header = props => {
  console.log("header props: ", props);
  return (
    <header className="App-header">
      <div onClick={props.updateTitle}>
        <h1>{props.title}</h1>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    title: state.headerReducer.title
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateTitle: () => {
      dispatch(updateTitle());
    }
  };
};

// mDTP returns a function that takes in a dispatch variable. It returns another method called updateTitle that dispatches itself to the store.

export default connect(mapStateToProps, mapDispatchToProps)(Header);

// what is happening here?
// mSTP argument needs to go first, then mDTP.
