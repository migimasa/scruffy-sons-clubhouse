import { handleResponse, handleError } from "./apiUtils";
import fetch from "node-fetch";

// const baseUrl = process.env.API_URL + "/characters/";
const baseUrl = process.env.REACT_APP_API_URL + "/characters/";

export function getCharacters() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}
