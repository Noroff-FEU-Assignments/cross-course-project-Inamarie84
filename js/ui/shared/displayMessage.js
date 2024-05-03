// export function displayMessage(targetElement, messageType, message) {
//     const element = document.querySelector(targetElement);
//     element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
//   }

export function displayMessage(messageType, message, targetElement = "#message") {
    const element = document.querySelector(targetElement);
    if (element) {
        element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
    } else {
        console.error(`Element with ID '${targetElement}' not found in the DOM.`);
    }
}



// export function displayMessage(container = "#message", message = "There was an unexpected error", messageType = "error") {
//     let parent = container;
//     if (typeof container === "string") {
//         parent = document.querySelector(container);
//     }
    
//     parent.innerHTML = `<div class="message ${messageType}">${message}</div>`;
// }
