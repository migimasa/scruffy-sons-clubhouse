import { combineReducers } from "redux";
import characters from "./characterReducer";
import apiCallsInProgress from "./apiStatusReducer";
import backgrounds from "./backgroundReducer";

const rootReducer = combineReducers({
  characters,
  backgrounds,
  apiCallsInProgress,
});

export default rootReducer;
