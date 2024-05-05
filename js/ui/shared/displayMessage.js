export function displayMessage(
  messageType,
  message,
  targetElement = "#message"
) {
  const element = document.querySelector(targetElement);
  if (element) {
    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
  } else {
    console.error(`Element with ID '${targetElement}' not found in the DOM.`);
  }
}
