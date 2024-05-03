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
}



// function router() {
//     const path = window.location.pathname;

//     console.log(path);

//     switch(path) {
//         case "/";
//         case "/index.html";
//         console.log("home page");
//         break;
//         case "/product.html";
//         console.log("product page");
//         break;
//     }
// }

// router();
