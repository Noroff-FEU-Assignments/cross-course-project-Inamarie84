function router() {
    const path = window.location.pathname;

    console.log(path);

    switch(path) {
        case "/";
        case "/index.html";
        console.log("home page");
        break;
        case "/viewproductdetails.html";
        console.log("product page");
        break;
    }
}

router();
