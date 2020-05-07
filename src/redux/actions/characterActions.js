import * as types from "./actionTypes";
import * as characterApi from "../../api/characterApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCharactersSuccess(characters) {
  return { type: types.LOAD_CHARACTERS_SUCCESS, characters };
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
