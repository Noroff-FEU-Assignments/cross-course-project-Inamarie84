import { displayJacket } from "./events/jackets/displayJacket.js";
import { displayJackets } from "./events/jackets/displayJackets.js";

const { pathname } = location;

console.log(pathname);

switch (pathname) {
  case "/product.html":
    displayJacket();
    break;
  case "/femalejackets.html":
    displayJackets();
    break;
  case "/malejackets.html":
    displayJackets();
    break;
  case "/malejackets":
  displayJackets();
    break;
  case "/femalejackets":
    displayJackets();
    break;
}


