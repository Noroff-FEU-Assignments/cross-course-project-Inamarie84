import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";


async function fetchJackets() {
    try {
      const response = await fetch(url);
      const items = await response.json();
      displayFemaleJackets(items);
    } catch (error) {
      console.log(error);
      displayMessage("#featured-productswomen", "Ooops...There was an error fetching the jackets", "error");


      // const jacketContainer = document.querySelector("#featured-productswomen");
      // jacketContainer.innerHTML = '<div class="error">Ooops...There was an error fetching the jackets</div>';
    }
  }

fetchJackets();


function displayFemaleJackets(items) {
  const jacketContainer = document.querySelector("#featured-productswomen");

  jacketContainer.innerHTML = "";

  // Use a for loop to iterate through the items
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Check if the item is a female jacket
    if (item.gender === "Female") {
      // Check if the product is on sale
      const isOnSale = item.onSale;

      // Check if the product has a discounted price
      const hasDiscountedPrice = item.discountedPrice !== undefined;

      const sizeBoxes = item.sizes.map(size => `<div class="size-box" data-size="${size}">
                                                <div class="size-box-inner">${size}</div>
                                                </div>`).join('');
      

      // Build the HTML string with conditional styles
      jacketContainer.innerHTML += `<div class="product">
                                     <img class="product-images" src="${item.image}" alt="Product Image">
                                     <h2>${item.title}</h2>
                                     <div class="products">Size: ${sizeBoxes}</div>
                                     <div class="products">
                                        Price: 
                                        ${isOnSale
                                          ? `<span style="color: red; text-decoration: line-through;">$${item.price.toFixed(2)}</span>`
                                          : `$${item.price.toFixed(2)}`}
                                     </div>
                                     ${isOnSale
                                        ? `<div class="on-sale" style="color: green;">On Sale: $${item.discountedPrice.toFixed(2)}</div>`
                                        : ''}
                                        <button class="add-cta" data-id="${item.id}" data-title="${item.title}" data-price="${item.price}">Add to cart</button>
                                      <a href="SpecificProduct.html?id=${item.id}" class="view">View details</a>
                                      </div>`;

                                      
    }
  }

  const addButtons = document.querySelectorAll(".add-cta"); 

  addButtons.forEach(function(button) {
    button.addEventListener("click", handleClick);
  });
  
  
  // const addButton = document.querySelector("#addtocart-button");
  
  // addButton.addEventListener("click", handleClick);
  
  function handleClick(event) {
    // console.dir(event.target.dataset.id);
    // console.dir(event.target.dataset.title);
    // console.dir(event.target.dataset.price);

    const jacket = { id: event.target.dataset.id, title: event.target.dataset.title, price: event.target.dataset.price };

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    console.log(cart);

    cart.push(jacket);

    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

// denne koden funker ikke // plassert feil? 

// document.addEventListener('DOMContentLoaded', function () {
//   const sizeBoxes = document.querySelectorAll('.size-box');
//   console.log('Number of size boxes:', sizeBoxes.length);

//   sizeBoxes.forEach(function (box) {
//     box.addEventListener('click', function () {
//       console.log('Size box clicked');
//       box.classList.toggle('selected');
//     });
//   });
// });

  