import { BASE_URL} from "../constants.js";

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


// import { url } from "../constants.js";
// import { displayMessage } from "../ui/shared/displayMessage.js";
// import getQueryParam from "../helpers/getQueryParam.js";
// import { displayJacket } from "../ui/jackets/displayJacket.js";
// import { displayItemCount } from "../ui/jackets/displayItemCount.js";

// const id = getQueryParam("id");

// if (!id) {
//   window.location.href = "/";
// }

// async function fetchJacket(id) {
//   const productUrl = `${url}/${id}`;

//   try {
//     const response = await fetch(productUrl);

//     if (response.ok === true) {
//       const item = await response.json();
      
//       return displayJacket(item);
//     }

//     throw new Error("API call failed");
//   } catch (error) {
//     // displayMessage("#product-container", error.message);
//   }
// }

// fetchJacket(id);









