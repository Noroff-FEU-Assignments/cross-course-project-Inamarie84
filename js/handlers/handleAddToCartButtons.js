import * as storage from "../helpers/storage/index.js";

export function handleAddToCartButtons() {
    const buttons = document.querySelectorAll('[data-action="add-to-cart"]');

    console.log(buttons);

    buttons.forEach(button => button.addEventListener("click",handleCartClick));
}

function handleCartClick(event) {

    const { id, title, price, image } = event.target.dataset;
    const item = { id, title, price, image };

    // console.log(item);

    storage.addItemToCart(item);

    // const cart = storage.getCart();
    // cart.push(item);
    // storage.saveCart(cart);
}

