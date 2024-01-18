import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";
import { createSizeDropdown } from "./sizedropdown.js";

let femaleContainer =
  document.querySelector("#featured-productswomen") ||
  document.createElement("div");
femaleContainer.id = "featured-productswomen";
femaleContainer.classList.add("featured-products");

let maleContainer =
  document.querySelector("#featured-productsmen") ||
  document.createElement("div");
maleContainer.id = "featured-productsmen";
maleContainer.classList.add("featured-products");

function handleClick(event) {
  const jacket = {
    id: event.target.dataset.id,
    title: event.target.dataset.title,
    price: event.target.dataset.price,
    size: event.target.closest(".product").dataset.selectedSize,
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(jacket);
  localStorage.setItem("cart", JSON.stringify(cart));
}

async function fetchAndDisplayJackets(containerId, gender) {
  try {
    const response = await fetch(url);
    const items = await response.json();
    displayJackets(items, containerId, gender); // Pass containerId as a parameter
  } catch (error) {
    console.log(error);
    displayMessage(
      containerId,
      `Ooops...There was an error fetching the jackets for ${gender}`,
      "error"
    );
  }
}

function displayJackets(items, containerId, gender) {
  const jacketContainer = document.querySelector(containerId);

  if (!jacketContainer) {
    console.error(`Container with ID '${containerId}' not found.`);
    return;
  }

  jacketContainer.innerHTML = "";

  // Use a for loop to iterate through the items
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.gender === gender) {
      // Check if the product is on sale
      const isOnSale = item.onSale;

      const productContainer = document.createElement("div");
      productContainer.classList.add("product");

      const imageElement = document.createElement("img");
      imageElement.classList.add("product-images");
      imageElement.src = item.image;
      imageElement.alt = "Product Image";

      const titleElement = document.createElement("h2");
      titleElement.textContent = item.title;

      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = item.description;

      const sizeContainer = document.createElement("div");
      sizeContainer.classList.add("products");
      sizeContainer.textContent = "Size: ";

      const sizeDropdown = createSizeDropdown(item.sizes);

      sizeContainer.appendChild(sizeDropdown);

      // Create the Price element
      const priceContainer = document.createElement("div");
      priceContainer.classList.add("products");
      priceContainer.textContent = "Price: ";

      const priceValue = isOnSale
        ? `$${item.discountedPrice.toFixed(2)}`
        : `$${item.price.toFixed(2)}`;

      const priceElement = document.createElement("span");
      priceElement.style.color = isOnSale ? "red" : "inherit";
      priceElement.style.textDecoration = isOnSale ? "line-through" : "none";
      priceElement.textContent = priceValue;

      priceContainer.appendChild(priceElement);

      // Create the On Sale element if applicable
      const onSaleElement = document.createElement("div");
      onSaleElement.classList.add("on-sale");
      onSaleElement.style.color = "green";
      onSaleElement.textContent = isOnSale
        ? `On Sale: $${item.discountedPrice.toFixed(2)}`
        : "";

      // Create the Add to Cart button
      const addToCartButton = document.createElement("button");
      addToCartButton.classList.add("add-cta");
      addToCartButton.dataset.id = item.id;
      addToCartButton.dataset.title = item.title;
      addToCartButton.dataset.price = item.price;
      addToCartButton.textContent = "Add to cart";

      // Create the View Details link
      const viewDetailsLink = document.createElement("a");
      viewDetailsLink.href = `SpecificProduct.html?id=${item.id}`;
      viewDetailsLink.classList.add("view");
      viewDetailsLink.textContent = "View details";

      // Append all elements to the product container
      productContainer.appendChild(imageElement);
      productContainer.appendChild(titleElement);
      productContainer.appendChild(descriptionElement);
      productContainer.appendChild(sizeContainer);
      productContainer.appendChild(priceContainer);
      productContainer.appendChild(onSaleElement);
      productContainer.appendChild(addToCartButton);
      productContainer.appendChild(viewDetailsLink);

      if (item.gender === "Female") {
        femaleContainer.appendChild(productContainer);
      } else if (item.gender === "Male") {
        maleContainer.appendChild(productContainer);
      }

      // Update the event listener for the size dropdown
      sizeDropdown.addEventListener("change", function () {
        const selectedSize = this.value;
        productContainer.dataset.selectedSize = selectedSize;
        // Optionally, you can update the displayed size or perform other actions here
      });
    }

    const addButtons = document.querySelectorAll(".add-cta");

    addButtons.forEach(function (button) {
      button.addEventListener("click", handleClick);
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const femaleContainer = document.createElement("div");
  femaleContainer.id = "featured-productswomen";
  femaleContainer.classList.add("featured-products");
  const maleContainer = document.createElement("div");
  maleContainer.id = "featured-productsmen";
  maleContainer.classList.add("featured-products");

  document.body.appendChild(femaleContainer);
  document.body.appendChild(maleContainer);

  fetchAndDisplayJackets("#featured-productswomen", "Female");
  fetchAndDisplayJackets("#featured-productsmen", "Male");
});
