import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
import bandReducer from "./bandReducer";

export default combineReducers({
  headerReducer,
  bandReducer
});
