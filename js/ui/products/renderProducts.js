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
    const { name, id, prices, is_in_stock } = product;
    const { price } = prices;

    const productItem = document.createElement("div");
    productItem.classList.add("product");

    const productLink = document.createElement("a");
    productLink.setAttribute("href", `product.html?id=${id}`);

    const title = document.createElement("h2");
    title.innerText = name;
    productLink.appendChild(title);

    const priceElement = document.createElement("p");
    priceElement.innerText = `Price: $${price}`;

    const stockAvailability = document.createElement("p");
    stockAvailability.innerText = is_in_stock ? 'In stock' : 'Out of stock';

    productItem.appendChild(productLink);
    productItem.appendChild(priceElement);
    productItem.appendChild(stockAvailability);

    return productItem;
}


