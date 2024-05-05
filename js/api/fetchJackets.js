import { BASE_URL } from "../constants.js";

export async function fetchJackets() {
  const response = await fetch(BASE_URL);

  console.log(response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  console.log(json);
  return json;
}
