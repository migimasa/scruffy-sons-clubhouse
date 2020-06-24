import { handleResponse, handleError } from "./apiUtils";
import fetch from "node-fetch";

const baseUrl = process.env.REACT_APP_API_URL;

export function getCharacters() {
  const url = `${baseUrl}/characters/`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function saveCharacter(character) {
  const url = `${baseUrl}/characters`;

  const request = {
    method: "POST",
    header: { "Content-Type": "application/json" },
    body: JSON.stringify(character),
  };
  console.log(request);
  return fetch(url, request).then(handleResponse).catch(handleError);
}
