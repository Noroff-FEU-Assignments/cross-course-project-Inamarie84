import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";
import getQueryParam from "./helpers/getQueryParam.js";
import { createSizeDropdown } from "./reusablefunctions/sizedropdown.js";
import { updateCartCount } from "./reusablefunctions/updatecartcount.js";

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
    // console.log(error);

    displayMessage("#product-container", error.message);
    // const container = document.querySelector("#product-container");
    // container.innerHTML = '<div class="error">Ooops...There was an error fetching the jacket</div>';
  }
}

fetchJacket(id);

function displayJacket(jacket) {

  const { title: jacketTitle, price: jacketPrice, image: jacketImage, description: jacketDescription, baseColor: jacketColor, sizes: jacketSizes } = jacket;

  document.title = `${jacketTitle} | ${document.title}`;

  const container = document.querySelector("#product-container");

  container.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = jacketTitle;

  const image = document.createElement("img");
  image.src = jacketImage; 
  image.alt = jacketTitle; 
  image.classList.add("detail-image");

  const baseColor = document.createElement("p");
  baseColor.textContent = `Color: ${jacketColor}`;

  const description = document.createElement("p");
  description.textContent = jacketDescription;

  const sizeDropdownContainer = document.createElement("div");
  sizeDropdownContainer.classList.add("size-dropdown-container");

  const sizeDropdown = createSizeDropdown(jacketSizes);
  sizeDropdownContainer.appendChild(sizeDropdown);

  const price = document.createElement("h2");
  price.textContent = `$ ${jacketPrice}`;

  container.append(heading);
  container.appendChild(image);
  container.append(description);
  container.append(baseColor);
  container.appendChild(sizeDropdownContainer);
  container.append(price);
  

  // "Add to Cart" link
  const addToCartLink = document.createElement("a");
  addToCartLink.textContent = "Add to Cart";
  addToCartLink.href = "/Pages/checkout.html";
  addToCartLink.classList.add("add-cta");

  // Add "Continue Shopping" link
  const continueShoppingLink = document.createElement("a");
  continueShoppingLink.textContent = "Continue Shopping";
  continueShoppingLink.href = "/"; 
  continueShoppingLink.classList.add("add-cta");

  // Append links to the container
  container.appendChild(addToCartLink);
  container.appendChild(continueShoppingLink);

  // Add click event listeners after appending to the DOM
  addToCartLink.addEventListener("click", addToCartButtonClick);
  continueShoppingLink.addEventListener("click", continueShoppingButtonClick);

  // Function for handling "Add to Cart" button click
  function addToCartButtonClick() {
    const selectedSize = sizeDropdown.value;
    // console.log("Added to Cart - Size: ", selectedSize);
    // console.log("Added to Cart");
  }

  // Function for handling "Continue Shopping" button click
  function continueShoppingButtonClick() {
    // Add your logic for continuing shopping
    console.log("Continue Shopping");
  }
}

