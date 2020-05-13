import * as types from "./actionTypes";
import * as characterApi from "../../api/characterApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCharactersSuccess(characters) {
  return { type: types.LOAD_CHARACTERS_SUCCESS, characters };
}

export function createCharacterSuccess(character) {
  return { type: types.CREATE_CHARACTER_SUCCESS, character };
}

export function loadCharacters() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return characterApi
      .getCharacters()
      .then((characters) => {
        dispatch(loadCharactersSuccess(characters));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function saveCharacter(character) {
  //eslint-disable-next-line no-unused-vars
  return function (dispatch, getState) {
    dispatch(beginApiCall());
    return characterApi
      .saveCharacter(character)
      .then((savedCharacter) => {
        dispatch(createCharacterSuccess(savedCharacter));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
