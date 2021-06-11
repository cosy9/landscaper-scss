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




//image change
var All = document.querySelector('.gallery-block li:nth-child(1)')

var lawn = document.querySelector('.gallery-block li:nth-child(2)')

var garden = document.querySelector('.gallery-block li:nth-child(3)')

var planting = document.querySelector('.gallery-block li:nth-child(4)')


//all section

All.addEventListener('click', Allfunc)

function Allfunc() {
  var allAnchor = document.querySelector('.gallery-block li:nth-child(1) a')
  var allList = document.querySelectorAll('.gallery-block a')
  for (let i = 0; i < allList.length; i++) {
    if (allList[i].classList.contains('active-item')) {
      allList[i].classList.remove('active-item')
    }
    allAnchor.classList.add('active-item')
  }
  var grid = document.querySelector('.gallery-img-grid')
  var htmlToadd = `<li>
                            <img src="./assets/css/img/gr1.jpg" alt="garden">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr2.jpg" alt="scenery">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr3.jpg" alt="sheep grazing">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr4.jpg" alt="sheep grazing">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr5.jpg" alt="garden and pond">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr6.jpg" alt="garden and flowers">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr7.jpg" alt="beautiful garden park">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr8.jpg" alt="backyard garden">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr9.jpg" alt="home and garden">
                        </li>`;
  grid.innerHTML = '';
  grid.innerHTML += htmlToadd
}


//lawn section

lawn.addEventListener('click', lawnfunc)

function lawnfunc() {
  var lawnAnchor = document.querySelector('.gallery-block li:nth-child(2) a')
  var allList = document.querySelectorAll('.gallery-block a')
  for (let i = 0; i < allList.length; i++) {
    if (allList[i].classList.contains('active-item')) {
      allList[i].classList.remove('active-item')
    }
    lawnAnchor.classList.add('active-item')
  }
  var grid = document.querySelector('.gallery-img-grid')
  var htmlToadd = `<li>
                            <img src="./assets/css/img/gr1.jpg" alt="garden">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr2.jpg" alt="scenery">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr3.jpg" alt="sheep grazing">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr4.jpg" alt="sheep grazing">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr5.jpg" alt="garden and pond">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr6.jpg" alt="garden and flowers">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr7.jpg" alt="beautiful garden park">
                        </li>
                        `;
  grid.innerHTML = '';
  grid.innerHTML += htmlToadd
}


//garden section

garden.addEventListener('click', gardenfunc)

function gardenfunc() {
  var gardenAnchor = document.querySelector('.gallery-block li:nth-child(3) a')
  var allList = document.querySelectorAll('.gallery-block a')
  for (let i = 0; i < allList.length; i++) {
    if (allList[i].classList.contains('active-item')) {
      allList[i].classList.remove('active-item')
    }
    gardenAnchor.classList.add('active-item')
  }
  var grid = document.querySelector('.gallery-img-grid')
  var htmlToadd = `<li>
                            <img src="./assets/css/img/gr1.jpg" alt="garden">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr2.jpg" alt="scenery">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr3.jpg" alt="sheep grazing">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr4.jpg" alt="sheep grazing">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr5.jpg" alt="garden and pond">
                        </li>
                        `;
  grid.innerHTML = '';
  grid.innerHTML += htmlToadd
}


//planting section

planting.addEventListener('click', plantingfunc)

function plantingfunc() {
  var plantingAnchor = document.querySelector('.gallery-block li:nth-child(4) a')
  var allList = document.querySelectorAll('.gallery-block a')
  for (let i = 0; i < allList.length; i++) {
    if (allList[i].classList.contains('active-item')) {
      allList[i].classList.remove('active-item')
    }
    plantingAnchor.classList.add('active-item')
  }
  var grid = document.querySelector('.gallery-img-grid')
  var htmlToadd = `<li>
                            <img src="./assets/css/img/gr1.jpg" alt="garden">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr2.jpg" alt="scenery">
                        </li>
                        <li>
                            <img src="./assets/css/img/gr3.jpg" alt="sheep grazing">
                        </li>
                        `;
  grid.innerHTML = '';
  grid.innerHTML += htmlToadd
}