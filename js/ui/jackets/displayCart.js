import * as storage from "../../helpers/storage/index.js";
import { displayCartTotal } from "./displayCartTotal.js";
import { displayItemCount } from "./displayItemCount.js";

export function displayCart(cartItems) {
    const cart = storage.getCart();
    const container = document.querySelector("#cart-container");
    container.innerHTML = " ";

    if (cart.length === 0) {
        container.innerHTML = "<p>You have no jackets in your cart</p>";
    
        const goShoppingButton = document.createElement('button');
        goShoppingButton.textContent = 'Go Shopping';
        goShoppingButton.classList.add('add-cta');
        goShoppingButton.addEventListener('click', function () {
            window.location.href = '/';
        });
    
        container.appendChild(goShoppingButton); 

    } else {
        const itemHtml = cart.map(item => createcartItem(item));
        container.append(...itemHtml);

        displayCartTotal();
    }

    // const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);
}

function createcartItem(item) {

    const { title, price, size, image, id, quantity } = item;

// Create container div
const cartContainer = document.createElement("div");
cartContainer.classList.add("cart-product");

// Create title element
const titleContainer = document.createElement("h2");
titleContainer.textContent = title;
titleContainer.classList.add("product");

// Append title to container
cartContainer.appendChild(titleContainer);

// Create price div
const priceContainer = document.createElement("div");
priceContainer.classList.add("price");

// Create price paragraph
const priceParagraph = document.createElement("p");
priceParagraph.textContent = `Price: ${price}`;
priceParagraph.classList.add("price");

const img = document.createElement ("img");
img.src = image
img.alt = title
img.classList.add("product-images");

cartContainer.appendChild(img);

// Append price paragraph to price div
priceContainer.appendChild(priceParagraph);

// Append price div to container
cartContainer.appendChild(priceContainer);

// Create size div
const sizeContainer = document.createElement("div");
sizeContainer.classList.add("products");
sizeContainer.textContent = `Size: ${size}`;

// Append size div to container
cartContainer.appendChild(sizeContainer);

const quantityContainer = document.createElement("p");
quantityContainer.textContent = `Quantity: ${quantity}`;

cartContainer.appendChild(quantityContainer);

// Create checkout button
const checkoutButton = document.createElement("button");
checkoutButton.classList.add("checkout-cta");

// Create checkout link
const checkoutLink = document.createElement("a");
checkoutLink.href = "checkoutsuccess.html";
checkoutLink.textContent = "Checkout";

// Append checkout link to button
checkoutButton.appendChild(checkoutLink);

// Append checkout button to container
cartContainer.appendChild(checkoutButton);

// Create continue shopping button
const continueShoppingButton = document.createElement("button");
continueShoppingButton.classList.add("add-cta");
continueShoppingButton.textContent = "Continue Shopping";

// Append continue shopping button to container
cartContainer.appendChild(continueShoppingButton);

// Create remove button
const removeButton = document.createElement("button");
removeButton.classList.add("remove");
removeButton.textContent = "Remove from cart";
removeButton.dataset.id = id;

removeButton.addEventListener("click", (event) => {
    const {id} = event.target.dataset;
    storage.removeItemFromCart(id);
    displayCart();
    displayItemCount();
});

// Append remove button to container

cartContainer.appendChild(removeButton);

return cartContainer;
}