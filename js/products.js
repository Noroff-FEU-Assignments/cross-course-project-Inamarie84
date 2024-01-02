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

    const description = document.createElement("p");
    description.textContent = jacket.description;

    const image = document.createElement("img");
    image.src = jacket.image; // Replace 'imageUrl' with the property that holds the image URL in your jacket object
    image.alt = jacket.title; // Set the alt attribute for accessibility

    container.append(heading);
    container.append(description);
    container.appendChild(image);
}