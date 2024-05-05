import { fetchJackets } from "../../api/fetchJackets.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { renderProductThumbnails } from "../../ui/products/renderProductThumbnails.js";
import { renderProducts } from "../../ui/products/renderProducts.js";

export async function displayJackets() {
  console.log("displayJackets");
  try {
    const products = await fetchJackets();
    console.log(products);
    renderProducts("#featured-products", products);
    renderProductThumbnails("#thumbnails-container", products);
    // display products
  } catch (error) {
    console.log(error);
    // display error to the user
    // console.error(error);
    displayMessage("error", "Ooops There was an error fetching the jackets");
  }
}
