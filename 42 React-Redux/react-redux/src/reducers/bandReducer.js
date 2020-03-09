import pink_floyd from "../assets/pink_floyd.png";
// import yes from "../assets/yes.gif";
// import deep_purple from "../assets/deep_purple.jpg";
import beatles from "../assets/the_beatles.gif";
import rolling_stones from "../assets/rolling_stones.gif";
import zeppelin from "../assets/led_zeppelin.gif";
import who from "../assets/the_who.png";

const initialState = {
  bands: {
    1: {
      id: 1,
      name: "The Beatles",
      votes: 0,
      image: beatles
    },
    2: {
      id: 2,
      name: "The Who",
      votes: 0,
      image: who
    },
    3: {
      id: 3,
      name: "Led Zeppelin",
      votes: 0,
      image: zeppelin
    },
    4: {
      id: 4,
      name: "The Rolling Stones",
      votes: 0,
      image: rolling_stones,
      seen_in_person: "Yes"
    },
    5: {
      id: 5,
      name: "Pink Floyd",
      votes: 0,
      image: pink_floyd
    }
  }
};

const bandReducer = (state = initialState, action) => {
  console.log("reducer state: ", state);
  console.log("reducer action: ", action);
  switch (action.type) {
    case "INCREASE_VOTE": {
      debugger;
      return {
        ...state,
        bands: {
          ...state.bands,
          [action.payload.id]: {
            ...state.bands[action.payload.id],
            votes: state.bands[action.payload.id]["votes"] + 1
          }
        }
      };
    }
    case "DECREASE_VOTE": {
      return {
        ...state,
        bands: {
          ...state.bands,
          [action.payload.id]: {
            ...state.bands[action.payload.id],
            votes: state.bands[action.payload.id]["votes"] - 1
          }
        }
      };
    }
    default:
      return state;
  }
};

export default bandReducer;
