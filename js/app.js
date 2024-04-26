function router() {
    const path = window.location.pathname;

    console.log(path);

    switch(path) {
        case "/";
        case "/index.html";
        console.log("home page");
        break;
        case "/SpecificProduct.html";
        console.log("product page");
        break;
    }
}

router();
