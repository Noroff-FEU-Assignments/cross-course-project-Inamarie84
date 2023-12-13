// import { url } from "./constants.js";

// async function fetchJackets() {
//     try {
//       const response = await fetch(url);
//       const items = await response.json();
      
//       // Filter items by gender "female"
//       const femaleItems = items.filter(item => item.gender === "female");
  
//       displayJackets(femaleItems);
//     } catch (error) {
//       const jacketContainer = document.querySelector("#featured-products");
//       jacketContainer.innerHTML = '<div class="error">Ooops...There was an error fetching the jackets</div>';
//     }
//   }
  
//   fetchJackets();
  
//   function displayJackets(items) {
//     const jacketContainer = document.querySelector("#featured-products");
  
//     jacketContainer.innerHTML = "";
  
//     items.forEach(function(item) {
//       jacketContainer.innerHTML += `<div class="product">
//                                      <img src="${item.image}" alt="Product Image">
//                                      <h3>${item.title}</h3>
//                                      <p>${item.description}</p>
//                                      <div>Sizes: ${item.sizes}</div>
//                                      <div>Price: ${item.price}</div>
//                                      <button class="add-cta">Add to cart</button>
//                                    </div>`;
//     });
//   }