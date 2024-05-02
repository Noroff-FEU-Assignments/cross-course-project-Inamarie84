
import { fetchJackets } from "../../api/fetchJackets.js";
import { displayMessage } from "../../ui/shared/displayMessage.js";
import { renderProductThumbnails } from "../../ui/products/renderProductThumbnails.js";
import { renderProducts } from "../../ui/products/renderProducts.js";

export async function displayJackets() {
  console.log("displayProducts");
  try {
    const products = await fetchJackets();
    console.log(products);
    renderProducts("#featured-products", products);
    renderProductThumbnails("#thumbnails-container", products);
    // display products
  } catch (error) {
    // display error to the user
    console.error(error);
    displayMessage(
      "#products-container",
      "error",
      "There was an error fetching the products"
    );
  }
}



// import { createSizeDropdown } from "../../utils/sizedropdown.js";

// export function displayJackets(items, container) {
//     container.innerHTML = "";

//     for (let i = 0; i < items.length; i++) {
//         const item = items[i];

//         const isOnSale = item.onSale;
//         const isFavorite = item.favorite;

//         const productContainer = document.createElement("div");
//         productContainer.classList.add("product");

//         const imageContainer = document.createElement("div");
//         imageContainer.classList.add("image-container");
        
//         if (isFavorite) {
//             const tagElement = document.createElement("span");
//             tagElement.classList.add("tag");
//             tagElement.textContent = "Favorite";
//             imageContainer.appendChild(tagElement);
//         }
        
//         const imageElement = document.createElement("img");
//         imageElement.classList.add("product-images");
//         imageElement.src = item.image;
//         imageElement.alt = "Product Image";
//         imageContainer.appendChild(imageElement);

//         const titleElement = document.createElement("h2");
//         titleElement.textContent = item.title;

//         const descriptionElement = document.createElement("p");
//         descriptionElement.textContent = item.description;

//         // Create size dropdown with label
//         const sizeDropdownLabel = document.createElement("label");
//         sizeDropdownLabel.textContent = "Select Size:";
//         sizeDropdownLabel.setAttribute("for", `size-dropdown-${i}`);

//         const sizeDropdown = createSizeDropdown(item.sizes);
//         sizeDropdown.id = `size-dropdown-${i}`;

//         const sizeContainer = document.createElement("div");
//         sizeContainer.classList.add("products");
//         sizeContainer.appendChild(sizeDropdownLabel);
//         sizeContainer.appendChild(sizeDropdown);

//         const priceContainer = document.createElement("div");
//         priceContainer.classList.add("products");
//         priceContainer.textContent = "Price: ";

//         const priceValue = isOnSale ? `$${item.discountedPrice.toFixed(2)}` : `$${item.price.toFixed(2)}`;
//         const priceElement = document.createElement("span");
//         priceElement.style.color = isOnSale ? "#D81D1D" : "inherit";
//         priceElement.style.textDecoration = isOnSale ? "line-through" : "none";
//         priceElement.textContent = priceValue;
//         priceContainer.appendChild(priceElement);

//         const onSaleElement = document.createElement("div");
//         onSaleElement.classList.add("on-sale");
//         onSaleElement.style.color = "green";
//         onSaleElement.textContent = isOnSale ? `On Sale: $${item.discountedPrice.toFixed(2)}` : "";

//         const addToCartButton = document.createElement("button");
//         addToCartButton.classList.add("add-cta");
//         addToCartButton.dataset.id = item.id;
//         addToCartButton.dataset.title = item.title;
//         addToCartButton.dataset.price = item.price;
//         addToCartButton.dataset.image = item.image;
//         addToCartButton.dataset.action = "add-to-cart";
//         addToCartButton.textContent = "Add to cart";

//         const checkoutButton = document.createElement("button");
//         checkoutButton.classList.add("checkout-cta");
//         checkoutButton.textContent = "Checkout";

//         const viewDetailsLink = document.createElement("a");
//         viewDetailsLink.href = `viewproductdetails.html?id=${item.id}`;
//         viewDetailsLink.classList.add("view");
//         viewDetailsLink.textContent = "View details";

//         const buttonsContainer = document.createElement("div");
//         buttonsContainer.classList.add("buttons");
//         buttonsContainer.appendChild(addToCartButton);
//         buttonsContainer.appendChild(checkoutButton);
//         buttonsContainer.appendChild(viewDetailsLink);

//         productContainer.appendChild(imageContainer);
//         productContainer.appendChild(titleElement);
//         productContainer.appendChild(descriptionElement);
//         productContainer.appendChild(sizeContainer);
//         productContainer.appendChild(priceContainer);
//         productContainer.appendChild(onSaleElement);
//         productContainer.appendChild(buttonsContainer);

//         container.appendChild(productContainer);

//         checkoutButton.addEventListener("click", function () {
//             window.location.href = "/cart.html";
//         });

//         sizeDropdown.addEventListener("change", function () {
//             const selectedSize = this.value;
//             productContainer.dataset.selectedSize = selectedSize;
//         });
//     }
// }

