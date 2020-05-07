import { handleResponse, handleError } from "./apiUtils";
import fetch from "node-fetch";
import https from "https";

// const baseUrl = process.env.API_URL + "/characters/";
const baseUrl = "https://localhost:44348/characters/";

export function getCharacters(id) {
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  return fetch(baseUrl + (id || ""), { agent })
    .then(handleResponse)
    .catch(handleError);
}
