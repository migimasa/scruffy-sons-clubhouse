import { handleResponse, handleError } from "./apiUtils";
import fetch from "node-fetch";

const baseUrl = process.env.REACT_APP_API_URL;

export function getCharacters() {
  const url = `${baseUrl}/characters/`;
  return fetch(url).then(handleResponse).catch(handleError);
}

export function saveCharacter(character) {
  const url = `${baseUrl}/characters/`;
  debugger;
  console.log(JSON.stringify(character));
  return fetch(url, {
    method: "POST",
    header: { "content-type": "application/json" },
    body: JSON.stringify(character),
  })
    .then(handleResponse)
    .catch(handleError);
}
