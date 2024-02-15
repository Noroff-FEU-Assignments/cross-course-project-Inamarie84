export function handleAddToCartButtons() {
    const buttons = document.querySelectorAll('[data-action="add-to-cart"]');

    console.log(buttons);

    buttons.forEach(button => button.addEventListener("click",handleCartClick));
}

function handleCartClick(event) {

    const {id, title, price} = event.target.dataset;
    const item = {id, title, price};

    console.log(item);
}