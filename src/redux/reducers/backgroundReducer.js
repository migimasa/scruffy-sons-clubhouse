import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function backgroundReducer(
  state = initialState.backgrounds,
  action
) {
  switch (action.type) {
    case types.LOAD_CHARACTER_BACKGROUNDS_SUCCESS:
      return action.backgrounds;
    default:
      return state;
  }
}
