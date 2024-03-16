import * as storage from "../helpers/storage/index.js";
import { displayItemCount } from "../ui/jackets/displayItemCount.js"

export function handleAddToCartButtons() {
    const buttons = document.querySelectorAll('[data-action="add-to-cart"]');

    console.log(buttons);

    buttons.forEach(button => button.addEventListener("click",handleCartClick));
}

function handleCartClick(event) {

    const { id, title, price, image } = event.target.dataset;
    const item = { id, title, price, image };

    storage.addItemToCart(item);
    displayItemCount();
}

