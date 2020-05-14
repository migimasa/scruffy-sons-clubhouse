import { combineReducers } from "redux";
import characters from "./characterReducer";
import apiCallsInProgress from "./apiStatusReducer";
import backgrounds from "./backgroundReducer";
import hooks from "./hookReducer";

const rootReducer = combineReducers({
  characters,
  backgrounds,
  hooks,
  apiCallsInProgress,
});

export default rootReducer;
