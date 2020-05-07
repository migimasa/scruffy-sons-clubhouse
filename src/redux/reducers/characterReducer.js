import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function characterReducer(
  state = initialState.characters,
  action
) {
  switch (action.type) {
    case types.LOAD_CHARACTERS_SUCCESS:
      return action.characters;
    default:
      return state;
  }
}
