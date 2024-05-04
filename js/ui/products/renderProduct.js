export function renderProduct(targetElement, product) {
    const { name, images, description, prices, on_sale } = product;
    const { price, sale_price } = prices;
    document.title = `${name} | ${document.title}`;

    // Sizes data
    const sizes = ['XS', 'S', 'M', 'L', 'XL']; // Define your sizes here

    // Create the product container
    const productContainer = document.createElement('div');
    productContainer.classList.add('product-container');

    // Create the product image element
    const productImage = document.createElement('img');
    productImage.src = images[0].thumbnail;
    productImage.alt = name;
    productImage.classList.add('product-images');

    // Create the product name element
    const productName = document.createElement('h2');
    productName.textContent = name;
    productName.classList.add('product-name');

    // Create the product price element
    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: $${price}`;
    productPrice.classList.add('product-price');

    // Apply line-through style if the product is on sale
    if (on_sale) {
    productPrice.style.textDecoration = 'line-through';
    }
    
    // Create the product sale price element (if product is on sale)
    const productSalePrice = document.createElement('p');
    if (on_sale) {
        productSalePrice.textContent = `Sale Price: $${sale_price}`;
        productSalePrice.classList.add('product-sale-price');
    }

    // Create the product description element
    const productDescription = document.createElement('p');
    productDescription.innerHTML = description; // Use innerText instead of innerHTML
    productDescription.classList.add('product-description');

    // Create the product sizes container
    const productSizesContainer = document.createElement('div');
    productSizesContainer.classList.add('product-sizes-container');

    // Create clickable boxes for each size
    sizes.forEach(size => {
        const sizeBox = document.createElement('div');
        sizeBox.textContent = size;
        sizeBox.classList.add('size-box');

        // Add event listener to select the size
        sizeBox.addEventListener('click', function() {
            // Your logic to handle size selection
            console.log(`Selected size: ${size}`);
        });

        productSizesContainer.appendChild(sizeBox);
    });

    // Create the product buttons container
    const productButtons = document.createElement('div');
    productButtons.classList.add('product-buttons');

    // Create the "Add to Cart" button
    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add to Cart';
    addToCartButton.classList.add('add-cta', 'cta-cart');

    // Create the "Continue Shopping" link
    const continueShoppingLink = document.createElement('a');
    continueShoppingLink.textContent = 'Continue Shopping';
    continueShoppingLink.href = '#';
    continueShoppingLink.classList.add('add-cta', 'continue-shopping');

    // Append the elements to the product container
    productContainer.appendChild(productImage);
    productContainer.appendChild(productName);
    productContainer.appendChild(productPrice);
    if (on_sale) {
        productContainer.appendChild(productSalePrice);
    }
    productContainer.appendChild(productDescription);
    productContainer.appendChild(productSizesContainer);
    productContainer.appendChild(productButtons);
    productButtons.appendChild(addToCartButton);
    productButtons.appendChild(continueShoppingLink);

    // Get the target element
    const element = document.querySelector(targetElement);
    if (!element) {
        console.error(`Element with selector '${targetElement}' not found.`);
        return;
    }

    // Append the product container to the target element
    element.innerHTML = '';
    element.appendChild(productContainer);

    // Hide the loading indicator
    const loadingIndicator = document.querySelector('.loading');
    if (loadingIndicator) {
        loadingIndicator.style.display = 'none';
    } else {
        console.error('Loading indicator element not found.');
    }

    // Add event listener to the "Continue Shopping" link
    continueShoppingLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        window.history.back(); // Go back to the previous page
    });
}
