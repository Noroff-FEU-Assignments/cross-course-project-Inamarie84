




// async function fetchJackets() {
//   try {
//     const response = await fetch(url);
//     const items = await response.json();
//     displayJackets(items);
//   }
//   catch (error) {
//     const jacketContainer = document.querySelector("#featured-products");
//     jacketContainer.innerHTML = `<div class="error">Ooops...There was an error fetching the jackets</div>`;
//   }
    
// } 


// fetchJackets();

// // function displayJackets(items) {
// //     const jacketContainer = document.querySelector("#featured-products");

// //     jacketContainer.innerHTML= "";

// //     items.forEach(function(item) {
// //     jacketContainer.innerHTML += `<div class="product">
// //                                  <img src="${item.image}" alt="Product Image">
// //                                  <h3>${item.title}</h3>
// //                                  <p>${item.description}</p>
// //                                  <div>Sizes: ${item.sizes}</div>
// //                                  <div>Price: ${item.price}</div>
// //                                  <div class="on-sale">On sale: ${item.discountedPrice}</div>
// //                                  <button class="add-cta">Add to cart</button>
// //                                  </div>`  
// //   })
// // }

// function displayJackets(items) {
//   const jacketContainer = document.querySelector("#featured-products");

//   jacketContainer.innerHTML = "";

//   items.forEach(function(item) {
//       // Check if the product is on sale
//       const isOnSale = item.onSale;


//       // Check if the product has a discounted price
//       const hasDiscountedPrice = item.discountedPrice !== undefined;

      

//       // Build the HTML string with conditional styles
//       jacketContainer.innerHTML += `<div class="product">
//                                        <img class="product-images" src="${item.image}" alt="Product Image">
//                                        <h2>${item.title}</h2>
//                                        <p>${item.description}</p>
//                                        <div>Sizes: ${item.sizes}</div>
//                                        <div>Price: 
//                                           ${isOnSale
//                                             ? `<span style="color: red; text-decoration: line-through;">$${item.price.toFixed(2)}</span>`
//                                             : `$${item.price.toFixed(2)}`}
//                                        </div>
//                                        ${isOnSale
//                                           ? `<div class="on-sale" style="color: green;">On Sale: $${item.discountedPrice.toFixed(2)}</div>`
//                                           : ''}
//                                        <button class="add-cta">Add to cart</button>
//                                    </div>`;
//   });
// }







// // function displayFemaleJackets(items) {
// //   const jacketContainer = document.querySelector("#featured-products");

// //   // Filter only female jackets
// //   const femaleJackets = items.filter(item => item.gender === "Female");

// //   femaleJackets.forEach(function(item) {
// //       // Concatenate the HTML string for each female jacket
// //       jacketContainer.innerHTML += `<div class="product">
// //                                        <img src="${item.image}" alt="${item.title}">
// //                                        <p>${item.title}</p>
// //                                        <p>${item.description}</p>
// //                                        <p>Price: $${item.price.toFixed(2)}</p>
// //                                      </div>`;
// //   });
// // }

// // // Example usage:
// // const items = [/* your array of jackets here */];

// // // Call the function with the array of jackets
// // displayFemaleJackets(items);
