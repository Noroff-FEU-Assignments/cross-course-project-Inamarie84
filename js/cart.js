const cart = JSON.parse(localStorage.getItem("cart"));

console.log(cart);

const cartContainer = document.querySelector("#cart-container");

if(cart === null) {
    cartContainer.innerText = "You have no jackets in your cart"; 
}
else {

    cart.forEach(function(cart) {
        cartContainer.innerHTML += `<div class="product"><h3>${cart.title}</h3></div> `
    });
    
}

