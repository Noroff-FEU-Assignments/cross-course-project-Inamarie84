export function displayMessage(container, message, messageType) {
    const parent = document.querySelector(container);

    parent.innerHTML = `<div class="message" ${messageType}>${message}</div>`;
}