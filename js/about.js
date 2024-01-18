const mainElement = document.createElement("main");
mainElement.classList.add("background");

const aboutSection1 = document.createElement("section");
aboutSection1.classList.add("about");

const logoImage = document.createElement("img");
logoImage.src = "/images/RainyDays_Logo.png";
logoImage.alt = "Logo of RainyDays.com";
logoImage.classList.add("logo-about");

const heading1 = document.createElement("h1");
heading1.textContent = 'About Rainy Days';

const divElement1 = document.createElement("div");

const paragraphElement1 = document.createElement("p");
paragraphElement1.classList.add("infotext");
paragraphElement1.textContent = "From our home in Norway, Rainy Days has been making professional grade rain gear to help people stay dry and feel alive for more than 140 years. It all started in 1877 when a sea captain found a better way to stay protected from the harsh Norwegian elements. Soon thereafter, the captain and his wife launched a business producing waterproof jackets made from coarse linen soaked in linseed oil – and the legend was born! Rainy Days jackets are worn and trusted by people needing protection from the rain. Our jackets are durability and suitable for all types of weather and adventures, and are made from our most innovative and sustainable waterproof/breathable technology to date.";

divElement1.appendChild(logoImage);
divElement1.appendChild(heading1);
divElement1.appendChild(paragraphElement1);

aboutSection1.appendChild(divElement1);

mainElement.appendChild(aboutSection1);

const aboutSection2 = document.createElement("section");
aboutSection2.classList.add("about", "information");

const informationData = [
    {
        iconClass: "fa-solid fa-location-dot",
        headingText: "Find a Rainy Days store",
        infotext: "Locate a brand store, partner store, or retail partner in your area.",
        infoText: "Find a store"
    },
    {
        iconClass: "fa-solid fa-envelope",
        headingText: "Be the first to know",
        infotext: "Subscribe to receive new product releases, exclusive discount codes, invites to events, and a chance to win.",
        infoText: "Sign up for e-mails"
    },
    {
        iconClass: "fa-solid fa-circle-info",
        headingText: "Customer Support Centre",
        infotext: "Need more information? Have a repair concern? No problem. We\"re here to help.",
        infoText: "Find answers"
    }
];

informationData.forEach(data => {
    const infoContainer = document.createElement("div");

    const iconParagraph = document.createElement("p");
    const icon = document.createElement("i");
    
    const iconClasses = data.iconClass.split(" ");
    iconClasses.forEach(className => icon.classList.add(className));

    iconParagraph.appendChild(icon);

    const heading = document.createElement('h2');
    heading.textContent = data.headingText;

    const infotext = document.createElement('p');
    infotext.classList.add('infotext');
    infotext.textContent = data.infotext;

    const info = document.createElement('p');
    info.classList.add('info');
    info.textContent = data.infoText;

    infoContainer.appendChild(iconParagraph);
    infoContainer.appendChild(heading);
    infoContainer.appendChild(infotext);
    infoContainer.appendChild(info);

    aboutSection2.appendChild(infoContainer);
});

mainElement.appendChild(aboutSection2);

document.body.appendChild(mainElement);

const footerElement = document.querySelector('footer');

document.body.insertBefore(mainElement, footerElement);