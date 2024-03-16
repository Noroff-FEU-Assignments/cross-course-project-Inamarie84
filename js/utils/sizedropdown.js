// // sizedropdown.js
// export function createSizeDropdown(sizes) {
//     const sizeDropdown = document.createElement("select");
//     sizeDropdown.classList.add("size-dropdown");

//     const sizeOptions = sizes.map(size => {
//         const option = document.createElement("option");
//         option.value = size;
//         option.textContent = size;
//         return option;
//     });

//     sizeOptions.forEach(option => sizeDropdown.appendChild(option));

//     return sizeDropdown;
// }

export function createSizeDropdown(sizes) {
    const sizeDropdown = document.createElement("select");
    sizeDropdown.classList.add("size-dropdown");

    // Add option for the default size ('xs')
    const defaultOption = document.createElement("option");
    defaultOption.value = "-";
    defaultOption.textContent = "select size";
    sizeDropdown.appendChild(defaultOption);

    const sizeOptions = sizes.map(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        return option;
    });

    sizeOptions.forEach(option => sizeDropdown.appendChild(option));

    return sizeDropdown;
}
