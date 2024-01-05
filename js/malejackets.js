import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";


function handleClick(event) {
  const jacket = { id: event.target.dataset.id, title: event.target.dataset.title, price: event.target.dataset.price };
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(jacket);
  localStorage.setItem("cart", JSON.stringify(cart));
}


async function fetchJackets() {
    try {
      const response = await fetch(url);
      const items = await response.json();
      displayMaleJackets(items);
    } catch (error) {
      console.log(error);
      displayMessage("#featured-productsmen", "Ooops...There was an error fetching the jackets", "error");

      // const jacketContainer = document.querySelector("#featured-productsmen");
      // jacketContainer.innerHTML = '<div class="error">Ooops...There was an error fetching the jackets</div>';
    }
  }

  function displayMaleJackets(items) {
    const jacketContainer = document.querySelector("#featured-productsmen");

    jacketContainer.innerHTML = "";

    // Use a for loop to iterate through the items
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        // Check if the item is a male jacket
        if (item.gender === "Male") {
            // Check if the product is on sale
            const isOnSale = item.onSale;

            // Check if the product has a discounted price
            const hasDiscountedPrice = item.discountedPrice !== undefined;

            const productContainer = document.createElement('div');
            productContainer.classList.add('product');

                  const imageElement = document.createElement('img');
                  imageElement.classList.add('product-images');
                  imageElement.src = item.image;
                  imageElement.alt = 'Product Image';
      
                  const titleElement = document.createElement('h2');
                  titleElement.textContent = item.title;
      
                  const descriptionElement = document.createElement('p');
                  descriptionElement.textContent = item.description;
      
                  const sizeContainer = document.createElement('div');
                  sizeContainer.classList.add('products');
                  sizeContainer.textContent = 'Size: ';
      
                  const sizeDropdown = document.createElement('select');
                  sizeDropdown.classList.add('size-dropdown');
      
                  const sizeOptions = item.sizes.map(size => {
                      const option = document.createElement('option');
                      option.value = size;
                      option.textContent = size;
                      return option;
                  });
      
                  sizeOptions.forEach(option => sizeDropdown.appendChild(option));
      
                  sizeContainer.appendChild(sizeDropdown);
      
                  // Create the Price element
                  const priceContainer = document.createElement('div');
                  priceContainer.classList.add('products');
                  priceContainer.textContent = 'Price: ';
      
                  const priceValue = isOnSale ? `$${item.discountedPrice.toFixed(2)}` : `$${item.price.toFixed(2)}`;
      
                  const priceElement = document.createElement('span');
                  priceElement.style.color = isOnSale ? 'red' : 'inherit';
                  priceElement.style.textDecoration = isOnSale ? 'line-through' : 'none';
                  priceElement.textContent = priceValue;
      
                  priceContainer.appendChild(priceElement);
      
                  // Create the On Sale element if applicable
                  const onSaleElement = document.createElement('div');
                  onSaleElement.classList.add('on-sale');
                  onSaleElement.style.color = 'green';
                  onSaleElement.textContent = isOnSale ? `On Sale: $${item.discountedPrice.toFixed(2)}` : '';
      
                  // Create the Add to Cart button
                  const addToCartButton = document.createElement('button');
                  addToCartButton.classList.add('add-cta');
                  addToCartButton.dataset.id = item.id;
                  addToCartButton.dataset.title = item.title;
                  addToCartButton.dataset.price = item.price;
                  addToCartButton.textContent = 'Add to cart';
      
                  // Create the View Details link
                  const viewDetailsLink = document.createElement('a');
                  viewDetailsLink.href = `SpecificProduct.html?id=${item.id}`;
                  viewDetailsLink.classList.add('view');
                  viewDetailsLink.textContent = 'View details';
      
                  // Append all elements to the product container
                  productContainer.appendChild(imageElement);
                  productContainer.appendChild(titleElement);
                  productContainer.appendChild(descriptionElement);
                  productContainer.appendChild(sizeContainer);
                  productContainer.appendChild(priceContainer);
                  productContainer.appendChild(onSaleElement);
                  productContainer.appendChild(addToCartButton);
                  productContainer.appendChild(viewDetailsLink);
      
                  jacketContainer.appendChild(productContainer);
              }
          }

          const addButtons = document.querySelectorAll(".add-cta");

          addButtons.forEach(function (button) {
              button.addEventListener("click", handleClick);
          });
      }
      
      document.addEventListener('DOMContentLoaded', function () {
          const sizeDropdowns = document.querySelectorAll('.size-dropdown');
      
          sizeDropdowns.forEach(function (dropdown) {
              dropdown.addEventListener('change', function () {
                  const selectedSize = this.value;
                  const productContainer = this.closest('.product');
                  const sizeDisplay = productContainer.querySelector('.selected-size');
      
                  // Update the displayed size
                  sizeDisplay.textContent = selectedSize;
      
                  // Optionally, you can add the selected size to the cart or perform other actions here
              });
          });
      });
      
      fetchJackets();  // Ensure that the fetchJackets function is called after defining other functions and event listeners.
      