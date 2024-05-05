export function renderProducts(targetElement, products) {
  const element = document.querySelector(targetElement);
  element.innerHTML = "";

  const productsHtml = products.map(function (product) {
    return createHtmlForProduct(product);
  });

  console.log(productsHtml);
  element.append(...productsHtml);
}

function createHtmlForProduct(product) {
  const { name, id, prices, is_in_stock, images } = product;
  const { price } = prices;

  const productItem = document.createElement("div");
  productItem.classList.add("product");

  const productLink = document.createElement("a");
  productLink.setAttribute("href", `product.html?id=${id}`);

  const title = document.createElement("h2");
  title.innerText = name;
  productLink.appendChild(title);

  // Create image element
  const image = document.createElement("img");
  image.src = images[0].src; // Assuming the first image is the main product image
  image.alt = images[0].alt; // Assuming the alt text is provided in the API
  image.classList.add("product-images");

  const priceElement = document.createElement("p");
  priceElement.innerText = `Price: $${price}`;

  const stockAvailability = document.createElement("p");
  stockAvailability.innerText = is_in_stock ? "In stock" : "Out of stock";

  // Create buttons container
  const buttonsContainer = document.createElement("div");

  // Add to cart button
  const addToCartButton = document.createElement("button");
  addToCartButton.classList.add("checkout-cta");
  addToCartButton.textContent = "Add to Cart";
  addToCartButton.addEventListener("click", function () {
    // Add logic to add product to cart
    console.log("Add to cart clicked");
  });

  // View details button
  const viewDetailsButton = document.createElement("a");
  viewDetailsButton.classList.add("view");
  viewDetailsButton.textContent = "View Details";
  viewDetailsButton.addEventListener("click", function () {
    // Redirect to product details page
    window.location.href = `product.html?id=${id}`;
  });

  buttonsContainer.appendChild(addToCartButton);
  buttonsContainer.appendChild(viewDetailsButton);

  productItem.appendChild(productLink);
  productItem.appendChild(image);
  productItem.appendChild(priceElement);
  productItem.appendChild(stockAvailability);
  productItem.appendChild(buttonsContainer);

  return productItem;
}
