// import { url } from "./constants.js";

const url = "https://api.noroff.dev/api/v1/rainy-days";

async function fetchJackets() {
  try {
    const response = await fetch(url);
    const items = await response.json();
    displayJackets(items);
  }
  catch (error) {
    const jacketContainer = document.querySelector("#featured-products");
    jacketContainer.innerHTML = `<div class="error">Ooops...There was an error fetching the jackets</div>`;
  }
    
} 


fetchJackets();

function displayJackets(items) {
    const jacketContainer = document.querySelector("#featured-products");

    jacketContainer.innerHTML= "";

    items.forEach(function(item) {
    jacketContainer.innerHTML += `<div class="product">
                                 <img src="${item.image}" alt="Product Image">
                                 <h3>${item.title}</h3>
                                 <p>${item.description}</p>
                                 <div>Sizes: ${item.sizes}</div>
                                 <div>Price: ${item.price}</div>
                                 </div>`  
  })
}



// function displayFemaleJackets(items) {
//   const jacketContainer = document.querySelector("#featured-products");

//   // Filter only female jackets
//   const femaleJackets = items.filter(item => item.gender === "Female");

//   femaleJackets.forEach(function(item) {
//       // Concatenate the HTML string for each female jacket
//       jacketContainer.innerHTML += `<div class="product">
//                                        <img src="${item.image}" alt="${item.title}">
//                                        <p>${item.title}</p>
//                                        <p>${item.description}</p>
//                                        <p>Price: $${item.price.toFixed(2)}</p>
//                                      </div>`;
//   });
// }

// // Example usage:
// const items = [/* your array of jackets here */];

// // Call the function with the array of jackets
// displayFemaleJackets(items);
