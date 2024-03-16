import { createSizeDropdown } from "../../utils/sizedropdown.js";

export function displayJacket(jacket) {

    const { title: jacketTitle, price: jacketPrice, image: jacketImage, description: jacketDescription, baseColor: jacketColor, sizes: jacketSizes } = jacket;
  
    document.title = `${jacketTitle} | ${document.title}`;
  
    const container = document.querySelector("#product-container");
    container.classList.add("product-container");
  
    container.innerHTML = "";
  
    const heading = document.createElement("h1");
    heading.textContent = jacketTitle;
  
    const image = document.createElement("img");
    image.src = jacketImage; 
    image.alt = jacketTitle; 
    image.classList.add("detail-image");
  
    const baseColor = document.createElement("p");
    baseColor.textContent = `Color: ${jacketColor}`;
  
    const description = document.createElement("p");
    description.textContent = jacketDescription;
  
    const sizeDropdownContainer = document.createElement("div");
    sizeDropdownContainer.classList.add("size-dropdown-container");
  
    const sizeDropdown = createSizeDropdown(jacketSizes);
    sizeDropdownContainer.appendChild(sizeDropdown);
  
    const price = document.createElement("h3");
    price.textContent = `$ ${jacketPrice}`;
  
    container.append(heading);
    container.appendChild(image);
    container.append(description);
    container.append(baseColor);
    container.appendChild(sizeDropdownContainer);
    container.append(price);
    
    
    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Add to Cart";
    addToCartButton.classList.add("add-cta", "cta-cart");
  
    const continueShoppingLink = document.createElement("a");
    continueShoppingLink.textContent = "Continue Shopping";
    continueShoppingLink.href = "#"; 
    continueShoppingLink.classList.add("add-cta");

    continueShoppingLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent the default behavior of the anchor tag
      history.back(); // Go back to the previous page
     });

    container.appendChild(addToCartButton);
    container.appendChild(continueShoppingLink);
  }

  
  

  


