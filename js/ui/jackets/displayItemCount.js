import * as storage from "../../helpers/storage/index.js";

export function displayItemCount () {
    const itemCount = storage.getItemCount();
    const container = document.querySelector("#cart-count");

    const itemCountContainer = document.querySelector("#item-count");

    if(itemCount === 0) {
        if(itemCountContainer) {
            itemCountContainer.remove();
        }
        return
    } 

    if(itemCountContainer) {
        itemCountContainer.innerText = itemCount;
    } else {
        container.innerHTML += `<span id="item-count" class="item-count">${itemCount}</span>`;
    }
}