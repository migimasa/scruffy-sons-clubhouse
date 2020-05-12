import { handleResponse, handleError } from "./apiUtils";
import fetch from "node-fetch";

const baseUrl = process.env.REACT_APP_API_URL;

export function getCharacters() {
  const url = `${baseUrl}/characters/`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function getCharacterBackgrounds() {
  const url = `${baseUrl}/backgrounds/`;
  return fetch(url).then(handleResponse).catch(handleError);
}
