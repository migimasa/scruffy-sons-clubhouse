import { handleResponse, handleError } from "./apiUtils";
import fetch from "node-fetch";

const baseUrl = process.env.REACT_APP_API_URL + "/hooks/";

export function getCharacterHooks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
