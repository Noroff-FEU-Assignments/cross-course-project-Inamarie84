export function renderProduct(targetElement, product) {
    const { name, images, description, prices } = product;
    const { price, sale_price } = prices;
    document.title = `${name} | ${document.title}`;
    

    // Create HTML content for the product
    const productHTML = `
    <div class="product-container">
        <img src="${images[0].thumbnail}" alt="${name}" class="product-images">
        <h2 class="product-name">${name}</h2>
        <p class="product-price">Price: $${price}</p>
        <p class="product-description">${description}</p>
    </div>
`;

    // Get the target element
    const element = document.querySelector(targetElement);
    if (!element) {
        console.error(`Element with selector '${targetElement}' not found.`);
        return;
    }

    // Append the HTML content to the target element
    element.innerHTML = productHTML;

    // Hide the loading indicator
    const loadingIndicator = document.querySelector('.loading');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    } else {
        console.error('Loading indicator element not found.');
    }
}

