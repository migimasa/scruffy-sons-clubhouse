import * as types from "./actionTypes";
import * as hookApi from "../../api/hookApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadCharacterHooksSuccess(hooks) {
  return { type: types.LOAD_CHARACTER_HOOKS_SUCCESS, hooks };
}

export function loadCharacterHooks() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return hookApi
      .getCharacterHooks()
      .then((hooks) => {
        dispatch(loadCharacterHooksSuccess(hooks));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
