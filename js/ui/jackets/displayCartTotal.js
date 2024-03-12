import * as storage from "../../helpers/storage/index.js";

export function displayCartTotal() {
    const total = storage.getTotal();
    const container = document.querySelector("#cart-container");

    const totalDiv = document.createElement("div");
    totalDiv.classList.add("product");

    totalDiv.textContent = `Total: ${total}`;

    container.appendChild(totalDiv);
}