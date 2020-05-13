import * as types from "./actionTypes";
import * as characterApi from "../../api/characterApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCharactersSuccess(characters) {
  return { type: types.LOAD_CHARACTERS_SUCCESS, characters };
}

export function loadCharacterBackgroundsSuccess(backgrounds) {
  return { type: types.LOAD_CHARACTER_BACKGROUNDS_SUCCESS, backgrounds };
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

export function loadCharacterBackgrounds() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return characterApi
      .getCharacterBackgrounds()
      .then((backgrounds) => {
        dispatch(loadCharacterBackgroundsSuccess(backgrounds));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
