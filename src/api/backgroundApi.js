import { handleResponse, handleError } from "./apiUtils";
import fetch from "node-fetch";

const baseUrl = process.env.REACT_APP_API_URL + "/backgrounds/";

export function getCharacterBackgrounds() {
  debugger;
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
