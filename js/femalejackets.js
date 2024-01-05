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


// ... (your existing code)

function displayFemaleJackets(items) {
  const jacketContainer = document.querySelector("#featured-productswomen");

  jacketContainer.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    if (item.gender === "Female") {
      const isOnSale = item.onSale;
      const hasDiscountedPrice = item.discountedPrice !== undefined;

      // Declare sizeBoxes outside the loop
      const sizeBoxes = item.sizes.map(size => `<div class="size-box" data-size="${size}">
                                                <div class="size-box-inner">${size}</div>
                                                </div>`).join('');

      const productElement = document.createElement('div');
      productElement.classList.add('product');

      // Create and append product image
      const productImage = document.createElement('img');
      productImage.classList.add('product-images');
      productImage.src = item.image;
      productImage.alt = 'Product Image';
      productElement.appendChild(productImage);

      // Create and append product title
      const productTitle = document.createElement('h2');
      productTitle.textContent = item.title;
      productElement.appendChild(productTitle);

      // Create and append product sizes
      const productSizes = document.createElement('div');
      productSizes.classList.add('products');
      productSizes.textContent = `Size: ${sizeBoxes}`;
      productElement.appendChild(productSizes);

      // Create and append product price
      const productPrice = document.createElement('div');
      productPrice.classList.add('products');
      productPrice.innerHTML = `Price: ${isOnSale
        ? `<span style="color: red; text-decoration: line-through;">$${item.price.toFixed(2)}</span>`
        : `$${item.price.toFixed(2)}`}`;
      productElement.appendChild(productPrice);

      // Create and append on-sale information
      if (isOnSale) {
        const onSaleElement = document.createElement('div');
        onSaleElement.classList.add('on-sale');
        onSaleElement.style.color = 'green';
        onSaleElement.textContent = `On Sale: $${item.discountedPrice.toFixed(2)}`;
        productElement.appendChild(onSaleElement);
      }

      // Create and append "Add to cart" button
      const addToCartButton = document.createElement('button');
      addToCartButton.classList.add('add-cta');
      addToCartButton.dataset.id = item.id;
      addToCartButton.dataset.title = item.title;
      addToCartButton.dataset.price = item.price;
      addToCartButton.textContent = 'Add to cart';
      addToCartButton.addEventListener('click', handleClick);
      productElement.appendChild(addToCartButton);

      // Create and append "View details" link
      const viewDetailsLink = document.createElement('a');
      viewDetailsLink.href = `SpecificProduct.html?id=${item.id}`;
      viewDetailsLink.classList.add('view');
      viewDetailsLink.textContent = 'View details';
      productElement.appendChild(viewDetailsLink);

      // Append the productElement to jacketContainer
      jacketContainer.appendChild(productElement);
    }
  }

  // ... (your existing code)



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

  