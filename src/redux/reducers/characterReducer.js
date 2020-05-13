import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function characterReducer(
  state = initialState.characters,
  action
) {
  switch (action.type) {
    case types.LOAD_CHARACTERS_SUCCESS:
      return action.characters;
    case types.CREATE_CHARACTER_SUCCESS:
      return [...state, { ...action.character }];
    default:
      return state;
  }
}
