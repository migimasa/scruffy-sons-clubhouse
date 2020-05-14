import * as types from "./actionTypes";
import * as backgroundApi from "../../api/backgroundApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCharacterBackgroundsSuccess(backgrounds) {
  return { type: types.LOAD_CHARACTER_BACKGROUNDS_SUCCESS, backgrounds };
}

export function loadCharacterBackgrounds() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return backgroundApi
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
