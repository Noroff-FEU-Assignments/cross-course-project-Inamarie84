export function renderProduct(targetElement, product) {
    const { name } = product;
    document.title = `${name} | ${document.title}`;
  }