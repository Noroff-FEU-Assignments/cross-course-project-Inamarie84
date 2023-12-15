import { url } from "./constants.js";

async function fetchJackets() {
    try {
      const response = await fetch(url);
      const items = await response.json();
      displayMaleJackets(items);
      displayFemaleJackets(items);
    } catch (error) {
      const jacketContainer = document.querySelector("#featured-productsmen");
      jacketContainer.innerHTML = `<div class="error">Ooops...There was an error fetching the jackets</div>`;
    }
  }

  fetchJackets();

export function displayMaleJackets(items) {
    const jacketContainer = document.querySelector("#featured-productsmen");
  
    jacketContainer.innerHTML = "";
  
    // Use a for loop to iterate through the items
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
  
      // Check if the item is a female jacket
      if (item.gender === "Male") {
        // Check if the product is on sale
        const isOnSale = item.onSale;
  
        // Check if the product has a discounted price
        const hasDiscountedPrice = item.discountedPrice !== undefined;
  
        // Build the HTML string with conditional styles
        jacketContainer.innerHTML += `<div class="product">
                                       <img class="product-images" src="${item.image}" alt="Product Image">
                                       <h2>${item.title}</h2>
                                       <p>${item.description}</p>
                                       <div>Sizes: ${item.sizes.join(', ')}</div>
                                       <div>
                                          Price: 
                                          ${isOnSale
                                            ? `<span style="color: red; text-decoration: line-through;">$${item.price.toFixed(2)}</span>`
                                            : `$${item.price.toFixed(2)}`}
                                       </div>
                                       ${isOnSale
                                          ? `<div class="on-sale" style="color: green;">On Sale: $${item.discountedPrice.toFixed(2)}</div>`
                                          : ''}
                                       <button class="add-cta">Add to cart</button>
                                   </div>`;
      }
    }
  }