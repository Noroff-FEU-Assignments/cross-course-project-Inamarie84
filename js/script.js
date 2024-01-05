  // Create main element
  var mainElement = document.createElement('main');
  mainElement.classList.add('background', 'main-page');

  // Create sections
  var section1 = document.createElement('section');
  var h1 = document.createElement('h1');
  h1.textContent = 'X Pushing The Comfort Zone X';
  section1.appendChild(h1);
  mainElement.appendChild(section1);

  var section2 = document.createElement('section');
  var h2 = document.createElement('h2');
  h2.textContent = 'Our Extremely Waterproof And Breathable Rain Gear Keeps You Dry On The Wettest Days';
  section2.appendChild(h2);
  mainElement.appendChild(section2);

  var section3 = document.createElement('section');
  var h3 = document.createElement('h3');
  h3.textContent = 'Suitable For Any Outdoor Adventure';
  section3.appendChild(h3);
  mainElement.appendChild(section3);

  // Create cta-buttons div
  var ctaButtonsDiv = document.createElement('div');
  ctaButtonsDiv.classList.add('cta-buttons');

  // Create Shop Men's link
  var menLinkDiv = document.createElement('div');
  var menLink = document.createElement('a');
  menLink.href = '/pages/malejackets.html';
  menLink.classList.add('cta');
  menLink.textContent = "Shop Men's";
  menLinkDiv.appendChild(menLink);
  ctaButtonsDiv.appendChild(menLinkDiv);

  // Create Shop Women's link
  var womenLinkDiv = document.createElement('div');
  var womenLink = document.createElement('a');
  womenLink.href = '/pages/femalejackets.html';
  womenLink.classList.add('cta');
  womenLink.textContent = "Shop Women's";
  womenLinkDiv.appendChild(womenLink);
  ctaButtonsDiv.appendChild(womenLinkDiv);

  mainElement.appendChild(ctaButtonsDiv);

  // Append the dynamically created elements to the body
  document.body.appendChild(mainElement);







