import { updateCartCount } from "./reusablefunctions/updatecartcount.js";

const cart = JSON.parse(localStorage.getItem("cart"));
const cartContainer = document.querySelector("#cart-container");

if(cart === null || cart.length === 0) {
    cartContainer.innerHTML = "<p>You have no jackets in your cart</p>"; 

    const goShoppingButton = document.createElement('button');
    goShoppingButton.textContent = 'Go Shopping';
    goShoppingButton.classList.add('cta');
    goShoppingButton.addEventListener('click', function () {
        window.location.href = '/index.html';
    });
    
    cartContainer.appendChild(goShoppingButton);
}
else {

    cart.forEach(function(cart) {

        const { title, price, size } = cart;

        cartContainer.innerHTML += `<div class="product"><h3>${title}</h3></div> 
                                    <div class="price"><p>Price: ${price}</p></div> 
                                    <div>Size: ${size}</div>
                                    <button class="add-cta">Checkout</button>
                                    <button class="cta">Continue Shopping</button>
                                    <button class="remove">Remove from cart</button>`;
    });
    
    updateCartCount();
}



