import { BASE_URL } from "../constants.js";


export async function fetchJackets() {
		const response = await fetch(BASE_URL);
	
		console.log(response);

		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const json = await response.json();
		return json;

	}


	// import { url } from "../constants.js";
// import { displayMessage } from "../ui/shared/displayMessage.js";
// import { displayJackets } from "../ui/jackets/displayAlljackets.js";
// import { handleAddToCartButtons } from "../handlers/handleAddToCartButtons.js";
// import { displayItemCount } from "../ui/jackets/displayItemCount.js";
// // import { updateCart } from "../utils/updatecartcount.js";

// async function fetchAndDisplayJackets() {
// 	const container = document.querySelector("#featured-products");
// 	const path = location.pathname;
// 	// console.log(path);

// 	const gender = path === "/malejackets.html" ? "Male" : "Female";
// 	// console.log(gender);

// 	try {
// 		const response = await fetch(url);
// 		const items = await response.json();

// 		const itemsByGender = Object.groupBy(items, (item) => item.gender);

// 		// console.log("itemsByGender", itemsByGender);

// 		const itemsToDisplay = itemsByGender[gender];

// 		// console.log("itemsToDisplay", itemsToDisplay);

// 		displayJackets(itemsToDisplay, container);
// 		handleAddToCartButtons();
// 		displayItemCount();

// 		const addButtons = document.querySelectorAll(".add-cta");

// 		// addButtons.forEach(function (button) {
// 		// 	button.addEventListener("click", handleClick);
// 		// });
// 	} catch (error) {
// 		console.error(error);
// 		displayMessage(container, `Ooops...There was an error fetching the jackets for ${gender}`, "error");
// 	}
// }

// document.addEventListener("DOMContentLoaded", function () {
// 	fetchAndDisplayJackets();
// 	// updateCart();
// });