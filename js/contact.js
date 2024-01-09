const form = document.querySelector("form");

function handleSubmit(event) {
event.preventDefault();
console.log(event.target);

const form = event.target;
const formData = new FormData(form);
const entries = formData.entries();
const data = Object.fromEntries(entries);

console.log(data);
}

form.addEventListener("submit", handleSubmit);