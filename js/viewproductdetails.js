import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";
import getQueryParam from "./helpers/getQueryParam.js";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

const id = getQueryParam("id");

if (!id) {
  window.location.href = "/";
}

// const productUrl = `${url}/${id}`;

// console.log(productUrl);

async function fetchJacket(id) {
  const productUrl = `${url}/${id}`;

  try {
    const response = await fetch(productUrl);

    if (response.ok === true) {
      const item = await response.json();
      return displayJacket(item);
    }
    // create html for the single object

    throw new Error("API call failed");
  } catch (error) {
    // console.log(error);

    displayMessage("#product-container", error.message);
    // const container = document.querySelector("#product-container");
    // container.innerHTML = '<div class="error">Ooops...There was an error fetching the jacket</div>';
  }
}

fetchJacket(id);

function displayJacket(jacket) {

  const { title: jacketTitle, price: jacketPrice, image: jacketImage, description: jacketDescription, baseColor: jacketColor } = jacket;

  document.title = `${jacketTitle} | ${document.title}`;

  const container = document.querySelector("#product-container");

  container.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = jacketTitle;

  const image = document.createElement("img");
  image.src = jacketImage; // Replace 'imageUrl' with the property that holds the image URL in your jacket object
  image.alt = jacketTitle; // Set the alt attribute for accessibility
  image.classList.add("detail-image");

  const baseColor = document.createElement("p");
  baseColor.textContent = `Color: ${jacketColor}`;

  const description = document.createElement("p");
  description.textContent = jacketDescription;

  const price = document.createElement("h2");
  price.textContent = `$ ${jacketPrice}`;

  container.append(heading);
  container.appendChild(image);
  container.append(description);
  container.append(baseColor);
  container.append(price);
  

  // Add "Add to Cart" link
  const addToCartLink = document.createElement("a");
  addToCartLink.textContent = "Add to Cart";
  addToCartLink.href = "/Pages/checkout.html"; // Set the appropriate URL
  addToCartLink.classList.add("add-cta");

  // Add "Continue Shopping" link
  const continueShoppingLink = document.createElement("a");
  continueShoppingLink.textContent = "Continue Shopping";
  continueShoppingLink.href = "/"; // Set the appropriate URL
  continueShoppingLink.classList.add("add-cta");

  // Append links to the container
  container.appendChild(addToCartLink);
  container.appendChild(continueShoppingLink);

  // Add click event listeners after appending to the DOM
  addToCartLink.addEventListener("click", addToCartButtonClick);
  continueShoppingLink.addEventListener("click", continueShoppingButtonClick);

  // Function for handling "Add to Cart" button click
  function addToCartButtonClick() {
    // Add your logic for adding the item to the cart
    console.log("Added to Cart");
  }

  // Function for handling "Continue Shopping" button click
  function continueShoppingButtonClick() {
    // Add your logic for continuing shopping
    console.log("Continue Shopping");
  }
}
