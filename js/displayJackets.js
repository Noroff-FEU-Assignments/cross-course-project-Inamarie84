import { url } from "./constants.js";
import { displayMessage } from "./ui/shared/displayMessage.js";
import { updateCartCount } from "./reusablefunctions/updatecartcount.js";
import { displayJackets } from "./ui/jackets/displayAlljackets.js";

function updateCart() {
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	updateCartCount(cart.length);
}

function handleClick(event) {
	const jacket = {
		id: event.target.dataset.id,
		title: event.target.dataset.title,
		price: event.target.dataset.price,
		size: event.target.closest(".product").dataset.selectedSize,
	};

	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	cart.push(jacket);
	localStorage.setItem("cart", JSON.stringify(cart));

	updateCart();
}

async function fetchAndDisplayJackets() {
	const container = document.querySelector("#featured-products");
	const path = location.pathname;
	console.log(path);

	const gender = path === "/pages/malejackets.html" ? "Male" : "Female";
	console.log(gender);

	try {
		const response = await fetch(url);
		const items = await response.json();

		const itemsByGender = Object.groupBy(items, (item) => item.gender);

		console.log("itemsByGender", itemsByGender);

		const itemsToDisplay = itemsByGender[gender];

		console.log("itemsToDisplay", itemsToDisplay);

		displayJackets(itemsToDisplay, container);
		updateCart();

		const addButtons = document.querySelectorAll(".add-cta");

		addButtons.forEach(function (button) {
			button.addEventListener("click", handleClick);
		});
	} catch (error) {
		console.log(error);
		displayMessage(container, `Ooops...There was an error fetching the jackets for ${gender}`, "error");
	}
}

document.addEventListener("DOMContentLoaded", function () {
	fetchAndDisplayJackets();
	updateCart();
});