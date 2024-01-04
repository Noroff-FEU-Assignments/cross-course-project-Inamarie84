import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";
import getQueryParam from "./helpers/getQueryParam.js";

// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

const id = getQueryParam("id");

if (!id) {
    window.location.href = "/";
}


// const productUrl = `${url}/${id}`; 

// console.log(productUrl);

async function fetchJacket(id) {
    const productUrl = `${url}/${id}`; 

    try {
        const response = await fetch(productUrl);

        if (response.ok === true) {
        const item = await response.json();
        return displayJacket(item);
        }
        // create html for the single object 

        throw new Error("API call failed");
    } catch(error) {
        // console.log(error);

        displayMessage("#product-container", error.message);
        // const container = document.querySelector("#product-container");
        // container.innerHTML = '<div class="error">Ooops...There was an error fetching the jacket</div>';
    } 
}

fetchJacket(id);

function displayJacket(jacket) {
    document.title = `${jacket.title} | ${document.title}`;

    const container = document.querySelector("#product-container");

    container.innerHTML = "";

    const heading = document.createElement("h1");
    heading.textContent = jacket.title;

    const image = document.createElement("img");
    image.src = jacket.image; // Replace 'imageUrl' with the property that holds the image URL in your jacket object
    image.alt = jacket.title; // Set the alt attribute for accessibility
    image.classList.add("detail-image");

    const description = document.createElement("p");
    description.textContent = jacket.description;

    const price = document.createElement("h2");
    price.textContent = `$ ${jacket.price}`;

    const anchor = document.createElement("a");
    anchor.href = "/path/to/your/link"; // Replace with the actual link


    container.append(heading);
    container.appendChild(image);
    container.append(description);
    container.append(price);

    // Add "Add to Cart" button
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add("add-cta");
    addToCartButton.addEventListener("click", addToCartHandler);
    
    // Add "Continue Shopping" button
    const continueShoppingButton = document.createElement("button");
    continueShoppingButton.textContent = "Continue Shopping";
    continueShoppingButton.classList.add("add-cta");
    continueShoppingButton.addEventListener("click", continueShoppingHandler);
    
    // Append buttons to the container
    container.appendChild(addToCartButton);
    container.appendChild(continueShoppingButton);
}

function addToCartHandler() {
    // Add your logic for adding the item to the cart
    console.log("Added to Cart");
}

function continueShoppingHandler() {
    // Add your logic for continuing shopping
    console.log("Continue Shopping");
}