// footer.js

document.addEventListener('DOMContentLoaded', function () {
    // Create footer element
    var footerElement = document.createElement('footer');
  
    // Create paragraphs
    var paragraph1 = document.createElement('p');
    paragraph1.textContent = '2022 Rainydays, inc ©';
    footerElement.appendChild(paragraph1);
  
    var paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Free Shipping | Free returns';
    footerElement.appendChild(paragraph2);
  
    var paragraph3 = document.createElement('p');
    paragraph3.textContent = 'Follow us on Social Media';
    footerElement.appendChild(paragraph3);
  
    // Create social media icons
    var twitterIcon = document.createElement('i');
    twitterIcon.classList.add('fa-brands', 'fa-twitter');
    paragraph3.appendChild(twitterIcon);
  
    var facebookMessengerIcon = document.createElement('i');
    facebookMessengerIcon.classList.add('fa-brands', 'fa-facebook-messenger');
    paragraph3.appendChild(facebookMessengerIcon);
  
    var instagramIcon = document.createElement('i');
    instagramIcon.classList.add('fa-brands', 'fa-instagram');
    paragraph3.appendChild(instagramIcon);
  
    var facebookIcon = document.createElement('i');
    facebookIcon.classList.add('fa-brands', 'fa-facebook');
    paragraph3.appendChild(facebookIcon);
  
    // Append the footer to the body
    document.body.appendChild(footerElement);
  });
  