export function renderProduct(targetElement, product) {
    const { name, image, price } = product;
    document.title = `${name} | ${document.title}`;
    
    // Create HTML content for the product
    const productHTML = `
        <div class="product">
            <img src="${image}" alt="${name}" class="product-image">
            <h2 class="product-name">${name}</h2>
            <p class="product-price">$${price}</p>
        </div>
    `;
    
    // Append the HTML content to the target element
    const element = document.querySelector(targetElement);
    if (element) {
        element.innerHTML = productHTML;
    } else {
        console.error(`Element with selector '${targetElement}' not found.`);
    }
}


