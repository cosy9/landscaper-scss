// /hamburger menu
var navbar = document.querySelector('.nav-list')
var ham = document.querySelector('.hambur')
// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle('display')
  ham.classList.toggle('active')
}

ham.addEventListener('click', toggleHamburger)

// METHOD 1
var menuLinks = document.querySelectorAll('.nav-list li')
menuLinks.forEach(function (menuLink) {
  menuLink.addEventListener('click', toggleHamburger)
})



//for slider 
$(document).ready(function () {
  $('.sliders').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '70px',
    dots: true,
    prevArrow: false,
    nextArrow: false,
  });
})