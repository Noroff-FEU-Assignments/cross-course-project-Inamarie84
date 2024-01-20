// addtocarthandleclick.js

import { updateCart } from "../utils/updatecartcount.js";

export function handleClick(event) {
  const jacket = {
    id: event.target.dataset.id,
    title: event.target.dataset.title,
    price: event.target.dataset.price,
    size: event.target.closest(".product").dataset.selectedSize,
  };

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(jacket);
  localStorage.setItem("cart", JSON.stringify(cart));

  updateCart();
}
