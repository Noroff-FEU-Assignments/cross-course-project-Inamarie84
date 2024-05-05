export function renderProductThumbnails(targetElement, products) {
  const element = document.querySelector(targetElement);
  element.innerHTML = "";

  const thumbnailContainer = document.createElement("div");
  thumbnailContainer.classList.add("thumbnail-container");

  products.forEach(function (product) {
    const thumbnailHtml = createHtmlForProductThumbnail(product);
    thumbnailContainer.appendChild(thumbnailHtml);
  });

  element.appendChild(thumbnailContainer);
}

function createHtmlForProductThumbnail(product) {
  const { name } = product;
  const src =
    product.images?.[0]?.thumbnail || "https://placehold.co/600x400/EEE/31343C";
  const alt = product.images?.[0]?.alt || "No image available";

  const thumbnail = document.createElement("div");
  thumbnail.classList.add("thumbnail");

  const productLink = document.createElement("a");
  productLink.setAttribute("href", `product.html?id=${product.id}`);

  const img = document.createElement("img");
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);

  const titleElement = document.createElement("h4");
  titleElement.innerText = name;

  productLink.appendChild(img);
  productLink.appendChild(titleElement);
  thumbnail.appendChild(productLink);

  return thumbnail;
}
