import { url } from "./constants.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// const productUrl = `${url}/${id}`; 

// console.log(productUrl);

async function fetchJacket(id) {
    const productUrl = `${url}/${id}`; 

    try {
        const response = await fetch(productUrl);
        const item = await response.json();
        console.log(item)
        displayJacket(item);
        // create html for the single object 
    }
    catch(error) {
        console.log(error);
        const container = document.querySelector("#product-container");
        container.innerHTML = '<div class="error">Ooops...There was an error fetching the jacket</div>';
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

    container.append(heading);
    container.append(description);
}