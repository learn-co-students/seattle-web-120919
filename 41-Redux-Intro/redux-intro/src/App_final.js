import React from "react";
import images from "./assets/imageContainer";
import sadKanye from "./assets/kanye.gif";
import { createStore } from "redux";
import { reducer } from "./reducerfinal";
import "./App.css";

// const store = createStore(reducer);

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log("get state", store.getState());

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>I miss the old Kanye</h1>
        </header>
        <Counter />
        <AlbumContainer />
      </div>
    );
  }
}

class Counter extends React.Component {
  increaseCount = () => {
    store.dispatch({
      type: "INCREASE"
    });
  };

  decreaseCount = () => {
    store.dispatch({
      type: "DECREASE"
    });
  };

  render() {
    return (
      <>
        <h2>You have clicked this {store.getState().count} times</h2>
        <div className="button-container">
          <button onClick={this.decreaseCount}>Decrease</button>
          <button onClick={this.increaseCount}>Increase</button>
          {/* <button>Decrease</button>
          <button>Increase</button> */}
        </div>
      </>
    );
  }
}

class AlbumContainer extends React.Component {
  showAlbum = () => {
    if (store.getState().count < 0) {
      return sadKanye;
    } else {
      const index = store.getState().count % images.length;
      return images[index];
    }
  };

  render() {
    return (
      <div className="album-container">
        <img src={this.showAlbum()} alt={"Kanye album"} />
      </div>
    );
  }
}

export default App;
