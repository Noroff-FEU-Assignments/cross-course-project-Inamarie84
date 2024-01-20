import { url } from "../constants.js";
import { displayMessage } from "../ui/shared/displayMessage.js";
import getQueryParam from "../helpers/getQueryParam.js";
import { updateCartCount } from "../utils/updatecartcount.js";
import { displayJacket } from "../ui/jackets/displayJacket.js";

const id = getQueryParam("id");

if (!id) {
  window.location.href = "/";
}

async function fetchJacket(id) {
  const productUrl = `${url}/${id}`;

  try {
    const response = await fetch(productUrl);

    if (response.ok === true) {
      const item = await response.json();
      updateCartCount();
      return displayJacket(item);
    }

    throw new Error("API call failed");
  } catch (error) {
    displayMessage("#product-container", error.message);
  }
}

fetchJacket(id);


