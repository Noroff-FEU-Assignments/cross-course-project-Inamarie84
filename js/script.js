  // Create main element
  var mainElement = document.createElement('main');
  mainElement.classList.add('background', 'main-page');

  // Create sections
  var section1 = document.createElement('section');
  var h1 = document.createElement('h1');
  h1.textContent = 'X Pushing The Comfort Zone X';
  section1.appendChild(h1);
  mainElement.appendChild(section1);

  var section2 = document.createElement('section');
  var h2 = document.createElement('h2');
  h2.textContent = 'Our Extremely Waterproof And Breathable Rain Gear Keeps You Dry On The Wettest Days';
  section2.appendChild(h2);
  mainElement.appendChild(section2);

  var section3 = document.createElement('section');
  var h3 = document.createElement('h3');
  h3.textContent = 'Suitable For Any Outdoor Adventure';
  section3.appendChild(h3);
  mainElement.appendChild(section3);

  // Create cta-buttons div
  var ctaButtonsDiv = document.createElement('div');
  ctaButtonsDiv.classList.add('cta-buttons');

  // Create Shop Men's link
  var menLinkDiv = document.createElement('div');
  var menLink = document.createElement('a');
  menLink.href = '/pages/malejackets.html';
  menLink.classList.add('cta', 'cta-sm');
  menLink.textContent = "Shop Men's";
  menLinkDiv.appendChild(menLink);
  ctaButtonsDiv.appendChild(menLinkDiv);

  // Create Shop Women's link
  var womenLinkDiv = document.createElement('div');
  var womenLink = document.createElement('a');
  womenLink.href = '/pages/femalejackets.html';
  womenLink.classList.add('cta', 'cta-sw');
  womenLink.textContent = "Shop Women's";
  womenLinkDiv.appendChild(womenLink);
  ctaButtonsDiv.appendChild(womenLinkDiv);

  mainElement.appendChild(ctaButtonsDiv);

  // Append the dynamically created elements to the body
  document.body.appendChild(mainElement);






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
