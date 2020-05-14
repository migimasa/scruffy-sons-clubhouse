import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function backgroundReducer(state = initialState.hooks, action) {
  switch (action.type) {
    case types.LOAD_CHARACTER_HOOKS_SUCCESS:
      return action.hooks;
    default:
      return state;
  }
}
