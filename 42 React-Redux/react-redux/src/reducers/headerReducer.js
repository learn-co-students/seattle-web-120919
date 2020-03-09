const initialState = {
  title: "ROCK"
};

const headerReducer = (state = initialState, action) => {
  console.log("header reducer state:", state);
  console.log("header reducer action:", action);
  switch (action.type) {
    case "UPDATE_TITLE":
      const updatedTitle = state.title === "ROCK" ? "ROLL" : "ROCK";
      return {
        ...state,
        title: updatedTitle
      };
    default:
      return state;
  }
};

export default headerReducer;
