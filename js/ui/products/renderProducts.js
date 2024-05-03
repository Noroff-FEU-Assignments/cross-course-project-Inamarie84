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
      const { name, id } = product;
      const productItem = document.createElement("a");
      productItem.classList.add("product");
      productItem.setAttribute("href", `viewproductdetails.html?id=${id}`);
      const title = document.createElement("h4");
      title.innerText = name;
      productItem.appendChild(title);
      return productItem;
    }
