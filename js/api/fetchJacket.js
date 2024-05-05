import { BASE_URL } from "../constants.js";

export async function fetchJacket(id) {
  const url = `${BASE_URL}${id}`;
  const response = await fetch(url);

  console.log(response);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();
  return json;
}
