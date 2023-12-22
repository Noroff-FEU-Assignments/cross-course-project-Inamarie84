function router() {
    const path = window.location.pathname;

    console.log(path);

    switch(path) {
        case "/";
        case "/index.html";
        console.log("home page");
        break;
        case "/pages/SpecificProduct.html";
        console.log("product page");
        break;
    }

//     if(path === "/" || "/index.html") {
//         console.log("home page")
//     } else if(path === "/Pages/SpecificProduct.html") {
//         console.log("product page")
//     }
// }

router();
