
  // hamburger menu 

  document.addEventListener('DOMContentLoaded', function () {
    const menuCheckbox = document.getElementById('menu-checkbox');
    const header = document.querySelector('header');

    console.dir(menuCheckbox);
  
    menuCheckbox.addEventListener('change', function () {
      header.classList.toggle('menu-visible', menuCheckbox.checked);
      header.classList.toggle('menu-hidden', !menuCheckbox.checked);
    });
  });